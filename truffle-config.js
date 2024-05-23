/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the networks and compiler sections
 * to customize your project as needed.
 *
 * More information about configuration can be found at:
 *
 * https://trufflesuite.com/docs/truffle/reference/configuration
 */

// require('dotenv').config(); // Uncomment this line to load environment variables

module.exports = {
    // Uncommenting the defaults below
    // provides for an easier quick-start with Ganache.
    // You can also specify any network and customize
    // as needed.
  
    networks: {
      development: {
        host: "127.0.0.1",     // Localhost (default: none)
        port: 7545,            // Standard Ethereum port (default: none)
        network_id: "*",       // Any network (default: none)
      },
      // Uncomment and configure these networks if you want to deploy to a public network
      // ropsten: {
      //   provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`),
      //   network_id: 3,       // Ropsten's id
      //   gas: 5500000,        // Ropsten has a lower block limit than mainnet
      //   confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
      //   timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      //   skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
      // },
      // mainnet: {
      //   provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`),
      //   network_id: 1,       // Mainnet's id
      //   gas: 5500000,        // Mainnet has a higher block limit than Ropsten
      //   confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
      //   timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      //   skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
      // },
    },
  
    // Set default mocha options here, use special reporters etc.
    mocha: {
      // timeout: 100000
    },
  
    // Configure your compilers
    compilers: {
      solc: {
        version: "0.8.0",      // Fetch exact version from solc-bin (default: truffle's version)
        settings: {           // See the solidity docs for advice about optimization and evmVersion
          optimizer: {
            enabled: false,
            runs: 200
          },
          // evmVersion: "byzantium"
        }
      }
    },
  
    // Truffle DB is currently disabled by default; to enable it, change enabled: false to enabled: true
    // Note: if you migrated your contracts prior to enabling this field in your project and want
    // those previously migrated contracts available, you must run `truffle migrate --reset --compile-all`
    db: {
      enabled: false
    }
  };
  