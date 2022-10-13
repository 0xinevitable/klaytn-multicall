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

const multicall = new Multicall(provider);
await multicall.aggregate(calls)
  .then((console.log));
```
