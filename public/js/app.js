console.log('client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')
const curr_img = document.getElementById("portrait-2")

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    curr_img.src = ''
    messageTwo.textContent = ''
    messageThree.textContent = ''
    messageFour.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = 'Location : '+data.location
                curr_img.src = data.forecast.current_img
                messageTwo.textContent = 'Over View : '+data.forecast.current_weather
                messageThree.textContent = 'Temperature : '+data.forecast.current_temp
                messageFour.textContent = 'Humidity : '+data.forecast.current_humid
            }
        })
    })
})