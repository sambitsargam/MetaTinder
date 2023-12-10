import { IChainData } from './types';

const supportedChains: IChainData[] = [
  {
    name: "Localhost Testnet",
    short_name: "eth",
    chain: "ETH",
    network: "localhost",
    chain_id: 1337,
    network_id: 1,
    rpc_url: "",
    native_currency: {
      symbol: "ETH",
      name: "Ethereum",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "Ethereum Mainnet",
    short_name: "eth",
    chain: "ETH",
    network: "mainnet",
    chain_id: 1,
    network_id: 1,
    rpc_url: "https://virginia.rpc.blxrbdn.com",
    native_currency: {
      symbol: "ETH",
      name: "Ethereum",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "Ethereum Sepolia",
    short_name: "sep",
    chain: "ETH",
    network: "sepolia",
    chain_id: 11155111,
    network_id: 11155111,
    rpc_url: "https://rpc2.sepolia.org",
    native_currency: {
      symbol: "ETH",
      name: "Ethereum",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "Scroll Sepolia",
    short_name: "scl",
    chain: "ETH",
    network: "sepolia",
    chain_id: 534351,
    network_id: 534351,
    rpc_url: "https://sepolia-rpc.scroll.io",
    native_currency: {
      symbol: "ETH",
      name: "Ethereum",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "Mantle Testnet",
    short_name: "mnt",
    chain: "MNT",
    network: "mantle",
    chain_id: 5001,
    network_id: 5001,
    rpc_url: "https://rpc.testnet.mantle.xyz",
    native_currency: {
      symbol: "MNT",
      name: "Mantle",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "Neon EVM DevNet",
    short_name: "neon",
    chain: "NEON",
    network: "neonevm",
    chain_id: 245022926,
    network_id: 245022926,
    rpc_url: "https://devnet.neonevm.org",
    native_currency: {
      symbol: "NEON",
      name: "Neon",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "Gnosis Chiado Testnet",
    short_name: "gnosis",
    chain: "XDAI",
    network: "gnosis",
    chain_id: 10200,
    network_id: 10200,
    rpc_url: "https://rpc.chiadochain.net",
    native_currency: {
      symbol: "XDAI",
      name: "XDAI",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "Linea Testnet",
    short_name: "linea",
    chain: "ETH",
    network: "linea",
    chain_id: 59140,
    network_id: 59140,
    rpc_url: "https://rpc.goerli.linea.build",
    native_currency: {
      symbol: "ETH",
      name: "eth",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "Chiliz Spicy Testnet",
    short_name: "Chiliz",
    chain: "Chiliz",
    network: "Chiliz",
    chain_id: 88882,
    network_id: 88882,
    rpc_url: "https://spicy-rpc.chiliz.com/",
    native_currency: {
      symbol: "ETH",
      name: "eth",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "Avalanche Fuji Testnet",
    short_name: "ava",
    chain: "AVAX",
    network: "avalanche",
    chain_id: 43113,
    network_id: 43113,
    rpc_url: "https://rpc.ankr.com/avalanche_fuji",
    native_currency: {
      symbol: "AVAX",
      name: "Avalanche",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },


  {
    name: "Arbitrum Testnet",
    short_name: "ark",
    chain: "ETH",
    network: "arbitrum",
    chain_id: 421611,
    network_id: 421611,
    rpc_url: "https://arb1.arbitrum.io/rpc",
    native_currency: {
      symbol: "ETH",
      name: "Ethereum",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
];

export default supportedChains;