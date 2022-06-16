export default {
    getAllProducts: "SELECT * FROM Products",
    addNewProduct: "INSERT INTO Products VALUES (@name,@description,@quantity)",
    getSingleProduct: "SELECT * FROM Products WHERE Id=@id",
    deleteProduct: "DELETE FROM Products WHERE Id=@id",
    updateProduct:"UPDATE Products SET Name=@name, Description=@description, Quantity=@quantity WHERE Id=@id"
}