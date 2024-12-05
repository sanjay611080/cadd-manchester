import Link from "next/link";

const Page = () => {
  return (
    <>
    {/* Background Image Section */}
    <section
        className="relative mt-[70px] lg:mt-[135px] bg-cover bg-center w-full md:h-[calc(100vh-80px)] h-[40vh] xs:h-[40vh] sm:py-8"
        style={{
          backgroundImage: "url('/course/image.png')", // Ensure the path is correct
        }}
      >
         {/* Dark Overlay */}
         <div className="absolute top-0 left-0 w-full h-full md:bg-black opacity-40"></div>
      </section>
      <section className="text-gray-600 body-font mt-10">
        <div className="container px-5 py-15 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Transform Your Future with Our Top Courses
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Explore a variety of courses in fields like technology, business, arts, and more. Each course is designed with practical applications to give you the skills needed to succeed in the real world.
            </p>
          </div>
        </div>

        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Course 1 */}
            <div className="p-4 md:w-1/3">
              <div className="shadow-xl hover:shadow-2xl cursor-pointer h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full p-2 object-cover object-center" src="./home/card1.png" alt="Web Development" />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Web Development</h1>
                  <p className="leading-relaxed mb-3">
                    Learn how to build responsive, dynamic websites with modern web development tools. From HTML and CSS to JavaScript and React, get hands-on experience.
                  </p>
                  <div className="flex mt-5">
                    <Link href="/Courses/WebDevelopment" target="_blank">
                      <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Course 2 */}
            <div className="p-4 md:w-1/3">
              <div className="shadow-xl hover:shadow-2xl cursor-pointer h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full p-2 object-cover object-center" src="./home/card2.png" alt="Graphic Design" />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Graphic Design</h1>
                  <p className="leading-relaxed mb-3">
                    Master the art of graphic design with tools like Photoshop and Illustrator. Learn how to create stunning visual content for web, print, and more.
                  </p>
                  <div className="flex mt-5">
                    <Link href="/Courses/GraphicDesign" target="_blank">
                      <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Course 3 */}
            <div className="p-4 md:w-1/3">
              <div className="shadow-xl hover:shadow-2xl cursor-pointer h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full p-2 object-cover object-center" src="./home/card3.png" alt="Digital Marketing" />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Digital Marketing</h1>
                  <p className="leading-relaxed mb-3">
                    Gain expertise in digital marketing strategies including SEO, social media, email campaigns, and more. Learn how to drive traffic and convert visitors into customers.
                  </p>
                  <div className="flex mt-5">
                    <Link href="/Courses/DigitalMarketing" target="_blank">
                      <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Course 4 */}
            <div className="p-4 md:w-1/3">
              <div className="shadow-xl hover:shadow-2xl cursor-pointer h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full p-2 object-cover object-center" src="./home/card4.png" alt="Data Science" />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Data Science</h1>
                  <p className="leading-relaxed mb-3">
                    Learn how to analyze and visualize data, build machine learning models, and make data-driven decisions using Python, R, and other powerful tools.
                  </p>
                  <div className="flex mt-5">
                    <Link href="/Courses/DataScience" target="_blank">
                      <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Course 5 */}
            <div className="p-4 md:w-1/3">
              <div className="shadow-xl hover:shadow-2xl cursor-pointer h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full p-2 object-cover object-center" src="./home/card1.png" alt="Artificial Intelligence" />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Artificial Intelligence</h1>
                  <p className="leading-relaxed mb-3">
                    Explore the world of AI with a comprehensive course on machine learning, neural networks, and deep learning algorithms to create intelligent systems.
                  </p>
                  <div className="flex mt-5">
                    <Link href="/Courses/AI" target="_blank">
                      <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download Brochure */}
        <div className="container px-5 py-10 mx-auto text-center">
          <h2 className="text-2xl font-medium text-gray-900 mb-4">Download Our Course Brochure</h2>
          <Link href="/downloads/course-brochure.pdf" target="_blank">
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Download Brochure
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Page;
