


const axios = require('axios');

const API_KEY = 'da546ed0768e40279dc72742263009';
const BASE_URL = 'http://api.weatherapi.com/v1/current.json';

const getWeather = async () => {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error('Usage: node weather.js <city_name>');
    console.error('Examples:');
    console.error('  node weather.js Bangkok');
    console.error('  node weather.js "New York"');
    process.exit(1);
  }

  const cityName = args.join(' ');

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: cityName,
      },
    });

    const { name, country } = response.data.location;
    const { temp_c, condition } = response.data.current;

    console.log(`Current Weather for \({name},\){country}:`);
    console.log(`Temperature: ${temp_c}°C`);
    console.log(`Condition:   ${condition.text}`);
  } catch (error) {
    if (error.response) {
      const apiMessage = error.response.data?.error?.message || 'City not found or invalid request.';
      console.error(`Error: ${apiMessage}`);
    } else if (error.request) {
      console.error('Error: Unable to connect to WeatherAPI service. Please check your network connection.');
    } else {
      console.error(`Error: ${error.message}`);
    }
    process.exit(1);
  }
};

getWeather();