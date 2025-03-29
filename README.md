# Reqres User Management Portal

A complete user management application built with React that integrates with the Reqres API. This project demonstrates authentication, user management, and CRUD operations within a responsive user interface.

![Login-page](https://github.com/user-attachments/assets/7ca95492-28d0-4abe-8c7a-b2a9dba6ac6b)
![List-all-users-page](https://github.com/user-attachments/assets/df7534e8-2c62-4e16-b1c5-3daf04c017d0)
![Edit-page](https://github.com/user-attachments/assets/09b8f063-7956-477a-b723-b6e61ac33604)
![Delete](https://github.com/user-attachments/assets/76d5c34d-d1e2-4fd7-aa3d-2640cddfda3b)
![Delete-message](https://github.com/user-attachments/assets/b11b8c87-8806-4295-a6dc-dc0b4ea3075c)


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
   git clone https://github.com/Dheeraj44444/Reqres-User-Management-Portal.git
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
