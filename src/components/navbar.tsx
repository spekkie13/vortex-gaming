import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between py-4 px-6 bg-white dark:bg-gray-800">
            <div className="flex items-center">
                <Link href="/">
                    <a className="flex items-center">
                        <Image
                            src="/Vortex_Gaming_Logo.png"
                            alt="Vortex Gaming Logo"
                            width={40}
                            height={40}
                        />
                        <span className="ml-2 text-xl font-bold text-primary dark:text-white">
              Vortex Gaming
            </span>
                    </a>
                </Link>
            </div>
            <div className="flex items-center space-x-6">
                <Link href="/"><a className="hover:underline">Home</a></Link>
                <Link href="/team"><a className="hover:underline">Team</a></Link>
                <Link href="/accomplishments"><a className="hover:underline">Accomplishments</a></Link>
                <ThemeToggle />
            </div>
        </nav>
    );
}
