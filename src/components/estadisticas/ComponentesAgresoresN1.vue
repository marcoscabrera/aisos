<template>
  <v-card
    width="100%"
  
  >
    <v-list-item two-line>
      <v-list-item-content>
      <!-- <v-list-item-title class="subheadline">
          {{titulo}}
        </v-list-item-title> -->
        <v-list-item-subtitle class="text-center"><strong>Numero de agresores o agresoras</strong></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col
           align="center"
          cols="12"
        >
         <canvas id="identificador_agresores">

         </canvas>
        </v-col>

      </v-row>
      <v-row>
        <v-col>
          <p class="text-center">Adulto a niña o niño  <strong> 80</strong> - Entre Pares <strong>40</strong> 
          </p>
        </v-col>
      </v-row>
    </v-card-text>
    <v-divider></v-divider>


  </v-card>
</template>

<script>
import Chart from 'chart.js';
///import planetChartData from './chart-data.js';
    export default {
        props: {
            titulo: {
                type: String,
                default: ''
            },
            identificador: {
                type: String,
                default: ''
            },
            abierto :{
                type: Number,
                default: 0
            },
            cerrado : {
                type: Number,
                default: 0
            },
            pendiente : {
                type: Number,
                default: 0
            }
        },

        mounted () {
   this.createChart('identificador_agresores');
},
data() {
  return {
   
    datax : {
    datasets: [{
      label: 'Agresores o agresoras',
        data: [120,43],
        backgroundColor : [
          "#a803fa",
          "#420cd4"
          ],
        borderColor: [
          "#a803fa",
          "#420cd4"
        ],
        borderWidth: [1, 1]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Adulto a niña o niño',
        'Entre Pares'
      
    ]
} ,//termina datax
options: {
      responsive: true
}
  }//termina return
},
 methods: {
    createChart(chartId) {
    const ctx = document.getElementById(chartId);
    console.log(ctx);
    /*
    type: 'pie',
    data: data,
    options: options
    */
    const myChart = new Chart(ctx, {
      type: 'pie',
      data: this.datax,
      options: this.options,
    });
    console.log(myChart);
  }
}
    }
</script>

<style scoped>

</style>