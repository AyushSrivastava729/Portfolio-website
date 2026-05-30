# 🌐 Ayush Srivastava Portfolio

A modern, responsive, and interactive portfolio website built with React, Vite, Tailwind CSS, and EmailJS. This portfolio showcases my technical skills, projects, and passion for creating user-friendly web applications with clean and efficient code.

## 🚀 Live Demo

🔗 https://ayush-portfolio-drab-ten.vercel.app/

---

## ✨ Features

* Modern and responsive design
* Interactive user interface
* Smooth animations and effects
* Project showcase section
* Skills and technologies section
* Contact form integration using EmailJS
* Toast notifications with React Toastify
* Optimized performance with Vite
* Mobile-friendly experience

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM

### UI & Animations

* React Icons
* React Type Animation
* React Parallax Tilt

### Contact & Notifications

* EmailJS
* React Toastify

---

## 📂 Project Structure

```bash
Portfolio-website/
│
├── README.md
│
└── myportfolio/
    ├── public/
    ├── src/
    ├── package.json
    ├── vite.config.js
    └── ...
```

---

## ⚙️ Installation & Setup

### Clone the Repository

```bash
git clone https://github.com/AyushSrivastava729/Portfolio-website.git
```

### Navigate to Project Directory

```bash
cd myportfolio
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Create Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 📧 Contact Form Setup

This project uses EmailJS for handling contact form submissions.

Replace the following values in the Contact component:

```javascript
emailjs.sendForm(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  form.current,
  "YOUR_PUBLIC_KEY"
);
```

Create the corresponding variables in your EmailJS template:

```text
{{user_name}}
{{user_email}}
{{subject}}
{{message}}
```

---

## 🎯 About Me

I'm a passionate Full Stack Developer with a strong interest in building modern, responsive, and scalable web applications. I enjoy solving real-world problems through code and continuously learning new technologies to improve my skills and create impactful digital experiences.

---

## 🔮 Future Enhancements

* Dark/Light Mode Toggle
* Blog Section
* Project Filtering
* Backend Integration
* Admin Dashboard
* Enhanced Animations

---

## 👨‍💻 Author

### Ayush Srivastava

* Portfolio: https://ayush-portfolio-drab-ten.vercel.app/
* GitHub: https://github.com/AyushSrivastava729

---

## ⭐ Show Your Support

If you found this project useful or inspiring, consider giving it a ⭐ on GitHub.

Thank you for visiting my portfolio!
