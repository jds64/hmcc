# hmcc

`hmcc` is a wrapper for the Autocode Halo MCC API.

This module uses `async/await` and provides a simplistic layer to access JSON data from Halo Waypoint.
This data is available on the web at 343's [Halo Waypoint Service Record](https://www.halowaypoint.com/en-gb/games/halo-the-master-chief-collection/xbox-one/service-records/players) app.

## Getting Started

You must be using at least NodeJS v14 to use this module.

```js

// commonjs
const hmcc = require('hmcc')

// esm
import hmcc from 'hmcc'

const stats = await hmcc.getStats('yourGamertagHere')

console.log(stats)

// fetches:
{
  "gamertag": "yourGamertagHere",
  "clantag": "cool",
  "emblem": "https://emblems.svc.halowaypoint.com/hmcc/emblems/lavender_brick_daisho-on-white_thickstar",
  "playtime": "2d 10h 03m 19s",
  "gamesPlayed": 433,
  "wins": 249,
  "losses": 184,
  "winRatio": 0.5750577367205543,
  "kills": 4250,
  "deaths": 4224,
  "killDeathRatio": 1.006155303030303,
  "killsPerGame": 9.815242494226329,
  "deathsPerGame": 9.755196304849884,
  "last20": [1, 1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, -1, -1, -1, 1, 1, 1, 1, 1], // 1 = win, -1 = loss
  "streak": "win 5"
}

```

## Details

The provided methods are listed below:

* [getStats()](https://github.com/jds64/hmcc/blob/eddf409f4d36643a8d9f0aa6bb157ef44e82f6d7/src/index.js#L45-L62)
* [getLatestGame()](https://github.com/jds64/hmcc/blob/eddf409f4d36643a8d9f0aa6bb157ef44e82f6d7/src/index.js#L64-L85)
* [getGameHistory()](https://github.com/jds64/hmcc/blob/eddf409f4d36643a8d9f0aa6bb157ef44e82f6d7/src/index.js#L87-L115)
* [getSquadActivity()](https://github.com/jds64/hmcc/blob/eddf409f4d36643a8d9f0aa6bb157ef44e82f6d7/src/index.js#L117-L141)

Also provided are two enums to help with parameters:

* [Game](https://github.com/jds64/hmcc/blob/eddf409f4d36643a8d9f0aa6bb157ef44e82f6d7/src/index.js#L4-L17) - Contains enumerated game (title) IDs.
* [GameVariant](https://github.com/jds64/hmcc/blob/eddf409f4d36643a8d9f0aa6bb157ef44e82f6d7/src/index.js#L19-L43) - Contains enumerated multiplayer gametypes (variants).

## Usage

```typescript
// Use `Game` and `GameVariant` enums for the respective arguments.
getStats(gamertag: string)
getLatestGame(gamertag: string, game: Game, gameVariant: GameVariant)
getGameHistory(gamertag: string, game: Game, gameVariant: GameVariant)
getSquadActivity(gamertags: ...string[], minSquadSize: number, game: Game)

```
