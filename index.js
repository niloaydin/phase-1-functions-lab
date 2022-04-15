function distanceFromHqInBlocks(pickUpLocation) {
    const value = (pickUpLocation - 42)
    if (value < 0) {
        return (value * -1)
    } else {
        return value
    }
}

function distanceFromHqInFeet(someValue) {
    const value = (someValue - 42)
    if (value < 0) {
        return (value * -1) * 264
    } else {
        return value * 264
    }
}

function distanceTravelledInFeet(start,destination) {
     const value = (destination - start)
    if (value < 0) {
        return (value * -1) * 264
    } else {
        return value * 264
    }
}

function calculatesFarePrice(start, destination) {
    let value = (destination - start) * 264
    if (value < 0) {
        value = (value * -1)
    } else if (value > 0) {
        value = value
    }

    if (value < 400) {
        return  0
    } else if (value < 2001) {
        return (value - 400) * 0.02
    } else if (value < 2501) {
        return 25
    } else if (value > 2500) {
       return`cannot travel that far`

    }
}
