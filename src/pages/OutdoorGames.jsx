import Seo from '../components/Seo.jsx'
import PageHeader from '../components/PageHeader.jsx'
import GameCompare from '../components/GameCompare.jsx'
import { GAMES, IMAGES } from '../data/content.js'

const outdoorGames = GAMES.filter((g) => g.type.toLowerCase().includes('outdoor'))

export default function OutdoorGames() {
  return (
    <>
      <Seo
        title="Outdoor Games"
        path="/outdoor-games"
        description="Outdoor games for backyards, parks, and open spaces — cornhole, bocce, badminton, croquet, and more, with equipment and player-count details for each."
      />
      <PageHeader
        eyebrow="Outdoor Games"
        title="Games for Backyards and Open Spaces"
        intro="Lawn and backyard games that make the most of fresh air and room to move. Ideal for cookouts, picnics, parks, and family gatherings on a sunny day."
      />

      <section className="container-content py-10">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-semibold">Making the most of the outdoors</h2>
            <p className="mt-3 text-ink/85">
              Outdoor games add space, movement, and fresh air to a gathering. Many use a single,
              affordable set and welcome a wide range of ages, so a backyard or park quickly becomes
              a place where everyone can join in.
            </p>
            <p className="mt-3 text-ink/85">
              A few things help: level ground, dry conditions, and a little shade for resting between
              rounds. The comparison below lists the typical equipment, space, and setting for each
              game so you can plan around your yard and the forecast.
            </p>
          </div>
          <div className="order-1 overflow-hidden rounded-xl2 border border-warmbrown/10 shadow-card md:order-2">
            <img
              src={IMAGES.outdoor}
              width="1280"
              height="853"
              alt="People playing a lawn game on green grass outdoors"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <GameCompare
        heading="Compare Popular Outdoor Games"
        intro="Tap “Compare details” on any game to see its full attributes — players, space, setup, equipment, skill level, and weather dependency."
        games={outdoorGames}
      />
    </>
  )
}
