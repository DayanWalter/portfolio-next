import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Intro() {
	const githubLink = "https://github.com/dayanwalter";
	const linkedinLink = "https://www.linkedin.com/in/dayanwalter/";
	const email = "dayanwalter@gmail.com";

	const socialLinks = [
		{
			href: githubLink,
			label: "github button",
			icon: <Github />,
		},
		{
			href: linkedinLink,
			label: "linkedIn button",
			icon: <Linkedin />,
		},
		{
			href: `mailto:${email}`,
			label: "email button",
			icon: <Mail />,
		},
	];

	return (
		<>
			{/* Section */}
			<section
				id="intro"
				className="grid justify-center py-20 md:h-screen md:py-24"
			>
				{/* Container */}
				<div className="grid items-center px-4 py-6 md:max-w-7xl md:border-l md:px-8">
					{/* Content */}
					<div className="grid gap-8 md:gap-12">
						{/* Heading and supporting text */}
						<div className="grid gap-6 md:gap-10">
							{/* Heading */}
							<h1 className="text-5xl leading-10 font-semibold md:text-7xl md:leading-[1.15]">
								Amazing Apps, Clean Code.
							</h1>
							{/* Supporting text */}
							<p className="md:max-w-3xl md:text-xl">
								I am Dayan - father, husband and freelance software developer
								specializing in Next.js, React.js, Nest.js and PostgreSQL.
							</p>

							<p className="md:max-w-3xl md:text-xl">
								From Lego to Minecraft and now to functional React components –
								the play has never stopped.
							</p>
							<p className="md:max-w-3xl md:text-xl">
								I develop efficient, modular solutions for complex applications,
								combining creativity and precision to deliver outstanding
								results.
							</p>
							{/* Links */}
							<div className="flex gap-3">
								{socialLinks.map(({ href, label, icon }) => (
									<Button
										asChild
										size="icon"
										aria-label={label}
										className="cursor-pointer"
										key={label}
									>
										<Link href={href} target="_blank" rel="noopener noreferrer">
											{icon}
										</Link>
									</Button>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
