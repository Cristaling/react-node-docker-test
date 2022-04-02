
function calculatePoint(time) {

    var preparedTime = time / 100 % 700 / 700
    var step = 2 * Math.PI * (preparedTime)

    var y = Math.sin(step) * 30 + 50
    return {
        x: time,
        y: y
    }
}

exports.getData = async (req, res) => {

    var time = req.query.time
    
    if (!time) {
        res.send([])
    }

    time = parseInt(time)

    var result = []

    for (var i = 0; i<4;i++) {
        dataPoint = calculatePoint(time)
        result.push(dataPoint)
        time += i * 250
    }

    console.log(result)
    res.send(result)
}