import { connect } from "mongoose";

(async () => {
 
    try {
        console.log("Conectando con Mongo");
    
        const db = await connect(
          "mongodb+srv://admin_condominio:admin123@cluster0.kbyiq1f.mongodb.net/condominio?retryWrites=true&w=majority"
        );
        console.log("Conectado a Mongo");
      } catch (error) {
        console.error("Error al conectar con Mongo");
      }


})();
