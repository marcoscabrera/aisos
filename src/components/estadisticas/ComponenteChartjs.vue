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

       <canvas id="planet-chart31">

       </canvas>
  </v-card>

</template>

<script>
import Chart from 'chart.js';
import planetChartData from './chart-data2.js';
import eventBus from "@/eventBus.js";
export default {
  name : 'queremosbeisbol',

created(){


  
},

mounted () {
 // this.createChart('planet-chart', this.planetChartData);
        eventBus.$on('crearLaGrafica', () => {
           try{


           this.createChart('planet-chart31');
         
           }catch(error){
             
             console.log(error);

           }
    });
},
data() {
  return {

    incidentesAbiertos : [15,38,21, 29, 67, 62, 27, 14],
    incidentesCerrados : [25,21,22, 18, 92, 55, 37, 24],
    incidentesPendientes :[3,10,7, 5, 3, 15, 5, 14],

    etiquetas : [
        'AF-TIJUANA',
        'AF-MORELIA',
        'AD-CDMX', 
        'AF TUXTLA',
        'AF COMITAN',
        'FF HUEHUETOCA', 
        'FF TEHUACAN',
        'FF COMITAN'
      ],
    planetChartData, 
  }
},
 methods: {
    createChart(chartId) {

      try {
      
    /*  this.planetChartData =this.$store.state.estadisticas.datos_graficas.grafica3;
      console.log("valor de planet chart data ");
      console.log(" la variable es de tipo :" + typeof  this.planetChartData );
      console.log( this.planetChartData);

      let v = JSON.stringify(this.planetChartData);
      console.log( "valor dev : " + v);
     console.log(" la variable es de tipo :" + typeof  v );
     

      let o =  JSON.parse(v);
      console.log( "valor de o : " + o);
      console.log(" la variable es de tipo :" + typeof  o );*/
     




        const ctx = document.getElementById(chartId);

        console.log("nombre del canvas" + chartId);
        console.log(ctx);
        const myChart = new Chart(ctx, {
          type: 'bar',
          data: planetChartData.data,
          options:  {
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
                    },
        });
        console.log(myChart);
      }catch(error){

       console.log("error de la grafica : " + error);
      }


  }
}
        
    }
</script>

<style scoped>

</style>