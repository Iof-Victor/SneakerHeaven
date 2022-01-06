const {Router} = require("express");
const pool = require("../databases/config");

const createProduct = async (req, res) =>{
    const {
        name,
        type,
        price,
        realeaseyear,
        image,
    }=req.body

    try{
        const createdProduct= await pool.query("INSERT INTO products(name,type,price,realeaseyear,image) VALUES ($1,$2,$3,$4,$5)",[name,type,price,realeaseyear,image])

        return res.status(201).send(createdProduct.rows[0]);
    }catch(error){
        return res.status(500).send({
            error:"something went wrong"
        })
    }
}

const getProduct= async (req, res) =>{
    try{
        const getProducts = await pool.query("SELECT * FROM products");
        return res.status(200).send(getProducts.rows);
    }catch{
        return res.status(500).send({error:"error at getting the products"})
    }
}

const router = Router ();
router.post('/products',createProduct);
router.get('/displayProducts',getProduct);
module.exports =router;