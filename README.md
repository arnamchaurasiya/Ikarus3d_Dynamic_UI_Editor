# Dynamic UI Editor for Customizable Designs

## 🧩 Project Overview

https://github.com/user-attachments/assets/62811616-2a09-47de-8cbb-f8c37fdc783e

The **Dynamic UI Editor** is a React-based application that allows users to **customize a given Figma UI design dynamically** without modifying the source code. The editor enables real-time visual changes like typography, colors, layouts, and spacing — all reflected instantly in a live preview.

This project mimics real-world frontend scenarios where clients request quick UI tweaks for dashboards, SaaS tools, or admin panels. It focuses on **dynamic rendering**, **state management**, **responsive design**, and **extensibility**.

---

## 🎨 Figma Design

The provided Figma file serves as the **base UI reference**. The editor interface, however, was **fully custom-built** to provide configuration controls and live preview functionality.

> **Note:** The editor was implemented independently — only the visual reference was taken from the Figma design.

---

## ⚙️ Core Features

### 🧱 Typography

* Font Family (Roboto, Inter, Poppins)
* Font Weight (400–700)
* Font Size (10px–60px)

### 🔘 Button Controls

* Border Radius
* Shadow (none, small, medium, large)
* Alignment (left, center, right)
* Background Color (HEX/RGB)
* Text Color (HEX/RGB)

### 🖼️ Galleries & Images

* Gallery Alignment (left, center, right)
* Image Spacing
* Image Border Radius

### 📐 Layout Customization

* Card Corner Radius
* Container Padding
* Section Background Color

### ✏️ Stroke/Border

* Stroke Color
* Stroke Weight

### 🔄 Layout Switching

* Toggle between two pre-defined layout designs

### ⚡ Live Preview

* Real-time updates as changes are applied

### 🧾 Optional Export

* Export current configuration as JSON for reuse

---

## 🧠 Tech Stack

### Frontend Framework

* **React 19** – Concurrent features and hooks
* **TypeScript** – Type-safe codebase
* **Vite** – Fast dev server and bundler

### UI & Styling

* **Mantine v7** – Modern React component library

### State Management

* **React Redux** – Official Redux bindings for predictable state

### Routing

* **React Router v7** – Declarative routing for editor and preview views

### Core Editor Engine

* **GrapesJS** – Web builder framework for drag-and-drop UI editing

---

## 🧩 Component API

Each customizable UI element is built as a **React functional component** with props that define its visual configuration. Example:

```tsx
<Button
  text="Submit"
  fontFamily="Poppins"
  fontWeight={600}
  fontSize={16}
  backgroundColor="#007BFF"
  textColor="#FFFFFF"
  borderRadius={8}
  shadow="medium"
  align="center"
/>
```

All props are dynamically controlled via Redux state and updated instantly in the preview.

---

## 🧭 How the Editor Works

1. **Initial Load:** The app renders the default UI layout as defined in the Figma reference.
2. **Editor Panel:** The editor provides sliders, dropdowns, and color pickers to modify design parameters.
3. **State Management:** Each change dispatches Redux actions that update the centralized configuration state.
4. **Live Preview:** Components re-render automatically to reflect the updated styles in real-time.
5. **Layout Switcher:** Users can toggle between multiple prebuilt layouts.
6. **(Optional)** Users can export the current layout configuration as JSON.

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/dynamic-ui-editor.git
cd dynamic-ui-editor
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start Development Server

```bash
npm run dev
```

### 4️⃣ Build for Production

```bash
npm run build
```

---

## 🌐 Deployment

The app can be deployed on platforms like **Vercel**, **Netlify**, or **GitHub Pages**. The build output is optimized by Vite for fast loading and modular code.

---

## 🧱 Folder Structure

```
📦 Ikarus3d_Dynamic_UI_Editor
 ┣ 📂 Design Template          # Reference Figma-based design assets
 ┣ 📂 node_modules             # Dependencies
 ┣ 📂 ui-editor
 ┃ ┣ 📂 node_modules
 ┃ ┣ 📂 public                  # Static assets
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components           # Reusable UI components
 ┃ ┃ ┣ 📂 hooks                 # Custom React hooks
 ┃ ┃ ┣ 📂 services              # API and helper services
 ┃ ┃ ┣ 📂 store                 # Redux store and slices
 ┃ ┃ ┣ 📂 utils                 # Utility and helper functions
 ┃ ┃ ┣ 📜 App.landing.tsx       # Landing page entry component
 ┃ ┃ ┣ 📜 myProjectsMockData.ts # Mock data for projects
 ┃ ┃ ┣ 📜 templateEditorMockData.ts # Mock data for template editor
 ┃ ┃ ┣ 📜 theme.ts              # Theme configuration
 ┃ ┃ ┣ 📜 vite-env.d.ts         # Type declarations for Vite
 ┃ ┣ 📜 .gitignore
 ┃ ┣ 📜 eslint.config.js
 ┃ ┣ 📜 index.css
 ┃ ┣ 📜 index.html
 ┃ ┣ 📜 main.tsx                # React DOM renderer
 ┃ ┣ 📜 package-lock.json
 ┃ ┣ 📜 package.json
 ┃ ┣ 📜 postcss.config.js
 ┃ ┣ 📜 tsconfig.app.json
 ┃ ┣ 📜 tsconfig.json
 ┃ ┣ 📜 tsconfig.node.json
 ┃ ┗ 📜 vite.config.ts
```

## 💡 Design & UX Decisions

* Built editor controls using Mantine’s modern UI elements for better accessibility.
* Integrated GrapesJS selectively for drag-and-drop flexibility.
* Used Redux Toolkit for lightweight yet scalable state management.
* Ensured full responsiveness for desktop and mobile preview modes.

---

## 🧑‍💻 Author

**Arnam Chaurasiya**
Frontend Developer | React & TypeScript Enthusiast
[GitHub](https://github.com/arnamchaurasiya) • [LinkedIn](https://linkedin.com/in/arnamchaurasiya)

---

### ⭐ If you found this project interesting, consider giving it a star on GitHub!
