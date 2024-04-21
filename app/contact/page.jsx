import { PageWrapper } from "../PageWrapper";

function contact() {
  return (
    <main>
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen font-sans text-white">
        <PageWrapper>
          <div className="container mx-auto px-4 pt-4 ">
            <h1 className="text-5xl font-bold mb-4">Contact Information 📱</h1>

            <div className="mb-8 mt-8 ml-4">
              <h2 className="text-xl font-semibold mb-2">LinkedIn</h2>
              <a
                href="https://www.linkedin.com/in/muhammed-hashiq"
                className="ml-4 text-lg  hover:underline"
              >
                linkedin.com/in/muhammed-hashiq
              </a>
            </div>

            <div className="mb-8 ml-4">
              <h2 className="text-xl font-semibold mb-2">Email</h2>
              <a
                href="mailto:mhashiq110@gmail.com"
                className="ml-4 text-lg  hover:underline"
              >
                mhashiq110@gmail.com
              </a>
            </div>

            <div className="mb-8 ml-4">
              <h2 className="text-xl font-semibold mb-2">Phone</h2>
              <p className="ml-4 text-lg ">6383594920</p>
            </div>

            <div className="mb-8 ml-4">
              <h2 className="text-xl font-semibold mb-2">GitHub</h2>
              <a
                href="https://github.com/Hashiq-M"
                className="ml-4  text-lg  hover:underline"
              >
                github.com/Hashiq-M
              </a>
            </div>

            <div className="mb-8 ml-4">
              <h2 className="text-xl font-semibold mb-2">Location</h2>
              <p className="ml-4 text-lg ">Erode, Tamil Nadu</p>
            </div>
            <h2 className="text-xl font-bold ml-4">
              Do Contact for working with Me 😇.
            </h2>
          </div>
        </PageWrapper>
      </div>
    </main>
  );
}
export default contact;
