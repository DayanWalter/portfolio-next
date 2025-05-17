// Svgs from https://icon-sets.iconify.design/devicon/
type Skill = {
  id: string;
  name: string;
  website: string;
  svg: string;
};

type SkillCategory = {
  category: string;
  skills: Skill[];
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend Technologies",
    skills: [
      {
        id: "html",
        name: "HTML",
        website: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        svg: "./html.svg",
      },
      {
        id: "css",
        name: "CSS",
        website: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        svg: "./css.svg",
      },
      {
        id: "react",
        name: "React",
        website: "https://react.dev/reference/react",
        svg: "./react.svg",
      },
      {
        id: "tailwind",
        name: "Tailwind",
        website: "https://tailwindcss.com/docs/installation",
        svg: "./tailwind.svg",
      },
      {
        id: "nextjs",
        name: "Next.js",
        website: "https://nextjs.org/",
        svg: "./nextjs.svg",
      },
      {
        id: "vite",
        name: "Vite.js",
        website: "https://vitejs.dev/",
        svg: "./vite.svg",
      },
    ],
  },
  {
    category: "Backend & Databases",
    skills: [
      {
        id: "nodejs",
        name: "Node.js",
        website: "https://nodejs.org/docs/latest/api/",
        svg: "./nodejs.svg",
      },
      {
        id: "expressjs",
        name: "Express.js",
        website: "https://expressjs.com/",
        svg: "./expressjs.svg",
      },
      {
        id: "nestjs",
        name: "Nest.js",
        website: "https://nestjs.com/",
        svg: "./nestjs.svg",
      },
      {
        id: "graphql",
        name: "GraphQL",
        website: "https://graphql.org/",
        svg: "./graphql.svg",
      },
      {
        id: "postgresql",
        name: "PostgreSQL",
        website: "https://www.postgresql.org/",
        svg: "./postgresql.svg",
      },
      {
        id: "mongodb",
        name: "MongoDB",
        website: "https://www.mongodb.com/",
        svg: "./mongodb.svg",
      },
    ],
  },
  {
    category: "Core Technologies",
    skills: [
      {
        id: "javascript",
        name: "JavaScript",
        website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        svg: "./javascript.svg",
      },
      {
        id: "typescript",
        name: "TypeScript",
        website: "https://www.typescriptlang.org/docs/",
        svg: "./typescript.svg",
      },
    ],
  },
  {
    category: "Development Tools",
    skills: [
      {
        id: "webpack",
        name: "Webpack",
        website: "https://webpack.js.org/",
        svg: "./webpack.svg",
      },
      {
        id: "git",
        name: "Git",
        website: "https://git-scm.com/",
        svg: "./git.svg",
      },
      {
        id: "jest",
        name: "Jest",
        website: "https://jestjs.io/",
        svg: "./jest.svg",
      },
      {
        id: "npm",
        name: "Npm",
        website: "https://www.npmjs.com/",
        svg: "./npm.svg",
      },
      {
        id: "linux",
        name: "Linux",
        website: "https://en.wikipedia.org/wiki/Linux",
        svg: "./linux.svg",
      },
    ],
  },
];
export const PROJECTS = [
  {
    id: "easy-repair",
    image: "/easy-repair.webp",
    video: "/easy-repair.WEBM",
    title: "Easy Repair",
    tech: "Next.js, React.js, TypeScript, Tailwind CSS, Shadcn/ui, PostgreSQL, Supabase",
    descriptionEN:
      "A comprehensive repair management system with order tracking, customer management, and detailed analytics dashboard.",
    codeLink: "https://github.com/DayanWalter/easy-repair",
    websiteLink: "https://easy-repair.vercel.app/",
  },
  {
    id: "satsch",
    image: "/satsch.gif",
    video: "/satsch.webm",
    title: "SatSchool",
    tech: "Next.js, React.js, TypeScript, Tailwind CSS, Shadcn/ui, Node.js ",
    descriptionEN:
      "A modern e-commerce platform showcasing Stripe payment integration, featuring a digital course shop with seamless checkout experience.",
    codeLink: "https://github.com/DayanWalter/satschool",
    websiteLink: "https://satschool.vercel.app/",
  },
  {
    id: "landingpage",
    image: "/landingpage.gif",
    video: "/landingpage.webm",
    title: "Landingpage",
    tech: "Vite.js, React.js, TypeScript, Tailwind CSS, Shadcn/ui",
    descriptionEN:
      "A dynamic landing page template demonstrating modern UI practices with theme customization and responsive design.",
    codeLink: "https://github.com/DayanWalter/landingpage-portfolio",
    websiteLink: "https://landingpage-five-flame.vercel.app/",
  },
];
