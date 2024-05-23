# Instagram Clone

🚀 Just launched my own Instagram clone built with React, Firebase, Firestore, and Zustand! 📸

Check out the live version: [Instagram Clone](https://insta-clone-kappa-pearl.vercel.app/)

## Tool Significance

This project leverages the power of several modern web development tools:

- **React**: Provides a modular UI with its component-based architecture and efficient state management.
- **Firebase**: Simplifies backend tasks with services like authentication, hosting, and cloud functions.
- **Firestore**: Offers a real-time NoSQL database with advanced querying capabilities and real-time data synchronization.
- **Zustand**: Delivers lightweight state management for scalability and maintainability.

Together, these tools create a robust, real-time Instagram clone with a seamless user experience.

## Features

- User authentication (sign-up, log-in)
- Real-time feed of posts
- Image uploads
- Likes and comments on posts
- User profiles

## Getting Started

Follow these steps to run the project locally:

1. **Clone the project**:
    ```bash
    git clone https://github.com/yourusername/instagram-clone.git
    cd instagram-clone
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the development server**:
    ```bash
    npm run dev
    ```

4. **Open your browser** and navigate to:
    ```
    http://localhost:3000
    ```

## Firebase Configuration

To run this project, you need to set up Firebase and Firestore. Follow these steps:

1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
2. Add a web app to your Firebase project and get the Firebase configuration object.
3. Create a `.env` file in the root directory of your project and add your Firebase configuration:

    ```plaintext
    REACT_APP_FIREBASE_API_KEY=your-api-key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
    REACT_APP_FIREBASE_PROJECT_ID=your-project-id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    REACT_APP_FIREBASE_APP_ID=your-app-id
    ```

4. Enable Firestore and Firebase Authentication in the Firebase Console.

## Deployment

This project is deployed using Vercel. You can deploy your own version by following these steps:

1. Connect your GitHub repository to Vercel.
2. Import the project to Vercel.
3. Set up environment variables in the Vercel dashboard.
4. Deploy the project.

## Credits

This project was built with the guidance and tutorials from [ASAProgrammer](https://www.youtube.com/@asaprogrammer_). Special thanks for the amazing content!


## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Acknowledgments

- Special thanks to the open-source community for the amazing tools and libraries.

Feel free to reach out if you have any questions or suggestions!


Focus on getting better ! 🚀
