import Link from "next/link";
import contact from "./contact/page";
export default function Home() {
  return (
    <main>
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen font-sans text-white mx-auto">
        <div className=" max-w-screen-xl mx-auto px-4 py-10">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
          <div className="lg:float-right  mx-auto">
            <p className=" text-4xl font-bold pr-2 mx-auto">
              Wanna Contact Me 📞
            </p>
            <img
              className=" size-1/2 hidden lg:block"
              src="https://media4.giphy.com/media/hru8na0gG8BoR2rK3l/giphy.gif?cid=6c09b9529u61j4o4n82y4pjl9iphmltb9197ujimg4hshaft&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
            />
            <Link href="/contact">
              <button className="text-xl font-bold border animate-bounce mt-6 rounded-lg p-2">
                Click Me😁
              </button>
            </Link>
          </div>
          <p className="text-2xl pt-5 font-bold pb-4">
            I'm ASHIK ✌️, a passionate developer 🧑🏼‍💻.
          </p>

          <p className="text-2xl mt-5 font-bold">The skills I Bring! 💻</p>

          <div className="mb-8 mt-5">
            <h2 className="text-xl font-semibold mb-2">
              Web Development Skills
            </h2>
            <ul className="list-inside ml-4 sm:flex">
              <li>React Js | </li>
              <li>&nbsp;Next Js | </li>
              <li>&nbsp;Tailwind CSS | </li>
              <li>&nbsp;Bootstrap | </li>
              <li>&nbsp;HTML | </li>
              <li>&nbsp;CSS | </li>
              <li>&nbsp;Javascript</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              Programming Languages
            </h2>
            <ul className="list-inside ml-4 sm:flex">
              <li>Java | </li>
              <li>&nbsp;Python</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Designing Tools</h2>
            <ul className="list-inside ml-4 sm:flex">
              <li>Figma | </li>
              <li>&nbsp;Canva</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Database</h2>
            <ul className="list-inside ml-4 sm:flex">
              <li>MySQL</li>
            </ul>
          </div>

          <p className="text-2xl mt-5 font-bold">Projects I've Worked On! 🚀</p>

          <div className="mb-8 mt-5 max-w-screen-xl mx-auto">
            <h2 className="text-xl font-semibold mb-2">
              At-Risk Student Prediction
            </h2>
            <ul className="ml-8 list-disc  leading-loose">
              <li>
                It predicts their performance based on their percentage and
                their presence in the class.
              </li>
              <li>
                This was done by using HTML and CSS for frontend and Python for
                backend.
              </li>
              <li>
                For training data, used the teachable machine which gives
                accuracy more than 75% if trained perfectly.
              </li>
            </ul>
          </div>

          <div className="mb-8 mt-5 max-w-screen-xl mx-auto">
            <h2 className="text-xl font-semibold mb-2">
              Forest Fire Alarm System using Arduino and GSM Module
            </h2>
            <ul className="ml-8 list-disc leading-loose">
              <li>
                It is an IoT-based project used for detecting forest fire from a
                long distance.
              </li>
              <li>
                To alert the forest department to identify the forest fire
                without risking their lives.
              </li>
            </ul>
          </div>

          <div className="mb-8 mt-5 max-w-screen-xl mx-auto">
            <h2 className="text-xl font-semibold mb-2">
              A Website for Buying AAA Games (Front End)
            </h2>
            <ul className="ml-8 list-disc leading-loose">
              <li>It is a front-end website for buying PC games.</li>
              <li>
                Inspired by Epic Games and a designing project done by me on
                Figma.
              </li>
              <li>This was done using HTML, CSS, and Bootstrap.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
