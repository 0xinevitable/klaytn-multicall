[![Cover Image](https://raw.githubusercontent.com/junhoyeo/klaytn-multicall/main/docs/images/cover.jpg)](https://github.com/junhoyeo)

<h1 align="center">
  Klaytn Multicall
</h1>

<p align="center">
  Built for <a href="https://github.com/inevitable-changes/bento">inevitable-changes/<strong>bento</strong></a><br />
  <sub><i>Inspired by <a href="https://github.com/makerdao/multicall">makerdao/<strong>multicall</strong></a> and <a href="https://github.com/dopex-io/web3-multicall">dopex-io/<strong>web3-multicall</strong></a></i></sub>
</p>

<p align="center">
  <a aria-label="NPM version" href="https://www.npmjs.com/package/klaytn-multicall">
    <img alt="" src="https://img.shields.io/npm/v/klaytn-multicall.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a aria-label="NPM bundle size" href="https://github.com/junhoyeo/klaytn-multicall/blob/main/LICENSE.md">
    <img alt="" src="https://img.shields.io/bundlephobia/minzip/klaytn-multicall.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a aria-label="License" href="https://www.npmjs.com/package/klaytn-multicall">
    <img alt="" src="https://img.shields.io/npm/l/klaytn-multicall.svg?style=for-the-badge&labelColor=000000">
  </a>
</p>

### 📦 Installation
```bash
# Yarn
yarn install klaytn-multicall

# NPM
npm install klaytn-multicall
```

### 🚀 Usage

```ts
import { Multicall } from 'klaytn-multicall';

const caver = new Caver(...);
const multicall = new Multicall({ provider });

const staking = new caver.klay.Contract(...);
const calls = [
  staking.methods.balanceOf(
    '0x7777777141f111cf9f0308a63dbd9d0cad3010c4',
  ),
  staking.methods.rewardsOf(
    '0x7777777141f111cf9f0308a63dbd9d0cad3010c4',
  ),
];

await multicall.aggregate(calls)
  .then((console.log));
```

### Helpers live inside

- `getEthBalance`: Gets the ~~ETH~~ **KLAY** balance of an address
- `getBlockHash`: Gets the block hash
- `getLastBlockHash`: Gets the last blocks hash
- `getCurrentBlockTimestamp`: Gets the current block timestamp
- `getCurrentBlockDifficulty`: Gets the current block difficulty
- `getCurrentBlockGasLimit`: Gets the current block gas limit
- `getCurrentBlockCoinbase`: Gets the current block coinbase

```ts
const multicall = new Multicall({ provider });

const calls = [
  staking.methods.balanceOf('0x7777777141f111cf9f0308a63dbd9d0cad3010c4'),
  staking.methods.rewardsOf('0x7777777141f111cf9f0308a63dbd9d0cad3010c4'),

  // Queries KLAY balance of address
  multicall.contract.getEthBalance(
    '0x7777777141f111cf9f0308a63dbd9d0cad3010c4',
  ),
  multicall.contract.getBlockHash(103742609),
  multicall.contract.getLastBlockHash(),
];

await multicall.aggregate(calls).then(console.log);
```

### Customization

You can inject contract address of your custom implementation, too:

```ts
new Multicall({
  provider,
  multicallV2Address: '0xd11dfc2ab34abd3e1abfba80b99aefbd6255c4b8',
});
```

`multicallV2Address` defaults to [`0xd11dfc2ab34abd3e1abfba80b99aefbd6255c4b8`](https://scope.klaytn.com/account/0xd11dfc2ab34abd3e1abfba80b99aefbd6255c4b8?tabId=contractCode)([**Multicall2**](https://github.com/makerdao/multicall/blob/master/src/Multicall2.sol) deployed in Cypress).
