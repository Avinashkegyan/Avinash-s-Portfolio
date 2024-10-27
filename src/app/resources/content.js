import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Avinash',
    lastName:  'Kumar Pandey',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Frasher',
    avatar:    '/images/avinash.jpg',
    location:  'Asia/Kolkata',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Hindi']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/Avinashkegyan',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/developer-avinash/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:avinashtheengineer@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Java Developer & Code Builder</>,
    subline: <>I'm Avinash, a Java Developer at <InlineCode>NIT Hyderabad</InlineCode>, where I build code intuitive<br/> user experiences. After hours, I build my own projects.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <> Developer Avinash is the founder and curator of Dev.Avinash. I'm a passionate software developer with years of experience in the field. My journey in the tech world began with a simple curiosity, and it has since evolved into a deep-seated love for coding, problem-solving, and the pursuit of knowledge.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Naresh I Technology',
                timeframe: '2023 - Present',
                role: 'Java Developer tranee',
                achievements: [
                    <>Redesigned the UI/UX or maintaine backend code for the personal Site platform, resulting in a 20% increase in user engagement and 30% faster load times.</>,
                    <> Avinash, the founder and curator of Dev.Avinash. I'm a passionate software developer with years of experience in the field. My journey in the tech world began with a simple curiosity, and it has since evolved into a deep-seated love for coding, problem-solving, and the pursuit of knowledge.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.png',
                        alt: 'Dev. Avinash',
                        width: 16,
                        height: 9
                    }
                ]
            }
            //,
            // {
            //     company: 'Creativ3',
            //     timeframe: '2018 - 2022',
            //     role: 'Lead Designer',
            //     achievements: [
            //         <>Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.</>,
            //         <>Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.</>
            //     ],
            //     images: [ ]
            // }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Makhanlal Chaturvedi National University',
                description: <>Bachelor of Computer Application (2020 - 2023)</>,
            },
            {
                name: 'Sam Global University, Bhopal',
                description: <>Master of Computer Application (2023 - Present)</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Java & Spring Boot',
                description: <>Experienced in building web apps with Java and Spring Boot frameworks.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-03.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'SQL & Oracle',
                description: <>Skilled in writing complex SQL queries and working with Oracle databases.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'HTML/CSS',
                description: <>Proficient in designing web interfaces using HTML5 and CSS3.</>,
                images: [
                    {
                        src: '/images/projects/project-01/HTMLCSS.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        {
            src: '/images/gallery/img1.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img2.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img3.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img4.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img5.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img6.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img7.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img8.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img9.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img10.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img11.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img12.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img13.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img14.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };