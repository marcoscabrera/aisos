<template>
<div>
  <apexchart width="500" height="350" type="bar" :options="chartOptions" :series="series"></apexchart></div>
</template>
<script>



export default {

  name: 'BarExample',
  data: function() {
    return {
      chartOptions: {
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
    }
  },

}


</script>