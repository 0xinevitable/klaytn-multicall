[![Cover Image](https://raw.githubusercontent.com/junhoyeo/klaytn-multicall/main/docs/images/cover.jpg)](https://github.com/junhoyeo)

<h1 align="center">
  Klaytn Multicall
</h1>

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

```ts
import Mutlicall from 'klaytn-multicall';

const caver = new Caver(...);
const staking = new caver.klay.Contract(...);
const calls = [
  staking.methods.balanceOf(
    '0x7777777141f111cf9f0308a63dbd9d0cad3010c4',
  ),
  staking.methods.rewardsOf(
    '0x7777777141f111cf9f0308a63dbd9d0cad3010c4',
  ),
];

const multicall = new Multicall({ provider });
await multicall.aggregate(calls)
  .then((console.log));
```

```ts
new Multicall({
  provider,
  multicallV2Address: '0xd11dfc2ab34abd3e1abfba80b99aefbd6255c4b8',
});
```

`multicallV2Address` defaults to [`0xd11dfc2ab34abd3e1abfba80b99aefbd6255c4b8`](https://scope.klaytn.com/account/0xd11dfc2ab34abd3e1abfba80b99aefbd6255c4b8?tabId=contractCode)([**Multicall2**](https://github.com/makerdao/multicall/blob/master/src/Multicall2.sol) deployed in Cypress).
