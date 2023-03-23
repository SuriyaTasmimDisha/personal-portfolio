import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	aws,
	canva,
	cloudflare,
	expressjs,
	jira,
	markdown,
	materialui,
	mysql,
	obs,
	postman,
	python,
	sql,
	terraform,
	meta,
	starbucks,
	tesla,
	shopify,
	optimizely,
	bs23,
	carrent,
	jobit,
	tripguide,
	threejs,
	sharebike_dashboard,
	sharebike_app,
	abra,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
	{
		id: "blog",
		title: "Blog",
		link: "https://blog.suriyadisha.com",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "React Native Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "Content Creator",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "python",
		icon: python,
	},
	{
		name: "aws",
		icon: aws,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "expressjs",
		icon: expressjs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "mysql",
		icon: mysql,
	},
	{
		name: "terraform",
		icon: terraform,
	},
	{
		name: "git",
		icon: git,
	},
	// {
	// 	name: "Tailwind CSS",
	// 	icon: tailwind,
	// },
	// {
	//   name: "postman",
	// 	icon: postman,
	// },
	// {
	// 	name: "figma",
	// 	icon: figma,
	// },
	// {
	// 	name: "canva",
	// 	icon: canva,
	// },
	// {
	// 	name: "cloudflare",
	// 	icon: cloudflare,
	// },
	// {
	// 	name: "sql",
	// 	icon: sql,
	// },
	// {
	// 	name: "Three JS",
	// 	icon: threejs,
	// },
	// {
	// 	name: "Redux Toolkit",
	// 	icon: redux,
	// },
	// {
	// 	name: "docker",
	// 	icon: docker,
	// },
	// {
	// 	name: "jira",
	// 	icon: jira,
	// },
	// {
	// 	name: "markdown",
	// 	icon: markdown,
	// },
	// {
	// 	name: "materialui",
	// 	icon: materialui,
	// },
	// {
	// 	name: "obs",
	// 	icon: obs,
	// },
];

const experiences = [
	{
		title: "Software Engineer",
		company_name: "Optimizely",
		icon: optimizely,
		iconBg: "#ffffff",
		date: "November 2022 - Present",
		points: [
			"Developing automation functionality for products using Python.",
			"Analyzing and customizing product features based on customer needs.",
		],
	},
	{
		title: "Software Engineer",
		company_name: "Brain Station 23",
		icon: bs23,
		iconBg: "#00A0DB",
		date: "January 2021 - October 2022",
		points: [
			"Simplifying and developing complex system modules using AWS and Python.",
			"Developing and maintaining web applications using React.js, Node.js, MongoDB, and other related technologies.",
			"Developing and maintaining mobile applications using React-Native.",
			"Implementing White-Label concept in product.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "ShareBike Admin Dashboard",
		description:
			"Web-based platform that allows admin users to get a overview of the bikes status, positions and payment operations in various EU countries. Also allow the admin users to perform various actions.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "redux",
				color: "violet-text-gradient",
			},
			{
				name: "material-ui",
				color: "pink-text-gradient",
			},
			{
				name: "white-label",
				color: "orange-text-gradient",
			},
			{
				name: "google-map",
				color: "green-text-gradient",
			},
		],
		image: sharebike_dashboard,
		source_code_link: "https://sharebike.com",
	},
	{
		name: "ShareBike Bike Sharing App",
		description:
			"Bike sharing solution based in EU. The app allows the users to rent a bike, view bike positions on the map, perform start/pause/end actions during the ride, and complete payment after each ride.",
		tags: [
			{
				name: "react-native",
				color: "blue-text-gradient",
			},
			{
				name: "redux",
				color: "violet-text-gradient",
			},
			{
				name: "material-ui",
				color: "pink-text-gradient",
			},
			{
				name: "white-label",
				color: "orange-text-gradient",
			},
			{
				name: "google-map",
				color: "green-text-gradient",
			},
		],
		image: sharebike_app,
		source_code_link:
			"https://play.google.com/store/apps/details?id=com.sharebike.android&hl=en&gl=US",
	},
	{
		name: "Abra Admin Dashboard",
		description:
			"A smart home device maintenance platform that allows admin users to see the status of the devices, manage device connections with homes, get real-time device notifications, and manage home owners and members.",
		tags: [
			{
				name: "python",
				color: "blue-text-gradient",
			},
			{
				name: "aws",
				color: "orange-text-gradient",
			},
			{
				name: "terraform",
				color: "violet-text-gradient",
			},
			{
				name: "serverless",
				color: "green-text-gradient",
			},
			{
				name: "graphql",
				color: "pink-text-gradient",
			},
		],
		image: abra,
		source_code_link: "https://www.abralife.com",
	},
];

export { services, technologies, experiences, testimonials, projects };
