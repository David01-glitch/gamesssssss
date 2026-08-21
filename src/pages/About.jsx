import Seo from '../components/Seo.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { SITE } from '../data/site.js'

export default function About() {
  return (
    <>
      <Seo
        title="About"
        path="/about"
        description="About Game Time Guide — an independent U.S. games and recreation guide comparing indoor and outdoor games with clear, honest, useful advice."
      />
      <PageHeader
        eyebrow="About"
        title="About Game Time Guide"
        intro="An independent U.S. guide to indoor and outdoor games, written to help readers pick the right game for their space, group, and occasion."
      />
      <div className="container-content prose-article max-w-3xl py-10">
        <h2>What this website is</h2>
        <p>
          Game Time Guide is a small, focused publication about games and recreation in the United
          States. We compare indoor and outdoor games — board games, card games, party games,
          backyard games, and lawn games — and share practical ideas for families and gatherings.
          Our aim is simple: help people find the right game for the moment, without hype or
          complicated rules lectures.
        </p>

        <h2>Our focus on indoor and outdoor games</h2>
        <p>
          Every game has its setting. Indoor games shine on rainy days and quiet evenings; outdoor
          games make the most of a backyard, a park, and good weather. We write with U.S. readers in
          mind, favoring games that are easy to find, affordable to set up, and welcoming to a range
          of ages and group sizes.
        </p>

        <h2>Who this is for</h2>
        <ul>
          <li>Families looking for a game everyone can play together.</li>
          <li>Hosts planning a party, cookout, or backyard gathering.</li>
          <li>Beginners who want simple rules, quick setup, and a fair chance to win.</li>
          <li>Anyone deciding between an indoor and an outdoor game for the day.</li>
        </ul>

        <h2>Editorial philosophy</h2>
        <p>
          We believe good game writing is honest and specific. We do not promise that a game is
          “the best” or right for everyone. When a game needs space, equipment, or dry weather, we
          say so plainly. We would rather publish fewer, clearer guides than a flood of thin content.
        </p>

        <h2>How our content is presented</h2>
        <p>
          Game information is organized around practical attributes — players, space, setup,
          equipment, skill level, weather dependency, and best setting — so you can compare options
          at a glance. Photographs used across the site are real, appropriately licensed images that
          we store and serve locally.
        </p>

        <h2>Our commitment</h2>
        <p>
          We are committed to useful, original information and to being transparent about who we are
          and how to reach us. We do not invent credentials, awards, or statistics, and we do not
          publish fake reviews or testimonials.
        </p>

        <h2>Contact</h2>
        <p>Questions, suggestions, or corrections are always welcome.</p>
        <ul>
          <li>Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
          <li>Phone: <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a></li>
          <li>Address: {SITE.address}</li>
        </ul>
      </div>
    </>
  )
}
