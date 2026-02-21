
document.addEventListener('alpine:init', () => {
    Alpine.data('portfolio', () => ({
        darkMode: false,
        mobileMenuOpen: false,
        blogsOpen: false,
        projectsOpen: false,
        experienceOpen: false,
        currentTime: '',
        heroSwapped: false,
        experience: [
            {
                company: 'Wrappers Wrap',
                role: 'Full Stack Developer',
                date: '2023 - Present',
                description: 'Developing high-performance eCommerce solutions and robust admin management portals using React, Node.js and TypeScript.'
            },
            {
                company: 'Letsdo',
                role: 'Backend Engineer',
                date: '2022 - 2023',
                description: 'Architecting scalable multi-tenant architectures and optimizing database performance for high-traffic applications.'
            }
        ],

        init() {
            // Dark mode disabled
            document.documentElement.classList.remove('dark');

            // Initialize clock
            this.updateTime();
            setInterval(() => this.updateTime(), 1000);
        },

        updateTime() {
            const options = {
                timeZone: 'Asia/Kathmandu',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            };
            this.currentTime = new Intl.DateTimeFormat('en-US', options).format(new Date());
        },

        toggleTheme() {
            // Disabled
        },

        skills: [
            { name: 'Typescript', icon: 'devicon-typescript-plain', color: '#3178C6' },
            { name: 'React', icon: 'devicon-react-original', color: '#61DAFB' },
            { name: 'Node.js', icon: 'devicon-nodejs-plain', color: '#339933' },
            { name: 'Express', icon: 'devicon-express-original', color: '#000000' },
            { name: 'NestJS', icon: 'devicon-nestjs-plain', color: '#E0234E' },
            { name: 'Docker', icon: 'devicon-docker-plain', color: '#2496ED' },
            { name: 'Redis', icon: 'devicon-redis-plain', color: '#DC382D' }
        ],

        otherSkills: [
            { name: 'System Design', icon: 'devicon-unrealengine-original', color: '#313131' },
            { name: 'Scalable System', icon: 'devicon-googlecloud-plain', color: '#4285F4' }
        ],

        blogs: [
            {
                title: 'A Complete Guide to Authentication Techniques in Backend Development',
                description: 'Explore deep-dives into JWT, Sessions, OAuth2 and how to secure your scalable backend systems.',
                link: 'https://ewanblog.com/a-complete-guide-to-authentication-techniques-in-backend-development/',
                date: 'Nov 30, 2025',
                image: './images/blogs/auth-guide.jpg'
            },
            {
                title: 'Junior Devs Use try-catch Everywhere. Senior Devs Use These 4 Exception Handling Patterns',
                description: 'Try-catch on every method? That’s not safe code—that’s a ticking time bomb. Here’s what senior devs do instead.',
                link: '#',
                date: 'Feb 12, 2026',
                image: './images/blogs/try-catch.png'
            },
        ],

        socials: [
            {
                name: 'Email',
                link: 'mailto:contact@sajankarki.com',
                icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />'
            },
            {
                name: 'LinkedIn',
                link: 'https://www.linkedin.com/in/sajan-n-karki-67a03931a/',
                icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" />'
            },
            {
                name: 'GitHub',
                link: 'https://github.com/sajjankarki18',
                icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />'
            }
        ],

        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },

        blogsOpen: false,
        projectsOpen: false,
        experienceOpen: false,
        lastFocusedElement: null,

        openBlogs() {
            this.lastFocusedElement = document.activeElement;
            this.blogsOpen = true;
            document.body.style.overflow = 'hidden';
        },

        closeBlogs() {
            this.blogsOpen = false;
            document.body.style.overflow = '';
            this.lastFocusedElement?.focus();
        },

        projects: [
            {
                title: 'Wrappers Wrap',
                description: 'An eCommerce website focused on selling mobile covers with a modern, responsive, and user-friendly shopping experience.',
                image: './images/projects/wrappers-portal.png',
                link: '#',
            },
            {
                title: 'Wrappers Wrap Portal',
                description: 'An admin panel for managing products, orders, and content of the Wrappers Wrap eCommerce platform.',
                image: './images/projects/letsdo-portal.png',
                link: '#',
            },
            {
                title: 'Letsdo Portal',
                description: 'A powerful admin portal for managing the Letsdo multi-tenant eCommerce system, providing advanced controls and company-level features.',
                image: './images/projects/letsdo-portal.webp',
                link: '#',
            }
        ],

        openProjects() {
            this.lastFocusedElement = document.activeElement;
            this.projectsOpen = true;
            document.body.style.overflow = 'hidden';
        },

        closeProjects() {
            this.projectsOpen = false;
            document.body.style.overflow = '';
            this.lastFocusedElement?.focus();
        },

        swapHero() {
            if (window.innerWidth < 768) {
                this.heroSwapped = !this.heroSwapped;
                return;
            }

            const text = this.$refs.heroText;
            const image = this.$refs.heroImage;

            // Capture initial positions
            const textRect = text.getBoundingClientRect();
            const imageRect = image.getBoundingClientRect();

            this.heroSwapped = !this.heroSwapped;

            // Wait for Alpine to update the DOM (flex-row-reverse and order changes)
            this.$nextTick(() => {
                // Capture new positions
                const newTextRect = text.getBoundingClientRect();
                const newImageRect = image.getBoundingClientRect();

                // Calculate the delta
                const textDeltaX = textRect.left - newTextRect.left;
                const imageDeltaX = imageRect.left - newImageRect.left;

                // Immediately set the inversion (remove the jump)
                gsap.set(text, { x: textDeltaX });
                gsap.set(image, { x: imageDeltaX });

                // Animate to 0
                gsap.to(text, {
                    x: 0,
                    duration: 0.7,
                    ease: "power3.inOut",
                    clearProps: "x" // Clean up transform after animation
                });
                gsap.to(image, {
                    x: 0,
                    duration: 0.7,
                    ease: "power3.inOut",
                    clearProps: "x"
                });
            });
        },

        openExperience() {
            this.lastFocusedElement = document.activeElement;
            this.experienceOpen = true;
            document.body.style.overflow = 'hidden';
        },

        closeExperience() {
            this.experienceOpen = false;
            document.body.style.overflow = '';
            this.lastFocusedElement?.focus();
        },

        // Helper for simple scrolling
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }));
});

// Simple clock initialization
document.addEventListener('DOMContentLoaded', () => {
    // Standard initialization if needed
});
