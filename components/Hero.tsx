import React from 'react';

export default function Hero() {
  return (
    <div className="bg-white text-gray-800 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ERC20 Tokens Explained</h1>
          <p className="text-xl md:text-2xl text-gray-600">The Building Blocks of the Ethereum Economy</p>
        </div>

        <div className="space-y-12">
          <div className="border-b pb-10">
            <h2 className="text-2xl font-semibold mb-4">What are ERC20 Tokens?</h2>
            <p className="text-lg text-gray-600 mb-4">
              ERC20 is a <strong>technical standard</strong> for creating tokens on the Ethereum blockchain. Think of it as a 
              template or set of rules that ensures all tokens work the same way and can interact with each other.
            </p>
            <p className="text-lg text-gray-600">
              The name comes from "Ethereum Request for Comment #20" - it was the 20th proposal to improve Ethereum. 
              Created in 2015 and officially adopted in 2017, it solved a big problem: making sure different tokens 
              could work together across the Ethereum ecosystem.
            </p>
          </div>

          <div className="border-b pb-10">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-black mr-2">•</span>
                <span><strong>Fungible</strong>: Each token is identical to every other token (unlike NFTs)</span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-2">•</span>
                <span><strong>Transferable</strong>: Can be sent between different wallets and exchanges</span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-2">•</span>
                <span><strong>Compatible</strong>: Works with any Ethereum wallet or service</span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-2">•</span>
                <span><strong>Smart Contract Based</strong>: Powered by code that runs on the Ethereum blockchain</span>
              </li>
            </ul>
          </div>

          <div className="border-b pb-10">
            <h2 className="text-2xl font-semibold mb-4">What Makes a Token ERC20 Compliant?</h2>
            <p className="text-lg text-gray-600 mb-4">
              For a token to be ERC20 compliant, its code must include these basic functions:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border p-4 rounded-lg">
                <div className="font-medium text-lg">totalSupply()</div>
                <div className="text-gray-500 text-sm">Shows how many tokens exist</div>
              </div>
              <div className="border p-4 rounded-lg">
                <div className="font-medium text-lg">balanceOf()</div>
                <div className="text-gray-500 text-sm">Checks a wallet&apos;s balance</div>
              </div>
              <div className="border p-4 rounded-lg">
                <div className="font-medium text-lg">transfer()</div>
                <div className="text-gray-500 text-sm">Sends tokens to another address</div>
              </div>
              <div className="border p-4 rounded-lg">
                <div className="font-medium text-lg">approve()/allowance()</div>
                <div className="text-gray-500 text-sm">Allows others to spend your tokens</div>
              </div>
            </div>
          </div>

          <div id="examples">
            <h2 className="text-2xl font-semibold mb-4">Popular ERC20 Tokens</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Stablecoins</h3>
                <p className="text-gray-600 mb-2">Maintain a stable value, usually $1</p>
                <ul className="text-gray-600 text-sm">
                  <li>• USDT (Tether)</li>
                  <li>• USDC (USD Coin)</li>
                  <li>• DAI</li>
                </ul>
              </div>
              <div className="border p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Utility Tokens</h3>
                <p className="text-gray-600 mb-2">Power specific applications</p>
                <ul className="text-gray-600 text-sm">
                  <li>• LINK (Chainlink)</li>
                  <li>• UNI (Uniswap)</li>
                  <li>• MKR (Maker)</li>
                </ul>
              </div>
              <div className="border p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Why It Matters</h3>
                <p className="text-gray-600">ERC20 standardization makes the entire Ethereum ecosystem work together smoothly, allowing developers to build compatible applications without worrying about token compatibility.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}