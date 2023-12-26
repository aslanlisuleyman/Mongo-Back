const {Product} =require ("../models/Product.model")


const ProductController={
    getAll:async(req,res)=>{
        try{
            const products =await Product.find()
            res.status(200).send(products)

        }
        catch(error){
            res.status(404).send("an error occurted while getting products")
        }
    },
    getById:async(req,res)=>{
        try{
            const {id}=req.params
            const target=await Product.findById(id)
            res.status(200).send(target)
        }
        catch(error){
            res.status(404).send("an error occurted while product bu id")
        }
    },
    add:async(req,res)=>{
        try{
            const{title,price,image}=req.body
            const newProduct= new Product({title,price,image})
           const product =  await newProduct.save();
            res.status(201).send(product)
        }
        catch{
            res.status(404).send("an error occurted while  new product")
        }
    },
    edit:async(req,res)=>{
        try{
            const {id}=req.params
        const{title,price,image}=req.body
        await Product.findByIdAndUpdate(id,{title,price,image})
        res.status(203).send("item updated")
        }
        catch{
            res.status(404).send("an error occurted while  edit product")
        }
        
    },
    delete:async(req,res)=>{
        try{
            const {id}=req.params
            await Product.findByIdAndDelete(id)
            res.status(204).send("item deleted")
        }
        catch{
            res.status(404).send("an error occurted while  delete product")
        }
    }


}

module.exports= {ProductController}