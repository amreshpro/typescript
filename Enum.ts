//used to define named constant
enum WeatherConditions {
    Sunny,
    Cloudy,
    Rainy,
    Snowy,
}

enum WeatherConditions2 {
    Sunny="sunny",
    Cloudy="cloudy",
    Rainy="rainy",
    Snowy="snowy",
}


// let currentWeather = WeatherConditions.Rainy//2 becuse it is at 2 index
let currentWeather = WeatherConditions2.Rainy
console.log("The current weather is "+currentWeather.toLocaleUpperCase())