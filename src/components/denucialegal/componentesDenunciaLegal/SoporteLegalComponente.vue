<template>

    <v-row>
      <v-card width="100%">
        <v-card-title>SOPORTE DE UN ASESOR LEGAL </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="12" md="4">
              <v-select :items="itemsCargos" label="CONTACTO" dense filled>
              </v-select>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4">
              <v-select
                :items="itemsCargos"
                label="ASESORIA Y ACOMPAÑAMIENTO ANTES"
                dense
                filled
              >
              </v-select>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4">
              <v-select
                :items="itemsCargos"
                label="ASESORIA Y ACOMPAÑAMIENTO DURANTE"
                dense
                filled
              >
              </v-select>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>
</template>

<script >
  

    export default {

        name : 'SoporteLegalComponente.vue', 

        data () {
            return {
                 itemsCargos: ["SI", "NO", "EN PROCESO"],
            }
        }


    }
</script>

<style scoped>

</style>