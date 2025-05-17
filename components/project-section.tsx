import { Button } from "./ui/button";
import { PROJECTS } from "./constants";

export default function Projects() {
  return (
    <>
      {/* Section */}
      <section id="projects" className="grid justify-center py-20 md:py-24">
        {/* Container */}
        <div className="grid gap-16 border-l px-4 md:max-w-7xl md:gap-20 md:px-8">
          {/* Content */}
          <div>
            {/* Heading */}
            <div className="grid gap-1 md:gap-2">
              <h2 className="text-3xl font-semibold md:text-4xl">Projects</h2>
              <p className="">These are my newest projects</p>
            </div>
          </div>

          {/* Content */}
          <ul className="grid gap-48">
            {PROJECTS.map((project) => (
              <li
                key={project?.id}
                className="flex flex-col gap-5 md:flex-row md:gap-10"
              >
                <a
                  aria-label={`Link to ${project?.title}`}
                  target="_blank"
                  href={project?.websiteLink}
                >
                  <video
                    className="w-max rounded-md border shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md md:max-w-xl"
                    autoPlay
                    muted
                    loop
                  >
                    <source src={project?.video} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </a>

                {/* Heading and text */}
                <div className="flex flex-col gap-5">
                  {/* Heading and tech */}
                  <div className="">
                    <a href={project?.websiteLink} aria-label="link to website">
                      <p className="text-xl font-semibold">{project?.title}</p>
                    </a>

                    {/* Tech */}
                    <p className="text-sm italic">{project?.tech}</p>
                  </div>

                  {/* Description */}
                  <p className="">{project?.descriptionEN}</p>

                  {/* Links */}
                  <div className="flex gap-5">
                    <Button size="sm">
                      <a
                        href={project?.codeLink}
                        aria-label="Link to code"
                        target="_blank"
                      >
                        View Code
                      </a>
                    </Button>
                    <Button size="sm">
                      <a
                        href={project?.websiteLink}
                        aria-label="Link to website"
                        target="_blank"
                      >
                        Visit website
                      </a>
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
