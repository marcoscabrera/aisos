<template>
   <v-card>
    <v-card-title>
      <span class="headline"> Nombre del Rol</span>
    </v-card-title>

    <v-card-text>
      <v-container>
          <v-text-field
          label="Nombre del Rol"
          placeholder="Nombre del rol"
          v-model="this.$store.state.roles.roles_NOMBREDELROL"
          @change="asignarInput($event)">

          </v-text-field>
      </v-container>
    </v-card-text>

  </v-card>

</template>

<script>
    export default {


      methods : {

        asignarInput(evento){

          this.$store.dispatch('action_NOMBREDELROL',evento);


        }
      }
        
    }
</script>

<style scoped>

</style>