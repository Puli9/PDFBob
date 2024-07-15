import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-black text-white shadow-lg">
      <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        PDFBob
      </div>
      <nav className="flex items-center space-x-6 text-lg">
        <Link href="/" className="hover:text-customPink">Home</Link>
        <Link href="/tools" className="hover:text-customPink">Tools</Link>
        <Link href="/about" className="hover:text-customPink">About</Link>
        <Link href="/contact" className="hover:text-customPink">Contact</Link>
        <div className="flex space-x-4 ml-6">
          <button className="bg-customPink hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">Get Started</button>
          <button className="border border-customPink text-customPink hover:bg-customPink hover:text-white font-bold py-2 px-4 rounded">Try for Free</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
