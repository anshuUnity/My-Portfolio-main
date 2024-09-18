# Qusai Johar's Portfolio

<div align="center">
  <br />
  <img src="https://github.com/adrianhajdin/portfolio/assets/151519281/c6ca3c03-6cb7-4f67-a9b9-a73da5bfa0d8" alt="Project Banner">
  <br />
  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="Next.js" />
    <img src="https://img.shields.io/badge/-Framer-black?style=for-the-badge&logoColor=white&logo=framer&color=0055FF" alt="Framer" />
    <img src="https://img.shields.io/badge/-Three_JS-black?style=for-the-badge&logoColor=white&logo=threedotjs&color=000000" alt="Three.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="Tailwind CSS" />
  </div>
  <h3 align="center">A Modern Portfolio by Qusai Johar</h3>
  <div align="center">
    This project showcases my skills and projects using modern web technologies.
  </div>
</div>

## 📋 Table of Contents

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Code Snippets](#snippets)
6. 🔗 [Assets](#links)
7. 🚀 [More](#more)

## 🤖 Introduction

This portfolio is built using **Next.js** for the user interface, **Three.js** for 3D rendering, **Framer Motion** for animations, and **TailwindCSS** for styling. It is designed to present my skills in an engaging manner.

If you need assistance or encounter any issues, feel free to reach out.

## ⚙️ Tech Stack

- **Next.js**
- **Three.js**
- **Framer Motion**
- **Tailwind CSS**

## 🔋 Features

- **Hero Section**: A captivating introduction with a dynamic background.
- **Bento Grid**: A modern layout displaying my personal information.
- **3D Elements**: Interactive designs with 3D effects.
- **Testimonials**: A dynamic section for showcasing client feedback.
- **Work Experience**: Clear presentation of my professional background.
- **Canvas Effects**: Visually striking effects in specific sections.
- **Responsiveness**: Ensures a seamless experience across all devices.

## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

**Cloning the Repository**

```bash
git clone https://github.com/Qusai007/My-Portfolio-main.git
cd portfolio
```

**Installation**

Install project dependencies:

```bash
npm install
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## 🕸️ Code Snippets

<details>
<summary><code>data/index.ts</code></summary>

```typescript
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

// Additional code for gridItems, projects, testimonials, etc.
```

</details>

<details>
<summary><code>tailwind.config.ts</code></summary>

```ts
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // Custom theme configurations
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Additional plugins if needed
  ],
};

export default config;
```

</details>

## 🔗 Assets

Assets used in the project can be found [here](https://drive.google.com/file/d/1ZmtiMilUYTp1wkiXWMFX6AUk-msE981-/view?usp=sharing).

## 🚀 More

**Enhance your skills with advanced courses**: If you enjoyed creating this project, consider exploring more resources to further your learning.

Feel free to connect with me for collaboration or questions. Thank you for visiting my portfolio!