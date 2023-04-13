const mongoose = require('mongoose');


mongoose.set('strictQuery', true);

const connectionURL= "mongodb+srv://joancema:joancema@cluster0.x7met.mongodb.net/ejemploDB?retryWrites=true&w=majority";

( async ()=>{
try {
    const stateConnection = await mongoose.connect(connectionURL);
    const Group = mongoose.model("Group", {name:String});
    const group1 =  new Group({name:"Administradoresx"});
    const saveGroup = await  group1.save();


}
catch(error){
    console.log(error)
}
})()