# ekaayam-web

This repository contains the source code for the **Ekaayam Web Platform**.

## Overview

Ekaayam Web is a modern web application designed to facilitate event management, mentorship, online courses, and more. The platform provides features such as event booking, user authentication, Google Sheets integration, and a responsive user interface.

## Features

- Event listing and ticket booking
- User registration and authentication (including Google sign-in)
- Integration with Google Sheets for data collection
- Responsive design with modern UI components
- Profile management
- Admin and user dashboards
- Modal dialogs for login, registration, and queries

## Folder Structure

```
test-main/
  public/
    js/
      main.js
  src/
    functions/
      ConnectModal.js
      ConnectToGoogleSheets.js
      EventModal.js
      Footer.js
      LoginModal.js
      Navbar.js
      QueriesModal.js
      signInWithGoogle.js
      submitToGoogleSheets.js
    pages/
      About.js
      BizBoost.js
      BookSmart.js
      Courses.js
      Events.js
      Home.js
      Host.js
      Profile.js
      Register.js
      Tickets.js
      login.js
      pp.js
      rp.js
      tnc.js
    App.js
```

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Aryo15/ekaayam-web.git
   cd ekaayam-web
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
