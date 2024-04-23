"use client";
import Link from "next/link";
import { PageWrapper } from "./PageWrapper";
import { Typewriter } from "react-simple-typewriter";
export default function Home() {
  return (
    <main>
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen font-space text-white mx-auto">
        <PageWrapper>
          <div className=" pt-6 pr-10 lg:pb-6 sm:pb-10">
            <Link href="/contact">
              <p className="text-white text-2xl float-right hover:animate-bounce hover:font-bold hover:text-cyan-400">
                Contact
              </p>
            </Link>
            <p className="float-right">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <Link href="/project">
              <p className="text-white text-2xl float-right hover:animate-bounce hover:font-bold hover:text-cyan-400">
                Projects
              </p>
            </Link>
          </div>
          <div className=" max-w-screen-xl mx-auto px-2 py-0">
            <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-5xl pt-5 font-bold pb-4">
              I&apos;m&nbsp;
              <span className="text-cyan-300">
                <Typewriter
                  words={["ASHIK"]}
                  cursor
                  cursorStyle="_"
                  typeSpeed={500}
                  deleteSpeed={80}
                  delaySpeed={1000}
                  loop
                />
              </span>
              ✌️
            </p>
            <p className="text-5xl  font-bold pb-4 mx-auto">
              A Passionate&nbsp;
              <span className=" inline-block text-cyan-400">
                <Typewriter
                  words={["Developer", "Gamer"]}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={80}
                  delaySpeed={1000}
                  loop
                />
              </span>
            </p>

            <p className="text-3xl mt-5 font-bold">The Skills I Bring! 💻</p>

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

            <div className="mb-8=7 text-xl">
              <h2 className="text-2xl font-semibold mb-2">Designing Tools</h2>
              <ul className="list-inside ml-4 sm:flex">
                <li>&nbsp;Figma | </li>
                <li>&nbsp;Canva</li>
              </ul>
            </div>

            <div className=" mt-5 text-xl">
              <h2 className="text-2xl pb-2 font-semibold mb-2">Database</h2>
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
