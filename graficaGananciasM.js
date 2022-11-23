const ctx = document.getElementById('myChart');

const mensual = ['Ene', 'Feb', 'Mar', 'Abr', 'Mayo', 'Jun', 'Jul', 'Agos', 'Sep', 'Oct', 'Nov', 'Dic']

Chart.defaults.font.size = 14;
Chart.defaults.color = "white"
Chart.defaults.font.weigth = "bold";

new Chart(ctx, {
  type: 'line',
  data: {
    labels: mensual,
    datasets: [{
      label: 'Importe ganancias Mensual',
      data: [534.934, 232.324, 422.211, 345.467, 678.987, 488.124, 992.095, 103.545, 876.093, 305.453, 935.234, 123.777],
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