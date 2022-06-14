import { getConnection, sql } from "../database/connection";

export const getProducts = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM Products");
    res.json(result.recordset);
}

export const addProduct = async (req, res) => {    

    const {name, description} = req.body;
    let {quantity} = req.body;

    if(quantity == null) quantity = 0;

    if(name == null || description == null){
        return res.status(400).json({msg: 'Bad Request. Please fill all fields'});
    }

    const pool = await getConnection();
    const result = await pool.request()
    .input('name',sql.VarChar, name)
    .input('description',sql.Text, description)
    .input('quantity',sql.Int, quantity)
    .query(`INSERT INTO Products VALUES (@name,@description,@quantity)`);

    console.log(req.body);
    res.json(result);
}

export const getSingleProduct = async (req, res) => {
    res.json('getSingleProduct')
}

export const editProduct = async (req, res) => {
    res.json('editProduct')
}

export const deleteProduct = async (req, res) => {
    res.json('deleteProduct')
}




