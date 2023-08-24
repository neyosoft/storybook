# CareItator

Introducing **CareItator**, a powerful tool that addresses the pressing staffing challenges in healthcare. CareItator is an online marketplace that seamlessly connects nurses, nursing assistants, and other healthcare professionals with facilities in need of staffing. This innovative platform revolutionises the traditional process by allowing facilities to effortlessly post shifts and healthcare workers to conveniently book these shifts through CareItator's user-friendly mobile app, effectively managing their own schedules.

# Running the application

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Environment configuration

```bash
cp .example.env .env.dev
```

## Step 2: Start the Metro Server

```bash
npm start

# OR using Yarn
yarn start
```

## Step 3: Start your Application

### For Android

```bash
yarn android:dev
```

### For iOS

```bash
yarn ios:dev
```

# Troubleshooting

For iOS native dependencies

```bash
npx pod-install ios
```

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.
