// The Adapter design pattern is a structural design pattern that allows objects with incompatible interfaces to work
// together. It acts as a bridge between two incompatible interfaces, enabling them to collaborate without modifying
// their existing code.

// Existing code using the weather service
class WeatherService {
  constructor(apikey) {
    this.apikey = apikey;
  }
  getWeather(latitude, longitude) {
    // Call weather service API with decimal coordinates
    console.log(`Fetching weather data for ${latitude}, ${longitude}`);
    // ...
  }
}

// New weather service with a different coordinate format
class NewWeatherService {
  constructor(apikey) {
    this.apikey = apikey;
  }
  getWeatherByDegress(latitudeDegrees, longitudeDegrees) {
    // Call new weather service API with degree coordinates
    console.log(
      `Fetching weather data for ${latitudeDegrees}°, ${longitudeDegrees}°`
    );
    // ...
  }
}

// Adapter to make the new weather service compatible with the existing code
