# sol-namor (alpha)

Looking at long, cryptic public keys or trying to remember them is painful.

This package solves that by generating fun (deterministic) human-readable names from Solana addresses — or uses the actual known name for popular addresses (for example, exchanges).

![/doc/example.png]()

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

## Support

https://helius.xys
