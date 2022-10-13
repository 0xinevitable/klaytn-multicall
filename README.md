# Klaytn Multicall

```ts
import Mutlicall from 'klaytn-multicall';

const caver = new Caver(...);
const staking = new Contract(...);
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
