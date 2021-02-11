<template>
  <v-card
    width="100%"
  
  >
     <v-list-item two-line>
      <v-list-item-content>
       <v-list-item-title class="subheadline">
         <strong>Total De Incidentes de Desprotección Infantil</strong>
        </v-list-item-title>
        <v-list-item-subtitle><strong></strong></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

       <canvas id="planet-chart2">

       </canvas>
  </v-card>

</template>

<script>
import Chart from 'chart.js';

    export default {

mounted () {
   this.createChart('planet-chart2');
},
data() {
  return {
      
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)',


      options: {
					title: {
						display: true,
						text: 'Tipos de Caso'
					},
					tooltips: {
						mode: 'index',
						intersect: false
					},
					responsive: true,
					scales: {
						xAxes: [{
							stacked: true,
						}],
						yAxes: [{
							stacked: true
						}]
					}
				},

      barChartData: {
			labels: ['AF-TIJUANA', 'AD-CDMX', 'AF-MORELIA', 'AF-TUXTLA', 'AF-COMITAN','FF-HUEHUETOCA','FF-TEHUACAN','FF-COMITAN'],
			datasets: [{
				label: 'Abuso Fisico',
				backgroundColor: "rgb(255, 205, 86)",
				stack: 'Stack 0',
				data: [
					4,9,2,5,12,4,8,5
				]
			}, {
				label: 'Abuso Sexual',
				backgroundColor: 'rgb(255, 99, 132)',
				stack: 'Stack 0',
				data: [
					7,17,13,22,6,5,2,9
				]
			}, {
				label: 'Abuso Emocional',
				backgroundColor: 'rgb(54, 162, 235)',
				stack: 'Stack 0',
				data: [
					17,7,3,22,6,7,11,8
				]
			},{
				label: 'Negligencia y/o Trato Negligente',
				backgroundColor: 'rgb(75, 192, 192)',
				stack: 'Stack 0',
				data: [
					10,7,10,22,6,3,2,6
				]
			},  {
				label: 'Violacion de la Privacidad',
				backgroundColor: 'rgb(153, 102, 255)',
				stack: 'Stack 0',
				data: [
					5,
					15,
					10,
					25,
					18,2,7,2
					
				]
			}]

		}

  }
},
 methods: {
    createChart(chartId) {
    const ctx = document.getElementById(chartId);
    console.log(ctx);
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: this.barChartData,
      options: this.options,
    });
    console.log(myChart);
  }
}
        
    }
</script>

<style scoped>

</style>


