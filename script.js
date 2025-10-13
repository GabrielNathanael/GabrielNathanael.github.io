tailwind.config = {
    darkMode: 'class',
};


new TypeIt("#animated-role", {
    speed: 100,
    deleteSpeed: 50,
    loop: true,
    breakLines: false,
    waitUntilVisible: true,
    lifeLike: false,
    startDelay: 0
})
    .type("a student")
    .pause(1200)
    .delete()
    .type("a full stack developer")
    .pause(1200)
    .delete()
    .type("a cloud enthusiast")
    .pause(1200)
    .delete()
    .go();

document.querySelectorAll('a[href^="#"]:not([data-modal-link])').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeToggleDesktop = document.getElementById('dark-mode-toggle-desktop');
const themeIcon = document.getElementById('theme-icon');
const themeIconDesktop = document.getElementById('theme-icon-desktop');
const htmlElement = document.documentElement;

if (localStorage.getItem('theme') === 'dark') {
    htmlElement.classList.add('dark');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
    themeIconDesktop.classList.replace('fa-moon', 'fa-sun');
} else {
    htmlElement.classList.remove('dark');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
    themeIconDesktop.classList.replace('fa-sun', 'fa-moon');
}

function toggleDarkMode() {
    htmlElement.classList.toggle('dark');
    const isDark = htmlElement.classList.contains('dark');

    if (isDark) {
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        themeIconDesktop.classList.replace('fa-moon', 'fa-sun');
    } else {
        localStorage.removeItem('theme');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        themeIconDesktop.classList.replace('fa-sun', 'fa-moon');
    }
}

darkModeToggle.addEventListener('click', toggleDarkMode);
darkModeToggleDesktop.addEventListener('click', toggleDarkMode);

const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const menuOverlay = document.getElementById('menu-overlay');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-full');
    menuOverlay.classList.remove('hidden');
});

mobileMenuClose.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
    menuOverlay.classList.add('hidden');
});

menuOverlay.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
    menuOverlay.classList.add('hidden');
});

mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
        menuOverlay.classList.add('hidden');
    });
});

const certificates = [
    { title: "Azure AI Fundamentals", issuer: "Microsoft", year: 2024, image: "/images/certificate7.webp" },
    { title: "Belajar Dasar-Dasar DevOps", issuer: "Dicoding Indonesia", year: 2025, image: "/images/certificate21.webp" },
    { title: "Belajar Dasar Cloud dan Gen AI di AWS", issuer: "Dicoding Indonesia", year: 2025, image: "/images/certificate20.webp" },
    { title: "Skills Boost Arcade Certification Zone July 2025", issuer: "Google Cloud Skills Boost", year: 2025, image: "/images/certificate18.webp", link: "https://www.cloudskillsboost.google/public_profiles/e7a04078-a982-40a5-b8d1-3fe55d4e1220/badges/17112694" },
    { title: "Level 3: Advanced App Operations", issuer: "Google Cloud Skills Boost", year: 2025, image: "/images/certificate14.webp", link: "https://www.cloudskillsboost.google/public_profiles/e7a04078-a982-40a5-b8d1-3fe55d4e1220/badges/17075395" },
    { title: "Level 2: Modern Application Deployment", issuer: "Google Cloud Skills Boost", year: 2025, image: "/images/certificate13.webp", link: "https://www.cloudskillsboost.google/public_profiles/e7a04078-a982-40a5-b8d1-3fe55d4e1220/badges/17063870" },
    { title: "Level 1: Core Infrastructure and Security", issuer: "Google Cloud Skills Boost", year: 2025, image: "/images/certificate9.webp", link: "https://www.cloudskillsboost.google/public_profiles/e7a04078-a982-40a5-b8d1-3fe55d4e1220/badges/17032804" },
    { title: "Skills Boost Arcade Base Camp July 2025", issuer: "Google Cloud Skills Boost", year: 2025, image: "/images/certificate10.webp", link: "https://www.cloudskillsboost.google/public_profiles/e7a04078-a982-40a5-b8d1-3fe55d4e1220/badges/17021616" },
    { title: "Skills Boost Arcade Trivia July 2025 Week 1", issuer: "Google Cloud Skills Boost", year: 2025, image: "/images/certificate15.webp", link: "https://www.cloudskillsboost.google/public_profiles/e7a04078-a982-40a5-b8d1-3fe55d4e1220/badges/17075705" },
    { title: "Skills Boost Arcade Trivia July 2025 Week 2", issuer: "Google Cloud Skills Boost", year: 2025, image: "/images/certificate19.webp", link: "https://www.cloudskillsboost.google/public_profiles/e7a04078-a982-40a5-b8d1-3fe55d4e1220/badges/17202758" },
    { title: "Skills Boost Arcade Trivia July 2025 Week 3", issuer: "Google Cloud Skills Boost", year: 2025, image: "/images/certificate16.webp", link: "https://www.cloudskillsboost.google/public_profiles/e7a04078-a982-40a5-b8d1-3fe55d4e1220/badges/17094322" },
    { title: "Skills Boost Arcade Trivia July 2025 Week 4", issuer: "Google Cloud Skills Boost", year: 2025, image: "/images/certificate17.webp", link: "https://www.cloudskillsboost.google/public_profiles/e7a04078-a982-40a5-b8d1-3fe55d4e1220/badges/17097630" },
    { title: "HSK 1", issuer: "Balingkang Confucius Institute", year: 2024, image: "/images/certificate8.webp" },
    { title: "Web Development", issuer: "Sololearn", year: 2025, image: "/images/certificate12.webp" },
    { title: "Sololearn Introduction to JavaScript", issuer: "Sololearn", year: 2025, image: "/images/certificate12.webp" },
    { title: "Sololearn Introduction to Python", issuer: "Sololearn", year: 2024, image: "/images/certificate4.webp" },
    { title: "Sololearn Introduction to C++", issuer: "Sololearn", year: 2023, image: "/images/certificate3.webp" },
    { title: "Sololearn Introduction to HTML", issuer: "Sololearn", year: 2023, image: "/images/certificate1.webp" },
    { title: "Sololearn Introduction to CSS", issuer: "Sololearn", year: 2023, image: "/images/certificate2.webp" },
    { title: "Sololearn Introduction to C", issuer: "Sololearn", year: 2024, image: "/images/certificate5.webp" },
    { title: "Sololearn Introduction to C#", issuer: "Sololearn", year: 2024, image: "/images/certificate6.webp" }
];

document.addEventListener('DOMContentLoaded', () => {
    const certificateSwiperWrapper = document.querySelector('.certificate-swiper-wrapper');

    certificates.forEach((cert, idx) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';

        // Add hover & cursor only if has link
        if (cert.link) {
            slide.classList.add('cursor-pointer');
        }

        slide.innerHTML = `
            <div class="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden 
                        transition-all duration-300 hover:shadow-2xl 
                        ${cert.link ? 'hover:scale-[1.02]' : ''} h-full flex flex-col">
                <!-- Image Container with 3:2 Aspect Ratio -->
                <div class="w-full aspect-[4/3] bg-gray-50 dark:bg-neutral-700 overflow-hidden relative">
                    <div class="absolute inset-0 bg-cover bg-center blur-xl scale-110 opacity-25" 
                        style="background-image: url('${cert.image}');"></div>
                    <img src="${cert.image}" 
                        alt="${cert.title}" 
                        class="w-full h-full object-contain transition-transform duration-300 
                                ${cert.link ? 'hover:scale-105' : ''} relative z-10" 
                        loading="lazy">
                </div>
                
                <!-- Content -->
                <div class="p-5 flex-grow flex flex-col justify-between">
                    <div>
                        <h3 class="text-base font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                            ${cert.title}
                        </h3>
                        <p class="text-sm text-gray-600 dark:text-gray-300">
                            ${cert.issuer} • ${cert.year}
                        </p>
                    </div>
                    
                    ${cert.link ? `
                    ` : ''}
                </div>
            </div>
        `;

        if (cert.link) {
            slide.addEventListener('click', () => {
                window.open(cert.link, '_blank');
            });
        }

        certificateSwiperWrapper.appendChild(slide);
    });

    // Initialize Swiper
    new Swiper('.certificate-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 }
        },
        navigation: {
            nextEl: '.certificate-button-next',
            prevEl: '.certificate-button-prev',
        },
        pagination: {
            el: '.certificate-swiper-pagination',
            type: 'progressbar',
        }
    });
});

const projects = [
    {
        title: "Task Manager Web App with Vite ReactJS, Laravel, and Firebase Authentication",
        image: "/images/project5.webp",
        link: "https://github.com/GabrielNathanael/Task-Manager-Fullstack-App",
        description: "A fullstack task management app featuring a dashboard, project grouping, CRUD, authentication, and interactive UI. Tasks are grouped by project, and task progress are available per project.",
        tools: [
            "React.js (Vite) as Frontend",
            "Tailwind CSS",
            "TanStack Table",
            "Framer Motion",
            "Firebase Auth",
            "Laravel as Backend",
            "MySQL",
            "React Query"
        ],
        year: 2025,
        orientation: "landscape"
    },
    {
        title: "Fullstack Blog Website with Next.js and Prisma",
        image: "/images/project6.webp",
        link: "https://github.com/GabrielNathanael/nextjs-fullstack-blog-app",
        description: "A fullstack blog application built entirely with Next.js as both frontend and backend framework. It features content management, and a clean responsive design. Data is managed with Prisma as ORM.",
        tools: [
            "Next.js",
            "Prisma ORM",
            "TypeScript",
            "Tailwind CSS",
            "PostgreSQL",
        ],
        year: 2025,
        orientation: "landscape"
    },
    {
        title: "Faithful Streak – Daily Tracker App with Kotlin and Jetpack Compose",
        image: "/images/project8.webp",
        link: "https://github.com/GabrielNathanael/faithfulstreakapp",
        description: "An Android application built with Kotlin and Jetpack Compose that tracks daily consistency through streaks, progress visualization, and local data storage — designed with a clean UI and offline-first approach.",
        tools: [
            "Kotlin",
            "Jetpack Compose",
            "Room Database",
            "Datastore",
            "Lottie"
        ],
        year: 2025,
        orientation: "portrait"
    },
    {
        title: "AI Flappy Bird with NEAT (NeuroEvolution of Augmenting Topologies)",
        image: "/images/project2.webp",
        link: "https://github.com/GabrielNathanael/AI-FlappyBird",
        description: "An implementation of Flappy Bird controlled by AI using the NEAT (NeuroEvolution of Augmenting Topologies) algorithm.",
        tools: [
            "Python",
            "Pygame",
            "neat-python",
            "pickle"
        ],
        year: 2021,
        orientation: "portrait"
    },
    {
        title: "(Group Project) Laravel Web App using Leaflet JS and Tripay API",
        image: "/images/project3.webp",
        link: "https://github.com/chiknwy/I_Ben-Project",
        description: "A group project web app displaying maps using Leaflet and supporting payments via Tripay API. \n\nI worked as the backend developer in charge of configuring the Tripay payment integration.",
        tools: [
            "HTML",
            "CSS",
            "JavaScript",
            "Leaflet.js",
            "Tripay API Gateway"
        ],
        year: 2023,
        orientation: "portrait"
    },
    {
        title: "Laravel Web App for Statistic using TailwindCSS ",
        image: "/images/project1.webp",
        link: "https://github.com/GabrielNathanael/statistika-web",
        description: "An interactive web app for calculating statistical data such as mean, median, mode, and variance from user input.",
        tools: [
            "HTML",
            "Tailwind CSS",
            "JavaScript"
        ],
        year: 2022,
        orientation: "landscape"
    },
    {
        title: "Interactive Login Game — Catch Falling Characters to Login",
        image: "/images/project7.webp",
        link: "https://github.com/GabrielNathanael/falling-chars-login",
        description: "A creative login interface where users must catch falling characters with a paddle to populate username and password fields. It blends gameplay and UI interaction in a fun authentication experience.",
        tools: [
            "HTML5",
            "CSS3 / Tailwind",
            "JavaScript (Vanilla)"
        ],
        year: 2025,
        orientation: "landscape"
    },
    {
        title: "Draw Sketch with Turtle and OpenCV",
        image: "/images/project4.webp",
        link: "https://github.com/GabrielNathanael/sketch-draw-turtle-opencv",
        description: "A program that reads sketch images using OpenCV and translates them into visual turtle commands in Python.",
        tools: [
            "Python",
            "OpenCV",
            "turtle",
            "numpy",
            "matplotlib"
        ],
        year: 2021,
        orientation: "portrait"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const projectSwiperWrapper = document.querySelector('.project-swiper-wrapper');

    projects.forEach((project, idx) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';

        // Unified aspect ratio for all cards - shorter height
        const aspectClass = 'aspect-[4/3]';

        slide.innerHTML = `
            <div role="button" 
                 tabindex="0" 
                 class="project-card h-full cursor-pointer group">
                <div class="bg-white dark:bg-zinc-800 rounded-xl shadow-lg overflow-hidden 
                            transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] 
                            h-full flex flex-col">
                    <!-- Image Container with Fixed 4:3 Aspect Ratio -->
                    <div class="w-full ${aspectClass} bg-gray-100 dark:bg-zinc-700 overflow-hidden relative">
                        <div class="absolute inset-0 bg-cover bg-center blur-xl scale-110 opacity-30" 
                            style="background-image: url('${project.image}');"></div>
                        <img src="${project.image}" 
                            alt="${project.title}" 
                            class="w-full h-full object-contain transition-transform duration-500 
                                    group-hover:scale-110 relative z-10" 
                            loading="lazy">
                    </div>
                    
                    <!-- Content - More compact -->
                    <div class="p-4 flex-grow flex flex-col">
                        <h3 class="text-sm md:text-base font-bold text-gray-900 dark:text-white line-clamp-2 
                                   group-hover:text-violet-600 dark:group-hover:text-violet-400 
                                   transition-colors duration-300">
                            ${project.title}
                        </h3>
                        
                        <div class="mt-auto pt-3 flex items-center text-violet-600 dark:text-violet-400 
                                    text-xs md:text-sm font-medium opacity-0 group-hover:opacity-100 
                                    transition-opacity duration-300">
                            <span>View Details</span>
                            <svg class="w-3 h-3 md:w-4 md:h-4 ml-1 transition-transform group-hover:translate-x-1" 
                                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                      d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        `;

        slide.setAttribute('data-index', idx);
        projectSwiperWrapper.appendChild(slide);
    });

    // Initialize Swiper
    new Swiper('.project-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 }
        },
        navigation: {
            nextEl: '.project-button-next',
            prevEl: '.project-button-prev',
        },
        pagination: {
            el: '.project-swiper-pagination',
            type: 'progressbar',
        }
    });

    const modal = document.getElementById('project-modal');
    const closeModal = document.getElementById('close-modal');
    const modalImage = document.getElementById('modal-image');

    function isDesktopOrTablet() {
        return window.matchMedia('(min-width: 768px)').matches;
    }

    document.querySelectorAll('.project-swiper-wrapper .swiper-slide').forEach((slide) => {
        slide.addEventListener('click', (e) => {
            const idx = slide.getAttribute('data-index');
            const project = projects[idx];
            const modalContent = document.getElementById('modal-content');
            const modalFlex = document.getElementById('modal-flex');
            const modalImageDiv = document.getElementById('modal-image-container');
            const modalDetail = document.getElementById('modal-detail');

            modalContent.classList.remove('md:max-w-2xl', 'md:max-w-3xl');
            modalFlex.classList.remove('flex-row', 'flex-col');
            modalImageDiv.classList.remove('md:w-1/2', 'aspect-[3/4]', 'w-full', 'mb-6', 'md:mb-0');
            modalDetail.classList.remove('md:w-1/2', 'w-full');
            modalImage.classList.remove('object-contain', 'object-cover', 'max-h-[60vh]');

            if (isDesktopOrTablet()) {
                modalImage.src = project.image;
                modalImage.alt = project.title;

                // Set blurred background image
                modalImageDiv.style.backgroundImage = `url('${project.image}')`;
                modalImageDiv.style.backgroundSize = 'cover';
                modalImageDiv.style.backgroundPosition = 'center';
                modalImageDiv.style.position = 'relative';

                // Create blur overlay
                const existingOverlay = modalImageDiv.querySelector('.blur-overlay');
                if (!existingOverlay) {
                    const blurOverlay = document.createElement('div');
                    blurOverlay.className = 'blur-overlay absolute inset-0 backdrop-blur-2xl bg-black/40 dark:bg-black/60 -z-10';
                    modalImageDiv.insertBefore(blurOverlay, modalImageDiv.firstChild);
                }

                if (project.orientation === 'portrait') {
                    modalContent.classList.add('md:max-w-2xl');
                    modalFlex.classList.add('flex-row');
                    modalImageDiv.classList.add('md:w-1/2',);
                    modalDetail.classList.add('md:w-1/2');
                    modalImage.classList.add('object-contain', 'relative', 'z-10');
                } else {
                    modalContent.classList.add('md:max-w-3xl');
                    modalFlex.classList.add('flex-col');
                    modalImageDiv.classList.add('w-full', 'mb-6');
                    modalDetail.classList.add('w-full');
                    modalImage.classList.add('object-contain', 'max-h-[60vh]', 'relative', 'z-10');
                }
                modalImageDiv.classList.remove('hidden');
            } else {
                modalImage.src = '';
                modalImage.alt = '';
                modalImageDiv.classList.add('hidden');
                modalImageDiv.style.backgroundImage = '';
            }

            modalDetail.innerHTML = `
            <h3 class="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-gray-900 dark:text-white">${project.title}</h3>
            <p class="mb-2 md:mb-4 text-gray-700 dark:text-gray-200">${(project.description || '').replace(/\n/g, '<br>')}</p>
            <div class="mb-2 md:mb-4 flex flex-wrap gap-2">
                <span class="font-semibold text-gray-900 dark:text-white">Tools:</span>
                ${project.tools ? project.tools.map(t => `<span class="inline-block bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded px-2 py-1 mr-1 mb-1 text-xs">${t}</span>`).join('') : ''}
            </div>
            <a id="modal-link" href="${project.link}" target="_blank" rel="noopener" data-modal-link
                class="inline-flex items-center gap-2 text-violet-500 hover:text-violet-400 dark:hover:text-violet-300 font-semibold transition-all duration-200 no-underline hover:scale-105 hover:font-bold">
                <i class="fab fa-github"></i> Open in GitHub
            </a>
        `;

            const modalLink = document.getElementById('modal-link');
            if (modalLink) {
                modalLink.onclick = (ev) => { ev.stopPropagation(); };
            }
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
        // Clean up background
        const modalImageDiv = document.getElementById('modal-image-container');
        modalImageDiv.style.backgroundImage = '';
        const overlay = modalImageDiv.querySelector('.blur-overlay');
        if (overlay) overlay.remove();
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('flex');
            modal.classList.add('hidden');
            // Clean up background
            const modalImageDiv = document.getElementById('modal-image-container');
            modalImageDiv.style.backgroundImage = '';
            const overlay = modalImageDiv.querySelector('.blur-overlay');
            if (overlay) overlay.remove();
        }
    });

    window.addEventListener('resize', () => {
        if (!modal.classList.contains('hidden')) {
            const idx = Array.from(document.querySelectorAll('.project-swiper-wrapper .swiper-slide')).findIndex(slide => slide.classList.contains('active-modal'));
            if (idx !== -1) {
                const project = projects[idx];
                const modalContent = document.getElementById('modal-content');
                const modalFlex = document.getElementById('modal-flex');
                const modalImageDiv = document.getElementById('modal-image-container');
                const modalDetail = document.getElementById('modal-detail');
                modalContent.classList.remove('md:max-w-2xl', 'md:max-w-3xl');
                modalFlex.classList.remove('flex-row', 'flex-col');
                modalImageDiv.classList.remove('md:w-1/2', 'aspect-[3/4]', 'w-full', 'mb-6', 'md:mb-0');
                modalDetail.classList.remove('md:w-1/2', 'w-full');
                modalImage.classList.remove('object-contain', 'object-cover', 'max-h-[60vh]', 'relative', 'z-10');
                if (isDesktopOrTablet()) {
                    modalImage.src = project.image;
                    modalImage.alt = project.title;

                    modalImageDiv.style.backgroundImage = `url('${project.image}')`;
                    modalImageDiv.style.backgroundSize = 'cover';
                    modalImageDiv.style.backgroundPosition = 'center';
                    modalImageDiv.style.position = 'relative';

                    const existingOverlay = modalImageDiv.querySelector('.blur-overlay');
                    if (!existingOverlay) {
                        const blurOverlay = document.createElement('div');
                        blurOverlay.className = 'blur-overlay absolute inset-0 backdrop-blur-2xl bg-black/40 dark:bg-black/60';
                        modalImageDiv.insertBefore(blurOverlay, modalImageDiv.firstChild);
                    }

                    if (project.orientation === 'portrait') {
                        modalContent.classList.add('md:max-w-2xl');
                        modalFlex.classList.add('flex-row');
                        modalImageDiv.classList.add('md:w-1/2',);
                        modalDetail.classList.add('md:w-1/2');
                        modalImage.classList.add('object-contain', 'relative', 'z-10');
                    } else {
                        modalContent.classList.add('md:max-w-3xl');
                        modalFlex.classList.add('flex-col');
                        modalImageDiv.classList.add('w-full', 'mb-6');
                        modalDetail.classList.add('w-full');
                        modalImage.classList.add('object-contain', 'max-h-[60vh]', 'relative', 'z-10');
                    }
                    modalImageDiv.classList.remove('hidden');
                } else {
                    modalImage.src = '';
                    modalImage.alt = '';
                    modalImageDiv.classList.add('hidden');
                    modalImageDiv.style.backgroundImage = '';
                    const overlay = modalImageDiv.querySelector('.blur-overlay');
                    if (overlay) overlay.remove();
                }
            }
        }
    });
});


function showToast(message, isError = false, duration = 3000) {
    const overlay = document.getElementById("toast-overlay");
    const box = document.getElementById("toast-box");
    const icon = document.getElementById("toast-icon");
    const msg = document.getElementById("toast-message");
    const progress = document.getElementById("toast-progress-circle");
    const html = document.documentElement;

    if (!overlay || !box || !icon || !msg || !progress) return;

    const isDark = html.classList.contains('dark');
    const textColor = isDark ? 'text-white' : 'text-gray-900';
    const iconColor = isError ? (isDark ? '#f87171' : '#ef4444') : (isDark ? '#4ade80' : '#22c55e');
    const progressColor = iconColor;
    icon.innerHTML = isError
        ? `<svg class="w-8 h-8 ${textColor}" fill="none" stroke="${iconColor}" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="${iconColor}" stroke-width="2" fill="none"/><path stroke="${iconColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M15 9l-6 6m0-6l6 6"/></svg>`
        : `<svg class="w-8 h-8 ${textColor}" fill="none" stroke="${iconColor}" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="${iconColor}" stroke-width="2" fill="none"/><path stroke="${iconColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2l4-4"/></svg>`;

    msg.textContent = message;
    msg.className = `text-center text-base font-semibold mb-2 ${textColor}`;

    const totalLength = 2 * Math.PI * 14;
    progress.setAttribute("stroke", progressColor);
    progress.setAttribute("stroke-dasharray", totalLength);
    progress.setAttribute("stroke-dashoffset", "0");
    progress.style.transition = "none";

    overlay.classList.remove("hidden");
    overlay.classList.add("flex");

    setTimeout(() => {
        progress.style.transition = `stroke-dashoffset ${duration}ms linear`;
        progress.setAttribute("stroke-dashoffset", totalLength);
    }, 30);

    setTimeout(() => {
        overlay.classList.add("hidden");
        overlay.classList.remove("flex");
        progress.style.transition = "none";
        progress.setAttribute("stroke-dashoffset", "0");
    }, duration);
}

const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const form = this;
        const name = form.querySelector('[name="from_name"]').value.trim();
        const email = form.querySelector('[name="user_email"]').value.trim();
        const message = form.querySelector('[name="message"]').value.trim();
        const errorName = document.getElementById('error-name');
        const errorEmail = document.getElementById('error-email');
        const errorMessage = document.getElementById('error-message');
        let hasError = false;
        errorName.textContent = '';
        errorEmail.textContent = '';
        errorMessage.textContent = '';
        if (!name) {
            errorName.textContent = 'Name is required.';
            hasError = true;
        }
        if (!email) {
            errorEmail.textContent = 'Email is required.';
            hasError = true;
        } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
            errorEmail.textContent = 'Invalid email format.';
            hasError = true;
        }
        if (!message) {
            errorMessage.textContent = 'Message is required.';
            hasError = true;
        } else if (message.length < 10) {
            errorMessage.textContent = 'Message must be at least 10 characters.';
            hasError = true;
        } else if (message.length > 500) {
            errorMessage.textContent = 'Message must be at most 500 characters.';
            hasError = true;
        }
        if (hasError) return;
        const formData = new FormData(form);
        fetch("https://formsubmit.co/521c9077eb7dcf26272df8fb36d5dfef", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    showToast("Message sent successfully!");
                    form.reset();
                } else {
                    showToast("Failed to send message. Please try again.", true);
                }
            })
            .catch(() => {
                showToast("Failed to send message. Please try again.", true);
            });
    });
}

document.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', function () {
        this.blur();
    });
});

class DraggableButton {
    constructor(elementId) {
        this.element = document.getElementById(elementId);
        this.deleteArea = document.getElementById('delete-area');
        this.isDragging = false;
        this.hasActuallyDragged = false;
        this.startX = 0;
        this.startY = 0;
        this.initialX = 0;
        this.initialY = 0;
        this.holdTimer = null;
        this.holdDuration = 300;
        this.dragThreshold = 5;
        this.startEvent = null;

        this.init();
    }

    init() {
        this.element.addEventListener('mousedown', this.handleStart.bind(this));
        document.addEventListener('mousemove', this.handleMove.bind(this));
        document.addEventListener('mouseup', this.handleEnd.bind(this));

        this.element.addEventListener('touchstart', this.handleStart.bind(this), { passive: false });
        document.addEventListener('touchmove', this.handleMove.bind(this), { passive: false });
        document.addEventListener('touchend', this.handleEnd.bind(this));

        this.element.addEventListener('contextmenu', (e) => {
            if (this.isDragging) {
                e.preventDefault();
            }
        });

        this.element.addEventListener('click', (e) => {
            if (this.hasActuallyDragged) {
                e.preventDefault();
                e.stopPropagation();
                this.hasActuallyDragged = false;
            }
        });

        this.element.addEventListener('mousedown', (e) => {
            e.stopPropagation();
        });

        this.element.addEventListener('touchstart', (e) => {
            e.stopPropagation();
        }, { passive: false });
    }

    handleStart(e) {
        if (e.type === 'mousedown') {
            e.preventDefault();
        }

        this.startEvent = e;

        const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
        const clientY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY;

        this.startX = clientX;
        this.startY = clientY;

        const rect = this.element.getBoundingClientRect();
        this.initialX = rect.left;
        this.initialY = rect.top;

        this.holdTimer = setTimeout(() => {
            if (this.startEvent && this.startEvent.type === 'touchstart') {
                this.startEvent.preventDefault();
            }
            this.startDragging();
        }, this.holdDuration);
    }

    startDragging() {
        this.isDragging = true;
        this.element.classList.add('dragging');
        this.element.style.position = 'fixed';
        this.element.style.zIndex = '9999';
        this.element.style.transition = 'none';
        this.element.style.transform = 'none';

        this.showDeleteArea();
    }

    handleMove(e) {
        if (!this.isDragging) {
            if (this.holdTimer) {
                clearTimeout(this.holdTimer);
                this.holdTimer = null;
            }
            return;
        }

        e.preventDefault();

        const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
        const clientY = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY;

        const deltaX = clientX - this.startX;
        const deltaY = clientY - this.startY;

        const distanceMoved = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        if (distanceMoved > this.dragThreshold) {
            this.hasActuallyDragged = true;
        }

        let newX = this.initialX + deltaX;
        let newY = this.initialY + deltaY;

        const buttonRect = this.element.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        newX = Math.max(0, Math.min(newX, viewportWidth - buttonRect.width));
        newY = Math.max(0, Math.min(newY, viewportHeight - buttonRect.height));

        this.element.style.left = newX + 'px';
        this.element.style.top = newY + 'px';
        this.element.style.right = 'auto';
        this.element.style.bottom = 'auto';

        this.checkDeleteAreaOverlap();
    }

    handleEnd(e) {
        if (this.holdTimer) {
            clearTimeout(this.holdTimer);
            this.holdTimer = null;
        }

        this.startEvent = null;

        if (this.isDragging) {
            if (this.checkDeleteAreaOverlap()) {
                this.deleteButton();
                return;
            }

            this.isDragging = false;
            this.element.classList.remove('dragging');

            this.hideDeleteArea();

            setTimeout(() => {
                this.element.style.zIndex = '';
                this.element.style.transition = '';
            }, 100);
        }
    }

    showDeleteArea() {
        if (this.deleteArea) {
            this.deleteArea.classList.remove('hidden');
            this.deleteArea.classList.add('flex');
        }
    }

    hideDeleteArea() {
        if (this.deleteArea) {
            this.deleteArea.classList.add('hidden');
            this.deleteArea.classList.remove('flex');
        }
    }

    checkDeleteAreaOverlap() {
        if (!this.deleteArea) return false;

        const buttonRect = this.element.getBoundingClientRect();
        const deleteRect = this.deleteArea.getBoundingClientRect();

        const isOverlapping = !(buttonRect.right < deleteRect.left ||
            buttonRect.left > deleteRect.right ||
            buttonRect.bottom < deleteRect.top ||
            buttonRect.top > deleteRect.bottom);

        if (isOverlapping) {
            this.deleteArea.classList.add('bg-red-700');
            this.deleteArea.classList.remove('bg-red-600/90');
        } else {
            this.deleteArea.classList.remove('bg-red-700');
            this.deleteArea.classList.add('bg-red-600/90');
        }

        return isOverlapping;
    }

    deleteButton() {
        this.hideDeleteArea();

        this.element.remove();

        document.removeEventListener('mousemove', this.handleMove.bind(this));
        document.removeEventListener('mouseup', this.handleEnd.bind(this));
        document.removeEventListener('touchmove', this.handleMove.bind(this));
        document.removeEventListener('touchend', this.handleEnd.bind(this));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new DraggableButton('draggable-github');
});

window.addEventListener('resize', () => {
    const button = document.getElementById('draggable-github');
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let newX = rect.left;
    let newY = rect.top;

    if (rect.right > viewportWidth) {
        newX = viewportWidth - rect.width;
    }
    if (rect.bottom > viewportHeight) {
        newY = viewportHeight - rect.height;
    }

    if (newX !== rect.left || newY !== rect.top) {
        button.style.left = Math.max(0, newX) + 'px';
        button.style.top = Math.max(0, newY) + 'px';
        button.style.right = 'auto';
        button.style.bottom = 'auto';
    }
});