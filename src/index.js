const { uniqueNamesGenerator, adjectives, colors, animals, names } = require('unique-names-generator');
const { PublicKey } = require("@solana/web3.js")


const DICTIONARIES = [adjectives, colors, animals, names]


const getSolanaName = (pubkey) => {
    try {
        new PublicKey(pubkey)
    } catch (e) {
        throw new Error("invalid solana address: ", e)
    }

    // TODO: see if pubkey belongs to public list of well-known addresses first

    const config = {
        dictionaries: DICTIONARIES,
        seed: pubkey,
        separator: " "
    }


    return uniqueNamesGenerator(config);
}


export { getSolanaName }