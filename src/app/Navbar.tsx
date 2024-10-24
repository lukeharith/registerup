import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-between text-white">
        <li>
          <Link href="/">
            <a className="px-3 py-2">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a className="px-3 py-2">Login</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
