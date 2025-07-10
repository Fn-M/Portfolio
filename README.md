# Portfolio - Fábio Miranda

A modern and responsive portfolio built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Perfectly adapts to all devices
- **Complete Sections**: Hero, About, Professional Projects, Personal Projects, Skills, and Contact
- **Smooth Animations**: CSS transitions and animations for a fluid experience
- **SEO Optimized**: Semantic structure and proper meta tags

## 🛠️ Technologies Used

- **React 18** - JavaScript library for user interfaces
- **TypeScript** - Static typing for JavaScript
- **Vite** - Fast and modern build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icons

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/seu-usuario/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
Portfolio/
  ├── index.html
  ├── package.json
  ├── postcss.config.js
  ├── tailwind.config.js
  ├── tsconfig.json
  ├── vite.config.ts
  ├── README.md
  ├── Resources/
  │     ├── Certifications.json
  │     ├── PersonalProjects.json
  │     └── ProfessionalProjects.json
  └── src/
        ├── App.tsx
        ├── index.css
        ├── main.tsx
        └── components/
              ├── About.tsx
              ├── AccessibilityMenu.tsx
              ├── Certifications.tsx
              ├── Contact.tsx
              ├── Footer.tsx
              ├── Header.tsx
              ├── Hero.tsx
              ├── PersonalProjects.tsx
              ├── ProfessionalProjects.tsx
              └── Skills.tsx
```

- The `Resources/` directory contains the required JSON files for certifications and projects.
- The `src/components/` directory contains the main React components for each section of the portfolio.
- Other personal information and content are spread throughout the UI components and should be edited directly for full customization.

## 🎨 Customization

Some sections of the portfolio now load their data from JSON files located in the `Resources/` directory:

- **Certifications**: Edit `Resources/Certifications.json` to add, remove, or update your certifications.
- **Personal Projects**: Edit `Resources/PersonalProjects.json` to manage your personal projects.
- **Professional Projects**: Edit `Resources/ProfessionalProjects.json` to manage your professional projects.

Each JSON file should follow the structure expected by the corresponding component. See the code for examples or use the provided templates.

Other personal information (such as your bio, contact details, and experience) is still spread throughout the UI in the React components (e.g., `About.tsx`, `Contact.tsx`). To fully personalize the portfolio, you will need to edit these files directly and apply your own style and content as needed. 

## Resources Directory

This project requires several JSON files under the `Resources/` directory:

- `Certifications.json`: List of certifications to display in the Certifications section.
- `PersonalProjects.json`: List of personal projects for the Personal Projects section.
- `ProfessionalProjects.json`: List of professional projects for the Professional Projects section.

These files are not included by default and should be created/maintained with your own content and structure as used in the components.

## Personal Information

Other personal information (such as your bio, contact details, and experience) is spread throughout the UI in the React components (e.g., `About.tsx`, `Contact.tsx`). To fully personalize the portfolio, you will need to edit these files directly and apply your own style and content as needed. 