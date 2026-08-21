// Game imagery (bundled ES-module imports — no runtime hotlinks)
import heroImg from '../assets/images/hero/hero.jpg'
import indoorImg from '../assets/images/indoor/indoor.jpg'
import outdoorImg from '../assets/images/outdoor/outdoor.jpg'
import boardImg from '../assets/images/games/board.jpg'
import cardImg from '../assets/images/games/card.jpg'
import backyardImg from '../assets/images/games/backyard.jpg'
import lawnImg from '../assets/images/games/lawn.jpg'
import communityImg from '../assets/images/community/community.jpg'
import partyImg from '../assets/images/blog/party.jpg'
import chessImg from '../assets/images/blog/chess.jpg'
import dominoesImg from '../assets/images/blog/dominoes.jpg'
import frisbeeImg from '../assets/images/blog/frisbee.jpg'

export const IMAGES = {
  hero: heroImg,
  indoor: indoorImg,
  outdoor: outdoorImg,
  board: boardImg,
  card: cardImg,
  backyard: backyardImg,
  lawn: lawnImg,
  community: communityImg,
  party: partyImg,
  chess: chessImg,
  dominoes: dominoesImg,
  frisbee: frisbeeImg,
}

// Homepage "Indoor vs Outdoor" quick comparison (simple, neutral, factual)
export const INDOOR_VS_OUTDOOR = [
  { indoor: 'Great for homes and small spaces', outdoor: 'Great for yards and open spaces' },
  { indoor: 'Weather independent', outdoor: 'Fresh-air recreation' },
  { indoor: 'Easy setup on a table', outdoor: 'More room to move and play' },
  { indoor: 'Board, card, and table games', outdoor: 'Lawn and backyard games' },
]

// Four featured game types shown on the homepage
export const FEATURED_GAMES = [
  {
    slug: 'board',
    title: 'Board Games',
    to: '/indoor-games',
    image: boardImg,
    alt: 'A group of friends playing a board game around a table',
    blurb:
      'Strategy, luck, and everything between — from quick family favorites to longer game-night classics you can play indoors in any weather.',
  },
  {
    slug: 'card',
    title: 'Card Games',
    to: '/indoor-games',
    image: cardImg,
    alt: 'A hand of playing cards held above a table',
    blurb:
      'A single deck opens up dozens of games for two players or a full table. Portable, inexpensive, and easy to learn in minutes.',
  },
  {
    slug: 'backyard',
    title: 'Backyard Games',
    to: '/outdoor-games',
    image: backyardImg,
    alt: 'A cornhole board set up on a grassy backyard',
    blurb:
      'Cornhole, ladder toss, spikeball, and more — active, casual games that turn a backyard or park into a gathering spot.',
  },
  {
    slug: 'lawn',
    title: 'Lawn Games',
    to: '/outdoor-games',
    image: lawnImg,
    alt: 'Colorful bocce balls resting on a grass lawn',
    blurb:
      'Bocce, croquet, and horseshoes — relaxed, all-ages games that suit picnics, cookouts, and slow summer afternoons.',
  },
]

// Reusable game-comparison dataset (see components/GameCompare.jsx).
// Descriptions are practical and neutral — no invented or absolute claims.
export const GAMES = [
  {
    id: 'cornhole',
    name: 'Cornhole',
    type: 'Outdoor',
    players: '2–4+',
    space: 'Backyard / open area',
    setup: 'Simple',
    equipment: 'Two boards, eight bean bags',
    skill: 'Beginner-friendly',
    weather: 'Best on dry days',
    bestFor: 'Casual groups and gatherings',
  },
  {
    id: 'chess',
    name: 'Chess',
    type: 'Indoor',
    players: '2',
    space: 'Tabletop',
    setup: 'Simple',
    equipment: 'Board and 32 pieces',
    skill: 'Easy to learn, deep to master',
    weather: 'Any weather',
    bestFor: 'Focused two-player strategy',
  },
  {
    id: 'bocce',
    name: 'Bocce',
    type: 'Outdoor',
    players: '2–8',
    space: 'Lawn or level ground',
    setup: 'Simple',
    equipment: 'Eight balls and a jack',
    skill: 'Beginner-friendly',
    weather: 'Best on dry ground',
    bestFor: 'Relaxed all-ages play',
  },
  {
    id: 'uno-cards',
    name: 'Classic Card Games',
    type: 'Indoor',
    players: '2–10',
    space: 'Tabletop',
    setup: 'Simple',
    equipment: 'A standard deck of cards',
    skill: 'Beginner-friendly',
    weather: 'Any weather',
    bestFor: 'Families and quick rounds',
  },
  {
    id: 'cards',
    name: 'Charades',
    type: 'Indoor',
    players: '4+',
    space: 'Living room',
    setup: 'None',
    equipment: 'Prompts on slips of paper',
    skill: 'Beginner-friendly',
    weather: 'Any weather',
    bestFor: 'Lively party groups',
  },
  {
    id: 'badminton',
    name: 'Badminton',
    type: 'Outdoor',
    players: '2–4',
    space: 'Yard or court',
    setup: 'Moderate',
    equipment: 'Rackets, net, shuttlecock',
    skill: 'Moderate, active',
    weather: 'Best in low wind',
    bestFor: 'Active backyard play',
  },
  {
    id: 'board-night',
    name: 'Tabletop Board Games',
    type: 'Indoor',
    players: '2–6',
    space: 'Tabletop',
    setup: 'Moderate',
    equipment: 'A boxed game set',
    skill: 'Varies by title',
    weather: 'Any weather',
    bestFor: 'Game nights with friends',
  },
  {
    id: 'croquet',
    name: 'Croquet',
    type: 'Outdoor',
    players: '2–6',
    space: 'Lawn',
    setup: 'Moderate',
    equipment: 'Mallets, balls, wickets',
    skill: 'Beginner-friendly',
    weather: 'Best on dry lawn',
    bestFor: 'Family cookouts and picnics',
  },
]

export const FAQS = [
  {
    q: 'How do I choose between an indoor and an outdoor game?',
    a: 'Start with your space and the weather, then think about group size. Indoor board and card games suit small rooms and any forecast, while lawn and backyard games need open ground and reward a sunny day. Our comparison pages break down players, space, and setup so you can match a game to the occasion.',
  },
  {
    q: 'What games work best for large groups?',
    a: 'Party games like charades and team-based lawn games such as cornhole or relay games scale well because players can rotate in and out. Card games with flexible player counts also handle a full table comfortably.',
  },
  {
    q: 'Which games are easiest for beginners?',
    a: 'Games with simple rules and quick setup — cornhole, bocce, Go Fish, and most family board games — let new players join in within a few minutes. Every game on our comparison pages lists a skill level so you know what to expect.',
  },
  {
    q: 'Do outdoor games need a lot of equipment?',
    a: 'Not always. Many favorites use a single, affordable set — a pair of cornhole boards, a bocce set, or a soft flying disc. We note the typical equipment for each game so there are no surprises.',
  },
  {
    q: 'Do you sell games or equipment?',
    a: 'No. Game Time Guide is an informational publication about indoor and outdoor games. We do not currently sell products or services through this website.',
  },
]

// Blog articles — full text lives in the DOM so "Read More" only toggles visibility.
export const ARTICLES = [
  {
    id: 'board-games-beginners',
    title: 'Board Game Night: A Simple Guide to Getting Started',
    category: 'Board Games',
    date: '2025-01-14',
    image: boardImg,
    alt: 'Friends gathered around a table playing a board game',
    excerpt:
      'A good board game night is less about the perfect game and more about a smooth setup. Here is how to pick a game, teach it quickly, and keep everyone in it.',
    body: [
      'The hardest part of board game night is rarely the game itself — it is choosing one that fits the group and getting everyone playing without a long, confusing rules lecture. A little planning makes the difference between a night people remember and one that stalls before the first turn.',
      'Match the game to your group size and mood. Two or three players enjoy quick strategy games; a full table of six does better with lighter, social games that keep everyone involved between turns. If you have new players, avoid anything with a thick rulebook for the first game of the night.',
      'Teach the game in layers. Explain the goal first — how someone wins — then the actions players take on a turn, and save the exceptions for when they come up. Most people learn far faster by playing a practice round than by listening to every rule up front.',
      'Keep the table comfortable. Good lighting, a few snacks that will not smear the cards, and a clear space for the board all reduce friction. Set a rough end time if it is a weeknight, so a long game does not run past everyone’s patience.',
      'Finish on a high note. Ending after a game everyone enjoyed, rather than pushing for one more long round, is the quiet secret to people wanting to come back next time.',
    ],
  },
  {
    id: 'card-games-classics',
    title: 'Five Classic Card Games Worth Learning',
    category: 'Card Games',
    date: '2025-02-02',
    image: cardImg,
    alt: 'A fanned hand of playing cards over a table',
    excerpt:
      'A single deck of cards is one of the best value games you can own. Five approachable classics that cover two players, families, and full tables.',
    body: [
      'A standard deck of fifty-two cards is the most versatile game you can carry. It fits in a pocket, costs very little, and supports hundreds of games for every group size. If you learn just a handful of classics, you will always have something to play.',
      'For two players, try Gin Rummy. Players draw and discard to form sets and runs, and the quick rounds make it easy to play a few hands or a long match. It rewards attention without demanding deep strategy.',
      'For families and younger players, Go Fish and Crazy Eights are hard to beat. The rules take a minute to explain, turns move quickly, and there is enough luck that everyone has a real chance to win.',
      'For a full table, Hearts and Spades bring in light strategy and a social, competitive edge. Both play well with four players, and the goal — avoiding or winning certain cards — is easy to grasp after a hand or two.',
      'The beauty of card games is portability. Keep a deck in a bag or glovebox and a rainy afternoon, a long wait, or a quiet evening turns into game time with no setup at all.',
    ],
  },
  {
    id: 'backyard-games-afternoon',
    title: 'Backyard Games for Sunny Afternoons',
    category: 'Outdoor',
    date: '2025-02-19',
    image: backyardImg,
    alt: 'A cornhole board on a lawn ready for play',
    excerpt:
      'When the weather is good, the backyard becomes the best game room in the house. A few active favorites that are easy to set up and fun for mixed ages.',
    body: [
      'A backyard, a park, or any patch of open grass is all you need for an afternoon of active games. Outdoor play adds fresh air and room to move, and most backyard games welcome a wide range of ages and skill levels.',
      'Cornhole is the modern backyard staple. Two boards and eight bean bags are all it takes, the rules are simple, and players can chat between throws — which is why it fits cookouts and casual gatherings so well.',
      'For something more active, spikeball (roundnet) and badminton get people moving. They need a little more setup and space, but they reward quick reflexes and are easy to learn in a few rallies.',
      'Ladder toss and flying-disc games strike a middle ground: light equipment, quick to start, and forgiving of missed throws. They are ideal when you want everyone playing within a minute of walking outside.',
      'Whatever you choose, check the ground and the weather first. Level grass, dry conditions, and a bit of shade for resting keep a backyard afternoon comfortable from the first game to the last.',
    ],
  },
  {
    id: 'lawn-games-101',
    title: 'Lawn Games 101: Cornhole, Bocce, and Beyond',
    category: 'Outdoor',
    date: '2025-03-06',
    image: lawnImg,
    alt: 'Bocce balls resting on green grass',
    excerpt:
      'Lawn games are the relaxed heart of any outdoor gathering. A plain-language look at the classics, what they need, and who they suit.',
    body: [
      'Lawn games occupy a friendly middle ground between active sports and sit-down games. They are played standing, involve gentle throwing or rolling, and leave plenty of room for conversation — perfect for picnics, cookouts, and family reunions.',
      'Bocce is a great starting point. Players roll weighted balls to land closest to a smaller target ball, and a set works on grass, sand, or any level ground. It suits two players or two teams and appeals to all ages.',
      'Croquet adds a bit of structure. Players use mallets to knock balls through a course of wickets, which introduces light strategy as you block opponents or set up your next shot. A single set covers up to six players.',
      'Horseshoes and ring toss round out the classics. Both use simple, durable equipment and a fixed target, so setup takes minutes and the learning curve is gentle enough for a first-time player to compete.',
      'The shared appeal of lawn games is pace. No one is sprinting, everyone can join, and a set packs away small — which is why the same handful of games has anchored outdoor gatherings for generations.',
    ],
  },
  {
    id: 'party-games-everyone',
    title: 'Party Games That Get Everyone Involved',
    category: 'Party',
    date: '2025-03-20',
    image: partyImg,
    alt: 'People laughing during a lively party game',
    excerpt:
      'The best party games need little equipment and keep a whole room engaged. A few reliable choices for gatherings of all sizes.',
    body: [
      'A good party game does one thing well: it keeps a whole group involved, including the people waiting for their turn. The best options need almost no equipment, explain in a sentence, and invite laughter rather than deep concentration.',
      'Charades is the timeless choice. Split into teams, act out a word or phrase without speaking, and race the clock. It scales from a handful of players to a full room and needs nothing more than slips of paper with prompts.',
      'For a calmer pace, guessing and trivia games work well because everyone can contribute an answer. Team-based formats keep quieter guests included and take the pressure off any single player.',
      'Stacking and dexterity games like Jenga make great party fillers. They play in short bursts, draw a crowd around the table, and let people drift in and out of the action without disrupting the game.',
      'When choosing a party game, favor short rounds and flexible player counts. Games that let people join mid-session or rotate out keep the energy up and make sure no one is stuck on the sidelines for long.',
    ],
  },
  {
    id: 'family-game-night',
    title: 'Planning a Family Game Night Everyone Enjoys',
    category: 'Family',
    date: '2025-04-03',
    image: dominoesImg,
    alt: 'Dominoes arranged on a table for a family game',
    excerpt:
      'A family game night works best with a little planning around ages, attention spans, and fair teams. Practical tips for a night that stays fun.',
    body: [
      'Family game nights bring different ages and attention spans to the same table, which is exactly what makes them fun and occasionally tricky. A few small choices keep the evening enjoyable for the youngest and oldest players alike.',
      'Pick games with a wide age range in mind. Dominoes, simple card games, and cooperative board games let younger players compete honestly without needing an advantage, while still holding an adult’s interest.',
      'Balance teams rather than individuals when skill gaps are large. Pairing a younger player with an older one turns a mismatch into teamwork and gives everyone a genuine shot at winning.',
      'Keep sessions to a comfortable length on school nights. A couple of short games usually beats one long one, and ending while everyone is still having fun makes the next game night an easy sell.',
      'Finally, rotate who chooses the game. Letting each family member pick in turn spreads ownership of the night and quietly introduces everyone to games they might not have tried on their own.',
    ],
  },
]

export const ARTICLE_CATEGORIES = ['All', ...Array.from(new Set(ARTICLES.map((a) => a.category)))]
