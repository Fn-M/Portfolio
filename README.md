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

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Header with navigation
│   ├── Hero.tsx        # Main section
│   ├── About.tsx       # About me
│   ├── ProfessionalProjects.tsx  # Professional projects
│   ├── PersonalProjects.tsx      # Personal projects
│   ├── Skills.tsx      # Skills
│   ├── Contact.tsx     # Contact
│   ├── Footer.tsx      # Footer
├── contexts/           # React contexts
├── hooks/              # Custom hooks
├── types/              # TypeScript type definitions
├── App.tsx             # Main component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🎨 Customization

### Colors and Theme

You can change the main colors by editing Tailwind CSS classes in the components.

### Content

To customize the content:

1. **Personal Information**: Edit the `Hero.tsx` and `About.tsx` components
2. **Projects**: Update the project arrays in `ProfessionalProjects.tsx` and `PersonalProjects.tsx`
3. **Skills**: Modify the `skillCategories` array in `Skills.tsx`
4. **Contact**: Update the information in `Contact.tsx`

### Images

To add real images, replace the placeholders in the corresponding components. 