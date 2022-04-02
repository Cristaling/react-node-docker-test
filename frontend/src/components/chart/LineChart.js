import Chart from 'react-apexcharts'

export default function LineChart({ data }) {

    const options = {
        chart: {
            id: 'apexchart-example',
            type: 'line',
            foreColor: '#F2F2F2',
            animations: {
                enabled: false,
            },
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        xaxis: {
            type: 'datetime',
            range: 180000
        },
        yaxis: {
            min: 0,
            max: 100
        },
    };

    return (
        <>
            <Chart className="w-full md:w-[50vw]" options={options} series={data} type="line"/>
        </>
    );
}