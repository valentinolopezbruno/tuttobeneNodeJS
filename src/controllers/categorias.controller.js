import { getConnection } from "./../database/database";

const getCategorias = async (req,res) => { 
   try{
        const connection = await getConnection();
        const result = await connection.query("SELECT id, nombre FROM categorias");
        res.json(result[0]);
        res.status(200);
    } catch (error){
        res.status(500);
        res.send(error.message);
    }  

 
}

const addCategoria = async (req,res) => {
    try{
        const {nombre} = req.body;
        const categoria ={nombre}
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO categorias SET ?", categoria);
        res.json("Categoria Creada Correctamente");
        res.status(200);
    } catch (error){
        res.status(500);
        res.send(error.message);
    }
}

const getCategoria = async (req,res) => { 
    try{
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, nombre FROM categorias WHERE id = ?", id);
        res.json(result);
        res.status(200);
    } catch (error){
        res.status(500);
        res.send(error.message);
    }
}

const deleteCategoria = async (req,res) => { 
    try{
        console.log("asd")
        const {id} = req.body;
        
        console.log(id)
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM categorias WHERE id = ?", [id]);
        res.json(result);
        res.status(200);
    } catch (error){
        res.status(500);
        res.send(error.message);
    }
}

const updateCategoria = async (req,res) => { 
    try{
        const {id, nombre} = req.body;
        const categoria ={nombre}
        const connection = await getConnection();
        const result = await connection.query("UPDATE categorias SET ? WHERE id = ?",[categoria, id]);
        console.log(result);
        res.json(result);
        res.status(200);
    } catch (error){
        res.status(500);
        res.send(error.message);
    }
}

export const metodos = {
    getCategorias,
    addCategoria,
    getCategoria,
    deleteCategoria,
    updateCategoria
}