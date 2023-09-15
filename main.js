import extract from './lib/main.js'

const objeto = {
  "location": {
    "name": "Caracas",
    "region": "Distrito Federal",
    "country": "Venezuela",
    "lat": 10.5,
    "lon": -66.92,
    "tz_id": "America/Caracas",
    "localtime_epoch": 1693831862,
    "localtime": "2023-09-04 8:51"
  },
  "current": {
    "last_updated_epoch": 1693831500,
    "last_updated": "2023-09-04 08:45",
    "temp_c": 28.0,
    "temp_f": 82.4,
    "is_day": 1,
    "condition": {
      "text": "Sunny",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
      "code": 1000
    },
    "wind_mph": 5.6,
    "wind_kph": 9.0,
    "wind_degree": 90,
    "wind_dir": "E",
    "pressure_mb": 1012.0,
    "pressure_in": 29.88,
    "precip_mm": 0.0,
    "precip_in": 0.0,
    "humidity": 74,
    "cloud": 0,
    "feelslike_c": 31.5,
    "feelslike_f": 88.6,
    "vis_km": 10.0,
    "vis_miles": 6.0,
    "uv": 6.0,
    "gust_mph": 4.9,
    "gust_kph": 7.9
  }
}

const resultado = extract({
  ob: objeto,
  extract: ["lat", "lon"]
})

console.log(resultado)
