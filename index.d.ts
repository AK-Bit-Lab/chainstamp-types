export declare const VERSION: string;

export type BytesLike = string | Uint8Array | ArrayBuffer;
export type ChainstampNetwork = "mainnet" | "testnet" | "devnet" | string;
export type ContractSelector = "hash" | "stamp" | "tag";

export interface ChainstampContractNames {
  hash: string;
  stamp: string;
  tag: string;
}

export interface ChainstampClientConfig {
  network?: ChainstampNetwork;
  contractAddress?: string;
  senderAddress?: string;
  contractNames?: Partial<ChainstampContractNames>;
}

export interface ParsedClarityResult<T = unknown> {
  cv: unknown;
  json: Record<string, unknown>;
  value: T;
}

export interface TxBuildOptions {
  fee?: bigint | number;
  nonce?: bigint | number;
  network?: ChainstampNetwork;
}

export interface PublicCallRequest extends TxBuildOptions {
  contractName: string;
  functionName: string;
  functionArgs?: unknown[];
  senderKey: string;
}

export interface TxResult {
  transaction: unknown;
  broadcast: unknown;
}
