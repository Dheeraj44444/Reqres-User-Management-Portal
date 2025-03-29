# Reqres User Management Portal

![React](https://img.shields.io/badge/React-18.2.0-blue)
![React Router](https://img.shields.io/badge/React_Router-6.20.0-red)
![Axios](https://img.shields.io/badge/Axios-1.6.2-green)

A complete user management application built with React that integrates with the Reqres API. This project demonstrates authentication, user management, and CRUD operations within a responsive user interface.

![App Screenshot](/api/placeholder/800/400)

## 🚀 Features

- **Secure Authentication** - Login system with token-based authentication
- **User Management** - View, edit and delete user profiles
- **Responsive Design** - Mobile-first approach that looks great on all devices
- **Pagination** - Navigate through multiple pages of user data
- **Toast Notifications** - Informative feedback for user actions
- **Route Protection** - Secured routes requiring authentication

## 🛠️ Technologies

- **React** - Frontend library for building user interfaces
- **React Router** - Navigation and routing between components
- **Axios** - HTTP client for API requests
- **React Toastify** - Toast notifications for user feedback
- **Local Storage** - Persistent authentication state
- **CSS3** - Custom styling with responsive design

## 📋 Project Structure

- **Authentication Flow** - Complete login system with token storage
- **User List** - Card-based display of users with pagination
- **User Edit** - Form to update user information
- **User Delete** - Functionality to remove users with confirmation

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/reqres-user-management.git
   cd reqres-user-management
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🔑 Usage

1. **Login**
   - Use the following credentials:
     - Email: eve.holt@reqres.in
     - Password: cityslicka

2. **View Users**
   - Browse through the paginated list of users
   - Use the pagination controls at the bottom

3. **Edit Users**
   - Click the "Edit" button on any user card
   - Update their information and save changes

4. **Delete Users**
   - Click the "Delete" button on any user card
   - Confirm deletion when prompted

## 📚 API Reference

This project uses the [Reqres API](https://reqres.in/) with the following endpoints:

- **Authentication**: POST /api/login
- **Get Users**: GET /api/users?page={page_number}
- **Edit User**: PUT /api/users/{user_id}
- **Delete User**: DELETE /api/users/{user_id}

## 🧪 Testing

Run the test suite with:
```bash
npm test
```

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1024px and above)
- Tablet (768px - 1023px)
- Mobile (below 768px)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Reqres API](https://reqres.in/) for providing a testing backend
- [React](https://reactjs.org/) for the excellent frontend library
- [React Router](https://reactrouter.com/) for navigation
- [Axios](https://axios-http.com/) for simplified HTTP requests
