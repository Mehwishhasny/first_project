import Link from "next/link";

export function Projects() {
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-yellow-500 text-3xl sm:text-2xl flex justify-center items-center mb-14">
        Projects
      </h1>
    
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 m-4">
          <li className="hover:text-blue-500">
            <Link href="https://travel-pg.vercel.app/" target="_blank">
             Travel App
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="https://weatherupdates-mehwishhasnys-projects.vercel.app/" target="_blank">
              Weather Update App
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="https://calendar-six-beryl.vercel.app/" target="_blank">
              Mini Calendar
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="https://digital-clock-ten-khaki.vercel.app/" target="_blank">
              Digital Clock
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="https://coverpage-wheat.vercel.app/" target="_blank">
              Laptop Specifications
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="https://advertisment-eta.vercel.app/" target="_blank">
              Coffee Advertisement
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="https://resume-eight-gray-54.vercel.app/" target="_blank">
              Resume
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="https://www.npmjs.com/package/operational-calculator" target="_blank">
              Calculator
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="https://www.npmjs.com/package/sm-number-guessing-quiz" target="_blank">
              Number Guessing Game
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="https://www.npmjs.com/package/general-quiz" target="_blank">
              Quiz
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="https://www.npmjs.com/package/smz-atm" target="_blank">
              ATM
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="https://www.npmjs.com/package/smz-recipe" target="_blank">
              Recipe Book
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="https://www.npmjs.com/package/smz-currency-converter" target="_blank">
              Currency Converter
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="https://www.npmjs.com/package/smehwish-word-counter" target="_blank">
              Word Counter
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="https://www.npmjs.com/package/smehwish-student-management-system" target="_blank">
              Management System
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="https://www.npmjs.com/package/smehwish-adventure-game" target="_blank">
              Adventure Game
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="https://npmjs.com/package/smehwish-countdown-timer" target="_blank">
              Countdown Timer
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="https://www.npmjs.com/package/smehwish-personality-oop" target="_blank">
              Personality Checker
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="https://www.npmjs.com/package/sm-bank-system" target="_blank">
              Bank System
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="https://www.npmjs.com/package/sm-to-do-list-memo" target="_blank">
              To-Do List
            </Link>
          </li>
        </ul>

    </div>
  );
}
