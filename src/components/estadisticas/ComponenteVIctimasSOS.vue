<template>
  <v-card
    width="100%"
  
  >
    <v-list-item two-line>
      <v-list-item-content>
      <!-- <v-list-item-title class="subheadline">
          {{titulo}}
        </v-list-item-title> -->
        <v-list-item-subtitle class="text-center"><strong>Niños,Niñas Y Jovenes que reciben aposo SOS</strong></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col
           align="center"
          cols="12"
        >
         <canvas id="identificador_victimas_sos">

         </canvas>
        </v-col>

      </v-row>
      <v-row>
        <v-col>
          <p class="text-center">Mujeres  <strong>45</strong> - Hombres <strong>35</strong> 
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
   this.createChart('identificador_victimas_sos');
},
data() {
  return {
   
    datax : {
    datasets: [{
      label: 'Victimas Con apoyo SOS',
        data: [45,35],
        backgroundColor : [
          "#fa03b3",
          "#038afa"
          ],
        borderColor: [
          "#fa03b3 ",
          "#038afa"
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