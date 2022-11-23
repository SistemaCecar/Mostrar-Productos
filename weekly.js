const ctx = document.getElementById('myChartSemanal');
Chart.defaults.font.size = 14;
Chart.defaults.color = "white"
Chart.defaults.font.weigth = "bold";
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'],
    datasets: [{
      label: 'Importe de ventas semanal',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1,
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