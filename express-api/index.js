import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

let products = [
    {id:1, name:"Product 1", price:100},
    {id:2, name:"Product 2", price:200},
    {id:3, name:"Product 3", price:300},
]

app.get("/api/products",(req,res)=>{
    res.status(200).json({
        message:"Products fetched successfully",
        products:products
    });
})

app.get("/api/products/:id",(req,res)=>{
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);

    if(!product){
        return res.status(404).json({
            message:"Product not found"
        });
    }

    res.status(200).json({
        message:"Product fetched successfully",
        product:product
    })
})

app.post("/api/products",(req,res)=>{
    const {name, price} = req.body;
    
    if(!name || !price){
        return res.status(400).json({
            message:"Name and price are required"
        });
    }

    const newProduct = {
        id: products.length > 0 ? (Math.max(...products.map(p => p.id)) +1) : 1,
        name: name,
        price: parseFloat(price)
    }

    products.push(newProduct);
    
    res.status(201).json({
        message:"Product created successfully",
        product:newProduct
    })
})

app.put("/api/products/:id",(req,res)=>{
    const productId = parseInt(req.params.id);
    const {name, price} = req.body;

    const productIndex = products.findIndex(p => p.id === productId);

    if(productIndex === -1){
        return res.status(404).json({
            message:"Product not found"
        });
    }

    if(!name || !price){
        return res.status(400).json({
            message:"Name and price are required"
        });
    }

    products[productIndex] = {
        id: productId,
        name: name || products[productIndex].name,
        price: parseFloat(price) || products[productIndex].price
    }

    res.status(200).json({
        message:"Product updated successfully",
        product:products[productIndex]
    })
})

app.delete("/api/products/:id",(req,res)=>{
    const productId = parseInt(req.params.id);
    
    const productIndex = products.findIndex(p => p.id === productId);

    if(productIndex === -1){
        return res.status(404).json({
            message:"Product not found"
        });
    }

    products.splice(productIndex, 1);

    res.status(200).json({
        message:"Product deleted successfully"
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
