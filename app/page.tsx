import Hero from '@/components/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ERC20 Token Lesson',
  description: 'Learn about ERC20 tokens.',
};

export default function Home() {

  return (
    <main className="bg-white min-h-screen">
      <Hero />
      
      <section id="learn" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-semibold mb-8">Understanding ERC20 Tokens</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-medium mb-4">ERC20 vs. ETH: What&apos;s the Difference?</h3>
              <p className="text-gray-600 mb-4">
                Don&apos;t confuse ERC20 tokens with Ether (ETH), the native cryptocurrency of Ethereum:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="border p-4 rounded-lg">
                  <div className="font-medium">ETH (Ether)</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Native cryptocurrency of Ethereum</li>
                    <li>• Used to pay for network fees (gas)</li>
                    <li>• Built into the blockchain itself</li>
                  </ul>
                </div>
                <div className="border p-4 rounded-lg">
                  <div className="font-medium">ERC20 Tokens</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Custom tokens built on Ethereum</li>
                    <li>• Created using smart contracts</li>
                    <li>• Can represent anything of value</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-medium mb-4">ERC20 and Stablecoins</h3>
              <p className="text-gray-600 mb-4">
                Stablecoins are cryptocurrencies designed to maintain a stable value, usually pegged to a 
                traditional currency like the US dollar.
              </p>
              <p className="text-gray-600">
                Many popular stablecoins like USDC, USDT, and DAI are built as ERC20 tokens. This allows them 
                to combine price stability with all the programmability and compatibility benefits of the Ethereum 
                ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="why-it-matters" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-semibold mb-8">Why ERC20 Matters</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-medium mb-4">For Users</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• One wallet can hold any ERC20 token</li>
                <li>• Easy to transfer between platforms</li>
                <li>• Consistent behavior across all tokens</li>
                <li>• Wide support from exchanges and services</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-medium mb-4">For Developers</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Don&apos;t need to reinvent the wheel</li>
                <li>• Applications work with all ERC20 tokens</li>
                <li>• Predictable token behavior</li>
                <li>• Established security practices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      
      <section id="contact" className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Learn More?</h2>
          <p className="mb-8 text-gray-600 max-w-2xl mx-auto">
            Get started with ERC20 tokens and explore the world of stablecoins.
          </p>
          <button className="border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition">
            Get Started Now
          </button>
        </div>
      </section>
    

    </main>
  );
}