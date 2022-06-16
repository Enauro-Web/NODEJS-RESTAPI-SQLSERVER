import { getConnection, sql } from "../database/connection";
import queries from "../database/queries";

export const getProducts = async (req, res) => {

    try{
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllProducts);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
}

export const addProduct = async (req, res) => {    

    const {name, description} = req.body;
    let {quantity} = req.body;

    if(quantity == null) quantity = 0;

    if(name == null || description == null){
        return res.status(400).json({msg: 'Bad Request. Please fill all fields'});
    }

    try{
        const pool = await getConnection();
        const result = await pool.request()
        .input('name',sql.VarChar, name)
        .input('description',sql.Text, description)
        .input('quantity',sql.Int, quantity)
        .query(queries.addNewProduct);

        console.log(req.body);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getSingleProduct = async (req, res) => {
    const {id} = req.params;
    try{
        const pool = await getConnection();
        const result = await pool.request()
        .input('id',sql.Int, id)        
        .query(queries.getSingleProduct);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const editProduct = async (req, res) => {
    const {id} = req.params;
    const {name,description,quantity} = req.body;
    try{
        const pool = await getConnection();
        const result = await pool.request()
        .input('id',sql.Int, id)
        .input('name',sql.VarChar, name)
        .input('description',sql.Text, description)
        .input('quantity',sql.Int, quantity)    
        .query(queries.updateProduct);
        res.status(200);
        res.send("Product Updated");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const deleteProduct = async (req, res) => {
    const {id} = req.params;
    try{
        const pool = await getConnection();
        const result = await pool.request()
        .input('id',sql.Int, id)        
        .query(queries.deleteProduct);
        res.status(200);
        res.send("Product Deleted");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}




