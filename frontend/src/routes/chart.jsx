import { useEffect, useState } from "react";
import LineChart from "../components/chart/LineChart";
import useInterval from "../components/hooks/useInterval";
import NavBar from "../components/navigation/Navbar";
import axios from 'axios';
import '../styles/chart.css'

export const ChartPage = () => {

    const MAX_DATA = 720;
    const [series, setSeries] = useState([{ data: [] }]);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);

    useInterval(() => {
        var tempData1 = [...data1]
        var tempData2 = [...data2]

        if (tempData1.length > MAX_DATA) {
            tempData1 = tempData1.slice(tempData1.length - MAX_DATA)
        }

        if (tempData2.length > MAX_DATA) {
            tempData2 = tempData2.slice(tempData2.length - MAX_DATA)
        }

        axios.get("/chart?time=" + Date.now())
            .then(function (response) {
                if (!response.data) {
                    return
                }

                tempData1.push(...response.data.data1)
                tempData2.push(...response.data.data2)

                setData1(tempData1)
                setData2(tempData2)
                setSeries([{ data: tempData1 }, { data: tempData2 }])
            })
            .catch(function (error) {
                console.log(error)
            });
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