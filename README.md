# Team 3 DeafBlind 2021
This is the project by Team 3 focusing on the following problem statement:

`A huge majority of people with sensory loss and those that care for them do not know what places and activities are accessible for their needs, this includes restaurants, stores and gyms.`

The idea of the application is to allow users to be able to search for venues in the app that are accessible. The application was developed in React Native as it can be deployed to both platforms iOS and Android.

## Idea
Allow the user to search for a place using a postcode, place name or their current location. The app should then show the closest places in the relevant category (e.g. Pharmacy, Restaurants etc.).

The user will then be displayed with the accessibility features and the contact details of the venue. The user will have the option to either call or get directions to the venue. The directions button will redirect user to the navigation app.

## Features
- Google Maps API provides the contact details and the location of the venue
- The app allows you to call the venue directly with a button press
- The app allows you to get directions through the navigation app installed on the phone
- User can search for venues in London (currently: hardcoded location)

## In Progress
- User Input Form which will gather accessibility data for venues
- To enter current postcode and search for data near their location
- Gather data of different venues and the accessibility features they have

## Future Work
- Filter venues by accessibility features
- Search a venue by its name
- Share the location with contacts

## Authors
PM: Sonjide Hussain
Designers: Samiya Ahmed and Shah Hussain
Developers: Hasnaat Akhtar and Yusuf Chowdhury

## Directions to install the application
Download “Expo Go” from your app store Go to Profile tab > Options > Log in:

- username: ddteam3
- password: DDTeam3!

Go to this link in your PC browser and use your phone camera to scan the QR code: [https://expo.dev/@ddteam3/access-my-city?release-channel=access-my-city](https://expo.dev/@ddteam3/access-my-city?release-channel=access-my-city)

It will prompt to open in Expo Go - follow the prompt the app should load on your phone

## To Run Locally

Clone the project

```bash
  git clone https://github.com/deendevelopers/team-3-deafblind-2021
```

Go to the project directory

```bash
  cd dd-app
```

Install dependencies

```bash
  yarn install
```

Start the Expo tool

```bash
  yarn start
```

Follow the prompts in the command line to emulate on either iOS or Android
