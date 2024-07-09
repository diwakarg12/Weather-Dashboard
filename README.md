# Weather App

A responsive weather application that provides current, hourly, and daily weather forecasts. The app uses the OpenWeatherMap API to fetch weather data and displays it in a user-friendly interface with interactive charts.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Code Structure](#code-structure)
4. [Libraries and Dependencies](#libraries-and-dependencies)
5. [Setup Instructions](#setup-instructions)
6. [Hosted Link](#hosted-link)
7. [Screenshots](#screenshots)

## Project Overview

This weather application allows users to:

- Search for current weather information by city.
- Get weather data based on their current location.
- View hourly and daily weather forecasts.
- Add favorite cities for quick access.
- Visualize temperature changes using interactive charts.

## Features

- **Search by City**: Enter the name of a city to get current weather information.
- **Current Location Weather**: Use the device's geolocation to fetch weather data for the current location.
- **Favorite Cities**: Save favorite cities and access their weather information quickly.
- **Interactive Charts**: View temperature changes over time with line charts for both hourly and daily forecasts.
- **Unit Toggle**: Switch between Celsius and Fahrenheit for temperature display.

## Code Structure

```plaintext
src/
├── assets
├── components/
│   ├── Chart.jsx
│   ├── FavoriteCities.jsx
    ├── Forecast.jsx
│   ├── Input.jsx
    ├── TempAndDetail.jsx
    ├── TimeAndLocation.jsx
    ├── TopButtons.jsx
├── services/
│   └── weatherService.js
├── App.css
├── App.jsx
├── index.css
├── main.jsx

etc....
```

## Services

- **weatherService.js**: Contains functions for fetching weather data from the OpenWeatherMap API and formatting it for display.

## Main Files

- **App.jsx**: The main application component that manages state and renders child components.
- **index.jsx**: Entry point of the application.
- **index.css**: Custom styles for the application.

## Libraries and Dependencies

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a faster and leaner development experience for modern web projects.
- **Material-UI**: A popular React UI framework that provides pre-styled components.
- **Chart.js**: A JavaScript library for creating interactive charts.
- **react-chartjs-2**: A React wrapper for Chart.js.
- **OpenWeatherMap API**: Provides weather data including current conditions, forecasts, and historical data.
- **react-hot-toast**:Provide notification in the App.
- **react-icons**: Priovide Icons to the App.

## Setup Instructions

1.Clone the Repository

```bash
   git clone https://github.com/diwakarg12/Weather-Dashboard.git
   cd weather-dashboard
```

2.Install Dependencies

```bash
npm install
```

3.Obtain an API Key

- Sign up for a free account at OpenWeatherMap.
- Obtain an API key from your account.

  4.Start the Development Server

```bash
npm run dev
```

5.Build for Production

```bash
npm run build
```

## Hosted Link

Check out the live version of the weather app [here](https://weather-dashboard-indol-seven.vercel.app/).

or <br> Copy the below Link

- https://weather-dashboard-indol-seven.vercel.app/

## ScreenShots

![Image1](<Screenshot from 2024-07-09 20-37-49.png>)
![Image2](<Screenshot from 2024-07-09 20-38-11.png>)
![Image3](<Screenshot from 2024-07-09 20-38-25.png>)

- Made By Diwakar Giri
