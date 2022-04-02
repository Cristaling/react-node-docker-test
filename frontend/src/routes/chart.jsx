import { useEffect, useState } from "react";
import LineChart from "../components/chart/LineChart";
import useInterval from "../components/hooks/useInterval";
import NavBar from "../components/navigation/Navbar";
import '../styles/chart.css'

export const ChartPage = () => {

    const MAX_DATA = 720;
    const [series, setSeries] = useState([{ data: [] }]);
    const [data, setData] = useState([]);
    const [currentTime, setCurrentTime] = useState(1324508400000)

    useInterval(() => {
        var tempData = [...data]

        if (tempData.length > MAX_DATA) {
            tempData = tempData.slice(tempData.length - MAX_DATA)
        }

        for (var i = 0; i < 4; i++) {
            var nextNumber = Math.floor(Math.random() * 100);
            var theTime = currentTime + i * 250;
            tempData.push({
                x: theTime,
                y: nextNumber
            })
        }

        setCurrentTime(currentTime + 4 * 250)
        setData(tempData)
        setSeries([{ data: tempData }])
    }, 1000);

    return (
        <div className='chart-page'>
            <NavBar />
            <div style={chartContainerStyle}>
                <LineChart data={series} />
            </div>
        </div>
    );
}

const chartContainerStyle = {
    paddingTop: '10vh',
    display: 'flex',
    justifyContent: 'center'
}