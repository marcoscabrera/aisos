import cardConfiguracion from '@/components/cards/cardConfiguracion.vue';
  <template>
  <v-data-table
    :headers="headers"
    :items="incidentes"
    :single-expand="singleExpand"
    :expanded.sync="expanded"
    item-key="hechoslargos"
    show-expand
    sort-by="id"
    class="elevation-1"
  >
    <template v-slot:item.activo="{ item }">
        <v-simple-checkbox v-model="item.activo" disabled></v-simple-checkbox>
     </template>

    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length">
        Descripcion de los hechos {{ item.hechoslargos }}
      </td>
    </template>
     
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Incidentes</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-chip>1.- Valoración Inicial</v-chip>
        <v-chip>2.- Valoración Integral</v-chip>
        <v-chip>3.- Seguimiento</v-chip>
        <v-chip>4.- Cierre</v-chip>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>

         <v-btn 
         color="primary" 
         dark class="mb-2" 
         @click="irADenuncias"     >
              Nuevo Incidente
          </v-btn>
        <!--
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on"
              >
              Nuevo Incidente
              </v-btn
            >
          </template>


          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" xs="12" sm="12" md="12">
                    <v-text-field
                      v-model="editedItem.name"
                      label="Incidente"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" xs="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.descripcion"
                      label="descripcion"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" xs="12" sm="6" md="4">

                    <v-switch v-model="editedItem.activo"
                     class="mx-2" 
                     label="En uso ">
                     </v-switch>

                  </v-col>

                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="save">Guardar</v-btn>
            </v-card-actions>


          </v-card>
        </v-dialog> -->
      </v-toolbar>
    </template>


    <!-- etapas -->
    <template v-slot:item.actions>
        <v-btn  x-small
                color="green"
                dark @click="irA('/denuncias')"> 1</v-btn>
        <v-btn  x-small color="green" @click="irA('/valoracionintegral')" >2</v-btn>
        <v-btn  x-small color="yellow" @click="irA('/seguimiento')" >3</v-btn>
        <v-btn  x-small color="red" @click="irA('/cierre')">4</v-btn>
     </template>

  </v-data-table>
</template>


<script>
export default {
  data: () => ({
    dialog: false,
 expanded: [],
        singleExpand: false,
  
    headers: [
        {
        text :"id",
        align: "start",
        sortable: false,
        value: "id"
        },
      {
        text: "Folio", value: "folio"
      },
      { text: "Programa", value: "unidad" },
      { text: "Fecha", value: "fecha" },
      { text: "¿Incidente?", value: "incidente" },
      { text: "hechos", value: "hechos" },
      {text: '', value: 'data-table-expand'},
      { text: "Activo", value: "activo" },
      { text: "Etapas", value: "actions", sortable: false },
    
    ],
    incidentes: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      descripcion: "",
      activo: ""
    },
    defaultItem: {
      name: "",
      descripcion: "",
      activo: ""
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo Incidente " : "Editar Incidente";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    this.initialize();
  },

  methods: {

    irA(ruta){
   
       this.$router.push(ruta);
    },
    irADenuncias(){
      this.$router.push('/denuncias');
    },
    guardar__iradenuncias(){
       this.$router.push('/dashboard');
    }
    ,
    initialize() {
      this.incidentes = [
        { 
         id :"1",
          folio: "000-00-00",
          unidad: "PROGRAM CIUDAD",
          fecha: "12-05-2020",
          hechos:"AQUI VIENE UNA DESCRIP---",
          hechoslargos : "1ESTA ES UNA DESCRIPCION QUE CONTIENE ALREDEDOR DE 200 PALABRAS MAS PALABRAS MENOS ,Y ESTE TEXTO ES PARA PROBAR LO LARGO QUE PODRIA SER LA DESCRIPCION DE  HECHOS. AHORA PROCEDEREMOS A PEGAR UN TEXTO Los Derechos Humanos de niñas, niños y adolescentes están previstos en la Constitución Política de los Estados Unidos Mexicanos, en los tratados internacionales y en las demás leyes aplicables, esencialmente en la Convención sobre los Derechos del Niño y en la Ley General de los Derechos de Niñas, Niños y Adolescentes (publicada el 4 de diciembre de 2014), la cual reconoce a niñas, niños y adolescentes como titulares de derechos y, en su artículo 13, de manera enunciativa y no limitativa señala los siguientes:                          Los Derechos Humanos de niñas, niños y adolescentes están previstos en la Constitución Política de los Estados Unidos Mexicanos, en los tratados internacionales y en las demás leyes aplicables, esencialmente en la Convención sobre los Derechos del Niño y en la Ley General de los Derechos de Niñas, Niños y Adolescentes (publicada el 4 de diciembre de 2014), la cual reconoce a niñas, niños y adolescentes como titulares de derechos y, en su artículo 13, de manera enunciativa y no limitativa señala",
          activo :true,
          incidente :"Si"
 
        },
        {
            id :"2",
          folio: "000-00-00",
          unidad: "PROGRAM CIUDAD",
          fecha: "12-05-2020",
          hechos:"AQUI VIENE UNA DESCRIP---",
          hechoslargos : "2ESTA ES UNA DESCRIPCION QUE CONTIENE ALREDEDOR DE 200 PALABRAS MAS PALABRAS MENOS ,Y ESTE TEXTO ES PARA PROBAR LO LARGO QUE PODRIA SER LA DESCRIPCION DE  HECHOS. AHORA PROCEDEREMOS A PEGAR UN TEXTO Los Derechos Humanos de niñas, niños y adolescentes están previstos en la Constitución Política de los Estados Unidos Mexicanos, en los tratados internacionales y en las demás leyes aplicables, esencialmente en la Convención sobre los Derechos del Niño y en la Ley General de los Derechos de Niñas, Niños y Adolescentes (publicada el 4 de diciembre de 2014), la cual reconoce a niñas, niños y adolescentes como titulares de derechos y, en su artículo 13, de manera enunciativa y no limitativa señala los siguientes:                          Los Derechos Humanos de niñas, niños y adolescentes están previstos en la Constitución Política de los Estados Unidos Mexicanos, en los tratados internacionales y en las demás leyes aplicables, esencialmente en la Convención sobre los Derechos del Niño y en la Ley General de los Derechos de Niñas, Niños y Adolescentes (publicada el 4 de diciembre de 2014), la cual reconoce a niñas, niños y adolescentes como titulares de derechos y, en su artículo 13, de manera enunciativa y no limitativa señala",
          activo :true,
          incidente :"Si"

        },
        {
            id :"3",
          folio: "000-00-00",
          unidad: "PROGRAM CIUDAD",
          fecha: "12-05-2020",
          hechos:"AQUI VIENE UNA DESCRIP---",
          hechoslargos : "3ESTA ES UNA DESCRIPCION QUE CONTIENE ALREDEDOR DE 200 PALABRAS MAS PALABRAS MENOS ,Y ESTE TEXTO ES PARA PROBAR LO LARGO QUE PODRIA SER LA DESCRIPCION DE  HECHOS. AHORA PROCEDEREMOS A PEGAR UN TEXTO Los Derechos Humanos de niñas, niños y adolescentes están previstos en la Constitución Política de los Estados Unidos Mexicanos, en los tratados internacionales y en las demás leyes aplicables, esencialmente en la Convención sobre los Derechos del Niño y en la Ley General de los Derechos de Niñas, Niños y Adolescentes (publicada el 4 de diciembre de 2014), la cual reconoce a niñas, niños y adolescentes como titulares de derechos y, en su artículo 13, de manera enunciativa y no limitativa señala los siguientes:                          Los Derechos Humanos de niñas, niños y adolescentes están previstos en la Constitución Política de los Estados Unidos Mexicanos, en los tratados internacionales y en las demás leyes aplicables, esencialmente en la Convención sobre los Derechos del Niño y en la Ley General de los Derechos de Niñas, Niños y Adolescentes (publicada el 4 de diciembre de 2014), la cual reconoce a niñas, niños y adolescentes como titulares de derechos y, en su artículo 13, de manera enunciativa y no limitativa señala",
          activo :true,
          incidente :"No"


        },
        {
            id :"4",
          folio: "000-00-00",
          unidad: "PROGRAM CIUDAD",
          fecha: "12-05-2020",
          hechos:"AQUI VIENE UNA DESCRIP---",
          hechoslargos : "4ESTA ES UNA DESCRIPCION QUE CONTIENE ALREDEDOR DE 200 PALABRAS MAS PALABRAS MENOS ,Y ESTE TEXTO ES PARA PROBAR LO LARGO QUE PODRIA SER LA DESCRIPCION DE  HECHOS. AHORA PROCEDEREMOS A PEGAR UN TEXTO Los Derechos Humanos de niñas, niños y adolescentes están previstos en la Constitución Política de los Estados Unidos Mexicanos, en los tratados internacionales y en las demás leyes aplicables, esencialmente en la Convención sobre los Derechos del Niño y en la Ley General de los Derechos de Niñas, Niños y Adolescentes (publicada el 4 de diciembre de 2014), la cual reconoce a niñas, niños y adolescentes como titulares de derechos y, en su artículo 13, de manera enunciativa y no limitativa señala los siguientes:                          Los Derechos Humanos de niñas, niños y adolescentes están previstos en la Constitución Política de los Estados Unidos Mexicanos, en los tratados internacionales y en las demás leyes aplicables, esencialmente en la Convención sobre los Derechos del Niño y en la Ley General de los Derechos de Niñas, Niños y Adolescentes (publicada el 4 de diciembre de 2014), la cual reconoce a niñas, niños y adolescentes como titulares de derechos y, en su artículo 13, de manera enunciativa y no limitativa señala",
          activo :true,
          incidente :"N0"


        },
        {
            id :"5",
          folio: "000-00-00",
          unidad: "PROGRAM CIUDAD",
          fecha: "12-05-2020",
          hechos:"AQUI VIENE UNA DESCRIP---",
          hechoslargos : "5ESTA ES UNA DESCRIPCION QUE CONTIENE ALREDEDOR DE 200 PALABRAS MAS PALABRAS MENOS ,Y ESTE TEXTO ES PARA PROBAR LO LARGO QUE PODRIA SER LA DESCRIPCION DE  HECHOS. AHORA PROCEDEREMOS A PEGAR UN TEXTO Los Derechos Humanos de niñas, niños y adolescentes están previstos en la Constitución Política de los Estados Unidos Mexicanos, en los tratados internacionales y en las demás leyes aplicables, esencialmente en la Convención sobre los Derechos del Niño y en la Ley General de los Derechos de Niñas, Niños y Adolescentes (publicada el 4 de diciembre de 2014), la cual reconoce a niñas, niños y adolescentes como titulares de derechos y, en su artículo 13, de manera enunciativa y no limitativa señala los siguientes:                          Los Derechos Humanos de niñas, niños y adolescentes están previstos en la Constitución Política de los Estados Unidos Mexicanos, en los tratados internacionales y en las demás leyes aplicables, esencialmente en la Convención sobre los Derechos del Niño y en la Ley General de los Derechos de Niñas, Niños y Adolescentes (publicada el 4 de diciembre de 2014), la cual reconoce a niñas, niños y adolescentes como titulares de derechos y, en su artículo 13, de manera enunciativa y no limitativa señala",
          activo :true,
          incidente :"Si"


        },
        {
            id :"6",
          folio: "000-00-00",
          unidad: "PROGRAM CIUDAD",
          fecha: "12-05-2020",
          hechos:"AQUI VIENE UNA DESCRIP---",
          hechoslargos : "6ESTA ES UNA DESCRIPCION QUE CONTIENE ALREDEDOR DE 200 PALABRAS MAS PALABRAS MENOS ,Y ESTE TEXTO ES PARA PROBAR LO LARGO QUE PODRIA SER LA DESCRIPCION DE  HECHOS. AHORA PROCEDEREMOS A PEGAR UN TEXTO Los Derechos Humanos de niñas, niños y adolescentes están previstos en la Constitución Política de los Estados Unidos Mexicanos, en los tratados internacionales y en las demás leyes aplicables, esencialmente en la Convención sobre los Derechos del Niño y en la Ley General de los Derechos de Niñas, Niños y Adolescentes (publicada el 4 de diciembre de 2014), la cual reconoce a niñas, niños y adolescentes como titulares de derechos y, en su artículo 13, de manera enunciativa y no limitativa señala los siguientes:                          Los Derechos Humanos de niñas, niños y adolescentes están previstos en la Constitución Política de los Estados Unidos Mexicanos, en los tratados internacionales y en las demás leyes aplicables, esencialmente en la Convención sobre los Derechos del Niño y en la Ley General de los Derechos de Niñas, Niños y Adolescentes (publicada el 4 de diciembre de 2014), la cual reconoce a niñas, niños y adolescentes como titulares de derechos y, en su artículo 13, de manera enunciativa y no limitativa señala",
          activo :true,
          incidente :"Si"

        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.incidentes.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.incidentes.indexOf(item);
      confirm("¿Estas seguro de eliminar este incidente ? ") &&
        this.incidentes.splice(index, 1);
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.incidentes[this.editedIndex], this.editedItem);
      } else {
        this.incidentes.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>