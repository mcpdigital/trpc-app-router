import MyGithub from "./MyGithub";
const Hero = () => {
  return (
    <section
      className="body-font  bg-indigo-100 text-gray-600 dark:bg-indigo-950 dark:text-gray-200"
      style={{ minHeight: "calc(85vh - 60px)" }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center px-5 py-24">
        <div className="w-full lg:w-2/3">
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div className="mb-6 lg:mb-0 lg:w-1/2 lg:py-6 lg:pr-12">
              <h1 className="title-font mb-4 text-center text-3xl font-medium text-gray-900 sm:text-4xl lg:text-left dark:text-gray-200">
                MCP DIGITAL
              </h1>
              <p className="mb-8 text-center leading-relaxed lg:text-left">
                Portfolio Page for Marcelo
              </p>
              <div className="flex justify-center lg:justify-start">
                <a href="/start">
                  <button className="inline-flex rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 active:bg-indigo-800 focus:outline-none">
                    Get Started
                  </button>
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 lg:py-6 lg:pl-12">
              <span className="">
                <MyGithub />
              </span>
              {/* Replace the image source below with your Authentication logo */}
              {/* <img
                className="rounded object-cover object-center"
                alt="Authentication"
                src="/auth.png"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
