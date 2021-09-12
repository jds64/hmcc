import lib from 'lib';
const Halo = lib.halo.mcc['@0.1.0']

/**
 * @readonly
 * @enum {string}
 */
const Game = {
  ALL: 'All',
  HALOCE: 'Halo: CE',
  HALO1: 'Halo: CE',
  HALO2: 'Halo 2',
  HALO2A: 'Halo 2: Anniversary',
  HALO3: 'Halo 3',
  HALO4: 'Halo 4',
  HALOREACH: 'Halo: Reach'
}

/**
 * @readonly
 * @enum {string}
 */
const GameVariant = {
  NONE: undefined,
  ALL: 'All',
  SLAYER: 'Slayer',
  CTF: 'CTF',
  ODDBALL: 'Oddball',
  KOTH: 'KOTH',
  JUGGERNAUT: 'Juggernaut',
  INFECTION: 'Infection',
  FLOOD: 'Flood',
  RACE: 'Race',
  EXTRACTION: 'Extraction',
  DOMINION: 'Dominion',
  REGICIDE: 'Regicide',
  GRIFBALL: 'Grifball',
  RICOCHET: 'Ricochet',
  FORGE: 'Forge',
  VIP: 'VIP',
  TERRITORIES: 'Territories',
  ASSAULT: 'Assault'
}

/**
 * @function getStats
 * @param {string} gamertag
 * @example
 * async () => await getStats('jollyoljosh')
 */
const getStats = async (gamertag) => {
  if (!gamertag || typeof gamertag !== 'string') {
    throw new Error(`<gamertag> must be a string and can\'t be blank.`)
    return;
  }

  let data = await Halo.stats({
    gamertag
  })

  return data;
}

/**
 * @function getLatestGame
 * @param {string} gamertag 
 * @param {Game} game 
 * @param {GameVariant} gameVariant 
 * @example
 * async () => await getLatestGame('trivium295', Game.HALO3, GameVariant.SLAYER)
 */
const getLatestGame = async (gamertag, game = Game.ALL, gameVariant = GameVariant.ALL) => {
  if (!gamertag || typeof gamertag !== 'string') {
    throw new Error(`<gamertag> must be a string and can\'t be blank.`)
    return;
  }

  let data = await Halo.games.latest({
    gamertag,
    game,
    gameVariant
  })

  return data;
}

/**
 * @function getGameHistory
 * @param {string} gamertag 
 * @param {Game} game 
 * @param {GameVariant} gameVariant 
 * @param {number} count
 * @example
 * async () => await getGameHistory('djeasydog', Game.HALOREACH, GameVariant.SLAYER, 10)
 * // GameVariant.ALL is not supported - you must omit the field altogether or use GameVariant.NONE.
 */
const getGameHistory = async (gamertag, game = Game.ALL, gameVariant = GameVariant.SLAYER, count = 10) => {

  if (!gamertag || typeof gamertag !== 'string') {
    throw new Error(`<gamertag> must be a string and can\'t be blank.`)
    return;
  }

  if (count > 100) {
    throw new Error('Maximum size for game history is 100.')
    return;
  }

  let data = await halo.games.history({
    gamertag,
    game,
    gameVariant,
    count
  })
}

/**
 * @function getSquadActivity
 * @param {string[]} gamertags 
 * @param {number} minSquadSize 
 * @param {Game} game
 * @example
 * async () => await getSquadActivity(['trivium295', 'jollyoljosh'], 2, Game.ALL)
 */
const getSquadActivity = async (gamertags, minSquadSize = 2, game = Game.ALL) => {
  if (!gamertags || typeof gamertag !== 'array' || !gamertags.length) {
    throw new Error(`<gamertags> must be an array of strings and can\'t be blank.`)
    return;
  }

  if (minSquadSize > 8) {
    throw new Error(`<minSquadSize> must be a number between 1 and 8.`)
    return;
  }

  let data = await Halo.squad.activity({
    gamertags,
    minSquadSize,
    game
  })
}

export default { Game, GameVariant, getStats, getLatestGame, getGameHistory, getSquadActivity }
export {
  Game,
  GameVariant,
  getStats,
  getLatestGame,
  getGameHistory,
  getSquadActivity
}