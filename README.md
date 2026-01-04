# EchoDrop

EchoDrop is a mobile application built with React Native and Expo that enables location-based interactions and content sharing.

## 🚀 Features

- **Cross-Platform**: Built with React Native and Expo, supporting iOS, Android, and Web
- **Firebase Integration**: 
  - Authentication for user management
  - Firestore database for real-time data
  - Cloud Storage for media files
- **Modern UI**: 
  - Dark mode support
  - Smooth animations with react-native-reanimated
  - Haptic feedback for better user experience
- **Location Services**: Integration with react-native-maps for location-based features
- **Type-Safe**: Built with TypeScript for better code quality and developer experience

## 📱 Tech Stack

- **Framework**: React Native with Expo (~54.0.20)
- **Navigation**: Expo Router with file-based routing
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **UI**: React Navigation, Expo Image, SF Symbols
- **Maps**: react-native-maps
- **Language**: TypeScript

## 🛠️ Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/xroachx-ghost/EchoDrop.git
   cd EchoDrop
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Firebase:
   - Copy `.env.example` to `.env`
   - Fill in your Firebase credentials from [Firebase Console](https://console.firebase.google.com/)
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## 🏃 Running the App

- **iOS Simulator**: Press `i` in the terminal or run `npm run ios`
- **Android Emulator**: Press `a` in the terminal or run `npm run android`
- **Web Browser**: Press `w` in the terminal or run `npm run web`
- **Physical Device**: Scan the QR code with Expo Go app

## 📂 Project Structure

```
EchoDrop/
├── app/                    # Application screens (file-based routing)
│   ├── (tabs)/            # Tab-based navigation
│   │   ├── index.tsx      # Home screen
│   │   ├── explore.tsx    # Explore screen
│   │   └── _layout.tsx    # Tab layout configuration
│   ├── _layout.tsx        # Root layout
│   └── modal.tsx          # Modal screen
├── components/            # Reusable components
│   ├── ui/               # UI components (icons, collapsibles)
│   ├── themed-text.tsx   # Theme-aware text component
│   └── themed-view.tsx   # Theme-aware view component
├── hooks/                # Custom React hooks
├── constants/            # App constants (colors, fonts)
├── src/
│   └── lib/
│       └── firebase.ts   # Firebase configuration
└── assets/              # Images, fonts, and other static files
```

## 🧪 Development

- **Linting**: `npm run lint`
- **Type Checking**: `npx tsc --noEmit`

## 🔒 Security

Firebase credentials are managed through environment variables. Never commit your `.env` file to version control. Use the `.env.example` file as a template.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 📞 Support

For issues and questions, please open an issue in the GitHub repository.
