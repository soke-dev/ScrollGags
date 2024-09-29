# ScrollGags
ScrollGags lets you send transaction in a fun way

This project is a smart contract deployed on the Scroll Sepolia testnet using Hardhat and Alchemy.

## Contract
- [Deployed Contract Link](https://sepolia.scrollscan.com/address/0x6430d4faa4dce66b47cd9b539b98beef93093317#code)


## Using Alchemy
Alchemy is used as the RPC provider to connect to the Scroll Sepolia testnet. It allows us to interact with the blockchain for deploying and managing smart contracts.

## Tooling Used
- **Hardhat**: Used for compiling, testing, and deploying smart contracts.

## How to Use Alchemy in This Project
1. Sign up on [Alchemy](https://www.alchemy.com/).
2. Create an app for Scroll Sepolia.
3. Use the Alchemy API URL in the Hardhat configuration under `networks` > `scrollSepolia`:
   ```js
   url: 'https://scroll-sepolia.g.alchemy.com/v2/<YOUR-ALCHEMY-API-KEY>',
   ```
4. Deploy or interact with your contract on the Scroll Sepolia testnet.
