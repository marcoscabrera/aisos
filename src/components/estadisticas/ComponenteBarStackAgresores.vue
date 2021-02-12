<template>
  <v-card
    width="100%"
  
  >
     <v-list-item two-line>
      <v-list-item-content>
       <v-list-item-title class="subheadline">
         <strong>Número de agresores en los diferentes programas de aldeas SOS</strong>
        </v-list-item-title>
        <v-list-item-subtitle><strong></strong></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

       <canvas id="agresorestotales">

       </canvas>
  </v-card>

</template>

<script>
import Chart from 'chart.js';

    export default {

mounted () {
   this.createChart('agresorestotales');
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
						text: 'Victimas'
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
				label: 'Madre SOS,Tia SOS',
				backgroundColor: "#f58e02",
				stack: 'Stack 0',
				data: [
					4,5,3,5,7,4,8,5
				]
			}, {
				label: 'Colaborador SOS',
				backgroundColor: '#d67c01',
				stack: 'Stack 0',
				data: [
					7,5,3,12,6,5,2,9
				]
			}, {
				label: 'Familia de origen',
				backgroundColor: '"#a46309"',
				stack: 'Stack 0',
				data: [
					5,7,3,2,6,7,3,8
				]
			},{
				label: 'Adulto Externo',
				backgroundColor: '#804f0a',
				stack: 'Stack 0',
				data: [
					1,1,1,2,2,3,2,1
				]
			},
            {
				label: 'Niña o niño con apoyo SOS',
				backgroundColor: '#b3c70a',
				stack: 'Stack 0',
				data: [
					1,1,5,2,6,3,2,1
				]
			},
             {
				label: 'Niña o niño sin apoyo SOS',
				backgroundColor: '#8c9b09',
				stack: 'Stack 0',
				data: [
					5,1,5,9,6,8,2,6
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


