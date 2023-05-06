import { getConnection } from "../database/database";
import fs from "fs"

const getProductos = async (req,res) => { 
   try{
        const connection = await getConnection();
        const result = await connection.query("SELECT id, nombre, precio, cantidad FROM productos");
        res.json(result[0]);
        res.status(200);
    } catch (error){
        res.status(500);
        res.send(error.message);
    }  

 
}

const addProducto = async (req,res) => {
    try{
        console.log("asd")
        console.log(req.file)
        const imagen = req.file.originalname
        const { nombre, precio, cantidad, idCategoria } = JSON.parse(req.body.data)
        const disponibilidad = 0;
        const producto = {nombre: nombre , precio: precio, cantidad: cantidad, imagen: imagen, disponibilidad: disponibilidad, idCategoria: idCategoria};
        console.log("producto")
        console.log(producto)
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO productos SET ?", producto);
        res.json("Producto creado correctamente");
        res.status(200);
    } catch (error){
        res.status(500);
        res.send(error.message);
    }
}

const getProducto= async (req,res) => { 
    try{
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, nombre, precio, cantidad FROM productos WHERE id = ?", id);
        res.json(result);
        res.status(200);
    } catch (error){
        res.status(500);
        res.send(error.message);
    }
}

const deleteProducto= async (req,res) => { 
    try{
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM productos WHERE id = ?", id);
        console.log(result);
        res.json(result);
        res.status(200);
    } catch (error){
        res.status(500);
        res.send(error.message);
    }
}

const updateProducto= async (req,res) => { 
    try{
        const {id} = req.params;
        const {nombre,precio,cantidad} = req.body
        const producto = {nombre, precio, cantidad}
        const connection = await getConnection();
        const result = await connection.query("UPDATE productos SET ? WHERE id = ?",[producto, id]);
        console.log(result);
        res.json(result);
        res.status(200);
    } catch (error){
        res.status(500);
        res.send(error.message);
    }
}

export const metodos = {
    getProductos,
    addProducto,
    getProducto,
    deleteProducto,
    updateProducto
}