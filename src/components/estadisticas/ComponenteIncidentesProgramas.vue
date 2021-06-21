<template>
 <v-container name="xxxxx">
     <v-row>
         <v-col cols="12">
            <h3>Numero de Incidentes por Programa ..</h3>
         </v-col>
     </v-row>
     <v-row>
         <v-col v-for="value in this.objetos"  :key="value.id" cols="12" xm="12" sm="6" md="4" lg="4">
            <ComponenteDatoIncidente 
               
               :abierto="value.TotalIncidenteAbiertos"
               :cerrado ="value.TotalIncidenteCerrados"
               pendiente = 0
               :identificador="value.programa" 
               :titulo ="value.programa"> 
               </ComponenteDatoIncidente> 
             
           
         </v-col>

     </v-row>

  </v-container>
</template>

<script>
import ComponenteDatoIncidente from '@/components/estadisticas/ComponenteDatoIncidente.vue';

    export default {
        name :"generadorComponentes",

        props :{

            datos :{ type:Array}

        },

        data() {

                return {
                    
                    programas : [],
                    objetos : null,
                    partevar : '',
                    todovar  : ''
                }


        },

        mounted() {

                 console.log(" grafica programas : " );

                 console.log( this.$store.state.estadisticas.datos_graficas.grafica2);

                 this.objetos = this.$store.state.estadisticas.datos_graficas.grafica2;

                 this.objetos.forEach(this.convierte);


              

                let quitarUltimocaracterer  = "";  
                console.log( this.partevar);
                quitarUltimocaracterer  =  this.partevar.slice(0, -1);  

                this.todovar  = "["+ quitarUltimocaracterer + "]";




                 console.log( this.todovar);
                 this.programas =  JSON.parse( this.todovar);
                 console.log(  this.programas);
        },

        methods : {

              convierte(value) {

                let id = value.id;
                let ti = value.TotalIncidenteAbiertos;
                let tc = value.TotalIncidenteCerrados;
                let p  = value.programa;
                let pa = value.porcentajeAbiertos;
                let pc = value.porcentajeCerrados;


                let x = '{ "id":' +id +'  ,  "TotalIncidenteAbiertos" : '+ti+',  "TotalIncidenteCerrados" : ' +tc + ', "programa" :  "' + p + '" ,"porcentajeAbiertos" : '+pa+' , "porcentajeCerrados" :'+pc+'},';

                this.partevar = this.partevar + x;
              

              }

        },

        computed : {

            lprogramas (){

            return this.$store.state.estadisticas.datos_graficas.grafica2;

            }
        },

        components :{

            ComponenteDatoIncidente
        }
        
    }
</script>

<style scoped>

</style>