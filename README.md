# 🎬 Movies React Native App

[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/MaramAhmed18/Movies-React-Native-App)

> A stunning mobile application that brings the magic of cinema to your fingertips. Built with React Native and Expo, this app offers a seamless movie browsing experience with elegant design and powerful features.

---

## ✨ Features at a Glance

### 🎬 Movie Discovery
Explore an extensive collection of **popular movies** powered by The Movie DB (TMDB) API. Each movie is beautifully presented with stunning visuals and essential information.

### 🎯 Detailed Views
Immerse yourself in **comprehensive movie details** including plot overviews, high-quality posters, and all the information you need to choose your next watch.

### ❤️ Smart Favorites
Build your personal collection with an **intuitive favorites system**. Add or remove movies effortlessly with Redux Toolkit managing your state seamlessly.

### 🧭 Smooth Navigation
Experience **fluid drawer navigation** providing instant access to Movies, Favorites, Forms, and your To-Do List.

#### 📝 Additional Features
- **User Registration** — Polished form with comprehensive validation (username, password, email, phone)
- **Task Manager** — Integrated To-Do list with persistent storage via AsyncStorage
- **Offline Support** — Your favorites and tasks are always available

---

## 📱 Application Screens

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  🎬 MOVIES           Your cinema gateway                    │
│     └─ Beautifully scrollable grid of popular movies        │
│                                                             │
│  🎯 MOVIE DETAILS    Immersive storytelling                 │
│     └─ Rich descriptions with captivating imagery           │
│                                                             │
│  ❤️  FAVORITES       Your personal collection               │
│     └─ All your beloved movies in one place                 │
│                                                             │
│  📝 REGISTRATION     Seamless signup experience             │
│     └─ Smart validation for a smooth onboarding             │
│                                                             │
│  ✅ TODO LIST        Productivity companion                  │
│     └─ Manage tasks and stay organized                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Technology Stack

| Category              | Technology                                | Purpose                                  |
|-----------------------|--------------------------------------------|------------------------------------------|
| **Framework**         | React Native, Expo                         | Cross-platform mobile development        |
| **State Management**  | Redux Toolkit, React-Redux                 | Predictable and scalable state flow      |
| **Navigation**        | React Navigation (Drawer & Stack)          | Fluid and intuitive app navigation       |
| **HTTP Client**       | Axios                                      | Reliable API communications              |
| **Form Management**   | React Hook Form                            | Elegant and performant form handling     |
| **UI Components**     | React Native Paper                         | Material Design for polished interfaces  |
| **Local Storage**     | AsyncStorage                               | Secure on-device data persistence        |
| **API Source**        | [TMDB API](https://www.themoviedb.org/documentation/api) | Extensive movie database |

---

## 🚀 Getting Started

### Prerequisites
- ✅ **Node.js** and **npm** installed  
- ✅ **Expo Go** app on your mobile device, or  
- ✅ **Android/iOS emulator** properly configured

### 📦 Installation

1) **Clone the Repository**
```bash
git clone https://github.com/maramahmed18/movies-react-native-app.git
```

2) **Navigate to Project Directory**
```bash
cd movies-react-native-app
```

3) **Install Dependencies**
```bash
npm install
```

4) **Launch the Development Server**
```bash
npm start
# or
npx expo start
```

> 💡 The Expo developer tools will open in your browser. Scan the QR code with **Expo Go**, or launch on your emulator to begin exploring!

---

## 📂 Project Architecture

```
movies-react-native-app/
│
├── 📄 App.js                         # Application entry point & navigation setup
│
├── 📁 Components/
│   └── 🎴 MovieCard.js               # Reusable movie card component
│
├── 📁 Pages/
│   ├── ❤️  Favorites.js              # Favorites collection screen
│   ├── 🎬 Movies.js                  # Popular movies discovery screen
│   ├── 🎯 MoviesDetails.js           # Single movie detail view
│   ├── 🏪 MyStore.js                 # Redux store & favorites slice
│   ├── 📝 NativeForm.js              # User registration form
│   └── ✅ TodoList.js                # Task management with AsyncStorage
│
└── 📄 package.json                   # Dependencies & scripts
```

---

## 🎨 Design Philosophy

### Content First, User Always
This application embraces a clean, modern aesthetic that prioritizes content while maintaining exceptional usability. Every interaction is thoughtfully crafted to provide:

- 🌊 **Smooth Scrolling** — Effortless navigation through movie collections  
- ⚡ **Instant Feedback** — Responsive interactions that feel natural  
- 🎭 **Visual Hierarchy** — Clear information architecture  
- 💫 **Delightful Animations** — Subtle transitions that enhance experience

---

## 🌟 Why Choose This App?

**For Movie Enthusiasts**
- 🎬 Discover trending movies  
- ❤️ Organize your watchlist  
- 📱 Enjoy a seamless mobile experience  

**For Developers**
- 📚 Well-structured React Native project  
- 🏗️ Clean code architecture  
- 🔧 Modern tech stack implementation  
- 🎓 Excellent learning resource  

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

## 📄 License
This project is open source and available under the **MIT License**.

---

## 👤 Author
**Maram Ahmed**  
GitHub: [@maramahmed18](https://github.com/maramahmed18)  
Project Link: **Movies React Native App**

---

## 🙏 Acknowledgments
- **The Movie DB (TMDB)** for providing the amazing movie API  
- **Expo** for simplifying React Native development  
- **React Navigation** for excellent navigation solutions  
- **The React Native community** for continuous inspiration

---

⭐ **Star this repository if you find it helpful!**  
Made with ❤️ and React Native
