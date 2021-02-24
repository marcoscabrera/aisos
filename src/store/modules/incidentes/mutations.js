export default {

    //estamos pasando un array
    setearIncidente(state, incidente) { 

        state.etapainicial_incidente = incidente;
    },

    setearetapainicia_testigoscierre(state,valor){
        state.etapainicial_testigoscierre = valor;
    },


    setear_folio (state,valor){

        state.etapainicial_folio = valor;

    },

    setearPrograma(state, programa) { 
        console.log("en mutation  setearPrograma " + programa);
        state.etapainicial_programa = programa;

    },

    setearFechaInicial(state, fecha) { 
        state.etapainicial_fecha = fecha;
    },
    
    setearInvolucrados(state, involucrados) { 
        state.etapainicial_involucrados = involucrados;
    },
    setearElaboro(state, elaboro) { 
        state.etapainicial_elaboro = elaboro;
    },
     setearcargos(state, cargos) { 
        state.etapainicial_cargos = cargos;
    },
    
    setearRegistroHechos(state, registrohechos) { 
        state.etapainicial_registrohechos = registrohechos;
    },
    setearPerfilDelAgresor(state, perfildelagresor) { 
        state.etapainicial_perfildelagresor = perfildelagresor;
    },

  setearPaadultocolaborador(state, paadultocolaborador) { 
        state.etapainicial_paadultocolaborador = paadultocolaborador;
    },
  
  setearPaadultocolaboradortipo(state, paadultocolaboradortipo) { 
        state.etapainicial_paadultocolaboradortipo = paadultocolaboradortipo;
    },
   setearFamiliaorigen(state, familiaorigen) { 
        state.etapainicial_familiaorigen = familiaorigen;
    },
   
    setearpafamiliatipo(state, pafamiliatipo) { 
        state.etapainicial_pafamiliatipo = pafamiliatipo;
    },
   
    setearpaadultoexterno(state, adultoexterno) { 
        state.etapainicial_adultoexterno = adultoexterno;
    },       
      
    setearnnj(state, nnj) { 
        state.etapainicial_nnj = nnj;
    },       
     setearperfilvictima(state, perfilvictima) { 
        state.etapainicial_perfilvictima = perfilvictima;
    },       
     setearrecibeayuda(state, recibeayuda) { 
        state.etapainicial_recibeayuda = recibeayuda;
    },               
     
     setearmedidasproteccion(state, recibemedidasproteccionayuda) { 
        state.etapainicial_medidasproteccion = recibemedidasproteccionayuda;
    },               
     
      setearincidenteconfirmado(state, incidenteconfirmado) { 
        state.etapainicial_incidenteconfirmado = incidenteconfirmado;
    },               
         
       seteartestigos(state, testigos) { 
        state.etapainicial_testigos = testigos;
    },               
         
    setear_textocierre(state, testigos) { 
        state.etapainicial_textocierre = testigos;
    },               
         



}