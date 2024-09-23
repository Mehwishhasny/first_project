
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-gradient-to-l from-black to-gray-300 text-black p-6 text-center font-bold">
              <div className="flex justify-center space-x-8 mt-2">
                
                <p className="font-bold hover:text-white">
                    <Link href="mailto:mehwish.hasny@gmail.com" target="_blank">
                        Email: mehwish.hasny@gmail.com
                    </Link>
                </p> 
                <p className="font-bold hover:text-white">
                    <Link href="https://whatsapp.com" target="_blank">
                        Phone: 0342-1234567
                    </Link>
                </p>
            <p className="font-bold hover:text-white">
                    <Link href="https://www.linkedin.com/in/mehwish-hasny-2890412b7/" target="_blank">
                        LinkedIn
                    </Link>
                </p>
                <p className="font-bold hover:text-white">
                    <Link href="https://github.com/Mehwishhasny" target="_blank">
                        GitHub
                    </Link>
                </p>
            </div>
            <div className="mt-4">
                <p>&copy; {new Date().getFullYear()} Syeda Mehwish Zeeshan. All rights reserved.</p>
            </div>
        </footer>
    );
};
