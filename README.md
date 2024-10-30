## Download the APK

You can download the latest version of the app [here](https://github.com/AlaeddineJendoubi/Casual_Foundry_Coding/releases/download/v1/app-release.apk).

> **Note**: Ensure that installation from unknown sources is enabled on your Android device.

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions until the "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start
# or if having issues installing
npm install --legacy-peer-deps --verbose

```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

Here's how you could update your README to include a brief note about using Reactotron for debugging:

---

## Step 3: Debugging

To debug the application, you can use **Reactotron**, a tool that helps track logs, monitor app state, and inspect API requests in real time. Reactotron is already configured in the project. To use it:

1.  **Ensure Reactotron is running** on your computer.
2.  Launch the app, and you should see logs and other debugging information in Reactotron.
3.  If you are using an android device run the following command and restart the app

```bash
adb reverse tcp:9090 tcp:9090
```

For more details on Reactotron, refer to the [Reactotron documentation](https://github.com/infinitered/reactotron).

---

This gives a concise mention of Reactotron, with a link for further information if needed. Let me know if you'd like to expand it!

## Project File Structure

The project is organized as follows:

```
/app
├── /api                        # API-related modules
│   ├── /auth
│   │   └── index.ts            # Handles authentication-related API requests
│   ├── /logging
│   │   └── index.ts            # Manages logging functionality
│   ├── /posts
│   │   └── index.ts            # Contains API functions related to posts
│   └── /users
│       ├── index.ts            # Entry point for user-related API requests
│       ├── client.ts           # Client-specific API interactions
│       └── types.ts            # TypeScript types for user data structures
│
├── /components                 # Reusable UI components
│   ├── /ActionIcon             # Component for rendering action icons
│   ├── /ButtonIcon             # Button component with an icon
│   ├── /ImageLoader            # Component responsible for loading images
│   ├── /InputField             # Reusable input field component
│   ├── /PostItem               # Represents a single post item component
│   ├── /SearchInput            # Search input functionality component
│   ├── /SectionList            # Renders a list of sections
│   └── /Spacer                 # Provides spacing between elements
│
├── /containers                 # Container components for layout
│   └── mainContainer.tsx       # Main container layout
│
├── /hooks                      # Custom hooks
│   ├── useAppActivity.tsx      # Manages app activity states
│   ├── useAuthUser.ts          # Authentication user hook
│   ├── useFetchConnectedUserData.ts # Fetches connected user data
│   ├── useFetchPosts.ts        # Fetches posts
│   ├── useFetchUserById.ts     # Fetches user by ID
│   ├── useFetchUserName.ts     # Fetches username by ID
│   ├── useLogout.ts            # Handles user logout
│   └── useSession.ts           # Manages session information
│
├── /navigation                 # Navigation setup
│   └── AppNavigator.tsx        # Main app navigator
│
├── /screens                    # Screens for different app views
│   ├── /Details                # Details screen
│   ├── /Home                   # Home screen
│   ├── /Landing                # Landing screen
│   └── /Login                  # Login screen
│
├── /services                   # Contains service modules that encapsulate business logic and API interactions
│   ├── /auth                   # Authentication services
│   ├── /posts                  # Services related to handling posts
│   ├── /storage                # Stored Data services
│   ├── /tracking               # Handles tracking-related services
│   └── /users                  # User-related services
│
└── /utils                      # Utility functions


```

## Features

- **User Authentication**: Secure login system with session management.
- **Token Refresh**: Automatic handling of token expiration and refresh.
- **API Integration**: Fetches data from APIs for lists and detailed views.
- **API Based search**: Performs API requests and fetches a posts list based on user search input. 
- **User Action Tracking**: Monitors user interactions within the app.
- **Async Data Management**: Utilizes React Query for efficient data fetching and caching.
- **Responsive Design**: Built with the UI Kitten library for a responsive and intuitive UI.

## Technologies Used

- **React Native**: For building cross-platform mobile applications.
- **UI Kitten**: A React Native UI library based on Eva Design System.
- **Axios**: For making HTTP requests to APIs.
- **React Query**: For managing asynchronous data fetching and state.
- **React Navigation**: For managing navigation within the app.

## API Endpoints

- **Login**: `POST /api/login`
- **Fetch List**: `GET /api/items`
- **Fetch Item Details**: `GET /api/items/:id`

## User Action Tracking

The application tracks user actions, such as:

- Successful logins
- API requests made
- Navigation events

This data can be used to enhance user experience and monitor app usage.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## Screenshots

Here are some screenshots of the app:

### Login Screen
![Login Screen] ![Screenshot_1730257063](https://github.com/user-attachments/assets/01483632-5071-404c-ac5a-698005a77667)
![Screenshot_1730256891](https://github.com/user-attachments/assets/cf293724-8c73-4190-8dc6-1a8bb298614c)


### Home Screen
![Home Screen] ![Screenshot_1730256986](https://github.com/user-attachments/assets/b0200891-034e-4c7e-9c13-60b43e1b59f5)


### Details Screen
![Details Screen] ![Screenshot_1730256992](https://github.com/user-attachments/assets/6b6295be-cf5d-466e-8d7c-b369e8e7f7eb)

## Acknowledgments

- [React Native](https://reactnative.dev/)
- [UI Kitten](https://akveo.com/ui-kitten)
- [Axios](https://axios-http.com/)
- [React Query](https://react-query.tanstack.com/)

---

Let me know if you need any further changes or additional information!
