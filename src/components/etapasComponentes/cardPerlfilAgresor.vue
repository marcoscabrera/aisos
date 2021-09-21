<template>
  <v-card width="100%">
    <v-card-title> PERFIL DEL AGRESOR  <span class="paraCardTitulo"> Selecciona una opcion</span> </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" xs="12" sm="12" md="4">
          <v-select
            :value="perfilagresor"
            :item-value="perfilagresor"
            :items="itemsperfildelagresor"
            label="PERFIL DEL AGRESOR"
            dense
            filled
           
            @change="cambioEnPerfil($event)"
          >

          </v-select>
          <v-alert v-if="verAyuda" type="info">
              Escoga una opción en este y los controles siguientes
          </v-alert>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="4">
          <v-select
            v-if="comboann"
            :value="tiponiveluno"
            :item-value="tiponiveluno"
            :items="items_opcionesperfildelagresor"
            label="OPCIONES"
            dense
            filled
            @change="cambioEnComboann($event)"
          >
          </v-select>

          <v-select
            v-if="comoboentrepares"
            :value="tiponiveluno"
            :item-value="tiponiveluno"
            :items="items_opcionesentrepares"
            label="OPCIONES"
            dense
            filled
             @change="cambiocomoboentrepares($event)"
          >
          </v-select>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="4">
          <v-select
            v-if="combocolaborador"
            :value="tiponiveldos"
            :item-value="tiponiveldos"
            :items="items_opcioncombocolaborador"
            label="OPCIONES"
            dense
            filled
            @change="asignarOpcionColaborador_familia($event)"
          >
          </v-select>

          <v-select
            v-if="combofamiliarorigen"
            :value="tiponiveldos"
            :item-value="tiponiveldos"
            :items="items_opcioncombofamiliaorigen"
            label="OPCIONES"
            dense
            filled
             @change="asignarOpcionColaborador_familia($event)"
         
          >
          </v-select>
        </v-col>
        <v-alert v-if="this.$store.state.uivars.uivars_error_comboPerfilAgresor" type="error">
          
          Debes de escoger una opcion.

        </v-alert>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "cardPerlfilAgresor",
  props: {
    perfilagresor :   {type : String } ,
    tiponiveluno:     {type : String },
    tiponiveldos:     {type : String },
    vercomboniveluno: {type : Boolean , default :false},
    vercomboniveldos: {type : Boolean , default :false }
  }
  ,

  methods: {

    cambiocomoboentrepares(evento){
        this.$store.dispatch('setear_Paadultocolaborador',evento);

    },

    asignarOpcionColaborador_familia(valor){
     // console.log("valor en asignarOpcionColaborador_familia " +valor );

      this.$store.dispatch('setear_Paadultocolaboradortipo',valor);
    },
    cambioEnComboann(evento) {

      //console.log(evento);
      
     this.$store.dispatch('setear_Paadultocolaborador', evento);

      evento == "COLABORADOR SOS"
        ? this.mostrarComboColaboradorSOS()
        : evento == "FAMILIA DE ORIGEN"
        ? this.mostrarComboFamiliaOrigen()
        : this.mostrarAdultoExterno();
    },
    mostrarAdultoExterno() {
      
      this.combocolaborador = false;
      this.combofamiliarorigen = false;
    },
    mostrarComboColaboradorSOS() {
      this.combocolaborador = true;
      this.combofamiliarorigen = false;
    },
    mostrarComboFamiliaOrigen() {
      this.combocolaborador = false;
      this.combofamiliarorigen = true;
    },
    cambioEnPerfil(evento) {

        this.$store.dispatch('setear_Paadultocolaborador','');
         this.$store.dispatch('setear_Paadultocolaboradortipo','');
     // console.log("--------------");
//console.log(" componente CardPerfilAgresor");
    //  console.log("--------------");

//console.log(" valro " + evento);
      /* guardando */

      this.$store.dispatch('setear_PerfilDelAgresor',evento);

     evento == "ENTRE PARES"
        ? this.mostrarComboEntrePares()
        : this.mostrarComboANS();

    },
    mostrarComboEntrePares() {
      this.comoboentrepares = true;
      this.comboann = false;

      this.combocolaborador= false;
      this.combofamiliarorigen = false;
    },
    mostrarComboANS() {
      this.comboann = true;
      this.comoboentrepares = false;
    },
    /************************************* */

    inicializarValores() {
      this.perfilagresor == "ENTRE PARES"
        ? this.mostrarComboEntrePares()
        : this.mostrarComboANS();

      this.opcionesagresor == "COLABORADOR SOS"
        ? this.mostrarComboColaboradorSOS()
        : this.opcionesagresor == "FAMILIA DE ORIGEN"
        ? this.mostrarComboFamiliaOrigen()
        : this.mostrarAdultoExterno();

     // this.opcioncombocolaborador = this.colaboradorsos;

     // this.opcioncombofamiliaorigen = this.familiarorigen;
    },
  },
  
  mounted() {
    //this.inicializarValores();
   // console.log("en mountede cardperfilagresor")
    const { perfilagresor, tiponiveluno,tiponiveldos} = this;
    console.log({ perfilagresor, tiponiveluno,tiponiveldos});
   
  },
    beforeUpdate() {
    //this.inicializarValores();
   // console.log("en beforeUpdate cardperfilagresor")
    const { perfilagresor, tiponiveluno,tiponiveldos} = this;
    console.log({ perfilagresor, tiponiveluno,tiponiveldos});

   
    if (perfilagresor =="") return;
    
       perfilagresor == "ENTRE PARES"
        ? this.mostrarComboEntrePares()
        : this.mostrarComboANS();

      tiponiveluno == "COLABORADOR SOS"
        ? this.mostrarComboColaboradorSOS()
        : tiponiveluno == "FAMILIA DE ORIGEN"
        ? this.mostrarComboFamiliaOrigen()
        : this.mostrarAdultoExterno();
   
  },
      updated() {
    //this.inicializarValores();
  /*  console.log("en updated cardperfilagresor")
    const { perfilagresor, tiponiveluno,tiponiveldos} = this;
    console.log({ perfilagresor, tiponiveluno,tiponiveldos});
   */
  },
  data() {
    return {
      verAyuda :false,
      opcioncombocolaborador :'',
      adulto: false,
      pares: false,
      combocolaborador: false,
      combofamiliarorigen: false,
      comboann: false,
      comoboentrepares: false,

      perfildelagresor: '',
      //opcionesperfildelagresor: this.opcionesperfildelagresor,

      //opcioncombofamiliaorigen: this.opcionesagresor,

      itemsperfildelagresor: ["ADULTO A NIÑA O NIÑO", "ENTRE PARES"],
      opcionesentrepares: "",
      items_opcionesentrepares: [
        "NIÑOS, NIÑAS Y JOVENES SOS",
        "NIÑOS, NIÑAS Y JOVENES EXTERNOS",
      ],
      // Atención directa, 2) Soporte técnico, 3) Oficina Nacional  4) Otro
      items_opcionesperfildelagresor: [

        "COLABORADOR SOS",
        "FAMILIA DE ORIGEN",
        "ADULTO EXTERNO"
        
      ],
      items_opcionesperfildelagresor2: [
        "NIÑOS, NIÑAS Y JOVENES SOS",
        "NIÑOS, NIÑAS Y JOVENES EXTERNOS",
      ],

      items_opcioncombocolaborador: ["ATENCION DIRECTA",
        "SOPORTE TÉCNICO",
        "OFICINA NACIONAL",
        "OTRO"],
      items_opcioncombofamiliaorigen: [
        "MAMÁ",
        "PAPÁ",
        "HERMANO",
        "PADRASTRO",
        "MADRASTRA",
        "OTRO",
      ],
    };
  },
};
</script>
<style>
.paraCardTitulo {
  border: 1px;
  border-color :black;
  padding-left: 15px;
  color: rgba(255, 0, 0, 0.6) !important;
  font-size: 1.05rem;
  text-transform: none
}

</style>