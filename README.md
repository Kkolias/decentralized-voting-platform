# 🚀 Decentralized Voting Platform

This project, **Decentralized Voting Platform**, is my learning journey into Web3 development, focusing on the fundamentals of blockchain, smart contracts, and the Solidity programming language. It is designed as a simple voting platform leveraging Ethereum smart contracts.

## 🛠️ Project Structure

The project consists of two main components:

1. **Backend** - Smart contract development and deployment using Hardhat.
2. **Frontend** - A user interface built with Vite to interact with the smart contracts.

## 📋 Prerequisites

- Node.js
- Hardhat
- Vite
- MetaMask or a similar Ethereum wallet

## 📥 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/decentralized-voting-platform.git
   cd decentralized-voting-platform
   ```

2. Install dependencies for the backend and frontend:

   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

## 🔧 Backend Scripts

Located in `backend/package.json`:

- **Deploy to local network:**

  ```bash
  npm run deploy:local
  ```

  Runs the deployment script on a local Hardhat network.

- **Start Hardhat node:**

  ```bash
  npm run hardhat:node
  ```

  Starts a local Ethereum node for development and testing.

## 🌐 Frontend Scripts

Located in `frontend/package.json`:

- **Development mode:**

  ```bash
  npm run dev
  ```

  Starts the Vite development server.

- **Build the project:**

  ```bash
  npm run build
  ```

  Compiles the project for production.

- **Preview the build:**

  ```bash
  npm run preview
  ```

  Serves the production build locally.

## 🚀 Usage

1. Start the Hardhat node:

   ```bash
   cd backend
   npm run hardhat:node
   ```

2. Deploy the smart contracts to the local network:

   ```bash
   npm run deploy:local
   ```

3. Start the frontend application:

   ```bash
   cd ../frontend
   npm run dev
   ```

4. Access the application in your browser (typically at `http://localhost:3000`).

## 🛠️ Technologies Used

- Solidity
- Hardhat
- Ethers.js
- Vite
- TypeScript
- MetaMask

## 🌟 Future Improvements

- Implement additional security features.
- Expand to other Ethereum-compatible networks.
- Improve UI/UX for better user experience.

## 📜 License

This project is licensed under the MIT License.

