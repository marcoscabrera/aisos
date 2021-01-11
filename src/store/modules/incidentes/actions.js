

export default {

  setear_Incidente( context, incidente) {
    context.commit("setearIncidente", incidente);
  }, //termina acccion 

  setear_programa( context, programa) {
    //console.log("en action  setear_programa " + programa);
    context.commit("setearPrograma", programa);
  }, //termina acccion 

    setear_FechaInicial( context, fecha) {
    console.log("en action  setear_FechaInicial " + fecha);
    context.commit("setearFechaInicial", fecha);
  }, //termina acccion 
    
  setear_Involucrados(context, involucrados) { 
          context.commit("setearInvolucrados", involucrados);
  },
  
  setear_Elaboro(context, Elaboro) { 
          context.commit("setearElaboro", Elaboro);
  },
    setear_cargos(context, cargos) { 
          context.commit("setearcargos", cargos);
  }, 
    
     setear_RegistroHechos(context, RegistroHechos) { 
          context.commit("setearRegistroHechos", RegistroHechos);
  }, 
 
     setear_PerfilDelAgresor(context, perfildelagresor) { 
          context.commit("setearPerfilDelAgresor", perfildelagresor);
  }, 
      setear_Paadultocolaborador(context, paadultocolaborador) { 
          context.commit("setearPaadultocolaborador", paadultocolaborador);
  }, 
       setear_Paadultocolaboradortipo(context, paadultocolaboradortipo) { 
          context.commit("setearPaadultocolaboradortipo", paadultocolaboradortipo);
  }, 
       setear_Familiaorigen(context, familiaorigen) { 
          context.commit("setearFamiliaorigen", familiaorigen);
  }, 

        setear_familiatipo(context, valor) { 
          context.commit("setearpafamiliatipo", valor);
  },     
  
          setear_paadultoexterno(context, valor) { 
          context.commit("setearpaadultoexterno", valor);
  }, 
          setear_nnj(context, valor) { 
          context.commit("setearnnj", valor);
  }, 
               
          setear_perfilvictima(context, valor) { 
          context.commit("setearperfilvictima", valor);
  }, 
       
           setear_recibeayuda(context, valor) { 
          context.commit("setearrecibeayuda", valor);
  }, 
           
            setear_medidasproteccion(context, valor) { 
          context.commit("setearmedidasproteccion", valor);
  }, 
     
            setear_incidenteconfirmado(context, valor) { 
          context.commit("setearincidenteconfirmado", valor);
  }, 
                 
            setear_testigos(context, valor) { 
          context.commit("seteartestigos", valor);
  }, 


  action_textocierre(context, valor) { 
        context.commit("setear_textocierre", valor);
}, 
              
/*
*/

}