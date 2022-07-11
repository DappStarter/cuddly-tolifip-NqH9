require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom private boil suggest name riot sad minor grid entire army giant'; 
let testAccounts = [
"0x1126ae188e90e602d9d69a165a806a7219ca0574f01821d6314fc0c02a2be940",
"0x4a6c7ccd2cbcbc0597916d32a64677af262b40f335becd6ca11e0ee1a25c57e5",
"0xaadd5cfc94f873101b37d59cbcfbf1901404a4b438d68ee90429eee8ed045235",
"0x82076640d7e8ba62205a923ec21aaeedc7f1cac051f8663fe0e701b1d5569dc0",
"0x34c26feb0d430220e3fc394d5f9c25b3c09d43cc777450550b203176c7e2cc16",
"0xc553a471e95488a75e382374cdc9d731611667e5f046a734eef60d7a637df10e",
"0xda21265bfc20cdd4360aabd7998dddf52f58eb7f693118a1e72e6db88b64a8cb",
"0x2bf2ea60d0b9471f1cad57a50a0f317f4f9bb57bc3b53cef866170f7fe35882a",
"0x52dadc1a160435fec138266b4081683b0059d5528d37ac7ff4daeeaca59c2e8e",
"0x1af162953e50573fea3c8923511d9cdb8c4ad3712a4439ad9103ca5d0d822576"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


