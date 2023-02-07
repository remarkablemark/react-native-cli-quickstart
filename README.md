# React Native CLI Quickstart

React Native application created from [React Native CLI Quickstart](https://reactnative.dev/docs/environment-setup#creating-a-new-application):

```sh
npx @react-native-community/cli init ReactNativeCLIQuickstart
```

## Prerequisites

- [Setting up the development environment](https://reactnative.dev/docs/environment-setup)

## Install

Clone the repository:

```sh
git clone https://github.com/remarkablemark/react-native-cli-quickstart.git
cd react-native-cli-quickstart
```

Install Node.js dependencies:

```sh
yarn
```

Install Ruby dependencies:

```sh
cd ios
pod install
```

## Run

Start your application:

```sh
yarn start
```

### Run instructions for Android:

Have an Android emulator running (quickest way to get started), or a device connected.

```sh
yarn react-native run-android
```

### Run instructions for iOS:

```sh
yarn react-native run-ios
```

Or:

Open `./ios/ReactNativeCLIQuickstart.xcworkspace` in Xcode or run:

```sh
xed -b ios
```

Hit the Run button

### Run instructions for macOS:

See https://aka.ms/ReactNativeGuideMacOS for the latest up-to-date instructions.

## Usage

### Step One

Edit **App.tsx** to change this screen and then come back to see your edits.

### See Your Changes

Press **Cmd + R** in the simulator to reload your app's code.

To close and reopen the app, go to menu > **Simulator** > **Device** > **App Switcher**.

### Debug

Press **Cmd + D** in the simulator or **Shake** your device to open the React Native [debug menu]().

You can also [access the in-app developer menu](https://reactnative.dev/docs/debugging) with **Ctrl + Cmd + Z**.

### Learn More

Read the docs to discover what to do next:

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
