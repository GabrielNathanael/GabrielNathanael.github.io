// Konfigurasi Tailwind
tailwind.config = {
    darkMode: 'class',
};

// Animasi dengan TypeIt
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

// Smooth scroll semua anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeToggleDesktop = document.getElementById('dark-mode-toggle-desktop');
const themeIcon = document.getElementById('theme-icon');
const themeIconDesktop = document.getElementById('theme-icon-desktop');
const htmlElement = document.documentElement;

// Cek tema awal
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

// Menu mobile
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const menuOverlay = document.getElementById('menu-overlay');

// Buka menu
mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-full');
    menuOverlay.classList.remove('hidden');
});

// Tutup menu
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

// Data Sertifikat
const certificates = [
    { title: "Azure AI Fundamentals", issuer: "Coursera", year: 2023, image: "/images/certificate7.jpg" },
    { title: "Sololearn Introduction to Python", issuer: "Udemy", year: 2021, image: "/images/certificate4.jpg" },
    { title: "HSK 1", issuer: "Udemy", year: 2021, image: "/images/certificate8.jpg" },
    { title: "Sololearn Introduction to C++", issuer: "Udemy", year: 2021, image: "/images/certificate3.jpg" },
    { title: "Sololearn Introduction to HTML", issuer: "Udacity", year: 2022, image: "/images/certificate1.jpg" },
    { title: "Sololearn Introduction to CSS", issuer: "Udemy", year: 2021, image: "/images/certificate2.jpg" },
    { title: "Sololearn Introduction to C", issuer: "Udemy", year: 2021, image: "/images/certificate5.jpg" },
    { title: "Sololearn Introduction to C#", issuer: "Udemy", year: 2021, image: "/images/certificate6.jpg" },
    // Tambahkan sertifikat jika perlu
];

// Inisialisasi Sertifikat Carousel
document.addEventListener('DOMContentLoaded', () => {
    const certificateSwiperWrapper = document.querySelector('.certificate-swiper-wrapper');

    certificates.forEach(cert => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
                <img src="${cert.image}" alt="${cert.title}" class="w-full h-56 object-fit: contain">
                <div class="p-6">
                    <h3 class="text-xl font-semibold dark:text-white">${cert.title}</h3>
                </div>
            </div>
        `;
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
            clickable: true
        }
    });
});

// Data Project
const projects = [
    { title: "Laravel + Tripay API", issuer: "", year: 2023, image: "/images/project3.jpg", link: "https://github.com/chiknwy/I_Ben-Project" },
    { title: "Laravel Statistic Website", issuer: "", year: 2022, image: "/images/project1.jpg", link: "https://github.com/GabrielNathanael/statistika-web" },
    { title: "Flappy Bird with NEAT", issuer: "", year: 2021, image: "/images/project2.jpg", link: "https://github.com/GabrielNathanael/AI-FlappyBird" },
    { title: "Draw  withTurtle and OpenCV", issuer: "", year: 2021, image: "/images/project4.jpg", link: "https://github.com/GabrielNathanael/AI-FlappyBird" },
    // Tambahkan projek jika perlu
];

// Inisialisasi Project Carousel
document.addEventListener('DOMContentLoaded', () => {
    const projectSwiperWrapper = document.querySelector('.project-swiper-wrapper');

    projects.forEach(project => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <a href="${project.link}" target="_blank" class="block">
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-56 object-fit: contain">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold dark:text-white">${project.title}</h3>
                    </div>
                </div>
            </a>
        `;
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
            clickable: true
        }
    });
});

// Inisialisasi EmailJS
(function () {
    emailjs.init("IEi5Rpo2GniMIrc0a");
})();

// Fungsi untuk menampilkan toast
function showToast(message, isError = false) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.remove("hidden");
    toast.classList.remove("bg-green-500", "bg-red-500");
    toast.classList.add(isError ? "bg-red-500" : "bg-green-500");

    // Tampilkan dan sembunyikan otomatis
    setTimeout(() => {
        toast.classList.add("hide");
        setTimeout(() => {
            toast.classList.add("hidden");
            toast.classList.remove("hide");
        }, 300);
    }, 3000);
}

// Submit form EmailJS
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const serviceID = "service_lqb2htf";
    const templateID = "template_xg71zxn";

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            showToast("Message sent successfully!");
            this.reset();
        })
        .catch((error) => {
            showToast("Failed to send message. Please try again.", true);
            console.error("Email.js error:", error);
        });
});