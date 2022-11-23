const ctx = document.getElementById('myChartSema');

const mensual = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']

Chart.defaults.font.size = 14;
Chart.defaults.color = "white"
Chart.defaults.font.weigth = "bold";

new Chart(ctx, {
  type: 'line',
  data: {
    labels: mensual,
    datasets: [{
      label: 'Importe ganancias Semanal',
      data: [25.032, 35.665, 15.020, 8.023, 24.543],
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