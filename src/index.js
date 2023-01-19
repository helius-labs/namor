const { uniqueNamesGenerator, adjectives, colors, animals, names } = require('unique-names-generator');
const { PublicKey } = require("@solana/web3.js");
const solanaNameMappings = require("./pubKeyMappings.json");

const DICTIONARIES = [adjectives, colors, animals, names]

const getSolanaName = (pubkey) => {
    try {
        new PublicKey(pubkey)
    } catch (e) {
        throw new Error("invalid solana address: ", e)
    }

    // TODO: see if pubkey belongs to public list of well-known addresses first
    // TODO: add some sort of domain provider integration
    if (solanaNameMappings[pubkey] != undefined) {
        return solanaNameMappings[pubkey];
    }

    const config = {
        dictionaries: DICTIONARIES,
        seed: pubkey,
        separator: " "
    }

    return uniqueNamesGenerator(config);
}

module.exports = { getSolanaName }