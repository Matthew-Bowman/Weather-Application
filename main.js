const ctx = document.getElementById('chart').getContext('2d');

const labels = ["0000", "0100", "0200", "0300", "0400", "0500", "0600", "0700", "0800", "0900", "1000", "1100", "1200", "1300", "1400", "1500", "1600", "1700", "1800", "1900", "2000", "2100", "2200", "2300",];
const data = {
    labels: labels,
    datasets: [
        {
            label: 'Temperature',
            data: [16, 16, 15, 15, 14, 15, 16, 16, 16, 16, 17, 17, 16, 16, 15, 15, 16, 16, 16, 16, 16, 15, 15, 14],
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            yAxisID: 'y',
            tension: 0.5,
        },
        {
            label: 'Humidity',
            data: [62, 62, 62, 62, 63, 63, 63, 63, 62, 62, 61, 61, 60, 59, 59, 59, 59, 57, 57, 57, 56, 56, 56, 56],
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: "rgba(54, 162, 235,0.5)",
            yAxisID: 'y1',
            tension: 0.5,
        }
    ]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        stacked: false,
        plugins: {
            title: {
                display: true,
                text: 'A Temperature/Humidity Graph'
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                beginAtZero: true,
                max: 20,
                grid: {
                    display: false,
                },
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                beginAtZero: true,
                max: 100,
                grid: {
                    display: false,
                },
            },
        },
        elements: {
            point: {
                radius: 0,
            }
        }
    },
};

const myChart = new Chart(ctx, config);