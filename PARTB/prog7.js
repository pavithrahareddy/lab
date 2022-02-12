var request = require('request')

const url =
  'http://api.weatherstack.com/current?access_key=4984b2ea10e8ce9cb6b51f8207461359&query=New%20York&units=f'

request({ url: url }, (err, response) => {
  const data = JSON.parse(response.body)

  console.log('The current temperature is ', data.current.temperature)
  console.log('Country is', data.location.country)
})
