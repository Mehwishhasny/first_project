import Link from 'next/link';

export function Header() {
    return (
        <div className="py-6 bg-gradient-to-r from-black to-gray-300 font-bold text-xl pb-6">
            <ul className="flex justify-end space-x-8 mr-10 text-black">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><Link href="#about-me" className="hover:text-white">About</Link></li>
                <li><Link href="#projects" className="hover:text-white">Projects</Link></li>
                <li><Link href="#contact-me" className="hover:text-white">Contact</Link></li>
            </ul>
        </div>
    );
}
