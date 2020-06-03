require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize flock tribe stool cruise mean property gown light army ghost'; 
let testAccounts = [
"0xf5925d097a37dbfbe04618c83b4c565a19c651a95e94ee97a914a9747d57b025",
"0xc181a051aa7988c61b6b042da1869ec604b4743e8842a17ed476aaf25f6ec071",
"0x66612b1e4793ee7b085db37fb5900dbf031e3b9e4ed7447cb3a6e36df0eb0c8c",
"0xf57c052ecff0f941794a08a77dac3d1ff8d42c25e2d82ad104f5de544d3c205b",
"0x202abd706af53e8fb557e7067e8a2373c8484896af84ac50d628a2a30b8a00ce",
"0x6fa2a619af772e77b16d7aec3911c717615b4562197c67d0562707c8b87541e9",
"0xa3b732246a53a359bcd4c2f4363039a1efebf79f145b78021c80bdd760796897",
"0x6579b49182b026b8c5369b8d4b79851ed40d20eea0a991f50571d961fb22e6d4",
"0x716cf19d15b341f2341631814bccdc860c5cdef9ca502f97d7fe09757fc0c200",
"0x5cd68b4795e2f9d864a62c4c7aa3550edab39be6d01337fb3ea7e88201a2bab7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
