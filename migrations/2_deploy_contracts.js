const jsonOniFactory = require('../build/OniFactory.json');
jsonOniFactory.contractName = 'OniFactory';
const OniERC20 = artifacts.require("OniERC20");

const contract = require('@truffle/contract');

const OniFactory = contract(jsonOniFactory);

// const { BN } = require('@openzeppelin/test-helpers');
// const ether = (n) => new BN(web3.utils.toWei(n, 'ether'));

module.exports = function (deployer, network) {
  OniFactory.setProvider(this.web3._provider);

  deployer.then(async () => {
    if (network === 'test' || network === 'soliditycoverage') {
      // do nothing
    } else if (network === 'bsctestnet') {
      const b = await deployer.deploy(OniFactory, process.env.RINKEBY_FACTORY_OWNER, { from: process.env.DEPLOYER_ACCOUNT });
      console.log('b:', await b.INIT_CODE_PAIR_HASH.call());
    } else if (network === 'bsc') {
      const b = await deployer.deploy(OniFactory, process.env.MAINNET_FACTORY_OWNER, { from: process.env.DEPLOYER_ACCOUNT });
      console.log('b:', await b.INIT_CODE_PAIR_HASH.call());
    } else {
      console.error(`Unsupported network: ${network}`);
    }
  });
};
