
function calculatePoint(time, func) {

    var preparedTime = time / 100 % 700 / 700
    var step = 2 * Math.PI * (preparedTime)

    var y = func(step) * 30 + 50

    return {
        x: time,
        y: y
    }
}

exports.getData = async (req, res) => {

    var time = req.query.time

    if (!time) {
        res.send({ data1: [], data2: [] })
    }

    time = parseInt(time)

    var result = {
        data1: [],
        data2: []
    }

    for (var i = 0; i < 4; i++) {
        dataPoint1 = calculatePoint(time, Math.sin)
        dataPoint2 = calculatePoint(time, (value) => { return Math.cos(value) + Math.sin(value / 2) })
        result.data1.push(dataPoint1)
        result.data2.push(dataPoint2)
        time += i * 250
    }

    console.log(result)
    res.send(result)
}