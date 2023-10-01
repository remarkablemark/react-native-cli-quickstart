# React Native CLI Quickstart

[![e2e-ios](https://github.com/remarkablemark/react-native-cli-quickstart/actions/workflows/e2e-ios.yml/badge.svg)](https://github.com/remarkablemark/react-native-cli-quickstart/actions/workflows/e2e-ios.yml)

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli):

```sh
npx @react-native-community/cli init ReactNativeCLIQuickstart
```

## Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Install

Clone the repository:

```sh
git clone https://github.com/remarkablemark/react-native-cli-quickstart.git
cd react-native-cli-quickstart
```

Install the Node.js dependencies:

```sh
yarn
```

Install the Pod dependencies:

```sh
cd ios && pod install && cd -
```

## Quickstart

Start the application:

```sh
yarn start
```

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```sh
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```sh
yarn android
```

### For iOS

```sh
yarn ios
```

Or open `./ios/ReactNativeCLIQuickstart.xcworkspace` in Xcode and hit the **Run** button:

```sh
xed -b ios
```

See [Get Started with macOS](https://aka.ms/ReactNativeGuideMacOS) for the latest up-to-date instructions.

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

   To close and reopen the app, go to menu > **Simulator** > **Device** > **App Switcher**.

### Debug

Press <kbd>Cmd ⌘</kbd> + <kbd>D</kbd> in the simulator or **Shake** your device to open the React Native debug menu.

You can also [access the in-app developer menu](https://reactnative.dev/docs/debugging) with <kbd>Ctrl</kbd> + <kbd>Cmd ⌘</kbd> + <kbd>Z</kbd>.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

## Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

## Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

<!-- prettier-ignore-start -->

| Title | Description |
| --- | --- |
| [The Basics](https://reactnative.dev/docs/tutorial) | Explains a Hello World for React Native |
| [Style](https://reactnative.dev/docs/style) | Covers how to use the prop named style which controls the visuals. |
| [Layout](https://reactnative.dev/docs/flexbox) | React Native uses flexbox for layout, learn how it works. |
| [Components](https://reactnative.dev/docs/components-and-apis) | The full list of components and APIs inside React Native. |
| [Navigation](https://reactnative.dev/docs/navigation) | How to handle moving between screens inside your application. |
| [Networking](https://reactnative.dev/docs/network) | How to use the Fetch API in React Native. |
| [Help](https://reactnative.dev/community/overview) | Need more help? There are many other React Native developers who may have the answer. |

<!-- prettier-ignore-end -->

## Tests

### Jest

Run the unit tests:

```sh
yarn test
```

Run the unit tests in watch mode:

```sh
yarn test:watch
```

### Detox

[Install macOS prerequisites](https://wix.github.io/Detox/docs/introduction/getting-started/#2-macos-only-applesimutils):

```sh
brew tap wix/brew
brew install applesimutils
```

[Build the app](https://wix.github.io/Detox/docs/introduction/project-setup#step-5-build-the-app):

```sh
yarn build:e2e
```

[Run the E2E tests](https://wix.github.io/Detox/docs/introduction/your-first-test#running-tests):

```sh
yarn test:e2e
```

Run the E2E tests in watch mode:

```sh
yarn test:e2e:watch
```

## Upgrade

[Upgrade to the latest version](https://reactnative.dev/docs/upgrading#react-native-cli):

```sh
yarn react-native upgrade
```
