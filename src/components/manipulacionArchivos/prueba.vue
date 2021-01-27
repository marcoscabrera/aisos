<template>
<v-container>

        <v-row>
         <v-col>
            <v-btn color="primary" dark dense @click="regresarAOrigen"> Regresar</v-btn>
           
         </v-col>
            <v-col>
               <input type="checkbox" v-model="show">
            </v-col>
            <v-col>
                 <input v-model.number="page" type="number" style="width: 5em"> /{{numPages}}
            </v-col>
            <v-col>
                 <v-btn color="primary" dark dense @click="$refs.pdf.print()">Imprimir</v-btn>
            </v-col>
        </v-row>

      

        <v-row>
            <v-col>
                <div style="width: 100%">
                    <div v-if="loadedRatio > 0 && loadedRatio < 1" style="background-color: green; color: white; text-align: center" :style="{ width: loadedRatio * 100 + '%' }">{{ Math.floor(loadedRatio * 100) }}%</div>
                    <pdf v-if="show" ref="pdf" style="border: 1px solid red" :src="this.$store.state.uivars.uivars_docto_a_ver" :page="page" :rotate="rotate" @password="password" @progress="loadedRatio = $event" @error="error" @num-pages="numPages = $event" @link-clicked="page = $event"></pdf>
                </div>
            </v-col>
        </v-row>

    
    </v-container>
</template>
<script>
import pdf from 'vue-pdf'
 
export default {
    components: {
        pdf: pdf
    },
    data () {
        return {
            show: true,
           
           
            loadedRatio: 0,
            page: 1,
            numPages: 0,
            rotate: 0,
        }
    },
    methods: {
        regresarAOrigen(){
         console.log(this.$store.state.uivars.uivars_ir_origen_que_solicito_docto);
         let r = this.$store.state.uivars.uivars_ir_origen_que_solicito_docto;
         
         this.$store.dispatch('actions_uivars_ir_origen_que_solicito_docto','')
         this.$router.push(r);
        },
        password: function(updatePassword, reason) {
            console.log(reason);
            updatePassword(prompt('password is "test"'));
        },
        error: function(err) {
 
            console.log(err);
        }
    }
}
</script>