import Caver, { Contract } from 'caver-js';

const MULTICALL_ABI: any[] = [
  {
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'target', type: 'address' },
          { internalType: 'bytes', name: 'callData', type: 'bytes' },
        ],
        internalType: 'struct Multicall2.Call[]',
        name: 'calls',
        type: 'tuple[]',
      },
    ],
    name: 'aggregate',
    outputs: [
      { internalType: 'uint256', name: 'blockNumber', type: 'uint256' },
      { internalType: 'bytes[]', name: 'returnData', type: 'bytes[]' },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const MULTICALL_ADDRESS = '0xd11dfc2ab34abd3e1abfba80b99aefbd6255c4b8';

export class Multicall {
  provider: Caver;
  multicall: Contract;

  constructor(provider: Caver) {
    this.provider = provider;
    this.multicall = new Contract(MULTICALL_ABI, MULTICALL_ADDRESS);
  }

  aggregate = async (calls: any[]) => {
    const callRequests = calls.map((call) => ({
      target: call._parent._address,
      callData: call.encodeABI(),
    }));

    const { returnData } = await this.multicall.methods
      .aggregate(callRequests)
      .call();

    const output = returnData.map((hex: string, index: number) => {
      const types = calls[index]._method.outputs.map((o: any) =>
        o.internalType !== o.type && o.internalType !== undefined ? o : o.type,
      );

      const result = Caver.abi.decodeParameters(types, hex);
      return Object.values(result);
    });

    return output;
  };
}
