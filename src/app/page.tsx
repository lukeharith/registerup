import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Navigation Bar */}
      <nav className="flex justify-center gap-4 p-4 border-b border-gray-200 dark:border-gray-800">
        <Link href="/about" className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          About
        </Link>
        <Link href="/services" className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          Services
        </Link>
        <Link href="/contact" className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          Contact
        </Link>
        <Link href="/register" className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
          Register
        </Link>
      </nav>

      <main className="flex flex-col items-center justify-center gap-8 p-8">
        <h1 className="text-4xl font-bold mt-16">Welcome Home</h1>
        
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <div className="max-w-2xl text-center">
          <p className="text-lg mb-8">
            Your modern, minimalist home page with a clean black and white design.
          </p>
          
          <div className="flex gap-4 justify-center">
            <a
              className="px-6 py-3 rounded-md bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              href="#"
            >
              Get Started
            </a>
            <a
              className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 w-full p-4 text-center border-t border-gray-200 dark:border-gray-800">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © 2024 Your Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
}