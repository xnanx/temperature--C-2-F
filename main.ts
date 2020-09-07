let currentTemperature = 0
basic.forever(function () {
    currentTemperature = input.temperature()
    currentTemperature = currentTemperature * 1.8
    currentTemperature = currentTemperature + 32
    basic.showNumber(currentTemperature)
    basic.pause(5000)
})
