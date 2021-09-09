# Weather App Made with React
### [Try the live app here.](https://serkanbabacan-weather.netlify.app/)

---

A weather application to provide current, hourly and daily weather forecast for any city around the world.\
I used Open Weather Map API to retrive the forecast data and TOMTOM API for search bar and reverse geocoding.\
Built with react, using hooks, styled-components, recharts, axios.\
It has daily and hourly forecast analytics which presented using charts.\
For the icons, I used [weather-icons](https://erikflowers.github.io/weather-icons/). 

## Setting up development environment 

- Install Node.js if you don't have already.

- `git clone https://github.com/serkanbabacan/react-weather-app`

- Install the packages using `npm install`

- Create an empty .env file.

- Obtain TOMTOM API key and Open Weather Map API key and put it in the .env file:

```bash
`REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'`
`REACT_APP_API_KEY = <your api key here>`
`REACT_APP_TOMTOM_URL = 'https://api.tomtom.com/search/2'`
`REACT_APP_TOMTOM_KEY = <your api key here>`
```

#### Run the script of your choise:
- #### `npm start`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- #### `npm run build`
Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

