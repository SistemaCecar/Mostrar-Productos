const ctx = document.getElementById('myChart');

const mensual = ['Ene', 'Feb', 'Mar', 'Abr', 'Mayo', 'Jun', 'Jul', 'Agos', 'Sep', 'Oct', 'Nov', 'Dic']

Chart.defaults.font.size = 14;
Chart.defaults.color = "white"
Chart.defaults.font.weigth = "bold";

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: mensual,
    datasets: [{
      label: 'Importe en ventas mensual',
      data: [534, 232, 422, 345, 678, 488, 992, 1034, 876, 305, 935, 123],
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