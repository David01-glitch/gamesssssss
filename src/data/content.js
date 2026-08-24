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

// Homepage "Indoor vs Outdoor" quick comparison
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

// Reusable game-comparison dataset
export const GAMES = [
  { id: 'cornhole', name: 'Cornhole', type: 'Outdoor', players: '2–4+', space: 'Backyard / open area', setup: 'Simple', equipment: 'Two boards, eight bean bags', skill: 'Beginner-friendly', weather: 'Best on dry days', bestFor: 'Casual groups and gatherings' },
  { id: 'chess', name: 'Chess', type: 'Indoor', players: '2', space: 'Tabletop', setup: 'Simple', equipment: 'Board and 32 pieces', skill: 'Easy to learn, deep to master', weather: 'Any weather', bestFor: 'Focused two-player strategy' },
  { id: 'bocce', name: 'Bocce', type: 'Outdoor', players: '2–8', space: 'Lawn or level ground', setup: 'Simple', equipment: 'Eight balls and a jack', skill: 'Beginner-friendly', weather: 'Best on dry ground', bestFor: 'Relaxed all-ages play' },
  { id: 'uno-cards', name: 'Classic Card Games', type: 'Indoor', players: '2–10', space: 'Tabletop', setup: 'Simple', equipment: 'A standard deck of cards', skill: 'Beginner-friendly', weather: 'Any weather', bestFor: 'Families and quick rounds' },
  { id: 'cards', name: 'Charades', type: 'Indoor', players: '4+', space: 'Living room', setup: 'None', equipment: 'Prompts on slips of paper', skill: 'Beginner-friendly', weather: 'Any weather', bestFor: 'Lively party groups' },
  { id: 'badminton', name: 'Badminton', type: 'Outdoor', players: '2–4', space: 'Yard or court', setup: 'Moderate', equipment: 'Rackets, net, shuttlecock', skill: 'Moderate, active', weather: 'Best in low wind', bestFor: 'Active backyard play' },
  { id: 'board-night', name: 'Tabletop Board Games', type: 'Indoor', players: '2–6', space: 'Tabletop', setup: 'Moderate', equipment: 'A boxed game set', skill: 'Varies by title', weather: 'Any weather', bestFor: 'Game nights with friends' },
  { id: 'croquet', name: 'Croquet', type: 'Outdoor', players: '2–6', space: 'Lawn', setup: 'Moderate', equipment: 'Mallets, balls, wickets', skill: 'Beginner-friendly', weather: 'Best on dry lawn', bestFor: 'Family cookouts and picnics' },
]

export const FAQS = [
  { q: 'How do I choose between an indoor and an outdoor game?', a: 'Start with your space and the weather, then think about group size. Indoor board and card games suit small rooms and any forecast, while lawn and backyard games need open ground and reward a sunny day. Our comparison pages break down players, space, and setup so you can match a game to the occasion.' },
  { q: 'What games work best for large groups?', a: 'Party games like charades and team-based lawn games such as cornhole or relay games scale well because players can rotate in and out. Card games with flexible player counts also handle a full table comfortably.' },
  { q: 'Which games are easiest for beginners?', a: 'Games with simple rules and quick setup — cornhole, bocce, Go Fish, and most family board games — let new players join in within a few minutes. Every game on our comparison pages lists a skill level so you know what to expect.' },
  { q: 'Do outdoor games need a lot of equipment?', a: 'Not always. Many favorites use a single, affordable set — a pair of cornhole boards, a bocce set, or a soft flying disc. We note the typical equipment for each game so there are no surprises.' },
  { q: 'Do you sell games or equipment?', a: 'No. Game Time Guide is an informational publication about indoor and outdoor games. We do not currently sell products or services through this website.' },
]

// Named editorial byline used by every article + About page.
// The site is edited under a small in-house masthead — a real person's
// name and photo can be added here once assigned.
export const AUTHOR = {
  name: 'Game Time Guide Editorial',
  role: 'Editorial team',
  bio:
    'The Game Time Guide editorial team researches and writes every guide on this site. We play the games we cover, read the rulebooks, and re-check facts before publishing.',
}

// Blog articles — 10 pieces, ~800–1,200 words each.
// Every article ships with the full body in the DOM so "Read More" only
// toggles visibility (no per-post routes needed to still be crawlable).
export const ARTICLES = [
  {
    id: 'board-games-beginners',
    title: 'Board Game Night: A Complete Guide to Getting Everyone Involved',
    category: 'Board Games',
    date: '2025-01-14',
    author: AUTHOR.name,
    image: boardImg,
    alt: 'Friends gathered around a table playing a board game',
    excerpt:
      'A good board game night is less about the perfect game and more about a smooth setup. Here is how to pick a game, teach it quickly, and keep everyone in it.',
    body: [
      'The hardest part of board game night is rarely the game itself — it is choosing one that fits the group and getting everyone playing without a long, confusing rules lecture. A little planning makes the difference between a night people remember and one that stalls before the first turn. This guide walks through the small choices that make the biggest difference: picking the right game, teaching it in layers, setting up the table, and knowing when to end.',
      'Start by matching the game to your group size and mood. Two or three players enjoy quick strategy games with real decisions on every turn. A full table of six or seven does better with lighter, social games that keep everyone involved between turns — games where you are never waiting more than a minute or two for your next chance to do something. If you have new players in the group, avoid anything with a thick rulebook for the first game of the night. Save the complex titles for later, once everyone is warmed up.',
      'A useful shortcut is to divide games into three buckets before you start. Warm-up games take fifteen minutes and use rules people already know from other games. Main-event games take forty-five to sixty minutes and are the reason you called the night. Palate cleansers are short, silly games that reset the energy between longer sessions. Plan for one from each bucket and you will rarely run out of things to play.',
      'When you teach a new game, teach it in layers instead of front-loading every rule. Explain the goal first — how someone wins. Then the actions players take on a turn. Save exceptions, edge cases, and the fiddly rules for when they actually come up in play. Most people learn far faster by playing a practice round than by listening to every rule up front. If you can, play the first hand or the first round openly, with everyone showing their cards or thinking out loud together.',
      'The physical setup matters more than people admit. Good lighting reduces mistakes on colored components. A few snacks that will not smear the cards or leave grease on the box keep everyone comfortable. A clear space for the board, an empty side table for boxes and lids, and a small tray or bowl for drink coasters all reduce friction. If you are teaching a new game, set up all the components before your guests arrive so you can start playing immediately.',
      'Adjust the game to the group, not the other way around. Most games have optional or variant rules that speed up play, and there is nothing wrong with agreeing to skip a subsystem if the group is losing interest. If the recommended time on the box is ninety minutes, add thirty for a first play — the box time assumes everyone knows the rules. When in doubt, play a shorter game well rather than a longer one poorly.',
      'Handle waiting-turn time with intention. This is where board game nights actually die: one player thinks for two minutes while everyone else scrolls their phone, and by the fifth turn nobody is paying attention. Games with simultaneous action, hidden planning, or fast turns solve this by design. If you are playing a game with heavy thinking, encourage side conversation and snacks — the goal is to keep the room lively even when the game itself is slow.',
      'Keep house rules simple and consistent. If you always give a mulligan on the first hand, or always play with the "everyone gets one free re-roll" variant, tell new players before the game starts, not the first time it comes up. Nothing sours a night faster than a house rule that appears mid-game and looks like a convenient reversal.',
      'Set a rough end time if it is a weeknight, so a long game does not run past everyone\'s patience. A soft "we will probably wrap around ten" is more useful than a hard cutoff, but even a soft signal helps guests plan. It also gives you permission to pick shorter games as the evening winds down.',
      'Finish on a high note. Ending after a game everyone enjoyed, rather than pushing for one more long round because someone insists, is the quiet secret to people wanting to come back next time. If the room is still lit up after your planned final game, offer a short filler. If everyone is winding down, do not fight it — end with dessert or a walk to the door and start scheduling the next one.',
      'Board game night is a small habit that pays off over months. The first few evenings will feel a little rough as you learn the group\'s taste. By the third or fourth, you will have a shortlist of reliable favorites, a rhythm for teaching, and a group that shows up expecting to have fun. Everything above is in service of that: less friction, more play.',
    ],
  },

  {
    id: 'card-games-classics',
    title: 'Five Classic Card Games Worth Learning (And How to Teach Them Fast)',
    category: 'Card Games',
    date: '2025-02-02',
    author: AUTHOR.name,
    image: cardImg,
    alt: 'A fanned hand of playing cards over a table',
    excerpt:
      'A single deck of cards is one of the best value games you can own. Five approachable classics that cover two players, families, and full tables.',
    body: [
      'A standard deck of fifty-two cards is the most versatile game you can carry. It fits in a pocket, costs less than a coffee, and supports hundreds of games for every group size. If you learn just a handful of classics, you will always have something to play — at the kitchen table, on a plane, in a waiting room, at a family reunion. This guide covers five reliable favorites, the situations they suit, and the fastest way to teach each one.',
      'The first game to learn is Gin Rummy, a two-player classic that has been in continuous play since the early 1900s. Each player is dealt ten cards. On your turn, you draw one from the deck or the discard pile, then discard one. The goal is to arrange your hand into sets (three or four of a kind) and runs (three or more cards in the same suit in sequence). When you can knock — end the round with less than ten points of unmelded cards — you score based on what your opponent has left. Rounds are quick, the strategy is thoughtful without being deep, and it is the ideal game for a long conversation across a table.',
      'For families and younger players, Go Fish is hard to beat. Deal five to seven cards to each player and put the rest in a draw pile. On your turn, ask any other player for a specific rank ("do you have any sevens?"). If they do, they give you all of theirs; if they do not, they say "go fish" and you draw from the pile. Complete sets of four are laid down; the winner has the most sets when the deck runs out. Kids as young as four can play with a little help. It teaches turn-taking, memory, and reading faces without any of it feeling like a lesson.',
      'Crazy Eights sits between Go Fish and Uno without the special deck. Each player gets five to seven cards. The top card of the draw pile starts a discard pile, and on your turn you play a card that matches either the suit or the rank of the top card. Eights are wild — play one and change the suit to anything you want. The first player to empty their hand wins. Rounds take five to ten minutes, so a game is really best-of-many, and the rules take longer to write than to teach.',
      'For a full table, Hearts brings light strategy and a competitive edge. Each of four players gets thirteen cards. Play goes clockwise, everyone plays one card, and the highest card of the led suit wins the trick. The catch: every heart is worth a penalty point, and the Queen of Spades is worth thirteen points on her own. The goal is to score as few points as possible over multiple hands — first to a hundred loses. Hearts rewards paying attention to what others are playing, and it opens up the classic "shoot the moon" move where you win every point-card yourself and force the other three players to take twenty-six each.',
      'Spades is the four-player card game to learn if your group likes teams. Partners sit across from each other. Everyone gets thirteen cards. Before play starts, each player bids the number of tricks they think they can win; a team\'s bid is the sum of both partners\'. Spades are always trump. The team meets their bid to score, misses it and loses badly. It is the classic bus-ride game — easy to teach, endless variety across hands, and it forces partnerships to develop small signaling habits over time.',
      'A note on teaching card games: never explain the whole game before dealing. Deal a practice hand face-up, walk through one turn, then start playing for real. Most classic card games take five minutes to teach live and thirty minutes to explain in the abstract. If you have kids at the table, put your cards down and let them "help" you play — they will pick up the pattern faster than they can memorize the rules.',
      'Card games travel well because you can play them anywhere with a deck and a flat surface. A cheap plastic-coated deck holds up better than a paper one if you play outside or in a car. Keep two decks in the house — one for the good table, one for the beach or the backpack. If you play a lot, learn to riffle-shuffle properly; it saves a surprising amount of time over hundreds of hands.',
      'The best thing about learning card games is that once you know one, you know the rough shape of a dozen. Trick-taking games share a family resemblance. Melding games are variations on Gin. Matching games all descend from a common ancestor. Pick a game to learn well, play it twenty times, and the whole category opens up.',
      'The beauty of card games, in the end, is portability. Keep a deck in a bag or glovebox and a rainy afternoon, a long wait, or a quiet evening turns into game time with no setup at all. That flexibility is why the deck of playing cards is still standard equipment more than five hundred years after it first appeared in Europe.',
    ],
  },

  {
    id: 'backyard-games-afternoon',
    title: 'Backyard Games for Sunny Afternoons: Setups That Actually Work',
    category: 'Outdoor',
    date: '2025-02-19',
    author: AUTHOR.name,
    image: backyardImg,
    alt: 'A cornhole board on a lawn ready for play',
    excerpt:
      'When the weather is good, the backyard becomes the best game room in the house. A few active favorites that are easy to set up and fun for mixed ages.',
    body: [
      'A backyard, a park, or any patch of open grass is all you need for an afternoon of active games. Outdoor play adds fresh air and room to move, and most backyard games welcome a wide range of ages and skill levels. The trick is picking games that suit the space and the group — not every backyard has room for a full badminton court, and not every group wants to sprint around. This guide covers the reliable favorites and how to set each one up so it actually works.',
      'Cornhole is the modern backyard staple in the United States. Two boards are placed twenty-seven feet apart (foul line to foul line), and each player throws four bean bags per turn. A bag on the board is one point; a bag in the hole is three. First to twenty-one — or the higher score after both players finish their throws — wins. What makes cornhole work so well outdoors is the pace: throws are quick, players can chat between turns, and drinks stay on the side. A set costs seventy to two hundred dollars depending on quality, and the bags themselves are surprisingly durable.',
      'For a group that wants more movement, spikeball (also called roundnet) is the game that has taken over lawns and beaches over the last decade. A small, springy net sits at ankle height. Two teams of two rotate around it. You bounce the ball off the net toward the other team, they have three touches to return it, and if they miss, you score. Rallies get intense fast because the net returns the ball in unpredictable directions. It works on grass or sand and needs about a fifteen-foot radius of clear space.',
      'Badminton is the low-effort, high-fun option when you have room for a net. A full court is forty-four feet long and twenty feet wide for doubles, but a casual game works on any level patch. Rackets are cheap, shuttlecocks even cheaper, and the game rewards timing over power — kids can compete with adults in a way they cannot in most racket sports. The main enemy of casual badminton is wind; even a mild breeze pushes the shuttlecock around unpredictably, so an afternoon with low wind is a real gift.',
      'Ladder toss (also known as ladder golf) is the quick-to-start option. Two ladder-shaped targets sit fifteen feet apart. Players throw pairs of golf balls connected by a short cord, trying to wrap them around one of the three rungs. Top rung is three points, middle is two, bottom is one. First to twenty-one wins, and you must land exactly — going over resets you back to zero, which is where the tension comes in. Setup takes thirty seconds and the equipment is nearly indestructible.',
      'Flying-disc games strike a middle ground: they are more active than cornhole but easier to start than badminton. A simple game of catch works for two people. Kan Jam adds structure — two plastic cans twenty feet apart, one thrower and one deflector per team, points for hitting the can or slipping the disc through the slot. Ultimate Frisbee scales up to eight or ten players per side with an end-zone objective, but it needs a lot of space and everyone running full speed for extended stretches.',
      'For a truly casual afternoon, do not underestimate lawn darts (rebranded and re-engineered with soft weighted tips since the classic version was pulled in 1988) and ring toss. Both use a fixed target that stays put; both take under a minute to set up; both let players stand and chat between throws. They are ideal for gatherings where the "game" is really just an excuse to be outside together.',
      'The single biggest factor in backyard game success is the surface. Level grass is the gold standard for cornhole, spikeball, badminton, and lawn darts. A slight slope is fine for cornhole and horseshoes but makes bocce and croquet frustrating. Wet grass is fine for foot games (spikeball, badminton) but ruins bean bags and playing cards fast. Check the ground before you commit to setup — it saves swapping games mid-afternoon.',
      'Sun and shade matter more than people plan for. If your yard has a spot that is in direct sun from noon to four, do not put the game there in July. Set up in dappled shade or facing away from the sun so nobody is squinting during throws. A small folding table for drinks and equipment, and one or two chairs for people who are waiting, turns a game into a hangout.',
      'A short checklist to make it work: level ground, low wind, shade for resting players, drinks and snacks that survive being outside for two hours, and games that everyone at the party can join in one round. Get those five right and the afternoon takes care of itself. Everything else — the specific game, the score, the winner — is secondary to a group of people relaxed in the same yard.',
    ],
  },

  {
    id: 'lawn-games-101',
    title: 'Lawn Games 101: Cornhole, Bocce, Croquet, and the Rest',
    category: 'Outdoor',
    date: '2025-03-06',
    author: AUTHOR.name,
    image: lawnImg,
    alt: 'Bocce balls resting on green grass',
    excerpt:
      'Lawn games are the relaxed heart of any outdoor gathering. A plain-language look at the classics, what they need, and who they suit.',
    body: [
      'Lawn games occupy a friendly middle ground between active sports and sit-down games. They are played standing, involve gentle throwing or rolling, and leave plenty of room for conversation. Perfect for picnics, cookouts, family reunions, and any afternoon that wants some structure without turning into a workout. This guide covers the core lawn game classics and what each one actually needs to work.',
      'Bocce is a great starting point. Players roll weighted balls to land closest to a smaller target ball called the pallino (or jack). Each side rolls four balls per frame; when everyone has thrown, the team with the ball closest to the pallino scores. Only that team scores in the frame, and they get one point for every ball closer to the pallino than the opposing team\'s best. First team to twelve or sixteen wins. A set costs thirty to eighty dollars and works on grass, sand, or any level surface.',
      'The magic of bocce is that it works for two players or two teams of four with almost no change in setup. It welcomes all ages — kids can roll from ten feet, adults from twenty. Because the throwing motion is gentle and underhand, it is one of the few active games grandparents and grandkids can play together on equal terms. A bocce match rewards a light touch over strength.',
      'Croquet adds a bit of structure to lawn play. Players use mallets to knock balls through a course of nine wickets and one center peg, in a set order and direction. Hitting your ball through a wicket earns you a bonus stroke; hitting another player\'s ball lets you "roquet" and take two more strokes, including the option to strike their ball across the yard. The first player to complete the course and hit the finishing peg wins. A backyard set is thirty to sixty dollars; a tournament-quality set can hit several hundred.',
      'Croquet gets strategic quickly. Blocking an opponent behind a wicket, knocking their ball to the far side of the lawn, and timing when to send yourself back through wickets from earlier in the course all become real decisions after a few games. It is one of the few outdoor games where you can plan three shots ahead, which is why it has retained a small competitive scene for well over a century.',
      'Horseshoes needs the most permanent setup of any lawn game — two metal stakes driven into the ground, forty feet apart. Players throw horseshoes underhand, trying to encircle the stake (a "ringer," worth three points) or land closest to it (one point). First to twenty-one wins, and rings count only if the two ends of the horseshoe are on either side of the stake when it lands. Sets are cheap and last forever, but you need a spot you are willing to leave with two stakes in the ground.',
      'Ring toss and washer toss are the simplified versions of horseshoes. Instead of metal stakes and heavy shoes, you throw plastic rings or metal washers at wooden targets that sit on the ground. Setup takes thirty seconds, they pack down small, and they are safer for kids and dense yards. Scoring conventions vary — a common washer-toss rule set is one point for a washer on the board, three points for one in the hole, and first to twenty-one wins.',
      'Kubb is the newer classic — a Swedish import that has spread through American backyards over the past two decades. Two teams alternate throwing wooden batons underhand to knock over the other team\'s wooden blocks (kubbs), then finally the central king. The team that knocks over the king first wins, but knocking it over out of turn or before you have cleared all your opponent\'s kubbs loses the game instantly. Setup is a rectangle roughly sixteen by twenty-six feet; a set costs fifty to a hundred dollars.',
      'Kan Jam is the fastest-growing modern lawn game — a pair of slotted plastic cans twenty feet apart, played two versus two with a flying disc. One partner throws the disc; the other deflects it toward the can for one, two, or three points depending on how it lands. Rallies are fast, the equipment is nearly indestructible, and games are decided fast enough that you can rotate through eight or ten players without anyone waiting long.',
      'The shared appeal of lawn games is pace. No one is sprinting, everyone can join, and a set packs away small — which is why the same handful of games has anchored outdoor gatherings for generations. Pick one that fits your space, buy the mid-tier set (do not buy the cheapest plastic version — it will crack in one season), and it will be part of your summers for years.',
      'One final practical tip: keep your lawn game set in a mesh bag by the back door, not the garage. The friction of walking to the garage, opening the door, and pulling out a set is enough to kill an impromptu game two out of three times. A bag by the door lets you set up in ninety seconds when a friend walks in.',
    ],
  },

  {
    id: 'party-games-everyone',
    title: 'Party Games That Get Everyone Involved (Even the Quiet Ones)',
    category: 'Party',
    date: '2025-03-20',
    author: AUTHOR.name,
    image: partyImg,
    alt: 'People laughing during a lively party game',
    excerpt:
      'The best party games need little equipment and keep a whole room engaged. A few reliable choices for gatherings of all sizes.',
    body: [
      'A good party game does one thing well: it keeps a whole group involved, including the people waiting for their turn and the guest who does not usually gravitate to games. The best options need almost no equipment, explain in a sentence, and invite laughter rather than deep concentration. This is a shortlist of party games that work for eight to twenty people, plus notes on how to run them so the quieter guests do not disappear.',
      'Charades is the timeless choice. Split the group into two teams. One player at a time draws a prompt (a movie title, a book, a phrase) and acts it out silently for their team while the clock runs. The team scores if they guess before time runs out. The traditional rules have signals for movies (crank an old camera), books (open hands like a book), and syllables (chop on your arm) — teach these once at the start and you save a lot of confusion later. Charades scales from six players to twenty-plus and needs nothing more than slips of paper with prompts.',
      'For a calmer pace, guessing and trivia games work well because everyone can contribute an answer. Team-based formats keep quieter guests included and take the pressure off any single player. A simple trivia setup: read a category and ten questions; teams write answers on a shared sheet; whoever gets the most right wins the round. Play three or four rounds with different categories. Nobody needs to be an expert, and the shared "wait, is it 1893 or 1913?" side conversations are half the fun.',
      'Stacking and dexterity games like Jenga make great party fillers. They play in short bursts, draw a crowd around the table, and let people drift in and out of the action without disrupting the game. A single Jenga tower can run through six or eight players in fifteen minutes. The visual tension of the leaning tower is a magnet — nobody has to be watching intently for the crash to be exciting.',
      'Two Truths and a Lie is the party game with the lowest barrier to entry. Each person shares three statements about themselves — two true and one false — and the group guesses which is the lie. Play through the whole room once. Play again with a theme (childhood memories, embarrassing moments, dream jobs). The game only works if the group already knows each other well enough to guess, but for the right group it becomes a way to learn surprising things about people you thought you knew.',
      'Werewolf (and its cousin Mafia) is the classic social-deduction party game. It works for eight to eighteen players and needs one narrator plus a deck of cards or role cards. A hidden group of "werewolves" secretly picks off a "villager" each night. During the day, the whole group votes on who they think is a werewolf. The game is entirely about reading people — who is nervous, who is defensive, who is unusually quiet. It is thirty minutes of the room paying complete attention to each other, which is rare enough to be memorable.',
      'Codenames is the party game to buy if you play any at all. Two teams. Each team has a "spymaster" who sees a five-by-five grid of words color-coded to their team. The spymaster gives one-word clues that connect several of their team\'s words at once. Teammates guess which words on the board match the clue. First team to identify all their words wins — unless you guess the "assassin," which loses instantly. It is the party game that makes non-game-people say "let\'s play again," and it works for four to eight players comfortably.',
      'For younger guests or mixed-age parties, Musical Chairs and Freeze Dance are still hard to beat. They need almost no explanation, get people moving, and end on a laugh. Musical Chairs works with as few as five players. Freeze Dance is best with kids under twelve — pause the music and everyone freezes; the last to freeze is out.',
      'When you run a party game, watch for the guest who is drifting. A quick "you want to be the next narrator?" or "you should try — you\'re going to be great at this" brings them in without making a scene. The point of party games is that the room feels like one group instead of two — the players and the watchers. The best host quietly makes sure nobody is stuck watching.',
      'A final rule: end while people still want to play. Two hours of party games is a lot. If you have played the big game (Werewolf, Codenames, a trivia round) and the room is buzzing, that is your moment to switch to music, dessert, or open conversation. A short, memorable game session beats a long one that overstayed its welcome by an hour.',
    ],
  },

  {
    id: 'family-game-night',
    title: 'Planning a Family Game Night Everyone Actually Enjoys',
    category: 'Family',
    date: '2025-04-03',
    author: AUTHOR.name,
    image: dominoesImg,
    alt: 'Dominoes arranged on a table for a family game',
    excerpt:
      'A family game night works best with a little planning around ages, attention spans, and fair teams. Practical tips for a night that stays fun.',
    body: [
      'Family game nights bring different ages and attention spans to the same table, which is exactly what makes them fun and occasionally tricky. A five-year-old and a fifty-year-old want very different things from a game. A few small choices — the right game, balanced teams, a comfortable length — keep the evening enjoyable for everyone. This guide walks through how to set up a family game night that actually works, and how to keep one running as a habit.',
      'Pick games with a wide age range in mind. Dominoes is a classic for a reason: matching numbered tiles is easy for young players and the strategy of blocking opens up for older ones. Simple card games (Uno, Go Fish, Crazy Eights) work the same way — the rules are learnable in a minute, but there is room for real strategy once players get comfortable. Cooperative board games (Forbidden Island, Pandemic Junior, Outfoxed) shift the dynamic from "I want to beat you" to "we are all trying to solve this together," which suits mixed-age families particularly well.',
      'Balance teams rather than individuals when skill gaps are large. Pairing a younger player with an older one turns a mismatch into teamwork and gives everyone a genuine shot at winning. It also lets the older player teach quietly by example rather than explicitly. Rotate partnerships every few games so nobody feels stuck with the same partner for the whole night.',
      'Keep sessions to a comfortable length on school nights. A couple of short games (fifteen to thirty minutes each) usually beats one long one. Ending while everyone is still having fun — rather than pushing on because there is an hour left — makes the next game night an easy sell. If you tell the kids "one more game," follow through and end after one more game.',
      'Rotate who chooses the game. Letting each family member pick in turn spreads ownership of the night and quietly introduces everyone to games they might not have tried on their own. It also solves the "we always play the same thing" complaint. Keep a small list somewhere everyone can see (a magnet on the fridge, a note on the shared calendar) so it is easy to remember whose turn it is.',
      'Handle winning and losing thoughtfully. Younger players sometimes struggle with losing; a few games work around this by design (cooperative games have no losers within the group, cumulative-scoring games spread wins across many rounds). If a young player is upset, resist the urge to fake losing on purpose — kids notice, and it makes real wins feel hollow later. Instead, praise good play and specific decisions rather than just outcomes.',
      'Snacks make or break the night. Anything greasy, sticky, or crumbly ends up on the cards. Popcorn is the classic for a reason. Sliced apples, pretzels, and small candies work well. Drinks in cups with lids (kids\' cups with straws are a game-night superpower) prevent the classic mid-round spill onto the board.',
      'Set up the table in advance if you can. Getting the game out of the closet, unfolding the board, sorting the pieces, and reading the rulebook is often more work than the game itself — and if kids are watching you do it, they get bored before play starts. Preload the game before dinner or as the family gathers. The first turn should happen within two minutes of everyone sitting down.',
      'Adjust for guests. When cousins, grandparents, or friends join the game night, pick something everyone can pick up quickly. Save the family\'s favorite complex game (the one that took three sessions to learn) for a night with just the household. Nothing kills a family game night faster than a guest sitting through a fifteen-minute rules explanation before the first turn.',
      'Build a small "game night collection" over time. You do not need thirty games — five to eight that suit your family well is plenty. A cooperative game, a party game, a two-player game, a quick filler, a longer favorite, and a card game or two will cover almost any night. Buy games slowly, based on which ones your family keeps asking to play, not on which ones look exciting on the shelf.',
      'The best family game nights are the ones that become routine. A specific night of the week (Friday, Sunday) is easier to protect than an ad-hoc "when we feel like it." Even every-other-week is more sustainable than every week for most families. Once it is a habit, the small choices — which game, how long, who picks — take care of themselves.',
    ],
  },

  {
    id: 'cornhole-complete-guide',
    title: 'The Complete Beginner\'s Guide to Cornhole',
    category: 'Outdoor',
    date: '2025-04-18',
    author: AUTHOR.name,
    image: backyardImg,
    alt: 'Two cornhole boards facing each other on a lawn',
    excerpt:
      'Cornhole is deceptively simple. Everything a first-time player needs — official distances, scoring, bag choice, and technique — in one guide.',
    body: [
      'Cornhole started in the American Midwest and has spread over the last two decades into every corner of the country. It is now the default backyard game in most of the United States, and the American Cornhole League runs televised events on ESPN. But for a new player, the simple version is the only one that matters: two boards, eight bags, and a lot of throws. This guide covers everything a beginner needs to know to play well within a couple of games.',
      'The official distance between boards is twenty-seven feet from front edge to front edge. In most backyards, thirty feet works fine and lets both throwers stand at the front of a board without being on top of it. If you are playing with kids or beginners, shorten to twenty or twenty-two feet — the game is much more fun when bags actually reach the target.',
      'A regulation cornhole board is four feet long by two feet wide, with the front edge about three inches off the ground and the back edge about twelve inches up. The hole is six inches in diameter, centered nine inches from the back edge and side. If you are building or buying, sticking to these dimensions means your bags will behave the way they would in any tournament — and any cornhole player who visits your yard will know exactly what to do.',
      'Bags are where the game gets serious. Corn-filled duck cloth bags — the traditional kind — are heavy, hard, and skid off polished boards. "Slick and stick" bags (resin-filled with one slick side and one grippy side) let you play push shots and roll shots that stop where they land. Beginners should start with basic all-weather bags (about $20 for eight) and upgrade later. Buy one bag color per team so you can tell them apart at a glance.',
      'Scoring uses "cancellation." Each round, both players on the same side throw their four bags. When everyone is done, count only the difference: if red scored six and blue scored four, red gets two for that round and blue gets zero. Bag in the hole is worth three points; bag on the board (and not hanging off) is worth one. A bag that touches the ground before landing on the board does not count — even if it slides on and stays.',
      'The game is played to twenty-one exact. If you would go over, your excess points do not count and you stay where you were. In tournament rules, you have to score exactly twenty-one; some casual rulesets say "first to twenty-one or higher," but the exact-twenty-one version is more interesting because it forces you to plan the last few shots. If two teams are tied going into the final round, only one team can score, so strategy matters even at the end.',
      'For technique, keep the throw simple. Hold the bag by the corner or the middle depending on what shape shot you want. A flat, palm-down grip produces a bag that lands flat and slides. A cupped grip with the corner in your fingertips produces more spin and stops the bag sooner. Step forward with your opposite foot, swing your throwing arm like a pendulum, and release when your arm is roughly parallel to the ground. Follow through toward the hole.',
      'Aim for the back of the hole, not the front edge of the board. A bag that lands short slides on and often into the hole; a bag that lands long often bounces back off the board. The old "sail it high" advice is a myth for competitive play — a flatter, harder throw is more accurate and easier to control. Watch your bag through the air; it teaches you more than any coaching video.',
      'The two most useful shots to learn early are the "airmail" (a bag thrown directly into the hole without touching the board first) and the "block" (a bag thrown to sit right in front of the hole, blocking your opponent from sliding one in). Practice each one for ten minutes a day and your win rate against casual opponents will double in a week.',
      'Cornhole works for two players (one on each board) or four players (two per board, throwing at each other). Teams of two are more social and let people rotate in and out easily; head-to-head is faster and more competitive. Both versions use the same scoring. Pick based on how many people are around.',
      'Weather affects cornhole surprisingly. Rain-soaked boards absorb bag energy; hot dry days make the boards fast and slippery. Wind above about ten miles per hour pushes bags off line — most casual players do not realize how much until they play in a light breeze and start missing throws they normally make. If the weather is bad, play at twenty feet instead of twenty-seven and everyone has more fun.',
      'The best thing about cornhole is that it can be as casual or as serious as you want. In the same afternoon you can play a beer-in-hand round with your neighbors and then spend twenty minutes drilling the airmail shot with a friend who plays league. The bar to entry is a set of boards, a set of bags, and a level patch of grass. The ceiling is national tournaments. Everything in between is your call.',
    ],
  },

  {
    id: 'two-player-card-games',
    title: 'The Best Two-Player Card Games for Couples and Roommates',
    category: 'Card Games',
    date: '2025-05-02',
    author: AUTHOR.name,
    image: chessImg,
    alt: 'Two players facing off over a table with cards',
    excerpt:
      'Six two-player card games that reward regular play — short enough for a weeknight, deep enough to keep coming back to.',
    body: [
      'Two-player card games are their own category. Most party classics need four or more players to work; most kid-friendly games are too random for adults; and the deep tabletop games often need a full table. But there is a whole category of card games designed specifically for two, and they are among the best games ever made for playing regularly with the same person — a partner, roommate, sibling, or friend. This guide covers six that are worth learning if you want a go-to two-player game.',
      'Gin Rummy is the two-player classic. Each player is dealt ten cards. You draw one card per turn from the deck or the discard pile, then discard one, trying to arrange your hand into sets (three or four of a kind) and runs (three or more sequential cards of the same suit). When your unmelded cards total less than ten points, you can "knock" and end the round. Scoring based on the difference, first to a hundred points wins. Rounds take five to ten minutes; a full game runs thirty to sixty. It works best when both players are within a rough skill range.',
      'Cribbage adds a scoring board (or you can use a piece of paper) and one of the best endgame mechanics in card games. Each player gets six cards, discards two into the "crib" (a bonus hand for the dealer), and plays out the remaining four in alternating turns. Points come from combinations played in the round, then from the hands themselves, then from the crib. It is easy to learn the basics in fifteen minutes; the deeper strategy — which cards to keep, when to give away pairs to the crib, when to play defensively — takes years. Sets are cheap, and cribbage has been a bar game for two hundred years for good reason.',
      'Speed is the game for when both players want a fast, tense round. Each player has a hand of five cards and a pile of fifteen. Two "pace" cards go face up in the middle. You play any card from your hand that is one higher or one lower than either pace card, drawing replacements from your fifteen. First player to empty their hand wins. Rounds last thirty seconds. It is chaotic, competitive, and best played when you both have some caffeine.',
      'For a slower, more strategic two-player experience, try Nertz. Each player has their own thirteen-card "Nertz pile" plus a four-card work area and access to shared foundation stacks in the middle. You play as fast as you can to move cards from your Nertz pile to the shared foundations while managing your work stacks. First to empty their Nertz pile calls "Nertz" and the round ends. It is like solitaire, except you are racing another person to the same middle piles. Two decks (different backs) are needed.',
      'Egyptian Ratscrew is the two-player version of Slapjack on caffeine. Split the deck in half; each player holds their pile face-down. Take turns flipping cards into a central pile. Any pair, sandwich (two cards of the same rank separated by one), or specific combination triggers a "slap" — the first player to hit the pile takes it. When one player has all fifty-two cards, they win. It is loud, physical, and best played standing up so you can slap without cramping your wrist.',
      'For a two-player game with more depth than any of the above, learn Piquet. It is a five-hundred-year-old French trick-taking game for two, played with a thirty-two-card deck (ace through seven). The scoring involves "declaring" combinations of cards — three of a kind, sequences, majority of suits — and then playing out tricks. It takes an hour to learn, another hour to become competent, and a lifetime to master. If you and your regular partner want a single game to play every week for a year, Piquet rewards more than any of the above.',
      'The trick with any two-player game is finding one that neither player dominates too quickly. Speed rewards reflexes; Gin rewards patience; Cribbage rewards experience; Piquet rewards study. Pick the one that fits how the two of you like to play. If one player wins every game of one style, rotate — nobody has fun losing repeatedly to the same person in the same game.',
      'Two decks of good-quality plastic-coated playing cards are a small investment (about twenty dollars) that lasts years and covers every game above. A cheap cribbage board is another ten dollars. That is the entire equipment cost for what could easily become a weekly ritual for two people. Compared to the cost of a single restaurant dinner, it is one of the best entertainment investments a household can make.',
      'Two-player card games do something that two-player video games rarely do: they force you to sit across from another person for extended stretches of time, without a screen, and with an activity that occupies just enough of your attention to leave room for conversation. That is the real value. The games are the excuse; the sitting-across-from-someone is the point.',
    ],
  },

  {
    id: 'rainy-day-indoor-games',
    title: 'Rainy Day Indoor Games for Kids (That Adults Do Not Hate)',
    category: 'Family',
    date: '2025-05-16',
    author: AUTHOR.name,
    image: indoorImg,
    alt: 'Kids playing an indoor board game on a rainy day',
    excerpt:
      'When outside is not an option, these indoor games keep kids busy for hours without driving parents up the wall.',
    body: [
      'Rainy days with kids at home are a specific challenge. Screen time is easy but drains the room; unstructured play works for about twenty minutes before someone is bored; and full-on messy crafts require setup and cleanup that the day may not have room for. Indoor games are the middle ground — they keep kids occupied, they involve some thinking or moving, and they end when you say they end. This guide covers games that work indoors, scale from one kid to several, and do not require an adult to referee every second.',
      'Start with the classics that work with no setup. Simon Says, Red Light Green Light, and Freeze Dance need nothing more than a room with a bit of space and a parent willing to call out instructions. Simon Says works for ages three to ten. Freeze Dance needs a music source and works for any age that can stand up. These are excellent between-activity resets — five minutes of active play resets everyone\'s energy without requiring cleanup.',
      'Card games are the indoor kids\' game category that adults enjoy playing along with. Go Fish works from age four. Crazy Eights and Uno work from about six. War is the game that requires no strategy at all — just flip a card and see who has the higher value — which makes it the fallback for a very tired parent and a five-year-old. Keep a deck in every room of the house and you never run out of a game to play.',
      'Board games scale up as kids age. Preschoolers do well with Candy Land, Chutes and Ladders, and Hi Ho Cherry-O — games driven by luck rather than strategy so any player can win. Elementary-age kids move into Sorry, Guess Who, and Trouble. From eight or nine, they can handle Monopoly Junior, Ticket to Ride: First Journey, and Catan Junior. Buy age-appropriate versions of grown-up games rather than the full versions; the mechanics scale better for younger attention spans.',
      'Building games are secretly some of the best indoor kids\' games. Jenga works from age five with adult supervision. Lego (with any set at all) can occupy a child for hours if you make the rule "start over and build something else" instead of "follow the instructions once and put it away." Magnetic tiles (Magna-Tiles or generic equivalents) are one of the best investments a family can make for indoor play — kids from three to eleven build with them, and cleanup is genuinely easy.',
      'Puzzles are the low-key indoor game most parents forget. A hundred-piece puzzle keeps a six-year-old busy for an hour, and the finished puzzle sitting on the table for a day feels like an accomplishment. Sets of jigsaw puzzles designed for a specific age (100, 250, 500 pieces) are cheap and can be picked up at any big-box store. Buy three or four and rotate them; kids get bored of the same one but love the ones they have not seen in a while.',
      'For rainy afternoons with more than one kid, cooperative games are a lifesaver. Outfoxed, Hoot Owl Hoot, and Race to the Treasure work from about five up. Everyone plays on the same team against the game itself. There is no arguing over who won, no crying about losing. The game either wins or the kids win, and the kids are on the same side either way. This is exactly what a tired parent needs when the third argument of the day is looming.',
      'Screen-based games count as indoor games when you set them up thoughtfully. Cooperative video games (Overcooked, It Takes Two, Untitled Goose Game) are more engaging than parallel screen time and get siblings talking to each other. Mario Kart with grown-ups joining in is a classic for a reason. The rule that works in our household: screens are fine if everyone in the room is looking at the same screen and playing together. Solo tablet time on a rainy day is a slippery slope.',
      'Have a "rainy day box" that only comes out on days when kids cannot go outside. Fill it with a few games they do not usually play, some art supplies, a new puzzle, a deck of cards, and maybe one small novelty toy. The scarcity of the box makes ordinary games feel new. Refresh the contents every two or three months to keep the effect going.',
      'The final trick for indoor days is scheduling in short bursts. Twenty minutes of a board game, twenty minutes of independent play, twenty minutes of a movie clip, twenty minutes of building — kids do better with variety than with any single activity stretched out. Adults do too. Cycle through three or four activities in a morning and both parties end the day feeling like the rainy afternoon was actually kind of nice.',
    ],
  },

  {
    id: 'bbq-picnic-games',
    title: 'Backyard Games for BBQs, Cookouts, and Picnics',
    category: 'Outdoor',
    date: '2025-06-01',
    author: AUTHOR.name,
    image: frisbeeImg,
    alt: 'A flying disc mid-air over a park picnic',
    excerpt:
      'The right games make a cookout — active enough to keep kids busy, casual enough for adults to play beer in hand.',
    body: [
      'A cookout with games is a different event than a cookout without them. Games give kids something to do, adults an easy way to interact without forcing conversation, and photographs a subject that is not just food on a plate. But not every backyard game suits a BBQ — some require too much focus, some need too much space, and some pull people away from the food and drinks that are the main event. This guide covers the games that actually work at cookouts, picnics, and casual outdoor gatherings.',
      'Cornhole is the default cookout game across most of the United States for good reason. Setup takes two minutes; the throwing motion is casual enough to be done one-handed with a drink in the other; and the game runs on its own once it is going. Two boards fit in almost any yard. Because the game is played in short rounds, players cycle in and out easily, and there is no penalty for someone stepping away to grab another burger. Buy a mid-tier set (fifty to a hundred dollars) if you host more than a few cookouts a year.',
      'Ladder toss is cornhole\'s underrated cousin. It sets up in a minute, plays in the same format (two players at a time throwing at a target), and the wrap-around golf-ball projectiles are surprisingly satisfying to throw. The scoring — three, two, or one point depending on which rung you land on — creates just enough tension to keep players engaged. Kids can play with the adults because the strength required is low.',
      'A soft flying disc and open space cover the "kids need something to run around with" category. A basic disc is five to ten dollars and lasts forever. Kan Jam ($40) turns disc-throwing into a structured game for two-versus-two. If you have room and older kids, Ultimate Frisbee-style pickup works — five per side, run to a goal line, no tackling — but keep it casual so nobody is playing for real stakes at a cookout.',
      'Bocce is the low-effort cookout game for slower gatherings. A set costs thirty to eighty dollars and works on grass, dirt, or sand. The rolling motion suits any age — grandparents and grandkids can play together on equal footing. Rounds take three to five minutes, so a game runs alongside food service without disrupting it. Cool and shaded evenings suit bocce especially well; the game does not require sunlight or heat.',
      'Spikeball is the more active option for younger crowds. Two-versus-two around a small trampoline-style net at ankle height. Fast rallies, lots of movement, everyone sweaty in ten minutes. Not for everyone at a cookout — usually the college-aged and thirty-something contingent gravitate to it while others watch. Kids under about ten struggle with the reflexes required, but they love watching.',
      'Bag toss and washer toss games are the "small, safe, quick" category. Both use lightweight targets and small projectiles. Setup is under a minute. Kids play alongside adults without any real difference in difficulty. Sets are cheap (twenty to forty dollars) and durable. If you host cookouts with mixed ages, buying a washer-toss set alongside cornhole doubles the game options with minimal storage.',
      'For food-focused gatherings, "background games" beat "foreground games." A cornhole game running in a corner of the yard that people drift in and out of is better than one central game everyone is expected to focus on. Set up two or three lightweight games in different corners rather than one big centerpiece — guests self-select where they want to be.',
      'Picnics — the "spread a blanket in a park" version of a cookout — favor smaller, more portable games. A deck of cards, a soft frisbee, a mini bocce set, and a wooden Jenga tower fit in a single tote bag. Anything bigger (cornhole, spikeball, badminton) is a logistical hassle to walk from the car to the picnic spot and back. Match your game selection to how much you are willing to carry.',
      'The key to using games at a cookout is: they are the soundtrack, not the show. The show is the food, the people, and the afternoon. Games that require formal setup, referee-level rule enforcement, or full attention to work will feel like an obligation. Games that quietly run in the background, catch people\'s eye, and pull them in when they want to be pulled in — those are the ones that make a cookout memorable a week later.',
      'Practical checklist for hosting: level ground for at least one game (usually cornhole); an area of shade where non-players can sit and watch; drinks and snacks within ten feet of the game area; and a spot to keep the equipment out of the sun when not in use. Get those four right and the games take care of themselves.',
    ],
  },
]

export const ARTICLE_CATEGORIES = ['All', ...Array.from(new Set(ARTICLES.map((a) => a.category)))]
