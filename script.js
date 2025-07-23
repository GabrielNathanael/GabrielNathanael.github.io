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
    { title: "Azure AI Fundamentals", issuer: "Microsoft", year: 2024, image: "/images/certificate7.jpg" },
    { title: "Level 3: Advanced App Operations", issuer: "Google Cloud Skills Boost", year: 2025, image: "/images/certificate14.png", link: "https://www.cloudskillsboost.google/public_profiles/e7a04078-a982-40a5-b8d1-3fe55d4e1220/badges/17075395" },
    { title: "Level 2: Modern Application Deployment", issuer: "Google Cloud Skills Boost", year: 2025, image: "/images/certificate13.png", link: "https://www.cloudskillsboost.google/public_profiles/e7a04078-a982-40a5-b8d1-3fe55d4e1220/badges/17063870" },
    { title: "Level 1: Core Infrastructure and Security", issuer: "Google Cloud Skills Boost", year: 2025, image: "/images/certificate9.png", link: "https://www.cloudskillsboost.google/public_profiles/e7a04078-a982-40a5-b8d1-3fe55d4e1220/badges/17032804" },
    { title: "Skills Boost Arcade Base Camp July 2025", issuer: "Google Cloud Skills Boost", year: 2025, image: "/images/certificate10.png", link: "https://www.cloudskillsboost.google/public_profiles/e7a04078-a982-40a5-b8d1-3fe55d4e1220/badges/17021616" },
    { title: "Web Development", issuer: "Sololearn", year: 2025, image: "/images/certificate12.jpg" },
    { title: "Skills Boost Arcade Trivia July 2025 Week 1", issuer: "Google Cloud Skills Boost", year: 2025, image: "/images/certificate15.png", link: "https://www.cloudskillsboost.google/public_profiles/e7a04078-a982-40a5-b8d1-3fe55d4e1220/badges/17021616" },
    { title: "Sololearn Introduction to JavaScript", issuer: "Sololearn", year: 2025, image: "/images/certificate12.jpg" },
    { title: "Sololearn Introduction to Python", issuer: "Sololearn", year: 2024, image: "/images/certificate4.jpg" },
    { title: "HSK 1", issuer: "Balingkang Confucius Institute", year: 2024, image: "/images/certificate8.jpg" },
    { title: "Sololearn Introduction to C++", issuer: "Sololearn", year: 2023, image: "/images/certificate3.jpg" },
    { title: "Sololearn Introduction to HTML", issuer: "Sololearn", year: 2023, image: "/images/certificate1.jpg" },
    { title: "Sololearn Introduction to CSS", issuer: "Sololearn", year: 2023, image: "/images/certificate2.jpg" },
    { title: "Sololearn Introduction to C", issuer: "Sololearn", year: 2024, image: "/images/certificate5.jpg" },
    { title: "Sololearn Introduction to C#", issuer: "Sololearn", year: 2024, image: "/images/certificate6.jpg" }
];

document.addEventListener('DOMContentLoaded', () => {
    const certificateSwiperWrapper = document.querySelector('.certificate-swiper-wrapper');

    certificates.forEach((cert, idx) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        if (cert.link) {
            slide.classList.add('transition-transform', 'duration-200', 'hover:scale-105', 'cursor-pointer');
        }
        slide.innerHTML = `
            <div class="bg-gray-100 dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden">
                <img src="${cert.image}" alt="${cert.title}" class="w-full h-56 object-contain bg-white rounded-t-lg">
                <div class="p-6">
                    <h3 class="text-base font-semibold dark:text-white">${cert.title}</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">${cert.issuer} &bull; ${cert.year}</p>
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

    new Swiper('.certificate-swiper', {
        slidesPerView: 1,
        spaceBetween: 15,
        breakpoints: {
            640: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 15 }
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
        title: "Task Manager Web App with Vite React, Laravel, and Firebase Authentication",
        image: "/images/project5.jpg",
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
        title: "(Group Project) Laravel Web App using Leaflet JS and Tripay API",
        image: "/images/project3.jpg",
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
        title: "Flappy Bird with NEAT (NeuroEvolution of Augmenting Topologies)",
        image: "/images/project2.jpg",
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
        title: "Laravel Web App for Statistic using TailwindCSS ",
        image: "/images/project1.jpg",
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
        title: "Draw Sketch with Turtle and OpenCV",
        image: "/images/project4.jpg",
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
        slide.innerHTML = `
            <div role="button" tabindex="0" class="block project-card transition-transform duration-200 md:hover:scale-105 cursor-pointer">
                <div class="bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden h-90">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-56 object-fit">
                    <div class="p-6 pb-4">
                        <h3 class="text-base font-semibold dark:text-white">${project.title}</h3>
                    </div>
                </div>
            </div>
        `;
        slide.setAttribute('data-index', idx);
        projectSwiperWrapper.appendChild(slide);
    });

    new Swiper('.project-swiper', {
        slidesPerView: 1,
        spaceBetween: 15,
        breakpoints: {
            640: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 15 }
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
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalTools = document.getElementById('modal-tools');
    const modalLink = document.getElementById('modal-link');
    const modalImage = document.getElementById('modal-image');
    const modalImageDiv = modalImage.parentElement;

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
                if (project.orientation === 'portrait') {
                    modalContent.classList.add('md:max-w-4xl');
                    modalFlex.classList.add('flex-row');
                    modalImageDiv.classList.add('md:w-1/2', 'aspect-[3/4]');
                    modalDetail.classList.add('md:w-1/2');
                    modalImage.classList.add('object-contain');
                } else {
                    modalContent.classList.add('md:max-w-3xl');
                    modalFlex.classList.add('flex-col');
                    modalImageDiv.classList.add('w-full', 'mb-6');
                    modalDetail.classList.add('w-full');
                    modalImage.classList.add('object-contain', 'max-h-[60vh]');
                }
                modalImageDiv.classList.remove('hidden');
            } else {
                modalImage.src = '';
                modalImage.alt = '';
                modalImageDiv.classList.add('hidden');
            }
            modalDetail.innerHTML = `
              <h3 class="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-gray-900 dark:text-white">${project.title}</h3>
              <p class="mb-2 md:mb-4 text-gray-700 dark:text-gray-200"> ${(project.description || '').replace(/\n/g, '<br>')} </p>
              <div class="mb-2 md:mb-4 flex flex-wrap gap-2">
                <span class="font-semibold text-gray-900 dark:text-white">Tools:</span>
                ${project.tools ? project.tools.map(t => `<span class=\"inline-block bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded px-2 py-1 mr-1 mb-1 text-xs\">${t}</span>`).join('') : ''}
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
    });
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('flex');
            modal.classList.add('hidden');
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
                modalImage.classList.remove('object-contain', 'object-cover', 'max-h-[60vh]');
                if (isDesktopOrTablet()) {
                    modalImage.src = project.image;
                    modalImage.alt = project.title;
                    if (project.orientation === 'portrait') {
                        modalContent.classList.add('md:max-w-2xl');
                        modalFlex.classList.add('flex-row');
                        modalImageDiv.classList.add('md:w-1/2', 'aspect-[3/4]');
                        modalDetail.classList.add('md:w-1/2');
                        modalImage.classList.add('object-contain');
                    } else {
                        modalContent.classList.add('md:max-w-3xl');
                        modalFlex.classList.add('flex-col');
                        modalImageDiv.classList.add('w-full', 'mb-6');
                        modalDetail.classList.add('w-full');
                        modalImage.classList.add('object-contain', 'max-h-[60vh]');
                    }
                    modalImageDiv.classList.remove('hidden');
                } else {
                    modalImage.src = '';
                    modalImage.alt = '';
                    modalImageDiv.classList.add('hidden');
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