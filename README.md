# React + Tailwind CSS Project Setup

## Overview

This project is a React.js application configured with Tailwind CSS for styling. Tailwind CSS is used alongside existing CSS styles to build and customize React components.

## Environment Setup

### 1. React Project

The project was created using Create React App:

```bash
npx create-react-app project
```

Installed project dependencies:

```bash
npm install
```

---

## 2. Tailwind CSS Setup

Tailwind CSS was installed using:

```bash
npm install -D tailwindcss postcss autoprefixer
```

Tailwind configuration was created and customized.

The `tailwind.config.js` file contains:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
```

The `preflight: false` option was added to disable Tailwind's default CSS reset, preventing conflicts with the existing project styling.

---

## 3. Adding Tailwind Styles

Tailwind directives were added to `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 4. Testing Tailwind

Tailwind CSS was tested by adding utility classes to React components:

```jsx
<h1 className="text-4xl font-bold text-blue-500">
  Tailwind is working!
</h1>
```

The application was started with:

```bash
npm start
```

Tailwind styling successfully rendered in the browser.

---

## Running the Project

Start the development server:

```bash
npm start
```

The application runs at:

```
http://localhost:3000
```

---

## Technologies Used

* React.js
* Tailwind CSS
* JavaScript
* React Router
* Redux Toolkit
* Node.js
* npm

## Repository

GitHub Repository:

NainikaSharma-intern-repo
