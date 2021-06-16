
import emailjs from 'emailjs-com';


export default {



    enviarCorreos(correos,folio,tarea_realizada){
       
      
   

                  try {
                  
          
                    Object.entries(correos).forEach(entry => {
          
                    const [key,value] = entry;
          
                    let mails = value["correo"];
          
                    console.log("valor del email : " + mails);
              
                    console.log(key);
          
                    let parametro = { 
                      para_quien : mails,
                      folio : folio,
                      tarea_realizada : tarea_realizada
                    };
          
                    
                    emailjs.send('service_ju06ig8', 'template_6xgsbah', parametro, 'user_MlW9ksxHwUdguhUW2NFHG');
          
                  });
                    
                  }catch(error){
                        
                        console.log(" error al enviar correos : " +error);
          
                  }
                  

    

  
 
 
     } 


}