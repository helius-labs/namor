# sol-namor (alpha)

Looking at long, cryptic public keys or trying to remember them is painful.

This package solves that by generating fun (deterministic) human-readable names from Solana addresses — or uses the actual known name for popular addresses (for example, exchanges).

![](/doc/example.png)

## Install

`npm i sol-namor`

## Usage

#### `getSolanaName(string: publicKey)`

The following will first attempt to lokup the provided address in our dictionary at `/src/types`, and will return a funny name bane if fails to find it.

```js
import { getSolanaName } from "sol-namor";

const pubKey = "enter a solana public key here";

const name = getSolanaName(pubKey);
```

## Contribute

1. Fork the repo, work on your own branch, make a PR into this `main` branch when ready.
2. We suggest using VSCode and having ESList and Prettier installed so you get automatic linting and formatting. If using other editors you can run `npm run lint` and `npm run format` to lint/format manually.
3. GitHub will auto run some tests on your PR once you create it and they will be required to pass. To simulate locally you can `npm run build && npm test`.

## Support

https://helius.xys
