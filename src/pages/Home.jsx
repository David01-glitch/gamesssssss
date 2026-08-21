import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import Faq from '../components/Faq.jsx'
import { SITE } from '../data/site.js'
import { FEATURED_GAMES, INDOOR_VS_OUTDOOR, ARTICLES, FAQS, IMAGES } from '../data/content.js'
import { trackEvent } from '../utils/analytics.js'

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.addressParts.line1,
    addressLocality: SITE.addressParts.city,
    addressRegion: SITE.addressParts.region,
    postalCode: SITE.addressParts.postalCode,
    addressCountry: SITE.addressParts.country,
  },
}

export default function Home() {
  const latest = ARTICLES.slice(0, 3)

  return (
    <>
      <Seo
        title="Home"
        path="/"
        description="Game Time Guide compares indoor and outdoor games and helps you find the right game for homes, backyards, parties, and family recreation across the USA."
        jsonLd={orgJsonLd}
      />

      {/* Hero */}
      <section className="bg-warmwhite">
        <div className="container-content grid items-center gap-8 py-12 md:grid-cols-2 md:py-16">
          <div>
            <p className="eyebrow mb-3">Games &amp; Recreation</p>
            <h1 className="text-4xl font-semibold sm:text-5xl">
              Indoor or Outdoor? Find the Right Game for Every Occasion
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink/85">
              Game Time Guide helps you discover and compare games for homes, backyards, parties,
              families, and casual recreation — with clear, practical guides for picking a game that
              fits your space, group, and the weather.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/game-guides"
                className="btn btn-primary"
                onClick={() => trackEvent('cta_click', { cta: 'explore_games' })}
              >
                Explore Games
              </Link>
              <Link
                to="/blog"
                className="btn btn-secondary"
                onClick={() => trackEvent('cta_click', { cta: 'read_blog' })}
              >
                Read the Blog
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl2 border border-warmbrown/10 shadow-card">
            <img
              src={IMAGES.hero}
              width="1280"
              height="853"
              alt="Friends gathered around a table enjoying a game together"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Indoor vs Outdoor comparison */}
      <section className="container-content py-12">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow mb-2">At a glance</p>
          <h2 className="text-3xl font-semibold">Indoor vs Outdoor Games</h2>
          <p className="mt-3 text-lg text-ink/85">
            Both have their moment. Here is a quick way to think about which suits your space,
            weather, and group.
          </p>
        </div>
        <div className="overflow-hidden rounded-xl2 border border-warmbrown/10 shadow-soft">
          <table className="w-full border-collapse text-left text-[15px]">
            <caption className="sr-only">A comparison of indoor and outdoor games</caption>
            <thead>
              <tr className="bg-warmbrown text-white">
                <th scope="col" className="px-5 py-3 font-display text-lg font-semibold">
                  Indoor Games
                </th>
                <th scope="col" className="px-5 py-3 font-display text-lg font-semibold">
                  Outdoor Games
                </th>
              </tr>
            </thead>
            <tbody>
              {INDOOR_VS_OUTDOOR.map((row, i) => (
                <tr key={i} className={i % 2 ? 'bg-warmwhite' : 'bg-cream/60'}>
                  <td className="border-t border-warmbrown/10 px-5 py-3 text-ink/85">{row.indoor}</td>
                  <td className="border-t border-warmbrown/10 px-5 py-3 text-ink/85">{row.outdoor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Featured games */}
      <section className="bg-warmwhite py-12">
        <div className="container-content">
          <div className="mb-8 max-w-2xl">
            <p className="eyebrow mb-2">Where to start</p>
            <h2 className="text-3xl font-semibold">Featured Games</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_GAMES.map((c) => (
              <Link key={c.slug} to={c.to} className="card group block overflow-hidden no-underline">
                <img
                  src={c.image}
                  loading="lazy"
                  width="1280"
                  height="853"
                  alt={c.alt}
                  className="h-44 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl">{c.title}</h3>
                  <p className="mt-2 text-[15px] text-ink/80">{c.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest guides */}
      <section className="container-content py-12">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="eyebrow mb-2">From the blog</p>
            <h2 className="text-3xl font-semibold">Latest Guides</h2>
          </div>
          <Link to="/blog" className="btn btn-secondary !py-2.5">All articles</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {latest.map((a) => (
            <article key={a.id} className="card overflow-hidden">
              <img
                src={a.image}
                loading="lazy"
                width="1280"
                height="853"
                alt={a.alt}
                className="h-44 w-full object-cover"
              />
              <div className="p-5">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-terracotta">{a.category}</p>
                <h3 className="text-lg">{a.title}</h3>
                <p className="mt-2 text-[15px] text-ink/80">{a.excerpt}</p>
                <Link to="/blog" className="mt-3 inline-block text-[15px] font-semibold text-terracottaDark">
                  Read on the blog →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Community */}
      <section className="bg-warmwhite py-12">
        <div className="container-content grid items-center gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl2 border border-warmbrown/10 shadow-card">
            <img
              src={IMAGES.community}
              loading="lazy"
              width="1280"
              height="853"
              alt="A group of people playing games together outdoors"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow mb-2">Played together</p>
            <h2 className="text-3xl font-semibold">Share Your Favorite Games</h2>
            <p className="mt-4 text-lg text-ink/85">
              Games are better with company. Our community pages are a growing space to swap favorite
              games, discover new activities, and trade ideas for family game nights and backyard
              gatherings.
            </p>
            <Link to="/community" className="btn btn-secondary mt-6">Visit the Community</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-content py-12 pb-16">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow mb-2">Good to know</p>
          <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
        </div>
        <Faq items={FAQS} />
      </section>
    </>
  )
}
