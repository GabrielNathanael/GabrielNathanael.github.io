
        // Tailwind Dark Mode Configuration
        tailwind.config = {
            darkMode: 'class',
        }
    

        // Smooth scrolling untuk tautan internal
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
        const themeIcon = document.getElementById('theme-icon');
        const htmlElement = document.documentElement;

        // Cek tema awal
        if (localStorage.getItem('theme') === 'dark') {
            htmlElement.classList.add('dark');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }

        darkModeToggle.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
            
            if (htmlElement.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
                themeIcon.classList.replace('fa-moon', 'fa-sun');
            } else {
                localStorage.removeItem('theme');
                themeIcon.classList.replace('fa-sun', 'fa-moon');
            }
        });

        // Mobile Menu Toggle
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const mobileMenuClose = document.getElementById('mobile-menu-close');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

        // Open Mobile Menu
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.remove('-translate-x-full');
        });

        // Close Mobile Menu
        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.add('-translate-x-full');
        });

        // Close menu when a nav link is clicked
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('-translate-x-full');
            });
        });


        // Sertifikat Carousel
        const certificates = [
            { title: "Azure AI Fundamentals", issuer: "Coursera", year: 2023, image: "/images/certificate7.jpg" },
            { title: "Sololearn Introduction to Python", issuer: "Udemy", year: 2021, image: "/images/certificate4.jpg" },
            { title: "HSK 1", issuer: "Udemy", year: 2021, image: "/images/certificate8.jpg" },
            { title: "Sololearn Introduction to C++", issuer: "Udemy", year: 2021, image: "/images/certificate3.jpg" },
            { title: "Sololearn Introduction to HTML", issuer: "Udacity", year: 2022, image: "/images/certificate1.jpg" },
            { title: "Sololearn Introduction to CSS", issuer: "Udemy", year: 2021, image: "/images/certificate2.jpg" },
            { title: "Sololearn Introduction to C", issuer: "Udemy", year: 2021, image: "/images/certificate5.jpg" },
            { title: "Sololearn Introduction to C#", issuer: "Udemy", year: 2021, image: "/images/certificate6.jpg" },
            
            // Tambahkan sertifikat lainnya di sini
        ];

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
                spaceBetween: 20,
                breakpoints: {
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            });
        });

        // project Carousel
        const projects = [
            { title: "I-BEN", issuer: "", year: 2023, image: "/images/project3.jpg", link:"https://github.com/chiknwy/I_Ben-Project" },
            { title: "Statistic Website", issuer: "", year: 2022, image: "/images/project1.jpg", link: "https://github.com/GabrielNathanael/statistika-web"},
            { title: "Flappy Bird with NEAT", issuer: "", year: 2021, image: "/images/project2.jpg", link: "https://github.com/GabrielNathanael/AI-FlappyBird"},
            // Tambahkan sertifikat lainnya di sini
        ];
        document.addEventListener('DOMContentLoaded', () => {
            const projectSwiperWrapper = document.querySelector('.project-swiper-wrapper');

            projects.forEach(project => {
                const slide = document.createElement('div');
                slide.className = 'swiper-slide';
                slide.innerHTML = `
                    <a href="${project.link}" target="_blank" class="block"> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
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
                spaceBetween: 20,
                breakpoints: {
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            });
        });

        // Initialize Email.js
        (function() {
            emailjs.init("IEi5Rpo2GniMIrc0a"); // Public Key Anda
        })();

        // Form submission handling
        document.getElementById("contactForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission

            const serviceID = "service_lqb2htf"; // Your Service ID
            const templateID = "template_xg71zxn"; // Template ID Anda

            // Send the form data using Email.js
            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    alert("Message sent successfully!");
                    this.reset(); // Reset the form
                })
                .catch((error) => {
                    alert("Failed to send message. Please try again.");
                    console.error("Email.js error:", error);
                });
        });
    