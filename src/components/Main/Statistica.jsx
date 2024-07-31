// src/BarChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Statistica = () => {
    const data = {
        labels: [ 'Astrum', 'Ilim', 'Biologis','Reqiston', 'proweb', 'Pdp Academy'],
        datasets: [
            {
                label: 'Growth',
                data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Educational Centers Growth',
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default Statistica;
