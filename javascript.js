document.addEventListener("DOMContentLoaded", () => {
    
    /* ==========================================
       1. TYPING EFFECT (Hero Section)
    ========================================== */
    const roles = [
        "Full Stack Developer",
        "Software Engineer",
        "Problem Solver",
        "API Architect"
    ];
    
    const typingElement = document.getElementById("typing");
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let typingSpeed = 100;
    
    function typeEffect() {
        if (!typingElement) return;
        
        const currentRole = roles[roleIndex];
        
        if (!deleting) {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100; // Normal typing speed
            
            if (charIndex === currentRole.length) {
                deleting = true;
                typingSpeed = 2000; // Pause at full word
            }
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // Faster deleting speed
            
            if (charIndex === 0) {
                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typingSpeed = 500; // Pause before typing next word
            }
        }
        
        setTimeout(typeEffect, typingSpeed);
    }
    
    // Initial trigger
    setTimeout(typeEffect, 1000);

    /* ==========================================
       2. MOBILE MENU NAVIGATION
    ========================================== */
    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-link");
    
    if (menuToggle && navbar) {
        menuToggle.addEventListener("click", () => {
            const isOpened = menuToggle.getAttribute("aria-expanded") === "true";
            menuToggle.setAttribute("aria-expanded", !isOpened);
            menuToggle.classList.toggle("active");
            navbar.classList.toggle("active");
        });
        
        // Close menu when links are clicked
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.classList.remove("active");
                navbar.classList.remove("active");
            });
        });
    }

    /* ==========================================
       3. HEADER SCROLL EFFECT
    ========================================== */
    const header = document.querySelector(".header");
    
    window.addEventListener("scroll", () => {
        if (!header) return;
        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    /* ==========================================
       4. INTERSECTION OBSERVER FOR SCROLL REVEALS
    ========================================== */
    const revealElements = document.querySelectorAll(".scroll-reveal");
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                
                // If it is a skill-card, trigger progress bar animations inside it
                if (entry.target.classList.contains("skill-card")) {
                    entry.target.classList.add("show");
                }
                
                observer.unobserve(entry.target); // Reveal only once
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
    });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    /* ==========================================
       5. ACTIVE NAVBAR LINK OBSERVER
    ========================================== */
    const sections = document.querySelectorAll("section");
    
    const navObserverOptions = {
        threshold: 0.2,
        rootMargin: "-20% 0px -40% 0px"
    };
    
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, navObserverOptions);
    
    sections.forEach(section => {
        navObserver.observe(section);
    });

    /* ==========================================
       6. DYNAMIC FORM SUBMISSION & TOAST TRIGGER
    ========================================== */
    const contactForm = document.getElementById("contactForm");
    const toastNotification = document.getElementById("toastNotification");
    
    if (contactForm && toastNotification) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const name = document.getElementById("formName").value;
            const email = document.getElementById("formEmail").value;
            const message = document.getElementById("formMessage").value;
            
            // Format mailto body
            const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            const mailtoUrl = `mailto:pulipatirahul19@gmail.com?subject=${subject}&body=${body}`;
            
            // Open user mail client
            window.location.href = mailtoUrl;
            
            // Show toast feedback UI
            toastNotification.classList.add("show");
            
            // Hide toast after 4 seconds
            setTimeout(() => {
                toastNotification.classList.remove("show");
            }, 4000);
            
            // Reset fields
            contactForm.reset();
        });
    }
    
    /* ==========================================
       7. CONSOLE SIGNATURE
    ========================================== */
    console.log(
        "%cWelcome to Pulipati Rahul's Portfolio",
        "color:#a78bfa; font-size:18px; font-weight:bold; font-family:'Plus Jakarta Sans',sans-serif;"
    );
    console.log("Visual Redesign inspired by Vercel, Linear, & modern screenshot assets.");
});
