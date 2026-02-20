
document.addEventListener('alpine:init', () => {
    Alpine.data('portfolio', () => ({
        darkMode: false,
        mobileMenuOpen: false,
        currentTime: '',


        init() {
            // Check for saved theme preference
            if (localStorage.getItem('theme') === 'dark' ||
                (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                this.darkMode = true;
            }

            this.$watch('darkMode', val => {
                localStorage.setItem('theme', val ? 'dark' : 'light');
                if (val) {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
            });

            if (this.darkMode) document.documentElement.classList.add('dark');

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
            this.darkMode = !this.darkMode;
        },

        skills: [
            { name: 'Typescript', icon: 'devicon-typescript-plain' },
            { name: 'React', icon: 'devicon-react-original' },
            { name: 'Node.js', icon: 'devicon-nodejs-plain' },
            { name: 'Express', icon: 'devicon-express-original' },
            { name: 'NestJS', icon: 'devicon-nestjs-plain' },
            { name: 'Docker', icon: 'devicon-docker-plain' },
            { name: 'Redis', icon: 'devicon-redis-plain' }
        ],

        otherSkills: [
            { name: 'System Design', icon: 'devicon-unrealengine-original' },
            { name: 'Scalable System', icon: 'devicon-googlecloud-plain' }
        ],

        blogs: [
            {
                title: 'A Complete Guide to Authentication Techniques in Backend Development',
                link: 'https://ewanblog.com/a-complete-guide-to-authentication-techniques-in-backend-development/',
                date: 'Nov 30, 2025',
                image: './images/blogs/auth-guide.jpg'
            },
            {
                title: 'Building Scalable APIs with NestJS',
                link: '#',
                date: 'Jan 15, 2026',
                image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'
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

        openBlogs() {
            gsap.to('.blogs-overlay', {
                y: '0%',
                duration: 0.8,
                ease: 'power3.out'
            });
            document.body.style.overflow = 'hidden'; // Prevent scrolling background
        },

        closeBlogs() {
            gsap.to('.blogs-overlay', {
                y: '100%',
                duration: 0.8,
                ease: 'power3.inOut'
            });
            document.body.style.overflow = ''; // Restore scrolling
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
            gsap.to('.projects-overlay', {
                y: '0%',
                duration: 0.8,
                ease: 'power3.out'
            });
            document.body.style.overflow = 'hidden'; // Prevent scrolling background
        },

        closeProjects() {
            gsap.to('.projects-overlay', {
                y: '100%',
                duration: 0.8,
                ease: 'power3.inOut'
            });
            document.body.style.overflow = ''; // Restore scrolling
        },

        openExperience() {
            gsap.to('.experience-overlay', {
                y: '0%',
                duration: 0.8,
                ease: 'power3.out'
            });
            document.body.style.overflow = 'hidden'; // Prevent scrolling background
        },

        closeExperience() {
            gsap.to('.experience-overlay', {
                y: '100%',
                duration: 0.8,
                ease: 'power3.inOut'
            });
            document.body.style.overflow = ''; // Restore scrolling
        }
    }));
});

// Barba.js & GSAP Transitions
document.addEventListener('DOMContentLoaded', () => {
    // Only init if Barba is available
    if (typeof barba !== 'undefined') {
        barba.init({
            sync: true,
            transitions: [{
                async leave(data) {
                    const done = this.async();

                    // Animate transition curtain UP
                    await gsap.to('.transition-curtain', {
                        y: '0%',
                        duration: 0.6,
                        ease: 'power3.inOut'
                    });

                    done();
                },
                async enter(data) {
                    // Scroll to top immediately in the new container context
                    window.scrollTo(0, 0);

                    // Animate curtain UP (reveal)
                    // It's currently at 0% (covering screen). We move it to -100% (up off screen)
                    gsap.fromTo('.transition-curtain',
                        { y: '0%' },
                        {
                            y: '-100%',
                            duration: 0.6,
                            ease: 'power3.inOut',
                            onComplete: () => {
                                // Reset curtain to bottom for next transition
                                gsap.set('.transition-curtain', { y: '100%' });
                            }
                        }
                    );

                    // Simple Entrance for Content
                    gsap.from(data.next.container, {
                        y: 50,
                        opacity: 0,
                        duration: 0.6,
                        ease: 'power3.out',
                        delay: 0.2
                    });
                },
                after(data) {
                    // Re-initialize Alpine.js on the new container
                    // Alpine v3 automatically observes the DOM, so standard x-data works.
                    // However, we might need a slight delay or force update if complex.
                }
            }]
        });
    }
});
