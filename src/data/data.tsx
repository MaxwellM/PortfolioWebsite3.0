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
import profilepic from '../images/AboutMePIC.jpg';
import Amber from '../images/AmberMartinson.jpg';
import testimonialImage from '../images/BANGOR_ME.jpg';
import Brody from '../images/Brody.jpg';
//import TwitterIcon from '../components/Icon/TwitterIcon';
//import heroImage from '../images/header-background.webp';
import heroImage from '../images/heroBanner3.jpg';
import Michael from '../images/MichaelMorin.jpg';
import Algorithms from '../images/portfolio/ALGORITHMS.png';
import ASGARDWebsite from '../images/portfolio/AsgardWebsite1.png';
import EggciteBike from '../images/portfolio/EggciteBike.png';
import Eggman from '../images/portfolio/Eggman.png';
import ExecutiveDashboard from '../images/portfolio/Executive+Dashboard.png';
import LostInSpace from '../images/portfolio/LostInSpace.png';
import MEDEVILFPS from '../images/portfolio/Medevil.png';
import MEDEVILDialog from '../images/portfolio/MedevilDialog.png';
import ManufacturingPortal from '../images/portfolio/MfgPortal2.png';
import NCBROWSE from '../images/portfolio/ncBrowse.png';
import NIOSettings from '../images/portfolio/NIOSettings2.png';
import OrbitMessenger from '../images/portfolio/OrbitMessenger.png';
import QuickCustomer from '../images/portfolio/QuickCustomer.png';
import QuoteBuilder from '../images/portfolio/QuoteBuilder2.png';
import Salvare from '../images/portfolio/Salvare.png';
import Scapegoat from '../images/portfolio/ScapegoatTree.png';
import Turtles from '../images/portfolio/Turtles.png';
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
  title: 'MAXINTOSH',
  description: "Portfolio website for Maxwell Morin.",
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
    title: 'ASGARD Portfolio Website',
    description: 'Portfolio website created for the 521 Software Engineering Squadron to highlight the programs and porjects menat to be used as an advertising method to obtain new talent.',
    url: 'https://reactresume.com',
    image: ASGARDWebsite,
  },
  {
    title: 'Orbit Messenger',
    description: 'Orbit Messenger is a multi-threaded, TLS encrypted, websocketed JavaFX application that allows multiple users to communicate via secured messaging with a Go server and PostgreSQL database.',
    url: 'https://github.com/Orbit-Messenger',
    image: OrbitMessenger,
  },
  {
    title: 'EggciteBike Game - Unity',
    description: 'Eggcite Bike was created in Unity(V4.6). Every character and bicycle is powered by the use of Rigidbody2D, WheelJoint2D, HingeJoint2D, DistanceJoint2D, and SpringJoint2D components. The bicycles are powered through the WheelJoint2D components that rotate the wheel itself to create movement based upon user input. The goal is to reach the end of the level without crashing. Since you had no choice but to be an egg if you collide with anything you will break. You can rotate the bicycle by pressing the Q/E keys to help maintain balance.',
    url: 'https://www.youtube.com/watch?v=swFlBIYBvLk',
    image: EggciteBike,
  },
  {
    title: 'Eggman Game - Unity',
    description: 'In my graduate level Advanced Unity Programming course I choose to do a 2D game. I did two projects this semester and this was my second one. This game was built in Unity(V4.6) and the images were created in Photoshop. This title demos Unitys Rigidbody 2D physics where two AI battle. The game showcases independent limb-to-limb movement instead of the traditional character controller approach. The logic the AI follows is built from three simple rules. If the enemy has a distance larger more than 25, move closer. If the enemy has a distance less than 12, move away. Upon being hit, the character will randomly choose between three attack styles, clockwise, counter clockwise, and random. Also there is a small random chance of jumping too, how fun?',
    url: 'https://www.youtube.com/watch?v=GyfHQSEqoBI',
    image: Eggman,
  },
  {
    title: 'Lost in Space Game - Unity',
    description: 'I present to you, Lost in Space: Cosmonaut Edition. Formally known as Orbital Physics 2.0! A touch of satire can make learning fun! The game is currently in alpha stages (started 12 hours ago). All artwork/scripting/physics were created by me (and Sir Isaac Newton). This video is intended to demo a C# implementation of Newtonian Physics and a rough working main menu screen. More to follow, so stay tuned.',
    url: 'https://www.youtube.com/watch?v=WqnNbWuZIdU',
    image: LostInSpace,
  },
  {
    title: 'Salvare Game - Python3 & PyGame',
    description: 'Group project creating a Python game using the PyGame SDL. The game is titled Salvare (Latin for savior) and is a 2D Newtonian Physics based orbit simulator. The objective of the game is to launch a probe from Earth and using a limited amount of fuel nudging it so that it will orbit other planets. The artwork was created using public domain images of construction paper and manipulated in Adobe Photoshop. This won second place at the 2012 UMaine Gaming Expo.',
    url: 'https://www.youtube.com/watch?v=rJ9wC8DTqqg',
    image: Salvare,
  },
  {
    title: 'Quote Builder',
    description: 'This project was built with the intention to create "Quick Books" like suite where a particular company could create customized quotes, edit those quotes, and send those quotes to their respective partners. This software was built with JavaScript, AngularJS, GoLang, and PostgreSQL. Additionally, this software had access control through LDAP Authentication via Windows Server 2012 and auto generated reports.',
    url: '',
    image: QuoteBuilder,
  },
  {
    title: 'Manufacturing Hardware Testing Portal',
    description: 'This project was the one stop site for all things related to the testing of all physical products a particular company. This software suite had the following abilities, initiate a multitude of tests, review the test results, run reports against test results, add/remove devices to test against, and contains 15+ single purpose tools that were intended to assist the manufacturing and business development team with common tasks related to these devices. This software was built with JavaScript, AngularJS, GoLang, and PostgreSQL. Additionally, this software had access control through LDAP Authentication via Windows Server 2012 and auto generated reports.',
    url: '',
    image: ManufacturingPortal,
  },
  {
    title: 'Executive Dashboard - Power BI',
    description: 'Created an executive dashboard based off of our metrics from our ticketing system in Power BI Desktop. I configured Power BI Desktop to connect to our Dell K1000 Systems Management Appliance via a MySQL connection. Once configured I used the builtin tables and created calculated columns/measures  to show the following metrics: Closed Ticket Clients, Closed Ticket Types, Closed Tickets Quarter Over Quarter, All Tickets Closed By Category, Service Request Closed Tickets By Category, & Incident Closed Tickets By Category.',
    url: '',
    image: ExecutiveDashboard,
  },
  {
    title: 'Networked Input/Output Settings Page',
    description: 'Networked Input/Output Settings page consists of all the changeable functionality within this particular device. The settings page comprises of four individual tabs that house similar functions/features. The page was redesigned with a modern styling while retaining an industrial look.',
    url: '',
    image: NIOSettings,
  },
  {
    title: 'MEDEVIL FPS Game - Unity',
    description: 'Introductory Unity programming course where my final project for the class was to create a game. I choose to produce a 3D action game that featured a realistic medieval environment. The game featured a one square mile realistic environment, night-day system, enemy AI, and rag-doll physics. The game makes use of multiple assets such as: UFPS (Player/AI mechanics), UniStorm (weather), Medieval World Creation Kit (buildings), and the sound effects from Chivalry: Medieval Warfare.',
    url: 'https://www.youtube.com/watch?v=lLubwtxyyqo',
    image: MEDEVILFPS,
  },
  {
    title: 'MEDEVIL Dialog Game - Unity',
    description: 'In my Independent study (second Unity programming course) I produced a 3D game showcasing dialog within video games. My project consisted of five NPCs that offered missions and multiple dialog outcomes. The game makes use of multiple assets such as: UFPS (Player/AI mechanics), UniStorm (weather), Medieval World Creation Kit (buildings), and  Dialogue System (dialogue).',
    url: '',
    image: MEDEVILDialog,
  },
  {
    title: 'Algorithms - Java',
    description: 'In a group of four we were tasked with implementing three separate algorithms of various complexity in a language of our choosing. Our group was given Longest Common Substring, Satisfiability, and the Clique problem. We did solo implementations for Longest Common Substring, Satisfiablity, and worked together for the Clique problem. I choose Java as my language of choice for my two implementations.',
    url: 'https://github.com/MaxwellM/DiscreteStructuresHW1',
    image: Algorithms,
  },
  {
    title: 'Turtles - Java',
    description: 'In my object-oriented programming course I created a simulation with "turtles" that were set on a random path. Upon a turtle and turtle collision they would become sick, turn a darker color, and slow down for a certain length of time. If a turtle collided while being sick, each subsequent collision would increase the duration of its sickness also changing its color and speed. There was also a GUI window that displayed the current turtles direction and color. The simulation also included a counter for the infected turtles and a reset/pause feature.',
    url: 'https://github.com/MaxwellM/JavaObjectOrientedProgrammingProjects',
    image: Turtles,
  },
  {
    title: 'NC BROWSE 2.0 - Java',
    description: 'NCBrowse 2.0 is a Java based NetCDF visualizer that was initially developed by Donald W. Denbo employed by theNOAA/PMEL/EPIC group. I took this application and added further functionality such as a separate panel to display a ncDump, allowing up to eight variables be displayed even across all screens, and allowing simultaneous (multithreaded) videos. This project was intended to provide Phillip M. Dickens Supercomputing Lab at the University of Maine a useful application to display NetCDF files.',
    url: 'https://github.com/MaxwellM/ncBrowse-revamp-CAPSTONE',
    image: NCBROWSE,
  },
  {
    title: 'Scapegoat Datastructures Tree - Java',
    description: 'My visual Scapegoat Tree was built in Java using Swing Components and intended to be an educational tool for those learning databases, specifically Scapegoat Trees. The application supports adding, finding, or removing a node and producing an in-order, pre-order, or post-order traversal of the Scapegoat Tree. This was developed in a two person team consisting of Dylan Lougee and myself.',
    url: 'https://github.com/MaxwellM/IntroToDataStructuresFinalProject',
    image: Scapegoat,
  },
  {
    title: 'Quick Customer Identification Tool - Java',
    description: 'In my software engineering class we were divided into groups of nine and each assigned a few specific roles. The project was tasked with creating an application solution for a representative of Bangor Savings Bank that would be used by their help desk members taking incoming calls. The application would pull the phone number and run it against a SQL database and display relevant information. Our application was built in JavaFX with my primary role being UI I was tasked with implementing the frontend.',
    url: '',
    image: QuickCustomer,
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
      <p className="prose prose-sm sm:prose-base">
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
      <p className="prose prose-sm sm:prose-base">
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
      <p className="prose prose-sm sm:prose-base">
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
      <p className="prose prose-sm sm:prose-base">
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
      <p className="prose prose-sm sm:prose-base">
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
      <p className="prose prose-sm sm:prose-base">
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
      <p className="prose prose-sm sm:prose-base">
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
      name: 'Brody Prestwich',
      text: 'The Table I bought from Mainely Restorations has a smooth sheen on top which is perfect! You can tell he takes time sanding and finishing them.',
      image: Brody,
    },
    {
      name: 'Michael Morin',
      text: 'Practice makes perfect.',
      image: Michael,
    },
    {
      name: 'Amber Martinson, PhD',
      text: 'Mainely Restorations was something we werent looking for, but so glad we stumbled upon! The craftsmanship, quality, and love that goes into each piece is evident. We couldnt be happier with our new office chair. So happy to have a small business to support rather than those big box stores. Will come back for more!',
      image: Amber,
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Have a question or want to work together?',
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
