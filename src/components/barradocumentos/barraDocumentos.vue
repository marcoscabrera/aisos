<template>
  <v-bottom-navigation>
    <div  v-for="link in links" :key="link.id">
    <v-btn @click="enviarlink(link.file)">
      <span>{{link.descripcion}}</span>

      <v-icon>mdi-file-document</v-icon>
    </v-btn>

    </div>
  </v-bottom-navigation>
</template>

<script>
export default {
  /* codigo de conducta */
  //https://onedrive.live.com/view.aspx?cid=D1B73E758E4318E6&authKey=%21ADzpDk9fvdZ3fNs&resid=D1B73E758E4318E6%21709&ithint=%2Epdf&open=true&app=WordPdf
 
 /* 
   violentometro
  */
//https://onedrive.live.com/?authkey=%21ADzpDk9fvdZ3fNs&cid=D1B73E758E4318E6&id=D1B73E758E4318E6%21707&parId=D1B73E758E4318E6%21690&o=OneUp

 methods : {

    enviarPoliticas(){
  //window.open('http://www.example.com?ReportID=1', '_blank');
  window.location.href = "https://onedrive.live.com/?authkey=%21AhxF5wMG%5FSJ00H0&cid=D1B73E758E4318E6&id=D1B73E758E4318E6%21703&parId=D1B73E758E4318E6%21690&o=OneUp";
    }



  },

  data() {
    return  {

      links : [
           {id:1, file:'' , descripcion: 'uno'   },
           {id:2, file:'',  descripcion: 'dos'   },
           {id:3, file:'',  descripcion: 'tres'  },
           {id:4, file:'',  descripcion: 'cuatro'},
           {id:5, file:'',  descripcion: 'cinco' },
           {id:6, file:'',  descripcion: 'tres'  },
          
           
      ]

    }
  }
};
</script>