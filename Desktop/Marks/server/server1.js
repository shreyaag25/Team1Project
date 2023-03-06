const express = require('express')
const cors = require('cors')
const {MongoClient} = require('mongodb')

const app = express();
app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://Admin:Admin@cluster0.bqwqxc0.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const db = client.db("db1");
const col = db.collection("col1");

app.get('/products',async (req,res) => {
    const result = await col.find().toArray();
    console.log(result);
    res.send(result);
})
app.delete("/delete/:pid",async(req,res) => {
    const id = req.params.pid;
   const result = await col.deleteOne({pid:id});
   console.log(result);
   res.send(result);
})
app.listen(8888)
console.log("Server Started")