##WEB TASKS

1.IP ADDRESS FINDER

A React-based web application to:
- View your current IP address
- Fetch details about any IP address
- Get location-based IP information

Built with `React Router DOM` for navigation and `Lucide React` for icons.(installation dependencies)


2. 📧 PHP Mail Sender using `mail()` Function (XAMPP + Gmail SMTP)

This project demonstrates how to send an email using PHP’s built-in `mail()` function on a local server (XAMPP), configured with Gmail SMTP. It includes the source code (`mail.php`), output screenshots, and all necessary setup instructions.

---

## 🚀 Features

- 🔍 **My IP Page** – View your own public IP and details.
- 🌍 **Location Lookup** – Enter an IP to get its location info.
- 🎨 **Responsive UI** with reusable components (Navbar, Footer, etc.)

---

## 📁 Project Structure
```
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
├── Task 2(mail-php)
│ ├── mail.php # Main PHP script to send the email
│ ├── output_webpage.png # Screenshot of the webpage result
│ └── output_mailbox.png # Screenshot of the received email

```
## ⚙️ Setup Instructions for Task 2(XAMPP + Gmail)

1. **Enable Gmail App Passwords**  
   - Turn on 2-Step Verification in Gmail  
   - Go to [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)  
   - Generate an App Password for "Mail" → "XAMPP Mail"  
   - Copy the 16-character password

2. **Update `php.ini`** (`C:\xampp\php\php.ini`)  
    [mail function]
    SMTP = smtp.gmail.com
    smtp_port = 587
    sendmail_from = yourgmail@gmail.com
    sendmail_path = "C:\xampp\sendmail\sendmail.exe -t"

3. **Update `sendmail.ini`** (`C:\xampp\sendmail\sendmail.ini`)  
    smtp_server=smtp.gmail.com
    smtp_port=587
    smtp_ssl=tls
    auth_username=yourgmail@gmail.com
    auth_password=your_app_password
    from=yourgmail@gmail.com
  
  📌 Replace your_app_password with the 16-digit app password from Gmail.

4. **Restart Apache** in the XAMPP Control Panel

