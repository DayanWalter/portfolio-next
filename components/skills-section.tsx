import { SKILLS } from "./constants";
import Image from "next/image";

export default function Skills() {
  return (
    <>
      {/* Section */}
      <section id="skills" className="grid justify-center py-20 md:py-24">
        {/* Container */}
        <div className="grid gap-16 border-l px-4 md:max-w-7xl md:gap-20 md:px-8">
          {/* Content */}
          <div className=" ">
            {/* Heading */}
            <div className="grid gap-1 md:gap-2">
              <h2 className="text-3xl font-semibold md:text-4xl">Skills</h2>
              <p className="">
                My skill set revolves around the following technologies, with a
                continual expansion
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="">
            <div className="grid gap-16 md:gap-20">
              {/* FRONTEND  */}
              <section className="grid gap-5">
                <p className="border-b text-center text-xl md:text-left">
                  Frontend Technologies
                </p>
                <ul className="grid grid-cols-3 gap-5 md:grid-cols-7">
                  {SKILLS.find(
                    (category) => category.category === "Frontend Technologies",
                  )?.skills.map((skill) => {
                    return (
                      <li key={skill.id}>
                        <a
                          className="flex flex-col items-center gap-2 hover:cursor-pointer"
                          href={skill.website}
                          target="_blank"
                          aria-label={"Link to " + skill.name + " docs"}
                        >
                          <Image
                            width={40}
                            height={40}
                            className="h-10 w-10 hover:scale-110"
                            src={skill.svg}
                            alt={skill.name + " image"}
                          />
                          <span className="">{skill.name}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </section>
              {/* BACKEND  */}
              <section className="grid gap-5">
                <p className="border-b text-center text-xl md:text-left">
                  Backend & Databases
                </p>
                <ul className="grid grid-cols-3 gap-5 md:grid-cols-7">
                  {SKILLS.find(
                    (category) => category.category === "Backend & Databases",
                  )?.skills.map((skill) => {
                    return (
                      <li key={skill.id}>
                        <a
                          className="flex flex-col items-center gap-2 hover:cursor-pointer"
                          href={skill.website}
                          target="_blank"
                          aria-label={"Link to " + skill.name + " docs"}
                        >
                          <Image
                            width={40}
                            height={40}
                            className="h-10 w-10 hover:scale-110"
                            src={skill.svg}
                            alt={skill.name + " image"}
                          />
                          <span className="">{skill.name}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </section>
              {/* CORE TECHNOLOGIES */}
              <section className="grid gap-5">
                <p className="border-b text-center text-xl md:text-left">
                  Core Technologies
                </p>
                <ul className="grid grid-cols-3 gap-5 md:grid-cols-7">
                  {SKILLS.find(
                    (category) => category.category === "Core Technologies",
                  )?.skills.map((skill) => {
                    return (
                      <li key={skill.id}>
                        <a
                          className="flex flex-col items-center gap-2 hover:cursor-pointer"
                          href={skill.website}
                          target="_blank"
                          aria-label={"Link to " + skill.name + " docs"}
                        >
                          <Image
                            width={40}
                            height={40}
                            className="h-10 w-10 hover:scale-110"
                            src={skill.svg}
                            alt={skill.name + " image"}
                          />
                          <span className="">{skill.name}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </section>
              {/* TOOLS */}
              <section className="grid gap-5">
                <p className="border-b text-center text-xl md:text-left">
                  Development Tools
                </p>
                <ul className="grid grid-cols-3 gap-5 md:grid-cols-7">
                  {SKILLS.find(
                    (category) => category.category === "Development Tools",
                  )?.skills.map((skill) => {
                    return (
                      <li key={skill.id}>
                        <a
                          className="flex flex-col items-center gap-2 hover:cursor-pointer"
                          href={skill.website}
                          target="_blank"
                          aria-label={"Link to " + skill.name + " docs"}
                        >
                          <Image
                            width={40}
                            height={40}
                            className="h-10 w-10 hover:scale-110"
                            src={skill.svg}
                            alt={skill.name + " image"}
                          />
                          <span className="">{skill.name}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
