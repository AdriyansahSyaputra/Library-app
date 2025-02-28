const barChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            label: "Books Borrowed",
            data: [65, 59, 80, 81, 56, 55],
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
        },
    ],
};

const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            label: "New Users",
            data: [12, 19, 3, 5, 2, 3],
            borderColor: "rgba(153, 102, 255, 1)",
            backgroundColor: "rgba(153, 102, 255, 0.2)",
            fill: true,
        },
    ],
};

const doughnutChartData = {
    labels: ["Returned", "Borrowed", "Delayed"],
    datasets: [
        {
            label: "Books Status",
            data: [300, 150, 50],
            backgroundColor: [
                "rgba(75, 192, 192, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(255, 99, 132, 0.6)",
            ],
            borderColor: [
                "rgba(75, 192, 192, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(255, 99, 132, 1)",
            ],
            borderWidth: 1,
        },
    ],
};

export { barChartData, lineChartData, doughnutChartData };