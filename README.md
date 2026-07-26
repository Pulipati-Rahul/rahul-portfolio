# Rahul Pulipati | Personal Portfolio

A sleek, modern, and fully responsive developer portfolio built to showcase technical skills, featured web applications, and professional services. This project uses vanilla HTML5, CSS3, and JavaScript, prioritizing visual excellence, fluid animations, and responsiveness.

---

## 🚀 Live Preview
Explore the portfolio locally or host it directly via platforms like **Vercel**, **Netlify**, or **GitHub Pages**.
*   **Active Features:** Dynamic typing animation, floating profile card, interactive SVG-based contact cards, and smooth scroll reveal transitions.

---

## 🛠️ Features

*   **Premium Visuals & Dark Mode:** Curated dark-themed gradient background utilizing HSL tailored colors (`#020617` to `#1e293b`).
*   **Dynamic Hero Section:** Two-column desktop grid displaying a typing introduction animation alongside a floating, glowing circular profile photo (`profile.jpeg`).
*   **Technical Skills Grid:** Clean categorizations across Frontend, Backend, Database, Languages, Tools, and Hosting & Cloud stacks.
*   **Development Roadmap:** Visual timeline demonstrating currently mastered technologies and ongoing learning tracks.
*   **Services Portfolio:** Professional showcase detailing competence in Full Stack Development, Backend Development, UI/UX & Responsive Design, Resume Building, Digital Marketing, and API Integration.
*   **Clickable Contact Grid:** Completely updated social cards (Email, LinkedIn, GitHub, Instagram, Facebook) displaying custom hover elevations, neon border glows, and self-filling inline SVG icons.

---

## 💻 Tech Stack

*   **Structure:** Semantic HTML5
*   **Styling:** Modern Vanilla CSS3 (Custom properties, CSS Grids, Flexbox, Keyframes)
*   **Interactions:** Vanilla JavaScript (Dynamic scroll reveals, typing animations, scroll-linked active navbar)
*   **Typography:** [Google Fonts (Poppins)](https://fonts.google.com)
*   **Iconography:** High-quality inline SVGs (for crisp, zero-dependency loading)

---

## 📁 File Structure

```text
Rahul Portfolio/
├── portfolio.html      # Main page structure & semantic layouts
├── stylesheets.css     # Core stylesheet, variables, animations, and responsive media queries
├── javascript.js       # Typing effect, scroll reveals, active navigation logic
├── profile.jpeg        # Profile avatar photo
└── README.md           # Documentation for GitHub repository
```

---

## ⚙️ Quick Start

To run this project locally:

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/Rahul19347558865/Rahul-Portfolio.git
    cd Rahul-Portfolio
    ```
2.  **Open in Browser:**
    *   Simply double-click `portfolio.html` to open it in your default web browser, or:
    *   Use a local development server like **Live Server** (VS Code extension) for live hot-reloading.

---

## ✏️ Customization

Make this portfolio your own by modifying these files:

### 1. Update Personal Info & Links (`portfolio.html`)
*   Change the profile names, titles, and descriptions inside sections: `<section id="home">`, `<section id="about">`, and `<section id="education">`.
*   Replace contact URLs under `<div class="contact-grid">` with your own profile links.

### 2. Update Profile Image
*   Replace `profile.jpeg` with your own image, keeping the filename identical, or edit the source path in:
    ```html
    <img src="profile.jpeg" alt="Pulipati Rahul">
    ```

### 3. Edit Typing Roles (`javascript.js`)
Modify the `roles` array at the top of `javascript.js` to change the roles printed out in the typing animation:
```javascript
const roles = [
    "Full Stack Developer",
    "Web Developer",
    "Frontend Developer",
    "Problem Solver",
    "Digital Marketing Enthusiast"
];
```

---

## 📄 License

This repository is available under the [MIT License](LICENSE). Feel free to modify and build upon this code for your personal portfolios!
