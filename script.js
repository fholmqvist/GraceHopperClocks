const getHandElements = n => [
    document.getElementById('hour' + n),
    document.getElementById('minute' + n),
    document.getElementById('second' + n)
]

const [hour1, minute1, second1] = getHandElements(1)
const [hour2, minute2, second2] = getHandElements(2)
const [hour3, minute3, second3] = getHandElements(3)

const time = 1000

const rotate = pos => `rotate(${pos}deg)`

const regularClock = () => {
    var [hrPos, minPos, secPos] = getArmRegularPositions()

    hour1.style.transform = rotate(hrPos)
    minute1.style.transform = rotate(minPos)
    second1.style.transform = rotate(secPos)

    setTimeout(() => regularClock(), time)
}

const reverseClock = () => {
    var [hrPos, minPos, secPos] = getArmReversePositions()

    hour2.style.transform = rotate(hrPos)
    minute2.style.transform = rotate(minPos)
    second2.style.transform = rotate(secPos)

    setTimeout(() => reverseClock(), time)
}

const spinningClock = () => {
    var [hrPos, minPos, secPos] = getArmRegularPositions()

    hour3.style.transform = rotate(hrPos)
    minute3.style.transform = rotate(minPos)
    second3.style.transform = rotate(secPos)

    setTimeout(() => spinningClock(), time)
}

const getArmRegularPositions = () => {
    var [hr, min, sec] = getTime()
    return handPositions(hr, min, sec)
}

const getArmReversePositions = () => {
    var [hr, min, sec] = getTime()
    return handPositions(-hr, -min, -sec)
}

const handPositions = (hr, min, sec) => {
    let hrPos = hr * 360 / 12 + ((min * 360 / 60) / 12)
    let minPos = (min * 360 / 60) + (sec * 360 / 60) / 60
    let secPos = sec * 360 / 60
    return [hrPos, minPos, secPos]
}

const getTime = () => {
    var date = new Date()
    return [date.getHours(), date.getMinutes(), date.getSeconds()]
}

document.addEventListener('DOMContentLoaded', () => {
    regularClock()
    reverseClock()
    spinningClock()
})
