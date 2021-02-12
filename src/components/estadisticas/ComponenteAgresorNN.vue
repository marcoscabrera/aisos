<template>
  <v-card
    width="100%"
  
  >
    <v-list-item two-line>
      <v-list-item-content>
      <!-- <v-list-item-title class="subheadline">
          {{titulo}}
        </v-list-item-title> -->
        <v-list-item-subtitle class="text-center"><strong>Numero de agresores o agresoras de Adulto a niña o niño</strong></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col
           align="center"
          cols="12"
        >
         <canvas id="identificador_agresoresnn">

         </canvas>
        </v-col>

      </v-row>
      <v-row>
        <v-col>
         <!-- <p class="text-center">Adulto a niña o niño  <strong> 80</strong> - Entre Pares <strong>40</strong> 
          </p> -->
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
   this.createChart('identificador_agresoresnn');
},
data() {
  return {
   
    datax : {
    datasets: [{
      label: 'Agresores o agresoras',
        data: [50,70,13,30],
        backgroundColor : [
          "#f58e02",
          "#d67c01",
           "#a46309",
            "#804f0a",

          ],
        borderColor: [
             "#f58e02",
          "#d67c01",
           "#a46309",
            "#804f0a",
        ],
        borderWidth: [1, 1]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Madre SOS,Tia SOS',
        'Colaborador SOS',
        'Familia de origen',
        'Adulto Externo'
      
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