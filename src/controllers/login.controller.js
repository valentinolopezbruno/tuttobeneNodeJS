import { getConnection } from "./../database/database";

const getUsuario= async (req,res) => { 
    try{
        const {nombre, password} = req.body;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM usuarios WHERE nombre = ? AND password = ?");
        console.log("respuesta")
      
        res.status(200);
        console.log("respuesta")
    } catch (error){
        res.status(500);
        res.send(error.message);
    }

}
export const metodos = {
    getUsuario,
}