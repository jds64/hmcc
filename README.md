# hmcc

`hmcc` is a wrapper for the Autocode Halo MCC API.

This module uses `async/await` and provides a simplistic way to access JSON data from Halo Waypoint.
This data is available on the web at 343's [Halo Waypoint Service Record](https://www.halowaypoint.com/en-gb/games/halo-the-master-chief-collection/xbox-one/service-records/players) web-app.

## Getting Started

You must be using at least NodeJS v14 to use this module.

```js

// commonjs
const hmcc = require('hmcc')

// esm
import hmcc from 'hmcc'

// with async/await
const stats = await hmcc.getStats('yourGamertagHere')
console.log(stats)

// with .then()
hmcc.getStats('yourGamertagHere').then(stats => {
  console.log(stats)
})
```

## Details

The provided methods are listed below:

* [getStats()](https://github.com/jds64/hmcc/blob/main/src/index.mjs#L45-L62)
* [getLatestGame()](https://github.com/jds64/hmcc/blob/main/src/index.mjs#L64-L85)
* [getGameHistory()](https://github.com/jds64/hmcc/blob/main/src/index.mjs#L87-L115)
* [getSquadActivity()](https://github.com/jds64/hmcc/blob/main/src/index.mjs#L117-L141)

Also provided are two enums to help with parameters:

* [Game](https://github.com/jds64/hmcc/blob/main/src/index.js#L4-L17) - Contains enumerated game (title) IDs.
* [GameVariant](https://github.com/jds64/hmcc/blob/main/src/index.js#L19-L43) - Contains enumerated multiplayer gametypes (variants).

## Usage

```typescript
// Use `Game` and `GameVariant` enums for the respective arguments.
getStats(gamertag: string)
getLatestGame(gamertag: string, game: Game, gameVariant: GameVariant)
getGameHistory(gamertag: string, game: Game, gameVariant: GameVariant)
getSquadActivity(gamertags: string[], minSquadSize: number, game: Game)
```
