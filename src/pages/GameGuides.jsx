import Seo from '../components/Seo.jsx'
import PageHeader from '../components/PageHeader.jsx'
import GameCompare from '../components/GameCompare.jsx'
import { GAMES } from '../data/content.js'

const CHOOSE = [
  {
    title: 'Start with your space',
    body: 'A tabletop suits board and card games; a backyard or park opens up lawn and active games. Measure your space against the “space required” line in each comparison before you commit.',
  },
  {
    title: 'Check the weather',
    body: 'Indoor games are weather-proof, while lawn games are best on dry ground and low wind. If the forecast is uncertain, keep an indoor option ready as a backup.',
  },
  {
    title: 'Count your players',
    body: 'Some games shine with two players; others need four or more to work. Each game lists a player range so you can match it to your group without guesswork.',
  },
  {
    title: 'Mind the setup time',
    body: 'For a short session or younger players, favor games with simple setup. Save the moderate-setup games for when you have time to settle in.',
  },
]

export default function GameGuides() {
  return (
    <>
      <Seo
        title="Game Guides"
        path="/game-guides"
        description="Practical game guides that compare indoor and outdoor games by players, space, setup, equipment, skill level, and weather so you can choose the right game."
      />
      <PageHeader
        eyebrow="Game Guides"
        title="Choosing the Right Game"
        intro="A practical, side-by-side look at indoor and outdoor games. Compare players, space, setup, equipment, skill, and weather to match a game to any occasion."
      />

      <section className="container-content py-10">
        <h2 className="text-2xl font-semibold">Four quick questions before you pick a game</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {CHOOSE.map((c) => (
            <div key={c.title} className="card p-5">
              <h3 className="text-xl">{c.title}</h3>
              <p className="mt-2 text-[15px] text-ink/85">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <GameCompare
        heading="Compare Indoor and Outdoor Games"
        intro="Every game below is tagged Indoor or Outdoor. Tap “Compare details” to expand the full attribute list for a side-by-side view."
        games={GAMES}
      />
    </>
  )
}
