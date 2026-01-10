document.addEventListener('alpine:init', () => {
    Alpine.data('portfolio', () => ({
        darkMode: false,
        
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

            // Initial apply
            if (this.darkMode) document.documentElement.classList.add('dark');
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
            { name: 'System Design', icon: 'devicon-unrealengine-original' }, // Placeholder icon
            { name: 'Scalable System', icon: 'devicon-googlecloud-plain' } // Placeholder icon
        ],

        experience: [
            {
                role: 'Internship',
                time: 'Nov - Jan (3 months)',
                description: 'Gained initial industry experience.'
            },
            {
                role: 'Full Time',
                time: 'Jan - Present',
                description: 'Working as a Fullstack Developer.'
            }
        ],

        projects: [
            {
                title: 'Ecommerce',
                description: 'A full-featured ecommerce platform.',
                tags: ['React', 'Node', 'MongoDB'],
                image: 'https://placehold.co/600x400/242124/FFF?text=Ecommerce'
            },
            {
                title: 'Reddit Backend',
                description: 'Backend implementation of social platform.',
                tags: ['Node', 'PostgreSQL', 'Redis'],
                image: 'https://placehold.co/600x400/242124/FFF?text=Reddit+Backend'
            }
        ],

        blogs: [
            {
                title: 'My Blog 1',
                link: '#',
                image: 'https://placehold.co/600x400/EEE/31343C?text=Blog+1'
            },
            {
                title: 'My Blog 2',
                link: '#',
                image: 'https://placehold.co/600x400/EEE/31343C?text=Blog+2'
            },
            {
                title: 'My Blog 3',
                link: '#',
                image: 'https://placehold.co/600x400/EEE/31343C?text=Blog+3'
            },
            {
                title: 'My Blog 4',
                link: '#',
                image: 'https://placehold.co/600x400/EEE/31343C?text=Blog+4'
            },
            {
                title: 'My Blog 5',
                link: '#',
                image: 'https://placehold.co/600x400/EEE/31343C?text=Blog+5'
            }
        ],

        socials: [
            {
                name: 'Email',
                link: 'mailto:contact@sajankarki.com', 
                icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />'
            },
            {
                name: 'LinkedIn',
                link: 'https://linkedin.com',
                icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" />' 
            },
            {
                name: 'GitHub',
                link: 'https://github.com',
                icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 3.582 8 8 12 1.104 0 2-.896 2-2 0-1.104-.896-2-2-2-3 0-4-3-4-3-1-2-3-3-3-3-2-2 1-3 1-3 2 1 3 3 3 3 2 3 6 2 6 2 1 0 1-1 2-2-4-1-8-3-8-8 0-2 1-4 3-5-1-1-1-3 1-4 0 0 2 0 4 2 2-1 4-1 6 0 2-2 4-2 4-2 1 1 1 3 0 4 3 2 4 4 4 5 0 5-4 7-8 7 0 1 .5 2 1 2 .5 0 1-.9 1-2V14c0-2-1-3-2-3s-2.5-1.5-2.5-1.5z" />'
            }
        ],

        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }));
});
