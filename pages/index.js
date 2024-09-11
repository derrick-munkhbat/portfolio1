import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Birdy,
  Hug,
  Kitty,
  Location,
  Dot,
  Js,
  Ts,
  React,
  Next,
  Node,
  Express,
  Mongo,
  Figma,
  Git,
  Tailwind,
  Email,
  Copy,
  Cell,
  Upwork,
  Post,
} from "@/components/icon";
import { Copyright } from "@/components/icon";

import { Chip } from "@/components/Chip";
// import { list } from "postcss";

export default function Home() {
  function copyEmail() {
    const email = document.getElementById("copy-email").textContent;
    navigator.clipboard.writeText(email);
    displayEmailCopyMessage();
  }

  function displayEmailCopyMessage() {
    const copyEmailMessageElement =
      document.getElementById("copy-email-message");
    copyEmailMessageElement.textContent = "Copied";
    setTimeout(() => {
      copyEmailMessageElement.textContent = "";
    }, 1500); // hide the message after 1.5 seconds
  }

  function copyPhone() {
    const phoneText = document.getElementById("copy-phone").textContent;
    navigator.clipboard.writeText(phoneText);
    displayPhoneCopyMessage();
  }

  function displayPhoneCopyMessage() {
    const copyPhoneMessageElement =
      document.getElementById("copy-phone-message");
    copyPhoneMessageElement.textContent = "Copied";
    setTimeout(() => {
      copyPhoneMessageElement.textContent = "";
    }, 1500); // hide the message after 1.5 seconds
  }

  return (
    <div className="pt-20 lg:p-20 max-lg:w-96 mx-auto justify-center dark:bg-black dark:text-slate-300">
      <div className="p-1">
        <Header />

        {/* INTRO */}

        <div className="lg:flex flex-row-reverse gap-20 my-10">
          <div className="flex p-10 dark:opacity-80">
            <div className="relative bg-slate-300 w-80 h-96 top-5 left-5 rounded-lg">
              background
            </div>
            <img
              className="absolute shadow-2xl w-90 h-96 border-white border-8 rounded-lg"
              src="/images/headshot.jpg"
              alt="profile-portrait"
            />
          </div>

          <div className="lg:w-3/4 p-5 flex flex-col justify-center">
            <h2 className="text-2xl font-bold lg:text-5xl mt-10">
              Hi, I’m Derrick Munkhbat 👋
            </h2>
            <p className="text-base mt-2 text-slate-500 text-justify">
              I'm a junior full stack developer (React.js & Node.js) with a
              focus on creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive.
            </p>

            <div className="flex items-center mt-10">
              <Location />
              <p className="text-slate-500">Ulaanbaatar, Mongolia</p>
            </div>

            <div className="flex items-center ">
              <Dot />
              <p className="text-slate-500">Available for new projects</p>
            </div>

            <div className=" flex mt-8">
              <button>
                <Kitty />
              </button>
              <button>
                <Birdy />
              </button>
              <button>
                <Hug />
              </button>
            </div>
          </div>
        </div>

        {/*ABOUT ME */}
        <div>
          <div className="flex flex-col items-center justify-center my-10 ">
            <Chip label="About me" />
          </div>

          <div className="lg:flex gap-10 my-10">
            <div className="flex justify-center lg:w-1/2">
              <img
                className="rounded-2xl drop-shadow-2xl"
                src="/images/IMG_0133.jpeg"
                alt="profile-about-me"
              />
            </div>

            <div className="flex flex-col p-5 lg:w-1/2">
              <h2 className="text-3xl text-center mb-5 font-bold">
                Curious about me?
              </h2>
              <div className="text-base mt-2 text-slate-500 text-justify lg:text-xl lg:leading-9">
                <p className="indent-9">
                  Responsible and humble junior level full stack web developer
                  with a solid foundation in front-end and back-end development
                  technologies, including HTML, CSS, JavaScript, React,
                  Tailwindcss, Next.js, Node.js, Express.js, SQL and GitHub.
                  Committed to continuous learning and professional growth.
                  Eager to contribute to innovative projects, leverage emerging
                  technologies, and drive impactful results in the ever-evolving
                  field of not only web development but also in the broader
                  realm of technology and digital innovation.
                </p>

                <ul className="indent-9 list-disc list-inside">
                  <li>"The Leap" - Full stack program by Pinecone Academy</li>
                  <li>B.S. in Computer Programming</li>
                  <li>Full-time freelancer</li>
                </ul>

                <p>
                  One last thing, I'm available for freelance work, so feel free
                  to reach out and say hello! I promise I don't bite 😉
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SKILLS */}

        <div>
          <div className="flex flex-col items-center justify-center my-12">
            <Chip label="Skills" />
          </div>
          <p className="text-2xl lg:text-4xl p-5 text-slate-500 text-center mb-8">
            The skills, tools and technologies I am really good at:
          </p>

          <div className="my-12">
            <div className="grid lg:grid-cols-6 grid-cols-3 gap-4 dark:text-slate-400 dark:font-medium lg:text-lg">
              <div className="flex flex-col items-center justify-center gap-2 hover:animate-bounce ease-in-out">
                <Js />
                <p>JavaScript</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 hover:animate-bounce ease-in-out ">
                <Ts />
                <p>Typescript</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 hover:animate-bounce ease-in-out ">
                <React />
                <p>React</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 hover:animate-bounce ease-in-out ">
                <Next />
                <p>Next.js</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 hover:animate-bounce ease-in-out ">
                <Node />
                <p>Node.js</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 hover:animate-bounce ease-in-out ">
                <Express />
                <p>Express.js</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 hover:animate-bounce ease-in-out ">
                <Mongo />
                <p>MongoDB</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 hover:animate-bounce ease-in-out ">
                <Tailwind />
                <p>Tailwindcss</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 hover:animate-bounce ease-in-out ">
                <Post />
                <p>PostgreSQL</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 hover:animate-bounce ease-in-out ">
                <Figma />
                <p>Figma</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 hover:animate-bounce ease-in-out ">
                <Git />
                <p>Git</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 hover:animate-bounce ease-in-out ">
                <Upwork />
                <p>Upwork</p>
              </div>
            </div>
          </div>
        </div>

        {/* EXPERIENCE */}

        <div className="flex flex-col rounded-2xl items-center bg-slate-100 p-5 dark:opacity-80 mb-10">
          <div className="flex flex-col items-center my-10">
            <Chip label="Experience" />
          </div>
          <p className="text-2xl lg:text-4xl text-slate-500 text-center p-5">
            Here is a quick summary of my most recent experiences:
          </p>

          <div className="flex-col flex gap-5 dark:text-slate-600">
            <div className="flex-1 flex flex-col border-black rounded-xl w-full bg-white p-5 gap-5">
              <h3 className="text-green-600 font-bold text-2xl">
                Pinecone Academy
              </h3>
              <p>Nov 2023 - July 2024 </p>

              <h1 className="text-xl decoration-4">
                Full stack web developer internship
              </h1>
              <ul className="flex flex-col text-justify gap-2">
                <li>
                  Pinecone Academy website employee payroll function and
                  features backend service
                </li>
              </ul>
            </div>
            <div className="flex-1 flex flex-col border-black rounded-xl w-full bg-white p-5 gap-5">
              <h3 className="text-green-600 font-bold text-2xl">Remax Hub</h3>
              <p>Jan 2021 - Dec 2023 </p>

              <h1 className="text-xl decoration-4">Realtor</h1>
              <ul className="flex flex-col text-justify gap-2">
                <li>
                  Offering advice for clients to buy, sell, or rent their
                  residential and commercial spaces.
                </li>
              </ul>
            </div>

            <div className="flex-1 flex flex-col border-black rounded-xl w-full bg-white p-5 gap-5">
              <h3 className="text-green-600 font-bold text-2xl">
                Beijing Wok Restaurant
              </h3>
              <p>Sep 2012 - Sep 2019 </p>

              <h1 className="text-xl decoration-4">General Manager</h1>
              <ul className="flex flex-col text-justify gap-2">
                <li>
                  Managing and operating a small family restaurant business in
                  North Chicago.
                </li>
              </ul>
            </div>

            <div className="flex-1 flex flex-col border-black rounded-xl w-full bg-white p-5 gap-5">
              <h3 className="text-green-600 font-bold text-2xl">
                Comcast Xfinity LLC
              </h3>
              <p>Aug 2009 - Sep 2011 </p>

              <h1 className="text-xl decoration-4">
                Internet Network and Security Technician
              </h1>
              <ul className="flex flex-col text-justify gap-2">
                <li>
                  Install and troubleshoot internet network and security system
                  for residential and commercial spaces in Chicago area.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* HOBBIES */}

        <div className="flex justify-center items-center my-10">
          <Chip label="Hobbies" />
        </div>

        <div className="lg:flex gap-10 mb-10">
          <div className="flex flex-col p-5 lg:w-1/2 ">
            <h2 className="text-4xl text-center mb-5 font-bold">Mongolia</h2>
            <div className="text-base text-slate-500 text-justify indent-9 lg:text-xl lg:leading-9">
              Located in Ulaanbaatar, Mongolia, The Genghis Khan Equestrian
              Statue, part of the Genghis Khan Statue Complex which I took this
              image with my drone DJI MAVIC drone, is actually a 40-metre (130
              ft) tall, stainless steel statue of Genghis Khan on horseback and
              the world's tallest equestrian statue.[2] It is located on the
              bank of the Tuul River at Tsonjin Boldog, 54 km (33.55 mi) east of
              the Mongolian capital Ulaanbaatar, where, according to legend, he
              found a golden whip. The statue is symbolically pointed east
              towards his birthplace. It is on top of the Genghis Khan Statue
              Complex, a visitor centre, itself 10 metres (33 ft) tall, with 36
              columns representing the 36 khans from Genghis to Ligdan Khan. It
              was designed by sculptor D. Erdenebileg and architect J.
              Enkhjargal and erected in 2008.[3]
            </div>
            <div className="flex items-center">
              <Copyright className="fill-slate-500" />
              <p className="text-slate-500">Wikipedia</p>
            </div>
          </div>
          <div className="flex justify-center lg:w-1/2 items-center">
            <img
              className="rounded-2xl shadow-2xl drop-shadow-2xl"
              src="/images/DJI_0379 copy.jpg"
              alt="profile-about-me"
            />
          </div>
        </div>

        {/* GET IN TOUCH */}

        <div className="flex flex-col items-center p-5 gap-5">
          <div className="p-5">
            <Chip label="Get in touch" />
          </div>

          <p className="text-center">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </p>

          <div className="flex items-center gap-5">
            <Email />
            <h3 id="copy-email">derrick.munkhbat@gmail.com</h3>
            <button
              onClick={() => copyEmail()}
              className="hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <Copy />
            </button>
            <p id="copy-email-message"></p>
          </div>

          <div className="flex items-center gap-5">
            <Cell />
            <h3 id="copy-phone">+976 88181074</h3>
            <button
              onClick={() => copyPhone()}
              className="hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <Copy />
            </button>
            <p id="copy-phone-message"></p>
          </div>

          <p>You may also find me on these platforms!</p>
          <div className="flex gap-5">
            <div>
              <Kitty />
            </div>
            <div>
              <Birdy />
            </div>
            <div>
              <Hug />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
