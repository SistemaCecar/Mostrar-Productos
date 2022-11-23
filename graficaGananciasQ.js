const ctx = document.getElementById('myChartQuin');

const mensual = ['Quincena 1', 'Quincena 2',]

Chart.defaults.font.size = 14;
Chart.defaults.color = "white"
Chart.defaults.font.weigth = "bold";

new Chart(ctx, {
  type: 'line',
  data: {
    labels: mensual,
    datasets: [{
      label: 'Importe ganancias Quincenal',
      data: [254.982, 332.324,],
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      borderColor: "rgba(24, 162, 135, 1)",
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});