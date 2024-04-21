import { PageWrapper } from "../PageWrapper";

function projects() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen font-space text-white mx-auto">
      <PageWrapper>
        <div className=" pt-8 pl-8">
          <p className="text-5xl font-bold">Projects I&apos;ve Worked On! 🚀</p>

          <div className="mb-8 mt-5 max-w-screen-xl mx-auto text-xl">
            <h2 className="text-2xl font-semibold mb-2">
              At-Risk Student Prediction
            </h2>
            <ul className="ml-8 list-disc  leading-loose mx-auto">
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

          <div className="mb-8 mt-5 max-w-screen-xl mx-auto text-xl">
            <h2 className="text-2xl font-semibold mb-2">
              Forest Fire Alarm System using Arduino and GSM Module
            </h2>
            <ul className="ml-8 list-disc leading-loose mx-auto">
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

          <div className="mt-5 max-w-screen-xl mx-auto text-xl">
            <h2 className="text-2xl font-semibold mb-2">
              A Website for Buying AAA Games (Front End)
            </h2>
            <ul className="ml-8 list-disc leading-loose mx-auto">
              <li>It is a front-end website for buying PC games.</li>
              <li>
                Inspired by Epic Games and a designing project done by me on
                Figma.
              </li>
              <li>This was done using HTML, CSS, and Bootstrap.</li>
            </ul>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}
export default projects;
