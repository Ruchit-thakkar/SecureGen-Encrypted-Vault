# SecureGen - Encrypted Password Vault & Generator

<div align="center">

![MERN Stack](https://img.shields.io/badge/Stack-MERN-blue?style=flat-square)
![License](https://img.shields.io/badge/License-ISC-brightgreen?style=flat-square)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=flat-square)
![React](https://img.shields.io/badge/React-19.2.0-blue?style=flat-square)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen?style=flat-square)

A full-stack MERN application for securely generating and storing passwords with end-to-end encryption.

[Features](#features) • [Tech Stack](#tech-stack) • [Installation](#installation) • [Usage](#usage) • [API Endpoints](#api-endpoints) • [Environment Variables](#environment-variables)

</div>

---

## 📋 Overview

**SecureGen** is a comprehensive password management solution that combines a powerful password generator with a secure vault for storing sensitive credentials. Built with modern web technologies, it provides users with a seamless experience across devices while maintaining bank-level encryption standards.

### Key Highlights
- 🔐 **End-to-End Encryption** - All stored passwords are encrypted using AES encryption
- 🌐 **OAuth Integration** - Google Sign-in for quick and secure authentication
- 📱 **PWA Support** - Progressive Web App capabilities for offline access
- 🎨 **Dark/Light Mode** - Automatic theme detection with user preferences
- 🚀 **Fast & Responsive** - Built with modern frameworks for optimal performance

---

## ✨ Features

### Authentication & Security
- ✅ User registration and login with email/password
- ✅ Google OAuth 2.0 integration
- ✅ JWT-based session management
- ✅ Bcrypt password hashing
- ✅ Secure cookie handling

### Password Generator
- ✅ Customizable password length
- ✅ Configurable character sets (uppercase, lowercase, numbers, symbols)
- ✅ One-click copy to clipboard
- ✅ Real-time password strength indicator
- ✅ Generate multiple passwords at once

### Password Vault
- ✅ Create, read, update, and delete (CRUD) password entries
- ✅ AES encryption for stored passwords
- ✅ Search and filter capabilities
- ✅ Organize passwords with categories/tags
- ✅ Auto-generate secure passwords directly into vault
- ✅ Copy passwords securely with one click

### User Experience
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark and light theme support
- ✅ Splash screen and loading states
- ✅ Toast notifications for user feedback
- ✅ Protected routes and role-based access
- ✅ Service worker for PWA support

---

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - Modern UI library
- **React Router 7.13.0** - Client-side routing
- **Vite 7.3.1** - Fast build tool and dev server
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **Axios 1.13.5** - HTTP client for API calls
- **Lucide React** - Icon library
- **React Hot Toast** - Toast notifications

### Backend
- **Node.js** - JavaScript runtime
- **Express 5.2.1** - Web framework
- **MongoDB 9.2.1** - NoSQL database
- **Mongoose 9.2.1** - MongoDB ODM
- **JWT (jsonwebtoken)** - Token-based authentication
- **Passport.js** - Authentication middleware
- **Bcrypt** - Password hashing library
- **Crypto** - Encryption and decryption

### DevOps & Tools
- **Dotenv** - Environment variable management
- **CORS** - Cross-origin resource sharing
- **Cookie Parser** - Cookie handling middleware

---

## 📁 Project Structure

```
passgen-with-back/
├── frontend/                          # React application
│   ├── src/
│   │   ├── components/               # Reusable React components
│   │   │   ├── Dashboard.jsx        # Main dashboard
│   │   │   ├── GeneratorPage.jsx    # Password generator
│   │   │   ├── Vault.jsx            # Password vault
│   │   │   ├── Login.jsx            # Login component
│   │   │   ├── Register.jsx         # Registration component
│   │   │   ├── Protected.jsx        # Protected route wrapper
│   │   │   ├── Navbar.jsx           # Navigation bar
│   │   │   ├── Home.jsx             # Home page
│   │   │   ├── AboutPage.jsx        # About page
│   │   │   ├── ContactPage.jsx      # Contact page
│   │   │   └── InstallPWA.jsx       # PWA install prompt
│   │   ├── context/
│   │   │   └── AuthContext.jsx      # Authentication context (state management)
│   │   ├── utils/
│   │   │   └── api.js               # API service and axios instance
│   │   ├── assets/                  # Images and static files
│   │   ├── App.jsx                  # Main App component
│   │   ├── main.jsx                 # React entry point
│   │   ├── App.css                  # App styles
│   │   └── index.css                # Global styles
│   ├── public/
│   │   ├── service-worker.js        # PWA service worker
│   │   └── manifest.json            # PWA manifest
│   ├── vite.config.js               # Vite configuration
│   ├── eslint.config.js             # ESLint rules
│   └── package.json
│
├── backend/                           # Node.js/Express API
│   ├── src/
│   │   ├── controllers/             # Business logic
│   │   │   ├── auth.controller.js   # Authentication logic
│   │   │   └── vault.controller.js  # Password vault logic
│   │   ├── models/                  # MongoDB schemas
│   │   │   ├── user.model.js        # User schema
│   │   │   ├── vault.model.js       # Vault entry schema
│   │   │   └── idpin.model.js       # IDPIN schema
│   │   ├── routes/                  # API routes
│   │   │   ├── auth.routes.js       # Auth endpoints
│   │   │   └── vault.routes.js      # Vault endpoints
│   │   ├── Middlewares/
│   │   │   └── auth.middleware.js   # JWT verification middleware
│   │   ├── db/
│   │   │   └── db.js                # MongoDB connection
│   │   └── app.js                   # Express app setup
│   ├── public/                       # Static files (built frontend)
│   ├── server.js                     # Server entry point
│   ├── .env                          # Environment variables
│   └── package.json
│
└── README.md                          # This file
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v14+ and npm/yarn
- **MongoDB** Atlas account (or local MongoDB instance)
- **Git** for version control

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/passgen-with-back.git
cd passgen-with-back
```

#### 2. Backend Setup

Navigate to the backend directory:
```bash
cd backend
```

Install dependencies:
```bash
npm install
```

#### 3. Frontend Setup

Navigate to the frontend directory:
```bash
cd ../frontend
```

Install dependencies:
```bash
npm install
```

---

## 🔧 Configuration

### Backend Environment Variables

Create a `.env` file in the `backend/` directory with the following variables:

```env
# MongoDB Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/Passgen

# JWT Secret (use a strong, random string)
JWT_SECRET=your_very_secure_jwt_secret_key_here

# Encryption Key (32-character hex string for AES encryption)
ENCRYPTION_KEY=your_32_character_hex_encryption_key

# Google OAuth Credentials
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Server Port (optional, defaults to 3000)
PORT=3000
```

### Frontend Configuration

The frontend automatically connects to the backend API. The base URL is configured in [frontend/src/utils/api.js](frontend/src/utils/api.js):

```javascript
// Development
http://localhost:3000

// Production
https://your-production-api.com
```

---

## 📝 Environment Variables Explained

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.db.net/dbname` |
| `JWT_SECRET` | Secret key for JWT token signing | `8c96b9b961b2a369e0f66...` |
| `ENCRYPTION_KEY` | 32-char hex key for AES encryption | `22aa421164350705550ba...` |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID | `1097894303871-njrsnt2u...` |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret | `GOCSPX-A3TDe9mq5KL...` |
| `PORT` | Server port | `3000` |

---

## 🏃 Running the Application

### Development Mode

#### Start Backend Server
```bash
cd backend
npm install
# Start server on http://localhost:3000
npm start
# Or for development with auto-reload:
# npm run dev (if you have nodemon configured)
```

#### Start Frontend Development Server
```bash
cd frontend
npm install
# Start dev server on http://localhost:5173
npm run dev
```

Both servers must be running for the application to work properly.

### Production Build

#### Build Frontend
```bash
cd frontend
npm run build
# Creates optimized build in dist/ directory
```

#### Serve Frontend from Backend
```bash
# Copy frontend dist files to backend/public
cp -r frontend/dist/* backend/public/

# Start backend server (serves frontend + API)
cd backend
npm start
```

---

## 📚 API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------||---|
| POST | `/api/auth/register` | Register new user | ❌ |
| POST | `/api/auth/login` | Login with email & password | ❌ |
| POST | `/api/auth/logout` | Logout user | ✅ |
| GET | `/api/auth/google` | Initiate Google OAuth flow | ❌ |
| GET | `/api/auth/google/callback` | Google OAuth callback | ❌ |
| GET | `/api/auth/me` | Get current user profile | ✅ |

### Vault Routes (`/api/vault`)

All vault endpoints require authentication via JWT token in the Authorization header.

| Method | Endpoint | Description | Auth Required |
|--------|----------|---|---|
| POST | `/api/vault/add` | Create new password entry | ✅ |
| GET | `/api/vault/all` | Retrieve all user's passwords | ✅ |
| PUT | `/api/vault/update/:id` | Update a password entry | ✅ |
| DELETE | `/api/vault/delete/:id` | Delete a password entry | ✅ |

#### Example Requests

**Register:**
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"securepass123"}'
```

**Add Password to Vault:**
```bash
curl -X POST http://localhost:3000/api/vault/add \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{"service":"gmail","username":"user@gmail.com","password":"encryptedpass"}'
```

---

## 🔐 Security Features

### Password Security
- **Bcrypt Hashing**: User passwords are hashed with bcrypt (10+ salt rounds)
- **AES Encryption**: Stored passwords are encrypted using AES-256 encryption
- **Unique Encryption Key**: Each deployment uses a unique encryption key

### Authentication Security
- **JWT Tokens**: Secure token-based authentication
- **HTTP-Only Cookies**: Session cookies marked as HTTP-only and Secure
- **CORS Protection**: Configured to accept requests from authorized origins only
- **Middleware Validation**: All protected routes verify JWT tokens

### Best Practices
- ✅ Secrets stored in environment variables, not in code
- ✅ Sensitive data never logged to console
- ✅ Input validation on all API endpoints
- ✅ Rate limiting recommended for production

---

## 🔄 Database Schema

### User Model
```javascript
{
  email: String (unique),
  password: String (hashed with bcrypt),
  googleId: String (optional),
  createdAt: Date,
  updatedAt: Date
}
```

### Vault Model
```javascript
{
  userId: ObjectId (ref: User),
  service: String,
  username: String,
  password: String (encrypted),
  notes: String,
  category: String,
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🚨 Troubleshooting

### Common Issues

**Issue**: Backend server won't start
```
Solution: 
- Verify MongoDB URI is correct in .env
- Check if port 3000 is available
- Ensure all environment variables are set
```

**Issue**: Frontend can't connect to backend
```
Solution:
- Verify backend is running on http://localhost:3000
- Check CORS settings in backend/src/app.js
- Clear browser cache and cookies
```

**Issue**: Google OAuth not working
```
Solution:
- Verify Google Client ID and Secret in .env
- Check redirect URI matches Google Console settings
- Ensure Google+ API is enabled in Google Cloud Console
```

**Issue**: Passwords not encrypting properly
```
Solution:
- Verify ENCRYPTION_KEY is exactly 32 characters (hex)
- Ensure crypto module is installed
- Check MongoDB connection for encryption keys
```

---

## 📦 Deployment

### Deploy to Render (Recommended)

**Backend Deployment:**
1. Push code to GitHub
2. Create new Web Service on Render
3. Connect your GitHub repository
4. Set environment variables in Render dashboard
5. Deploy

**Frontend Deployment:**
1. Build the frontend: `npm run build`
2. Deploy `dist/` folder to:
   - Render (as static site or part of backend)
   - Vercel
   - Netlify
   - AWS S3 + CloudFront

### Environment Variables for Production
Update your `.env` file with production URLs:
```env
MONGODB_URI=mongodb+srv://prod_user:prod_pass@prod_cluster.mongodb.net/Passgen_prod
FRONTEND_URL=https://yourdomain.com
API_URL=https://api.yourdomain.com
```

---

## 📧 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

Created with ❤️ by [Your Name]

### Contact
- 📧 Email: your.email@example.com
- 💼 LinkedIn: https://linkedin.com/in/yourprofile
- 🐙 GitHub: https://github.com/yourusername

---

## 🙏 Acknowledgments

- Thanks to [MongoDB](https://www.mongodb.com) for the database
- [React](https://react.dev) for the frontend framework
- [Express.js](https://expressjs.com) for the backend framework
- [Passport.js](http://www.passportjs.org) for authentication
- All contributors and users who have supported this project

---

## 📞 Support

If you encounter any issues or have questions:

1. **Check the [Troubleshooting](#troubleshooting) section**
2. **Search [GitHub Issues](https://github.com/yourusername/passgen-with-back/issues)**
3. **Create a new issue with detailed description**
4. **Contact via email** (see Author section)

---

<div align="center">

Made with ✨ and ❤️ for secure password management

⭐ If you find this helpful, please consider giving it a star!

</div>
