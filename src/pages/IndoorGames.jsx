import Seo from '../components/Seo.jsx'
import PageHeader from '../components/PageHeader.jsx'
import GameCompare from '../components/GameCompare.jsx'
import { GAMES, IMAGES } from '../data/content.js'

const indoorGames = GAMES.filter((g) => g.type.toLowerCase().includes('indoor'))

export default function IndoorGames() {
  return (
    <>
      <Seo
        title="Indoor Games"
        path="/indoor-games"
        description="Indoor games for homes and small spaces — board games, card games, and party games you can play in any weather, with practical setup and player-count details."
      />
      <PageHeader
        eyebrow="Indoor Games"
        title="Games for Homes and Small Spaces"
        intro="Board games, card games, and living-room favorites that work in any weather. Great for evenings in, small spaces, and groups of every size."
      />

      <section className="container-content py-10">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl2 border border-warmbrown/10 shadow-card">
            <img
              src={IMAGES.board}
              width="1280"
              height="853"
              alt="A board game being played around a table indoors"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Why indoor games work so well</h2>
            <p className="mt-3 text-ink/85">
              Indoor games are weather-proof and easy to set up on a table, which makes them a
              dependable choice for weeknights, rainy days, and small apartments alike. Most need
              little more than a box or a deck of cards, and many teach in just a few minutes.
            </p>
            <p className="mt-3 text-ink/85">
              They also scale nicely: a two-player strategy game suits a quiet evening, while a party
              game or a flexible card game keeps a full table involved. The comparison below covers
              players, space, setup, and the setting each game suits best.
            </p>
          </div>
        </div>
      </section>

      <GameCompare
        heading="Compare Popular Indoor Games"
        intro="Tap “Compare details” on any game to see its full attributes — players, space, setup, equipment, skill level, and weather dependency."
        games={indoorGames}
      />
    </>
  )
}
