# Secure Login and Register Page with JWT Authentication

## Overview
This project implements a secure login and registration system with JWT-based authentication. It includes role-based secure routing to restrict access to certain pages based on user roles. The application is built with modern technologies to ensure security, scalability, and a responsive user experience.

## Features
- Secure user registration and login system
- JWT (JSON Web Token) authentication
- Role-based secure routing (Admin/User)
- Protected routes for authorized users only
- Responsive UI with Tailwind CSS
- Backend API with Node.js and Express

## Screenshots
![Landing](https://github.com/user-attachments/assets/d3bcd7ce-04f0-4d2d-a564-71e9a582f70b)
![Login](https://github.com/user-attachments/assets/476bc9ec-c82c-4aaa-bc06-b5067453eec2)
![Register](https://github.com/user-attachments/assets/8fe464d7-b398-4cb7-81a3-5eeb0d583637)

## Technologies Used
- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express
- **Authentication:** JSON Web Tokens (JWT)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/OnkarKale1405/PRODIGY_FS_01.git
   cd PRODIGY_FS_01
   ```

2. Install dependencies:
   ```bash
   # Frontend
   cd frontend
   npm install

   # Backend
   cd backend
   npm install
   ```

3. Environment Variables:
   - Create a `.env` file in the `backend` directory with the following content:
     ```env
      PORT = 8000
      MONGODB_URI = 
      CORS_ORIGIN =

      ACCESS_TOKEN_SECRET =
      ACCESS_TOKEN_EXPIRY =
      REFRESH_TOKEN_SECRET = 
      REFRESH_TOKEN_EXPIRY = 

      # cloudinary
      CLOUD_NAME =
      API_KEY =
      API_SECRET = 
      API = 

      USER_TEMPORARY_TOKEN_EXPIRY = 

      # MAILTRAP_SMTP_HOST = 
      MAILTRAP_SMTP_PORT = 
      MAILTRAP_SMTP_USER = 
      MAILTRAP_SMTP_PASS = 
     ```

4. Run the application:
   ```bash
   # Backend
   cd backend
   npm run dev

   # Frontend
   cd frontend
   npm run dev
   ```

5. Visit the app at `http://localhost:5173`

## Contributing
Contributions are welcome! Feel free to submit a pull request or report issues.

## Contact
- Email: onkarkale0007@gmail.com
- GitHub: [OnkarKale1405](https://github.com/OnkarKale1405)

