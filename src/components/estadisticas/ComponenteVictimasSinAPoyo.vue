<template>
  <v-card
    width="100%"
  
  >
    <v-list-item two-line>
      <v-list-item-content>
      <!-- <v-list-item-title class="subheadline">
          {{titulo}}
        </v-list-item-title> -->
        <v-list-item-subtitle class="text-center"><strong>Niños,Niñas Y Jovenes que no reciben apoyo directo SOS</strong></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col
           align="center"
          cols="12"
        >
         <canvas id="identificador_victimas_sinsos">

         </canvas>
        </v-col>

      </v-row>
      <v-row>
        <v-col>
          <p class="text-center">Mujeres  <strong>75</strong> - Hombres <strong>8</strong> 
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
   this.createChart('identificador_victimas_sinsos');
},
data() {
  return {
   
    datax : {
    datasets: [{
      label: 'Victimas sin apoyo SOS',
        data: [75,8],
        backgroundColor : [
          "#ec005a",
          "#0e55ee"
          ],
        borderColor: [
          "#ec005a",
          "#0e55ee"
        ],
        borderWidth: [1, 1]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Niñas',
        'NIños'
      
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