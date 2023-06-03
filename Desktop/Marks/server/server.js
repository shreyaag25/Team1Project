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
const db1 = client.db("Faculty");
const co1 = db1.collection("presentsubjects");
const co3 = db1.collection("previoussubjects");
const db2 = client.db("Student");
const co2= db2.collection("subjects");
const db3 = client.db("Result");
const co4= db3.collection("Internals");
const db4 = client.db("Announcements");
const co7= db4.collection("Announcements");
const co5= db3.collection("Externals");
// const db4 = client.db("Queries");
const co6= db2.collection("Queries");
app.post('/register',async(req,res) => {
    console.log(req.body);
    co.insertOne(req.body);
    res.send("Insert Successfull");
    
})
app.post('/posy',async(req,res) => {
    console.log(req.body);
    co4.insertOne(req.body);
    res.send("Insert Successfull");
    
})
app.post('/posy1',async(req,res) => {
    console.log(req.body);
    co5.insertOne(req.body);
    res.send("Insert Successfull");
    
})
app.post('/re',async(req,res) => {
   
    const { userid } = req.body;
    console.log(req.body);
    const result = await co.find({userid: userid }).toArray();
    
    console.log(result.length)
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
app.post('/chi',async(req,res) => {
   
    const { userid,sub } = req.body;
    console.log(req.body);
    const result = await co4.find({userid: userid , sub :sub }).toArray();
    
    console.log(result.length)
    const p = result.length;
    let r;
    if(p!=0 ){
      r="True";
    }
    else{
        r="False";
    }
    console.log(result);
    res.send(r);
})
app.post('/extu',async(req,res) => {
   
    const { userid,sub } = req.body;
    console.log(req.body);
    const result = await co5.find({userid: userid , sub :sub }).toArray();
    
    console.log(result.length)
    const p = result.length;
    let r;
    if(p!=0 ){
      r="True";
    }
    else{
        r="False";
    }
    console.log(result);
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

app.get('/adr',async (req,res) => {
    const result = await co.find( {admin:"False"}).toArray();
    // console.log(result);
    const id = req.query.id;
    const result1 = await co1.find({userid: id}).toArray();
    if(result1.length!=0){
        result.push(result1[0].Coursename)
    }
    result.push(result.length)
    res.send(result);
})
app.get('/int',async (req,res) => {
    const id = req.query.id;
    const result1 = await co1.find({userid: id}).toArray();
    const result = await co4.find({sub:result1[0].Coursename}).toArray();
    // console.log(result);
    // const id = req.query.id;
   
    res.send(result);
})
app.get('/mnr',async (req,res) => {
    const id = req.query.id;
    const result1 = await co1.find({userid: id}).toArray();
    const result = await co5.find({sub:result1[0].Coursename}).toArray();
    // console.log(result);
    // const id = req.query.id;
   
    res.send(result);
})
app.get('/ext',async (req,res) => {
    const result = await co.find( {admin:"False"}).toArray();
    // console.log(result);
    const id = req.query.id;
    const result1 = await co1.find({userid: id}).toArray();
    if(result1.length!=0){
        result.push(result1[0].Coursename)
    }
    res.send(result);
})
app.get('/profile', async (req, res) => {
    const id = req.query.id;
    const result = await co.find({userid: id}).toArray();
    const result1 = await co1.find({userid: id}).toArray();
    const result2 = await co3.find({userid: id}).toArray();
    let det=[];
    if(result.length!=0){
     det=[result[0].name,result[0].Academicyear,result[0].gender]}
    if(result.length==0 && result1.length!=0){
        det=[result1[0].Course-id,result1[0].Course-name,result1[0].semester]
    }
    else{
        if(result.length!=0 && result1.length!=0){
            det[3]=result1[0].Coursecode
            det[4]=result1[0].Coursename
            det[5]=result1[0].semester
        }
    }
    if(result2.length!=0){
        // det=[result1[0].Course-id,result1[0].Course-name,result1[0].semester]
        det.concat(result2[0].Coursecode)
        det.push(result2[0].Coursename)
        det.push(result2[0].semester)
         det.push(result2[1].Coursecode)
         det.push(result2[1].Coursename)
         det.push(result2[1].semester)
    }
   
    //  console.log("resss",det,"resutl1",result1,result2.length,result2)
    res.send(det);

  });
  
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
app.delete("/dele/:userid",async(req,res) => {
    const id = req.params.userid;
   const result = await co4.deleteOne({userid:id});
//    console.log(result);
   res.send(result);
})
app.delete("/de/:userid",async(req,res) => {
    const id = req.params.userid;
   const result = await co5.deleteOne({userid:id});
//    console.log(result);
   res.send(result);
})

//Student------------->
app.get('/stuprof', async (req, res) => {
    const id = req.query.id;
    const result = await co.find({userid: id}).toArray();
    const result1 = await co2.find({userid: id}).toArray();
    let det=[];
    if(result.length!=0){
     det=[result[0].name,result[0].email,result[0].study]}
    if(result.length==0 && result1.length!=0){
        det=[result1[0].subject1,result1[0].subject2,result1[0].subject3,result1[0].subject4,result1[0].subject5]
    }
    else{
        if(result.length!=0 && result1.length!=0){
            det[3]=result1[0].subject1
            det[4]=result1[0].subject2
            det[5]=result1[0].subject3
            det[6]=result1[0].subject4
            det[7]=result1[0].subject5
        }
    }
    
   
    //  console.log("resss",det,"resutl1",result1,result2.length,result2)
    res.send(det);

  });
  
  app.get('/regint',async (req,res) => {
    const id = req.query.id;
    const result = await co4.find({userid:id}).toArray();
    // console.log(result);
    // const id = req.query.id;
   
    res.send(result);
})

app.get('/regext',async (req,res) => {
    const id = req.query.id;
    const result = await co5.find({userid:id}).toArray();
    // console.log(result);
    // const id = req.query.id;
   
    res.send(result);
})

//requests....
app.post('/queries',(req,res) => {
    console.log(req.body);
    co6.insertOne(req.body);
    res.send("Insert Successfull");
}) 

app.get('/reual',async(req,res)=>{
    const id = req.query.id;
    
    const result = await co4.find({userid:id}).toArray();  
    const result1 = await co5.find({userid:id}).toArray();
    const combined=[result,result1]
    console.log(result,result1)
    res.send(combined);
})
app.get('/resre',async(req,res)=>{
    const id = req.query.id;
    
    const result = await co6.find().toArray();  
    res.send(result);
})
app.post('/announcements',async(req,res) => {
    console.log(req.body);
    co7.insertOne(req.body);
    
    res.send("Insert Succesful");
    
})
app.post('/Anno',async(req,res) => {
    
    const result = await co.find( {admin:"False"}).toArray();
    res.send(result);
    
})

app.post('/stuAnno',async(req,res) => {
    
    const result = await co7.find().toArray();
    res.send(result);
    
})
app.post('/recreqq',async(req,res) => {
    
    const result = await co6.find().toArray();
    res.send(result);
    
})
app.listen(1111)
console.log("Server Started")