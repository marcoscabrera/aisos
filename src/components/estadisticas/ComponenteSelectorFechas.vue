<template>
    <v-container name="selectorfechas">

        <v-row>
            <v-col>
                <v-btn
                :color="diacolor"
                block
                @click= "modoSelector(1)">
                Diario
                </v-btn>

            </v-col>
            <v-col>
                <v-btn
                :color="mensualcolor"
                block
                @click= "modoSelector(2)">
                Mensual
                </v-btn>
                
            </v-col>
            <v-col>

                <v-btn
                :color="periodocolor"
                block
                @click= "modoSelector(3)">
                Periodo
                </v-btn>

                
            </v-col>
        </v-row>
        <v-row>

        <v-col cols="12" sm="6" md="6">
            <v-menu
             v-model="menu"
            :close-on-content-click="false"
             :nudge-right="40"
            transition="scale-transition"
             offset-y
             min-width="290px"
             v-if="fechainicial"
             >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Fecha"
            prepend-icon="mdi-event"
            readonly
            v-bind="attrs"
            v-on="on"
            v-if="fechainicial"
          ></v-text-field>
        </template>
        <v-date-picker ref="date" v-model="date"
         @input="menu = false" 
          :type="month"
          @change="getFechaInicial(date)"
         v-if="fechainicial"></v-date-picker>
      </v-menu>
    </v-col>
    <v-spacer></v-spacer>
        <v-col cols="12" sm="6" md="6">
            <v-menu
             v-model="menu2"
            :close-on-content-click="false"
             :nudge-right="40"
            transition="scale-transition"
             offset-y
             min-width="290px"
             v-if="fechafinal"
             >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date2"
            label="Fecha"
            prepend-icon="mdi-event"
            readonly
            v-bind="attrs"
            v-on="on"
            v-if="fechafinal"
          ></v-text-field>
        </template>
        <v-date-picker @change="getFecha2(date2)" ref="date2" v-model="date2" @input="menu2 = false"
        
        v-if="fechafinal"></v-date-picker>
      </v-menu>
    </v-col>
    <v-spacer></v-spacer>


        </v-row>
        
    </v-container>
    
</template>

<script>
export default {
    name :'SelectorFechaReportes',

    data() {
        return {
        date: new Date().toISOString().substr(0, 10),
        date2 :new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      fechainicial : true,
      fechafinal : true ,
      month: 'date',
      diacolor: '',
      mensualcolor:'',
      periodocolor: ''
        }
    },

    methods :{

        getFechaInicial(date){

            console.log(date);
            this.$store.dispatch("setearVariablefecha",date);

        },

        getFecha2(date){

            console.log(date);
             this.$store.dispatch("setearVariablefecha2",date);

        },
        
        modoSelector(modo){

            if (modo==1){
                this.fechafinal = false 
                 this.fechainicial = true 
                   this.month='date'
                    this.diacolor='blue'
                    this.mensualcolor=''
                    this.periodocolor= ''
                    this.$store.dispatch("setearVariabletipofecha",1)
            }

            if (modo==2){
                this.fechainicial = true 
                this.fechafinal = false 
                this.month='month'
                    this.diacolor=''
                    this.mensualcolor='blue'
                    this.periodocolor= ''
                      this.$store.dispatch("setearVariabletipofecha",2)

            }

            if (modo==3){
                this.fechainicial = true 
                this.fechafinal = true 
                   this.month='date'
                    this.diacolor=''
                    this.mensualcolor=''
                    this.periodocolor= 'blue'
                      this.$store.dispatch("setearVariabletipofecha",3)
            }

            

        }
    }
}
</script>
