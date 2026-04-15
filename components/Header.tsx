import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white">
            <nav className="flex justify-around p-4">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/projects" className="hover:underline">Projects</Link>
                <Link href="/about" className="hover:underline">About</Link>
                <Link href="/contact" className="hover:underline">Contact</Link>
            </nav>
        </header>
    );
};

export default Header;