
// Declare Suits


const PIN = [11, 12, 13, 14, 15, 16, 17, 18, 19]; // Circles 1-9, 0 is Red
const SOU = [21, 22, 23, 24, 25, 26, 27, 28, 29]; // Bamboo 1-9, 0 is Red
const MAN = [31, 32, 33, 34, 35, 36, 37, 38, 39]; // Characters 1-9, 0 is Red
const WIND = [41, 42, 43]; // Dragons: White, Green, Red
const DRAGON = [51, 52, 53, 54]; // Winds: East, South, West, North

const SUITS = {
  PIN: PIN,
  SOU: SOU,
  MAN: MAN,
  WIND: WIND,
  DRAGON: DRAGON
};

// Deckbuilding
const WALL = [];

function buildWall(...suits) {
    for (suit of suits) {
      suit.map(a => WALL.push(a, a, a, a))
    }
    console.log('Tiles:', WALL);
}
buildWall(SUITS.PIN);

// Shuffling


// Dealing


// Hand Scoring
  // Complete Hand
    // X Groups of 3 and a Pair. X = (Hand bash-2) / 3
    // We need to check small hands for learning games, but also hands that have tiles called out of it.
    // Each group must be a sequence or a triplet (Kans will be implemented later, as they require unique identifiers)
    // The pair should always be last
    var testHand = [11, 12, 12, 13, 13, 14, 22, 22, 22, 23, 24, 54, 54, 54];
    var expectedGroups = [[11, 12, 13], [12, 13, 14], [22, 23, 24], [54, 54, 54], [22, 22]]
