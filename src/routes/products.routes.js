import { Router } from "express";
import {getProducts, addProduct, getSingleProduct, deleteProduct, editProduct} from "../controllers/products.controller";

const router = Router()

router.get('/products', getProducts)

router.get('/products/:id', getSingleProduct)

router.post('/products', addProduct)

router.delete('/products/:id', deleteProduct)

router.put('/products/:id', editProduct)



export default router