<template>
  <v-card width="100%">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="subheadline">
          <strong>Total De Incidentes de Desprotección Infantil</strong>
        </v-list-item-title>
        <v-list-item-subtitle><strong></strong></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <canvas id="planet-chart21"> </canvas>
  </v-card>
</template>

<script>
import Chart from "chart.js";

export default {
  mounted() {
    // this.createChart('planet-chart21');

    const labels =
      this.$store.state.estadisticas.datos_graficas.grafica3.programas;
    const datasets =
      this.$store.state.estadisticas.datos_graficas.grafica3.dataset;

    console.log(" labels : ");
    console.log(  JSON.stringify(labels));
    console.log(" datasets : ");
    console.log( JSON.stringify( datasets));
	
    const barChartData2 = {
      labels: labels,
      datasets: datasets,
    };

    const options2 = {
      title: {
        display: true,
        text: "Tipos de Caso",
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      responsive: true,
      scales: {
        xAxes: [
          {
            stacked: true,
          },
        ],
        yAxes: [
          {
            stacked: true,
          },
        ],
      },
    };

    const ctx = document.getElementById("planet-chart21");
    console.log(ctx);
    const myChart = new Chart(ctx, {
      type: "bar",
      data: barChartData2,
      options: options2,
    });
    typeof myChart;
  },
  data() {
    return {
      options: {
        title: {
          display: true,
          text: "Tipos de Caso",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        responsive: true,
        scales: {
          xAxes: [
            {
              stacked: true,
            },
          ],
          yAxes: [
            {
              stacked: true,
            },
          ],
        },
      },

      barChartData: {
        labels: this.labeles,
        datasets: [
          {
            label: "Abuso Fisico",
            backgroundColor: "rgb(255, 205, 86)",
            stack: "Stack 0",
            data: [4, 9, 2, 5, 12, 4, 8, 5],
          },
          {
            label: "Abuso Sexual",
            backgroundColor: "rgb(255, 99, 132)",
            stack: "Stack 1",
            data: [7, 17, 13, 22, 6, 5, 2, 9],
          },
          {
            label: "Abuso Emocional",
            backgroundColor: "rgb(54, 162, 235)",
            stack: "Stack 2",
            data: [17, 7, 3, 22, 6, 7, 11, 8],
          },
          {
            label: "Negligencia y/o Trato Negligente",
            backgroundColor: "rgb(75, 192, 192)",
            stack: "Stack 3",
            data: [10, 7, 10, 22, 6, 3, 2, 6],
          },
          {
            label: "Violacion de la Privacidad",
            backgroundColor: "rgb(153, 102, 255)",
            stack: "Stack 4",
            data: [5, 15, 10, 25, 18, 2, 7, 2],
          },
        ],
      },
    };
  },
  methods: {
    createChart(chartId) {
      const ctx = document.getElementById(chartId);
      console.log(ctx);
      const myChart = new Chart(ctx, {
        type: "bar",
        data: this.barChartData,
        options: this.options,
      });
      console.log(myChart);
    },
  },
};
</script>

<style scoped>
</style>


