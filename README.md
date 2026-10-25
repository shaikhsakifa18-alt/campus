# CampusHire — Student Placement Portal

This version keeps **all files in one folder**. Each page has its own HTML file, and the CSS and JavaScript files sit beside the HTML files. No `css`, `js`, or `pages` subfolders are required.

## Files

- `index.html` — sign in
- `register.html` — student registration
- `student-dashboard.html` — student overview
- `admin-dashboard.html` — administrator tools
- `jobs.html` — job listings and skill matching
- `my-applications.html` — application tracking and exports
- `profile.html` — student profile and resume details
- `career-tools.html` — interview planning, reminders and career tools
- `style.css`, `dashboard.css`, `responsive.css` — stylesheets
- `auth.js`, `storage.js`, `jobs.js`, `applications.js`, `app.js` — JavaScript

## Run locally

1. Extract the ZIP.
2. Open the `CampusHire` folder in VS Code.
3. Right-click `index.html` and choose **Open with Live Server** (recommended), or open it directly in a browser.
4. Select **Create an account** to register a student.

## Demo admin login

- Email: `admin@campushire.local`
- Password: `Admin@123`

## Notes

This is a frontend college-demo project. Demo data is stored in browser LocalStorage; passwords and role checks are not suitable for production security. Different pages share the same browser storage when served from the same origin.
