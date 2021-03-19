import apiProgramas from '@/apialdeas/apiProgramas.js';
<template>
  <v-col cols="12" xs="12" md="6">
    <v-select
      :value="programa"
      :item-value="programa"
      :items="itemsUnidades"
      label="PROGRAMA"
      dense
      filled
      @change="asignarValor($event)"
    >
    </v-select>

     <v-alert v-if="this.$store.state.uivars.uivars_error_seleccionarPrograma" type="error">
      Debe de escoger un Programa.
    </v-alert>

  </v-col>
</template>

<script>
import apiProgramas from "@/apialdeas/apiProgramas.js";
export default {
  name: "comboProgramaSeleccionado",

  computed : {
       
       getError(){

         return this.$store.state.uivars.error_seleccionarPrograma ;
       }

  },

  props: ["programa","error_programa"],
  data() {
    return {
      programaSeleccionado: "",
      itemsUnidades: [],
    };
  },
  created() {
    //this.prop_a_local();
    this.cargarProgramas2();
  },
  methods: {
        async cargarProgramas2() {
      
      //verficamos el rol del usuariologueado, si el rol es ==0 
      //cargamos todos los programas
      // si el rol no es cero se carga el programa segun el id

      //let programaid = this.$store.state.usuarios.usuarios_usuariologueado.programa;
     let programaid =  this.$store.state.usuarios.usuarios_usuariologueado_rol.VISIBILIDADDEINCIDENTES;
      
      console.log("valor de progrma id: " + programaid);

   

     let promesa = apiProgramas.cargar__todo__los__programas_columna(this.$store);
      
 

     if ( programaid == 'TODOS') {
          promesa
            .then((response) => {
            //  console.log("valor d los progrmas: " + JSON.stringify(response.data));
              //let programs = response.data;

            this.itemsUnidades = response.data;
          

            })
            .catch((error) => {
              console.log(error);
            });
     }

     if(programaid == 'PROGRAMA'){
       
       console.log(" soli un programa : " +  this.$store.state.usuarios.usuarios_usuariologueado.programa);
       let programActual =this.$store.state.usuarios.usuarios_usuariologueado.programa;
       this.itemsUnidades.push(programActual)   ;
     }


     
      
    },

    async cargarProgramas() {
      
      //verficamos el rol del usuariologueado, si el rol es ==0 
      //cargamos todos los programas
      // si el rol no es cero se carga el programa segun el id

      let programaid = this.$store.state.usuarios.usuarios_usuariologueado.programa;
      let promesa = Promise;
      
      console.log("valor de progrma id: " + programaid);

      programaid == 'TODOS' ?   promesa = apiProgramas.cargar__todo__los__programas(this.$store):
      
      this.itemsUnidades.push(programaid)   ;

        
      if (this.itemUnidades.length>0) return;
     
      promesa
        .then((response) => {
          console.log("valor d los progrmas: " + JSON.stringify(response.data));
          //let programs = response.data;

         /* this.itemsUnidades = programs.map((program, index) => {
             console.log(index);
            console.log(program.abreviatur);
            return program.abreviatura;
          });

          console.table(this.itemsUnidades);*/
        })
        .catch((error) => {
          console.log(error);
        });
    },
    prop_a_local() {
      this.programaSeleccionado = this.programa;
    },
    asignarValor(evento) {
      /* el $event que se manda como parametro 
      es el que trae el valor del combo actual. */
      console.log(
        "valor del combobox de programa en etapa inicial:_ " + evento
      );

      console.log(evento);
      /*almacenamos en variable global */
      this.$store.dispatch("setear_programa", evento);
      this.$store.dispatch('actions_uivars_error_seleccionarPrograma',false);
      
      console.log(
        "valor de etapainicial_programa  " +
          this.$store.state.incidentes.etapainicial_programa
      );
    },
  },
};
</script>