
<template>
    <v-dialog
      v-model="this.$store.state.uivars.uivars_verAsistenteNavegacion"
      max-width="580"
    >

        <v-card>
        <v-card-title class="text-h6">
         ¿Adonde quieres ir ?
        </v-card-title>

        <v-card-text>
                 <v-list
                  subheader
                  two-line>
                  
                  <v-list-item @click.stop="irADashboard"  >
                    <v-list-item-avatar>
                        <v-icon color="blue"> mdi-view-dashboard-variant </v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title >
                          Ir al Dashboard
                      </v-list-item-title>

                      <v-list-item-subtitle ></v-list-item-subtitle>
                    </v-list-item-content>

                  </v-list-item>

                  <!---------------->
                  <v-list-item @click.stop="ir_A_etapa('inicial')" v-if="verVInicial" >
                    <v-list-item-avatar>
                        <v-icon :color="colorVinicial">  mdi-checkbox-blank-circle </v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title >
                          Ir a la etapa de Valoracion Inicial
                      </v-list-item-title>

                      <v-list-item-subtitle ></v-list-item-subtitle>
                    </v-list-item-content>

                  </v-list-item>
                  <!---------------->
                  <v-list-item @click.stop="ir_A_etapa('integral')" v-if="verVIntegral" >
                    <v-list-item-avatar>
                        <v-icon :color="colorVintegral"> mdi-checkbox-blank-circle  </v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title >
                          Ir a la etapa de Valoración Integral
                      </v-list-item-title>

                      <v-list-item-subtitle ></v-list-item-subtitle>
                    </v-list-item-content>

                  </v-list-item>
                  <!---------------->
                  <v-list-item @click.stop="ir_A_etapa('investigacion')" v-if="verInvestigacion" >
                    <v-list-item-avatar>
                        <v-icon :color="colorInvestigacion"> mdi-checkbox-blank-circle  </v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title >
                          Ir a la etapa de Investigacion 
                      </v-list-item-title>

                      <v-list-item-subtitle ></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <!---------------->
                  <v-list-item @click.stop="ir_A_etapa('denuncia')" v-if="verDenuncia"  >
                    <v-list-item-avatar>
                        <v-icon :color="colorDenuncia"> mdi-checkbox-blank-circle  </v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title >
                          Ir a la etapa de Denuncia Legal
                      </v-list-item-title>

                      <v-list-item-subtitle ></v-list-item-subtitle>
                    </v-list-item-content>

                  </v-list-item>
                  <!---------------->
                  <v-list-item @click.stop="ir_A_etapa('abordaje')" v-if="verAbordaje" >
                    <v-list-item-avatar>
                        <v-icon :color="colorAbordaje"> mdi-checkbox-blank-circle  </v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title >
                          Ir a la etapa de Abordaje Interno
                      </v-list-item-title>

                      <v-list-item-subtitle></v-list-item-subtitle>
                    </v-list-item-content>

                  </v-list-item>
                  <!---------------->
                  <v-list-item @click.stop="ir_A_etapa('seguimiento')" v-if="verSeguimiento" >
                    <v-list-item-avatar>
                        <v-icon :color="colorSeguimiento"> mdi-checkbox-blank-circle  </v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title >
                          Ir a la etapa de Seguimiento
                      </v-list-item-title>

                      <v-list-item-subtitle ></v-list-item-subtitle>
                    </v-list-item-content>

                  </v-list-item>    
                  <!---------------->
                  <v-list-item @click.stop="ir_A_etapa('cierre')" v-if="verCierre" >
                    <v-list-item-avatar>
                        <v-icon :color="colorCierre"> mdi-checkbox-blank-circle </v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title >
                          Ir a la etapa de Cierre
                      </v-list-item-title>

                      <v-list-item-subtitle ></v-list-item-subtitle>
                    </v-list-item-content>

                  </v-list-item>              

                </v-list>   

        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>



          <v-btn
            color="green darken-1"
            text
            @click="cerrarDialog"
          >
            Cerrar esta ventana
          </v-btn>
        </v-card-actions>
      </v-card>




    </v-dialog>

</template>
<script>

export default {

  props : {
           datosIncidente   :  {type : Object }
           /*verVInicial      : { type : Boolean, default : false},
           verVIntegral     : { type : Boolean, default : false},
           verInvestigacion : { type : Boolean, default : false},
           verDenuncia      : { type : Boolean, default : false},
           verAbordaje      : { type : Boolean, default : false},
           verSeguimiento   : { type : Boolean, default : false},
           verCierre        : { type : Boolean, default : false},
           colorVinicial      :
           colorVintegral     :
           colorInvestigacion :*/

  },

  data() {
    return {

           verVInicial        : false,
           verVIntegral       : false,
           verInvestigacion   : false,
           verDenuncia        : false,
           verAbordaje        : false,
           verSeguimiento     : false,
           verCierre          : false,
           colorVinicial      : 'yellow',
           colorVintegral     : 'yellow',
           colorInvestigacion : 'yellow',
           colorDenuncia      : 'yellow',
           colorAbordaje      : 'yellow',
           colorSeguimiento   : 'yellow',
           colorCierre        : 'yellow',
    }
  },

  mounted(){

   
       this.inicializarComponente();
    
  
      
   
  },

    methods :{
        inicializarComponente() {

           this.verVInicial        =this.datosIncidente.verVInicial;
           this.verVIntegral       =this.datosIncidente.verVIntegral;
           this.verInvestigacion   =this.datosIncidente.verInvestigacion;
           this.verDenuncia        =this.datosIncidente.verDenuncia;
           this.verAbordaje        =this.datosIncidente.verAbordaje;
           this.verSeguimiento     =this.datosIncidente.verSeguimiento;
           this.verCierre          =this.datosIncidente.verCierre;
           this.colorVinicial      =this.datosIncidente.colorVinicial;
           this.colorVintegral     =this.datosIncidente.colorVintegral;
           this.colorInvestigacion =this.datosIncidente.colorInvestigacion;
           this.colorDenuncia      =this.datosIncidente.colorDenuncia;
           this.colorAbordaje      =this.datosIncidente.colorAbordaje;
           this.colorSeguimiento   =this.datosIncidente.colorSeguimiento;
           this.colorCierre        =this.datosIncidente.colorCierre;

           console.log("valores inicializados");
           console.log(this.datosIncidente);

        },


        ir_A_etapa(etapa){

          const etapas= {
                         'integral'   : { name   : "ValoracionIntegral", 
                                          params : { id: this.datosIncidente.id } },
                         'inicial'    : { name   : "DenunciasDetalle", 
                                          params : { id: this.datosIncidente.id } },
                         'seguimiento' : { name   : "Seguimiento", 
                                           params : { id: this.datosIncidente.id } },
                         'cierre'      : { name   : "Cierre", 
                                           params : { incidenteId: this.datosIncidente.id } },
                         'abordaje'    : { name   : "AbordajeInterno", 
                                           params : { incidenteId: this.datosIncidente.id } },

                         'investigacion' : { name   : "InvestigacionInterna", 
                                            params : { incidenteId: this.datosIncidente.id } },
                         'denuncia'      : { name: "DenunciaLegal",
                                             params: { denunciaId: this.datosIncidente.id }}
        
                                  
          };
          
          this.$store.dispatch("action_denuncialegal_doctosCargados",0);
           this.$store.dispatch("actions_uivars_vermenuprincipal",false);
          this.$router.push(etapas[etapa]);

        } ,    
        cerrarDialog() {
         
           this.$store.dispatch("action_uivars_verAsistenteNavegacion",false);

        },

      irAconfiguracion() {
        this.$store.dispatch("actions_uivars_vermenuprincipal",false);
        this.$router.push("/configuracion");
      },
      irADashboard() {

        this.$store.dispatch("action_denuncialegal_doctosCargados",0);
        this.$store.dispatch("actions_uivars_vermenuprincipal",false);
        this.$router.push("/dashboard");
      },
      irADenuncias() {
        this.$store.dispatch("action_denuncialegal_doctosCargados",0);
        this.$store.dispatch("actions_uivars_vermenuprincipal",false);
         this.$router.push("/denuncias");
      },
      irAConciencia() {
        this.$store.dispatch("actions_uivars_vermenuprincipal",false);
        this.$store.dispatch('actions_uivars_tipo_conciencia_o_prevencion', 'conciencia');
        this.$router.push({ name : 'Conciencia' , params:{ tipo:'c' }});
      },
      irAPrevencion() {
       
      this.$store.dispatch("actions_uivars_vermenuprincipal",false);
      this.$store.dispatch('actions_uivars_tipo_conciencia_o_prevencion', 'prevencion');
      this.$router.push({ name : 'Prevencion' , params:{ tipo:'p' }});
    
      },
      irAEstadisticas() {
        this.$store.dispatch("actions_uivars_vermenuprincipal",false);
      
        this.$router.push("/estadisticas");
      }
    }
};

</script>