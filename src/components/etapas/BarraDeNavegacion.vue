<template>
 <!--        <div>
           <v-row>
              <v-col >

                  <v-btn 
                    class="mx-2"
                    fab
                    dark
                    small
                    color="primary"
                    
                    @click="IR_a_RUTA"
                  >
                    <v-icon dark>
                      mdi-view-dashboard-variant-outline 
                    </v-icon>
                  </v-btn>

              </v-col>


              <v-col>
  
                <v-btn v-if="activo_ri=='1'"
                  class="mx-2"
                  fab
                  dark
                  small
                  
                  color="primary"
                 
                  @click="IR_a_ri"
                > RI
                </v-btn>  
             </v-col>

             <v-col>
                <v-btn v-if="activo_vi=='1'"
                  class="mx-2"
                  fab
                  dark
                  small
                  
                  color="primary"
                  @click="IR_a_vi"
                > VI
                </v-btn>
             </v-col>


             <v-col>
                <v-btn v-if="activo_s=='1'"
                  class="mx-2"
                  fab
                  dark
                  small
                  
                  color="primary"
                 
                  @click="ir_al_seguimiento"
                >
                    S
                </v-btn>
             </v-col>


             <v-col>

                <v-btn v-if="activo_c"
                  class="mx-2"
                  fab
                  dark
                  small
                  
                  color="primary"
                  @click="ir_al_cierre">
                    C
                </v-btn>

             </v-col>


           

                
     


                </v-row>
        </div>  -->

          <v-bottom-navigation v-model="value" color="primary">

     <v-btn 
                    
              
                    dark
                    small
                    
                    
                    @click="IR_a_RUTA"
                  >
                    <span class ="d-none d-sm-flex" >Dashboard</span>
                    <v-icon dark>
                      mdi-view-dashboard-variant-outline 
                    </v-icon>
                  </v-btn>
    

    <v-btn value="recent" @click="IR_a_ri">
      <span class ="d-none d-sm-flex">Inicial</span>

      <v-icon>mdi-file-document-edit-outline</v-icon>
    </v-btn >

    <v-btn value="favorites"   @click="IR_a_vi">
      <span class ="d-none d-sm-flex">Integral</span>

      <v-icon>mdi-file-cog-outline</v-icon>
    </v-btn>

    <v-btn value="nearby"  @click="ir_al_seguimiento" >
      <span class ="d-none d-sm-flex">Seguimiento</span>

      <v-icon>mdi-clipboard-check-outline</v-icon>
    </v-btn>

    <v-btn value="nearby"  @click="ir_al_cierre">
      <span class ="d-none d-sm-flex">Cierre</span>
      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
    export default {

        props: {
            activo_ri: {
               type : String
            },
            activo_vi: {
               type : String
            },
            activo_s: {
               type : String
            },
            activo_c: {
               type : String
            },
        },

        data() {

            return {



            }
        },



        methods: {

        IR_a_ri() {

       // named route
       
          let id  = this.$route.params.id;
          this.$router.push({ name: "DenunciasDetalle", params: { id: id } });
         

        },

   ir_al_cierre(){
    
      let id  = this.$route.params.id;
      this.$router.push({ name: "Cierre", params: { incidenteId: id } });
     

    },
    ir_al_seguimiento(){
       
       let id  = this.$route.params.id;
        this.$router.push({ name: "Seguimiento", params: { id: id } });

       
    },
      IR_a_vi(){
        
      
        let id  = this.$route.params.id;
        //this.$router.push({ name: "ValoracionIntegral", params: { id: this.$route.params.id  });
          this.$router.push({ name: "ValoracionIntegral", params: { id: id } });
      
      },
    IR_a_RUTA() {

      this.$router.push('/dashboard');
    },
        },
        
    }
</script>

<style scoped>

</style>