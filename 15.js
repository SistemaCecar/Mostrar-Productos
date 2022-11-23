const ctx = document.getElementById('myChartQuincenal');

const mensual = ['Quicena 1', 'Quincena 2']

Chart.defaults.font.size = 14;
Chart.defaults.color = "white"
Chart.defaults.font.weigth = "bold";

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: mensual,
    datasets: [{
      label: 'Importe en ventas quincenal',
      data: [534, 232],
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