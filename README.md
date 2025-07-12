# 🎓 Student Result Management System (SRMS)

A clean and responsive **One Page Application** built with **Next.js** and **Tailwind CSS** for managing students, courses, and their results.

> 💻 Tech Stack: **Next.js 15**, **React 19**, **Tailwind CSS 4**, **Ant Design 5**, **Axios**, and more

## 📸 Demo

> 🌐 Live URL:

## ✨ Features

- 🔐 Auth-protected pages
- 📁 Modular routing using `app/` directory (App Router in Next.js 15)
- 🧾 Full CRUD operations:
  - Add/View/Delete **Students**
  - Add/View/Delete **Courses**
  - Add/View **Results**
- ⚡ Fast and responsive UI using **Ant Design 5** + **Tailwind CSS 4**
- 📦 Toast notifications, loaders, and page transitions via `react-hot-toast` and `nextjs-toploader`

---

## 🧱 Pages Overview

| Page             | Description                               |
| ---------------- | ----------------------------------------- |
| 🏠 Home          | Shows all the statistics                  |
| ➕ Add Students  | Add students with full validation         |
| 📋 Students List | View and delete students                  |
| ➕ Add Courses   | Add new courses                           |
| 📋 Courses List  | View and delete courses                   |
| ➕ Add Results   | Add scores linked to students and courses |
| 📋 Results List  | View all result entries dynamically       |

## 🛠️ Installation & Setup

⚠️ Requires **Node.js 18+**

### 1. Clone the repo

```bash
git clone https://github.com/Purav2003/student-client.git
cd srms
```

### 2. Create `.env` file

```env
NEXT_PUBLIC_BACKEND_URI='http://your-backend-api-url.com'
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the app

```bash
npm run dev
```

> 🌐 Visit: `http://localhost:3000`

---

## 📁 Folder Structure (Simplified)

```
src/
├── app/                             # Next.js App Router pages
│   ├── add-course/                  # Add Course page
│   │   └── page.jsx
│   ├── add-result/                  # Add Result page
│   │   └── page.jsx
│   ├── add-student/                 # Add Student page
│   │   └── page.jsx
│   ├── course-list/                 # Courses List page
│   │   └── page.jsx
│   ├── result-list/                 # Results List page
│   │   └── page.jsx
│   ├── student-list/                # Students List page
│   │   └── page.jsx
│   ├── login/                       # Login page
│   │   └── page.jsx
│   ├── layout.js                    # Root layout (shared UI like Sidebar)
│   └── page.js                      # Home page
│
├── components/                      # Reusable UI components
│   ├── Form.jsx                     # Generic form component
│   ├── Listing.jsx                  # Listing layout for entities
│   ├── LoaderComponent.jsx          # Loading spinner component
│   ├── LoginoForm.jsx               # Login form UI
│   ├── SearchBar.jsx                # Search input component
│   ├── Sidebar.jsx                  # App sidebar with navigation
│   ├── StatCard.jsx                 # Card UI for stats overview
│   └── Table.jsx                    # Table component for listing data
│
├── conf/                            # Configuration files
│   ├── api.js                       # API endpoint helpers
│   └── env.js                       # Environment variable configs
│
├── helper/                          # Business logic functions
│   ├── AddCourse.js                 # Logic for adding a course
│   ├── AddResult.js                 # Logic for adding a result
│   ├── AddStudent.js                # Logic for adding a student
│   ├── ViewCourse.js                # Logic for viewing courses
│   ├── ViewResults.js               # Logic for viewing results
│   ├── ViewStats.js                 # Logic for dashboard stats
│   └── ViewStudents.js              # Logic for viewing students
│
├── hooks/                           # Custom React hooks
│   └── useDebounce.js               # Hook to debounce fast inputs
│
├── globals.css                      # Global Tailwind styles
├── favicon.ico                      # App favicon
├── .env                             # Environment variables
├── .gitignore                       # Files to ignore in Git
├── eslint.config.mjs                # ESLint configuration
└── jsconfig.json                    # JS path aliases for cleaner imports


```

---

## 🧰 Tools & Libraries

- **Next.js 15** – App Router, fast builds with Turbopack
- **React 19** – Modern frontend library
- **Tailwind CSS 4** – Utility-first CSS framework
- **Ant Design 5** – Beautiful UI components
- **Axios** – API calls
- **Lucide React** – Icon set
- **React Hot Toast** – Clean toast notifications
- **Next.js Toploader** – Route transition progress bar
- **Next-PWA** – PWA-ready setup

---

## 👤 Author

**Purav Shah**
📧 shahpurav308@gmail.com
🔗 [LinkedIn](https://linkedin.com/in/purav308)
🌐 [Portfolio](https://purav-portfolio.vercel.app)

---

> Made with ❤️ using Next.js, Tailwind CSS & Ant Design