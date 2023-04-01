const express = require('express')
const cors = require('cors')
const {MongoClient} = require('mongodb')

const app = express();
app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://Admin:Admin@cluster0.bqwqxc0.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const db = client.db("Login");
const co = db.collection("Login");

app.post('/register',async(req,res) => {
    console.log(req.body);
    co.insertOne(req.body);
    res.send("Insert Successfull");
    
})
app.post('/re',async(req,res) => {
   
    const { userid } = req.body;
    console.log(req.body);
    const result = await co.find({userid: userid }).toArray();
    console.log(result)
    const p = result.length;
    let r;
    if(p!=0 ){
      r="True";
    }
    else{
        r="False";
    }
    console.log(r);
    res.send(r);
})

app.post('/r',async(req,res) => {
   
    const { email } = req.body;
    console.log(req.body);
    const result = await co.find({email: email }).toArray();
    console.log(result)
    const p = result.length;
    let r;
    if(p!=0 ){
      r="True";
    }
    else{
        r="False";
    }
    console.log(r);
    res.send(r);
})

app.post('/data',async (req,res) => {
    const { userid, pass } = req.body;
    // console.log(req.query)
    console.log(userid,' and ',pass)
     const result = await co.find({userid: userid, pass:pass }).toArray();
     const p = result.length
     if (result.hasOwnProperty("admin")){
        console.log(result.admin);             //007
    }
    // console.log(result.length,'and', result,'and',result[0].admin);
    let r;
    if(p!=0 && result[0].admin=="True"){
        console.log("inside p!=0")
      r="True"
    }
    else if(p!=0 && result[0].admin=="False"){
       r="Tr"
    }
    else{
        console.log("inside p==0")
        r="False"
    }
    res.send(r);
})
app.get('/products',async (req,res) => {
    const result = await co.find( {admin:"False"}).toArray();
    // console.log(result);
    res.send(result);
})
app.get('/profile',async (req,res) => {
    const result = await co.find( {admin:"True"}).toArray();
    //  console.log(result);
    res.send(result);
})

app.delete("/delete/:userid",async(req,res) => {
    const id = req.params.userid;
   const result = await co.deleteOne({userid:id});
//    console.log(result);
   res.send(result);
})
app.get('/count',async (req,res) => {
    const resu = await co.find( {admin:"False"}).toArray();
   
    res.send(resu);
})


app.listen(1111)
console.log("Server Started")