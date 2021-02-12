export const planetChartData = {
    type: 'bar',
    data: {

        /**
         * 
         * AF-TIJUANA
AF-MORELIA
AD-CDMX
AF TUXTLA
AF COMITAN
FF HUEHUETOCA
FF TEHUACAN
FF COMITAN
         */
      labels: ['AF-TIJUANA', 'AF-MORELIA', 'AD-CDMX', 'AF TUXTLA', 'AF COMITAN', 'FF HUEHUETOCA', 'FF TEHUACAN', 'FF COMITAN'],
      datasets: [
        { // one line graph // "#FF0000",
       // "#00FF00"],
          label: 'Incidentes abiertos',
          data: [15,38,21, 29, 67, 62, 27, 14],
          backgroundColor: [
            'rgba(255,0 ,0,.5)', // Blue
            'rgba(255,0 ,0,.5)',
            'rgba(255,0 ,0,.5)',
            'rgba(255,0 ,0,.5)',
            'rgba(255,0 ,0,.5)',
            'rgba(255,0 ,0,.5)',
            'rgba(255,0 ,0,.5)',
            'rgba(255,0 ,0,.5)'
          ],
          borderColor: [
            '#36495d',
            '#36495d',
            '#36495d',
            '#36495d',
            '#36495d',
            '#36495d',
            '#36495d',
            '#36495d',
          ],
          borderWidth: 3
        },
        { // another line graph
          label: 'Incidentes Cerrados',
          data: [25,21,22, 18, 92, 55, 37, 24],
          backgroundColor: [
            'rgba(0, 255,85,.5)', // Green
            'rgba(0, 255,85,.5)',
            'rgba(0, 255,85,.5)',
            'rgba(0, 255,85,.5)',
            'rgba(0, 255,85,.5)',
            'rgba(0, 255,85,.5)',
            'rgba(0, 255,85,.5)',
            'rgba(0, 255,85,.5)'
          ],
          borderColor: [
            '#47b784',
            '#47b784',
            '#47b784',
            '#47b784',
            '#47b784',
            '#47b784',
            '#47b784',
            '#47b784',
          ],
          borderWidth: 3
        },
        { // another line graph
          label: 'Incidentes Pendientes',
          data: [3,10,7, 5, 3, 15, 5, 14],
          backgroundColor: [
            '#FFFF00', // Green
            '#FFFF00',
            '#FFFF00',
            '#FFFF00',
            '#FFFF00',
            '#FFFF00',
            '#FFFF00',
            '#FFFF00'
          ],
          borderColor: [
            '#FFFF00',
            '#FFFF00',
            '#FFFF00',
            '#FFFF00',
            '#FFFF00',
            '#FFFF00',
            '#FFFF00',
            '#FFFF00',
          ],
          borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            padding: 25,
          }
        }]
      }
    }
  }
  
  export default planetChartData;