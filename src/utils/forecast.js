const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9a3471ab2be978f0bd7bafc21f05448c&query= '+latitude+', '+longitude

    request({ url, json: true }, (error, { body }={}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                current_weather: body.current.weather_descriptions[0],
                current_img: body.current.weather_icons[0],
                current_temp: body.current.temperature,
                current_humid: body.current.humidity 
            })  
        }
    })
}

module.exports = forecast