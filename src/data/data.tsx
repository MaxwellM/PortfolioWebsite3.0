import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/AboutMePIC.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: '../React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Maxwell Ross Morin.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Utah based <strong className="text-stone-100">Section Chief, Project Director, Product Owner, and Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">AFSC/SW based out of Hill, AFB</strong> helping build a modern, web-based softare, for the missileers
        of our country.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, I'm often either <strong className="text-stone-100">tinkering on my vehicles</strong>,
        reading <strong className="text-stone-100">Star Wars</strong> novels, or {' '}
        <strong className="text-stone-100">cooking</strong> with my wife.
      </p>
    </>
  ),
  actions: [
    {
      //href: resumePDF,
      href: '../assets/Resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Interests include web development, cooking, and Star Wars. I have experience as a Section Chief, Project Director, Product Owner, Full-Stack Engineer, and IT Manager. Primarily my experience has derived from working for the Air Force building emergent software for the F-35, Sentinel Nuclear Missile Program,  Minuteman III Missile Program, and from a private company that builds compact radars for commercial and military use. Also worked as an IT consultant for the University of Maine's Psychology Department and on an IT Help Desk at a large construction company. For more info, check out my projects on GitHub.`,
  aboutItems: [
    {label: 'Location', text: 'West Haven, UT', Icon: MapIcon},
    {label: 'Age', text: '37', Icon: CalendarIcon},
    {label: 'Clearance', text: 'TS', Icon: FlagIcon},
    {label: 'Interests', text: 'Tinkering, Coding, Cooking', Icon: SparklesIcon},
    {label: 'Study', text: 'Univeristy of Maine', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Unites States Air Foce', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'JavaScript',
        level: 7,
      },
      {
        name: 'AngularJS',
        level: 6,
      },
      {
        name: 'React',
        level: 4,
      },
      {
        name: 'HTML/CSS',
        level: 9,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'GoLang',
        level: 5,
      },
      {
        name: 'PostgreSQL',
        level: 6,
      },
      {
        name: 'Gin',
        level: 4,
      },
    ],
  },
  {
    name: 'Desktop Application Development',
    skills: [
      {
        name: 'Java',
        level: 6,
      },
      {
        name: 'C#',
        level: 6,
      },
      {
        name: 'Python',
        level: 5,
      },
    ],
  },
  {
    name: 'Business Tools',
    skills: [
      {
        name: 'Jira',
        level: 9,
      },
      {
        name: 'Pivotal Tracker',
        level: 8,
      },
      {
        name: 'Microsoft Office',
        level: 10,
      },
    ],
  },
  {
    name: 'Microsoft Power App Suite',
    skills: [
      {
        name: 'Power Apps',
        level: 9,
      },
      {
        name: 'Power Automate',
        level: 9,
      },
      {
        name: 'Power BI',
        level: 7,
      },
    ],
  },
  {
    name: 'Leadership',
    skills: [
      {
        name: 'Employee Development',
        level: 7,
      },
      {
        name: 'Presentations',
        level: 8,
      },
      {
        name: 'Customer Relations',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2015',
    location: 'University of Maine',
    title: 'Bachelors in Computer Science',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'May 2012',
    location: 'Eastern Maine Community College',
    title: 'AA in Liberal Studies',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'December 2022 - Present',
    location: '517 Software Engineering Squadron',
    title: 'Section Chief',
    content: (
      <p>
        Operate as a First Line Supervisor for three teams, spanning 14 individuals, as a Project Director, and 
        working as an integrated civilian for our customers.
      </p>
    ),
  },
  {
    date: 'July 2022 - December 2022',
    location: '521 Software Engineering Squadron',
    title: 'Deputy Project Director',
    content: (
      <p>
        Operated as a second-in-command over a suite of applications named collectively as Torque that are tasked 
        with aircraft maintenance/operations scheduling and personnel management. Torque consists of five separate 
        product teams of around 40 individuals.
      </p>
    ),
  },
  {
    date: 'July 2021 - July 2022',
    location: '521 Software Engineering Squadron',
    title: 'Lead Product Owner',
    content: (
      <p>
        Lead and Owner of two software products, for the Torque project, that utilized modern web development languages, 
        libraries, and frameworks, focusing on aircraft maintenance and operations scheduling. Managed a team of eight 
        individuals through an Agile environment and the use of GitLab. Wrote user stories to describe new features, 
        oversee the product's backlog, and validate what the Developers have delivered. Worked to keep the team unblocked 
        and de-risked using hypothesis-driven development and are flexible and adaptable to a fast-changing environment. 
        Led two software engineering products that included APIs, geospatial data management, and ML algorithms, as well 
        as influenced teams to design, develop, test, deploy, maintain, and improve software. Wrote user stories, identify 
        risks, manage schedules, releases, and communicate clearly with the product stakeholders. Assisted to solve the 
        Nation's hardest problems surrounding enhancing the efficiency of schedule and unscheduled maintenance for over 
        12 different air frames for the United States Air Force alongside people who shared my passion for changing the world.
      </p>
    ),
  },
  {
    date: 'Feburary 2020 - July 2021',
    location: '521 Software Engineering Squadron',
    title: 'Product Owner',
    content: (
      <p>
        Owner of four software products for the F35 through a partnership between the 309th SWEG and KesselRun. Managed a team 
        of 14 individuals, across the four teams, through an Agile environment and the use of PivotalTracker. Wrote user stories 
        to describe new features, oversee the product's backlog, and validate what the Developers have delivered. Worked to keep 
        the team unblocked and de-risked using hypothesis-driven development and are flexible and adaptable to a fast-changing 
        environment. Led four software engineering products that included APIs, geospatial data management, and ML algorithms, 
        as well as influenced teams to design, develop, test, deploy, maintain, and improve software. Wrote user stories, 
        identify risks, manage schedules, releases, and communicate clearly with the product stakeholders. Assisted to solve 
        the Nation's hardest problems for the United States Air Force alongside people who shared my passion for changing the world.
      </p>
    ),
  },
  {
    date: 'Feburary 2020 - July 2021',
    location: '521 Software Engineering Squadron',
    title: 'Product Owner',
    content: (
      <p>
        Owner of four software products for the F35 through a partnership between the 309th SWEG and KesselRun. Managed a team 
        of 14 individuals, across the four teams, through an Agile environment and the use of PivotalTracker. Wrote user stories 
        to describe new features, oversee the product's backlog, and validate what the Developers have delivered. Worked to keep 
        the team unblocked and de-risked using hypothesis-driven development and are flexible and adaptable to a fast-changing 
        environment. Led four software engineering products that included APIs, geospatial data management, and ML algorithms, 
        as well as influenced teams to design, develop, test, deploy, maintain, and improve software. Wrote user stories, 
        identify risks, manage schedules, releases, and communicate clearly with the product stakeholders. Assisted to solve 
        the Nation's hardest problems for the United States Air Force alongside people who shared my passion for changing the world.
      </p>
    ),
  },
  {
    date: 'August 2019 - Feburary 2020',
    location: 'LogMet',
    title: 'Electronics Engineer Contractor',
    content: (
      <p>
        (D) Level Maintenance and related tasks for the 309th Electronics Maintenance Group (EMXG), Ogden Air Logistics Complex 
        (OO-ALC) at Hill Air Force Base (AFB), Utah (UT). Main duties were to troubleshoot faulty mechanic instruments from both 
        F-16 Fighting Falcons and C-130 Hercules aircraft. Tasks involved diagnosing electrical and electronic malfunctions within 
        systems like gauges, sensors, and control panels. Used specialized testing equipment to pinpoint the root cause of the problem, 
        utilizing Technical Orders (schematics and technical manuals) for guidance. Once identified, repaired or replaced defective 
        components such as wiring, circuit boards, or sensors, ensuring proper functionality. After repair, calibrated and test the 
        instruments to guarantee accuracy and reliability under flight conditions. Finally, document all repairs performed, maintaining 
        a detailed record of the work completed for future reference and quality control.
      </p>
    ),
  },
  {
    date: 'Feburary 2017 - June 2019',
    location: 'SpotterRF',
    title: 'Product Owner, Full-Stack Dev, & IT Manager',
    content: (
      <p>
        Owner of two internal software products: manufacturing and web business development. Designed web sites with features like 
        Active Directory Lightweight Directory Access Protocol (LDAP) Authentication, quality assurance tools, saving statistics and 
        snapshots to databases for tested and released products. Served as an interdepartmental liaison. Worked as an intermediary 
        between manufacturing and business development departments in bringing understanding of product vision to development teams. 
        Facilitated meetings between our company and our partners via video conferencing. Met with manufacturing and business development 
        teams whiteboarding and implementing solutions to feature requests. Conceptualized and presented a new product design for 
        manufacturing software, worked with manufacturing and management to execute product and bring on all software from a non-secured 
        service to an LDAP secured service. Met daily with the manufacturing team and coordinated their needs/priorities and made 
        adjustments accordingly to my manufacturing software. Conceptualized and developed user facing quote building web service. 
        This product is used daily by customers and has tools for our sales team to help accelerate generating business and run reports, 
        providing valuable business insights. Interacted daily with critical third-party integrators, all with custom and sensitive 
        needs and tight deadlines. Presented to management monthly about product development status. Worked with the manufacturing 
        and business development teams coordinating viable solutions in a timely manner. Networked our building’s long term security 
        monitoring system. Researched, Purchased, Installed, and Maintained database servers for data collection in manufacturing 
        utilizing PostgreSQL.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'maxwellrmorin@gmail.com',
      href: 'mailto:maxwellrmorin@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'West Haven UT, USA',
      href: 'https://maps.app.goo.gl/RaEM6yqwvyDxFpB89',
    },
    //{
    //  type: ContactType.Instagram,
    //  text: '@tbakerx',
    //  href: 'https://www.instagram.com/tbakerx/',
    //},
    {
      type: ContactType.Github,
      text: 'MaxwellM',
      href: 'https://github.com/MaxwellM/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/MaxwellM/'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/1742163/maxwell-morin'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/maxwell-morin/'},
  //{label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  //{label: 'X', Icon: TwitterIcon, href: 'https://x.com/MAXintosh2010'},
];
