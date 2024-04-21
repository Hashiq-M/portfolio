"use client";
import Link from "next/link";
import { PageWrapper } from "./PageWrapper";
import { Typewriter } from "react-simple-typewriter";
export default function Home() {
  return (
    <main>
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen font-space text-white mx-auto">
        <PageWrapper>
          <div className=" pt-6 pr-10 pb-6">
            <Link href="/contact">
              <p className="text-white text-2xl float-right hover:animate-bounce">
                Contact
              </p>
            </Link>
            <p className="float-right">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <Link href="/project">
              <p className="text-white text-2xl float-right hover:animate-bounce">
                Projects
              </p>
            </Link>
          </div>
          <div className=" max-w-screen-xl mx-auto px-2 py-0">
            <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-5xl pt-5 font-bold pb-4">
              I&apos;m{" "}
              <span>
                <Typewriter
                  words={["ASHIK"]}
                  cursor
                  cursorStyle="_ "
                  typeSpeed={500}
                  deleteSpeed={80}
                  delaySpeed={1000}
                  loop
                />
              </span>
              ✌️
            </p>
            <p className="text-5xl font-bold pb-4">
              A passionate{" "}
              <span>
                <Typewriter
                  words={["Front End Developer", "Gamer"]}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={80}
                  delaySpeed={1000}
                  loop
                />
              </span>
            </p>

            <p className="text-3xl mt-5 font-bold">The skills I Bring! 💻</p>

            <div className="mb-8 mt-5 text-xl">
              <h2 className="text-2xl font-semibold mb-2">
                Web Development Skills
              </h2>
              <ul className="list-inside ml-4 sm:flex">
                <li>&nbsp;React Js | </li>
                <li>&nbsp;Next Js | </li>
                <li>&nbsp;Tailwind CSS | </li>
                <li>&nbsp;Bootstrap | </li>
                <li>&nbsp;HTML | </li>
                <li>&nbsp;CSS | </li>
                <li>&nbsp;Javascript</li>
              </ul>
            </div>

            <div className="mb-8  text-xl">
              <h2 className="text-2xl font-semibold mb-2">
                Programming Languages
              </h2>
              <ul className="list-inside ml-4 sm:flex">
                <li>&nbsp;Java | </li>
                <li>&nbsp;Python</li>
              </ul>
            </div>

            <div className="mb-8 text-xl">
              <h2 className="text-2xl font-semibold mb-2">Designing Tools</h2>
              <ul className="list-inside ml-4 sm:flex">
                <li>&nbsp;Figma | </li>
                <li>&nbsp;Canva</li>
              </ul>
            </div>

            <div className="mb-8 mt-5 text-xl">
              <h2 className="text-2xl font-semibold mb-2">Database</h2>
              <ul className="list-inside ml-4 sm:flex">
                <li>&nbsp;MySQL</li>
              </ul>
            </div>
          </div>
        </PageWrapper>
      </div>
    </main>
  );
}
