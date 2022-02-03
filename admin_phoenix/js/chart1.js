const ctx = document.getElementById('linechart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Earnings in $',
            data: [100, 300, 200, 50, 150, 500, 180, 700, 500, 600, 300, 100],
            backgroundColor: [
                'rgba(85, 85, 85, 1)'
                
            ],
            borderColor: [
                'rgb(41, 155, 99)'
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});