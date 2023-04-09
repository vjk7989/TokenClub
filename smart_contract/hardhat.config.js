require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv',
      accounts: ['057ccf756ae6b19ef05722bff85ee23db7be9f42a3f0228a456a5dfe3e1f688c'],
    },
  },
};