import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Fatiha",
  lastName: "Odusiji",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Developer",
  avatar: "/images/pp.jpeg",
  email: "odusijifatiha@gmail.com",
  location: "Africa/Lagos", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Fatty-dev",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/odusiji-fatiha/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>From v1 ideas to polished platforms</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Fatty.dev</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Fatiha, a software Developer , I craft intuitive
      <br /> user experiences. with code that scales.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/sholaodusiji/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
      Fatiha is a software developer based in Africa, driven by a passion for turning intricate technical problems into clean, user-centric design experiences. Her work lives at the intersection of code and creativity blending digital craftsmanship with functional elegance. Whether building sleek interfaces or engineering behind-the-scenes systems, she brings a human-centered approach to every line of code
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Kwex Solutions LTD,",
        timeframe: "2024 - Present",
        role: "Frontend Developer",
        achievements: [
          <>
              Led frontend development for "Kasowo", a three-tier e-commerce platform, optimizing performance across devices and resolving cross-browser issues to ensure a seamless user experience.
          </>,
          <>
          Collaborated with backend engineers to integrate new features, improve checkout flow, and streamline UI responsiveness—boosting functionality and overall platform stability.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/kas1.jpg",
            alt: "kasowo",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/Kas2.jpg",
            alt: "kasowo",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "DineQR",
        timeframe: "2024 - 2025",
        role: "Frontend Developer",
        achievements: [
          <>
          Rebuilt "Dineqr", a foodtech e-commerce platform, from scratch after performance failures in the initial version delivering a faster, cleaner frontend using React, Redux, and Tailwind.
          </>,
          <>
           Collaborated closely with a fullstack developer to implement a scalable architecture and seamless API integration earning direct praise from the founder for the product's speed and usability.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/dine1.png",
            alt: "dineqr",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/dine4.png",
            alt: "dineqr",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Federal University of Agriculture",
        description: <>Studied Computer Science.</>,
      },
      {
        name: "720 Degree",
        description: <>Studied Sotware Development.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "React",
        description: <>Builds scalable, high-performing interfaces in React with pixel-perfect precision and component-level mastery</>,
        // optional: leave the array empty if you don't want to display images
        images: [
       
    
        ],
      },
      {
        title: "Zustand",
        description: <>Manages state in React with Zustand — minimal setup, maximum clarity, and buttery-smooth performance</>,
        // optional: leave the array empty if you don't want to display images
        images: [
       
        ],
      },
      {
        title: "Tailwind CSS",
        description: <>Crafts responsive, modern UIs with Tailwind CSS — speed and consistency, down to the last px</>,
        // optional: leave the array empty if you don't want to display images
        images: [
         
        ],
      },
      {
        title: "TypeScript",
        description: <>Types with confidence. Writes predictable, bug-resistant logic using TypeScript’s full power</>,
        // optional: leave the array empty if you don't want to display images
        images: [
         
        ],
      },
      {
        title: "JavaScript",
        description: <>Writes JavaScript like a second language — clear, expressive, and optimized for real-world use</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        
        ],
      },
      {
        title: "Next.js",
        description: <>Delivers blazing-fast SSR and SSG applications with Next.js from routing to deployment</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/dine4.png",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [

    {
      src: "/images/gallery/me.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/me1.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/award.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    // {
    //   src: "/images/gallery/horizontal-4.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/vertical-1.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    // {
    //   src: "/images/gallery/vertical-2.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    // {
    //   src: "/images/gallery/vertical-3.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    // {
    //   src: "/images/gallery/vertical-4.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
