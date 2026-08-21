import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { SITE } from '../data/site.js'
import { IMAGES } from '../data/content.js'

export default function Community() {
  return (
    <>
      <Seo
        title="Community"
        path="/community"
        description="Share favorite games, discover new activities, and trade ideas for family game nights and backyard fun. A growing community space for players of all ages."
      />
      <PageHeader
        eyebrow="Community"
        title="Share Your Favorite Games"
        intro="Games are better with company. This is a growing space to swap favorite games, discover new activities, and trade ideas for family game nights and gatherings."
      />

      <div className="container-content grid gap-8 py-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl2 border border-warmbrown/10 shadow-card">
          <img
            src={IMAGES.community}
            loading="lazy"
            width="1280"
            height="853"
            alt="A group of people enjoying games together"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="prose-article">
          <h2>How you can take part</h2>
          <ul>
            <li><strong>Share favorite games</strong> — indoor or outdoor — and why they work for your group.</li>
            <li><strong>Discover new activities</strong> to try at your next gathering.</li>
            <li><strong>Trade family game ideas</strong> that suit a range of ages.</li>
            <li><strong>Swap backyard game ideas</strong> for cookouts, picnics, and parks.</li>
            <li><strong>Explore seasonal recreation</strong> as the weather changes through the year.</li>
          </ul>
          <p>
            We are keeping this simple and honest: community features are still being built, so we
            are not publishing member counts or claims we cannot back up. For now, the best way to
            take part is to reach out directly.
          </p>
        </div>
      </div>

      <section className="bg-warmwhite py-12">
        <div className="container-content grid gap-6 md:grid-cols-3">
          <div className="card p-6">
            <h2 className="text-xl">Suggest a game</h2>
            <p className="mt-2 text-[15px] text-ink/80">
              Have a favorite we should cover? Tell us and we will consider it for a future guide.
            </p>
          </div>
          <div className="card p-6">
            <h2 className="text-xl">Share how it went</h2>
            <p className="mt-2 text-[15px] text-ink/80">
              Tried a game from the site at a gathering? We would love to hear how your group liked it.
            </p>
          </div>
          <div className="card p-6">
            <h2 className="text-xl">Ask a question</h2>
            <p className="mt-2 text-[15px] text-ink/80">
              Not sure which game fits your space or group? Send us a note and we will point you in the right direction.
            </p>
          </div>
        </div>
        <div className="container-content mt-8 text-center">
          <p className="text-ink/85">
            Reach us at{' '}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or{' '}
            <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>.
          </p>
          <Link to="/contact" className="btn btn-primary mt-5">Go to Contact</Link>
        </div>
      </section>
    </>
  )
}
