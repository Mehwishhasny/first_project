import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import {Footer} from "@/components/footer";
import {AboutMe} from "@/components/about";
import {ContactMe} from "@/components/contact";
import {Projects} from "@/components/projects";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Header />
      </div>

      <div className="flex-grow flex justify-center items-center">
        <div className="p-6 rounded-full overflow-hidden w-[200px] h-[200px]">
          <Image
            src="/images/profilepic.jpg"
            alt="Profile pic"
            width={200}
            height={200}
          />
        </div>
      </div>

      <div className="text-center font-bold text-xl m-14 p-4 flex">
        Hello!
        <br /> I am Syeda Mehwish Zeeshan.
        <br />
        A passionate web developer with expertise in HTML, CSS, TypeScript, and Python basics. Currently honing my skills in Next.js, I create efficient, user-friendly web solutions. With a background in education, I bring a strong focus on problem-solving, continuous learning, and delivering quality results. Let’s build something great together!


      </div>

      <div className="flex space-x-6 justify-center items-center mb-8">
        <div className="p-4 rounded-full text-center bg-blue-800 text-white hover:text-black font-bold cursor-pointer w-[100px] h-[100px] flex justify-center items-center">
          <Link href="#about-me">
            About me
          </Link>
        </div>

        <div className="p-4 rounded-full text-center bg-yellow-500 text-white hover:text-black font-bold cursor-pointer w-[100px] h-[100px] flex justify-center items-center">
          <Link href="#projects"> 
            Projects
          </Link>
        </div>

        <div className="p-4 rounded-full text-center bg-red-600 text-white hover:text-black font-bold cursor-pointer w-[100px] h-[100px] flex justify-center items-center">
          <Link href="#contact-me">
            Contact me
          </Link>

        </div>
      </div>
      <div id="about-me" className="m-20 p-10 flex justify-center items-center font-bold text-xl mb-2">
        <AboutMe />
      </div>

      <div id="projects" className="m-14 p-10 flex justify-center items-center font-bold text-xl mb-2">
        <Projects />
      </div>
     
      <div id="contact-me" className="m-14 p-10 flex justify-center items-center font-bold text-xl">
        <ContactMe />
      </div>

      <Footer/>
    </div>
  );
}
