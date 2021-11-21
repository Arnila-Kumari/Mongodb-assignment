const mark = require("express")
const  app = mark()
const mongoose = require("mongoose")
const url = "mongodb+srv://sl_assignment:abcde@cluster0.s6xzw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(url).then(()=>console.log("app connected successfully"))
const schema = require("./Schema")
app.use(mark.json())
app.post("/add-new-post",async(req, res)=>
{ 
    const myname = req.body.Name;
    const myregistration = req.body.Registration_number;
    const mymarks = req.body.Marks;

    try {
        const newdata = new schema(
            { Name: myname , Registration_number: myregistration, Marks: mymarks}
        )
        const saved = await newdata.save()
        res.json(
            {"message":"saved successfully","data": saved}
        )
    }catch(err)
    { 
        res.json(err);
    }
})
app.use("/", (req,res)=>{ 
    //res.send("Hello");//
    res.json(
        { 
            "a":"as"
        })
})
app.listen(3001,()=>console.log("Express Server has started successfully!"))