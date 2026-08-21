import { useState } from 'react'
import { trackEvent } from '../utils/analytics.js'

// Reusable game-comparison component. Each game shows a headline set of facts;
// "Details" expands the full attribute list inline (aria-expanded, no navigation)
// and fires a game_expand analytics event. Full content stays in the DOM.
const ROWS = [
  ['type', 'Type'],
  ['players', 'Players'],
  ['space', 'Space required'],
  ['setup', 'Setup time'],
  ['equipment', 'Typical equipment'],
  ['skill', 'Skill level'],
  ['weather', 'Weather dependency'],
  ['bestFor', 'Best setting'],
]

function TypeBadge({ type }) {
  const outdoor = type.toLowerCase().includes('outdoor')
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        outdoor ? 'bg-sage/15 text-sageDark' : 'bg-mutedblue/15 text-mutedblue'
      }`}
    >
      {type}
    </span>
  )
}

export default function GameCompare({ games, heading, intro }) {
  const [openId, setOpenId] = useState(null)

  const toggle = (g) => {
    const next = openId === g.id ? null : g.id
    setOpenId(next)
    if (next) trackEvent('game_expand', { game_id: g.id, game_type: g.type })
  }

  return (
    <section className="container-content py-12">
      {(heading || intro) && (
        <div className="mb-8 max-w-2xl">
          {heading && <h2 className="text-3xl font-semibold">{heading}</h2>}
          {intro && <p className="mt-3 text-lg text-ink/85">{intro}</p>}
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        {games.map((g) => {
          const isOpen = openId === g.id
          return (
            <article key={g.id} className="card p-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl">{g.name}</h3>
                <TypeBadge type={g.type} />
              </div>

              <dl className="mt-3 grid grid-cols-[auto,1fr] gap-x-4 gap-y-1 text-[15px]">
                <dt className="font-semibold text-warmbrown">Players</dt>
                <dd className="text-ink/85">{g.players}</dd>
                <dt className="font-semibold text-warmbrown">Space</dt>
                <dd className="text-ink/85">{g.space}</dd>
                <dt className="font-semibold text-warmbrown">Best for</dt>
                <dd className="text-ink/85">{g.bestFor}</dd>
              </dl>

              {/* Full attribute list — present in the DOM, toggled for display */}
              <div
                id={`game-${g.id}`}
                hidden={!isOpen}
                className="mt-4 border-t border-warmbrown/10 pt-4"
              >
                <dl className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-1.5 text-[15px]">
                  {ROWS.map(([key, label]) => (
                    <div key={key} className="contents">
                      <dt className="font-semibold text-warmbrown">{label}</dt>
                      <dd className="text-ink/85">{g[key]}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <button
                type="button"
                onClick={() => toggle(g)}
                aria-expanded={isOpen}
                aria-controls={`game-${g.id}`}
                className="btn btn-secondary mt-4 !py-2.5"
              >
                {isOpen ? 'Hide details' : 'Compare details'}
              </button>
            </article>
          )
        })}
      </div>
    </section>
  )
}
