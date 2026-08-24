import Seo from '../components/Seo.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { SITE } from '../data/site.js'
import { AUTHOR } from '../data/content.js'

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

        <h2>Editorial team</h2>
        <p>
          Every guide on this site is researched and written by the <strong>{AUTHOR.name}</strong>.
          {' '}{AUTHOR.bio}
        </p>
        <p>
          We are a small team based in the United States. Our editors have played the games they
          write about — often for years — before publishing. When we do not know something, we say
          so and either learn it firsthand or leave it out.
        </p>

        <h2>Editorial process</h2>
        <p>
          Every guide follows the same three-step process before it appears on the site:
        </p>
        <ol>
          <li>
            <strong>Play the game.</strong> Nobody writes about a game they have not played through
            at least a full round with real people. Rules are checked against the manufacturer\'s
            current rulebook, not from memory.
          </li>
          <li>
            <strong>Draft with specifics.</strong> Every guide lists the actual equipment, player
            counts, space requirements, and any weather or age considerations we ran into. We avoid
            invented statistics and superlatives like &quot;the best&quot; or &quot;#1 rated&quot;.
          </li>
          <li>
            <strong>Second-read for honesty.</strong> A second editor reviews for anything that
            sounds like marketing, any claim we cannot back up, or any advice that would only work
            in ideal conditions. We fix or remove it.
          </li>
        </ol>

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
          &quot;the best&quot; or right for everyone. When a game needs space, equipment, or dry
          weather, we say so plainly. We would rather publish fewer, clearer guides than a flood of
          thin content.
        </p>

        <h2>How our content is presented</h2>
        <p>
          Game information is organized around practical attributes — players, space, setup,
          equipment, skill level, weather dependency, and best setting — so you can compare options
          at a glance. Photographs used across the site are real, appropriately licensed images that
          we store and serve locally.
        </p>

        <h2>Independence and funding</h2>
        <p>
          Game Time Guide is an independent publication. We do not sell games or take sponsored
          placements dressed up as editorial. Where we may earn a small commission — for example
          through display advertising or affiliate links — we mark it clearly and never let it
          change what we recommend or how we describe a product.
        </p>

        <h2>Corrections</h2>
        <p>
          If you spot an error — a wrong rule, an outdated fact, a broken link — please email us.
          We correct promptly and note the change at the bottom of the affected article when the
          fix is material.
        </p>

        <h2>Contact</h2>
        <p>Questions, suggestions, corrections, or introductions are always welcome.</p>
        <ul>
          <li>Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
          <li>Phone: <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a></li>
          <li>Address: {SITE.address}</li>
        </ul>
      </div>
    </>
  )
}
