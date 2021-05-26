export default {


action_notificacion_incidenteid(context ,valor){

    context.commit("mutation_notificacion_incidenteid",valor)
},
action_notificacion_respuesta(context ,valor){

    context.commit("mutation_notificacion_respuesta",valor)
},

action_notificacion_texto_respuesta(context ,valor){

    context.commit("mutation_notificacion_texto_respuesta",valor)
},




}