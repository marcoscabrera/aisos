<template>
  <v-col cols="12" xs="12" md="6">
    <v-menu
      v-model="menu2"
      :close-on-content-click="false"
      :nudge-right="40"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          :value ="date"
         
          label="Fecha"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker disabled="true" v-model="date" @input="asignarFecha($event)"></v-date-picker>
    </v-menu>
      <v-alert v-if="this.$store.state.uivars.uivars_error_seleccionarFecha" type="error">
      Debe de escoger una Fecha.
    </v-alert>
  </v-col>
</template>
<script>
export default {
  name: "calendario",

  props: ["fecha"],

  data() {
    return {
      date: null,
      menu2: false,
    };
  },

mounted () {
  this.fechaDeHoy();
},
  methods :{

formatDate(date,displaytime) {
	date=(date===undefined)?"":date;
	displaytime=(displaytime===undefined)?false:displaytime;
  if (date == '' || date == null){
		date = new Date();
	} else {
		date = new Date(date);	
	}
  
  /*var monthNames = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct",
    "Nov", "Dec"
  ];*/
 var monthNames = [
    "01", "02", "03",
    "04", "05", "06", "07",
    "08", "09", "10",
    "11", "12"
  ];
  var dd = date.getDate().toString();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();
  
  var hh = date.getHours().toString();
  var mm = date.getMinutes().toString();
  var ss = date.getSeconds().toString();
  
  var ddChars = dd.split('');
  var hhChars = hh.split('');
  var mmChars = mm.split('');
  var ssChars = ss.split('');
	if (displaytime==false){

    var dia = ddChars[1]?dd:"0"+ddChars[0];

	//return dia + '-' + monthNames[monthIndex] + '-' + year;		
  return year + '-' + monthNames[monthIndex] + '-' + dia ;		
  
  //return ( year + '-' + monthNames[monthIndex] + '-' + ddChars[1]?dd:"0"+ddChars[0]);		

}
  return (ddChars[1]?dd:"0"+ddChars[0]) + '-' + monthNames[monthIndex] + '-' + year+ ' '+(hhChars[1]?hh:"0"+hhChars[0])+':'+(mmChars[1]?mm:"0"+mmChars[0])+':'+(ssChars[1]?ss:"0"+ssChars[0]);
},


    fechaDeHoy(){
      
      const start = this.formatDate();

     // console.log(" La fecha de hoy : " + start);
      this.date = start;

       this.$store.dispatch('setear_FechaInicial',this.date);

      this.$store.dispatch('actions_uivars_error_seleccionarFecha',false);


    },

    asignarFecha(evento){
     this.menu2=false;
     // console.log("este es el valor de $event en calendario " + evento);

      
      
      this.$store.dispatch('setear_FechaInicial',evento);

      this.$store.dispatch('actions_uivars_error_seleccionarFecha',false);

    //  console.log("valor de la fecha : " + this.$store.state.incidentes.etapainicial_fecha);

    }
  }
};
</script>