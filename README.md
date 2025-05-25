WEB TASKS
1.IP ADDRESS FINDER
A React-based web application to:
- View your current IP address
- Fetch details about any IP address
- Get location-based IP information

Built with `React Router DOM` for navigation and `Lucide React` for icons.(installation dependencies)

---

## 🚀 Features

- 🔍 **My IP Page** – View your own public IP and details.
- 🌍 **Location Lookup** – Enter an IP to get its location info.
- 🎨 **Responsive UI** with reusable components (Navbar, Footer, etc.)

---

## 📁 Project Structure
src/
├── assets
├── components
│ ├── Footer.jsx
│ ├── IPDetails.jsx
│ ├── Loader.jsx
│ └── Navbar.jsx
├── pages/ # Page components for routing
│ ├── HomePage.jsx
│ ├── LocationIpPage.jsx
│ └── MyIpPage.jsx
├── services/ # API service handlers
├── styles/ # CSS modules
│ ├── components.css
│ ├── index.css
│ └── pages.css
├── utils/
│ └── countryUtils.js # Country-based utility functions
├── App.jsx # Main component with Router
├── App.css
├── index.css
└── main.jsx # App entry point

