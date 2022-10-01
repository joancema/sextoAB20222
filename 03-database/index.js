// npm init --y
// npm i mongoose
const mongoose = require('mongoose');

const connectionURL= "mongodb+srv://joancema:joancema@cluster0.x7met.mongodb.net/ejemploDB?retryWrites=true&w=majority";

( async ()=>{

    try {
        
    
    const stateConnection = await mongoose.connect(connectionURL);
    const Group = mongoose.model("Group", {name:String});
    const Permission = mongoose.model("Permission", {name:String});

    const User =  mongoose.model("User", 
    {
         name: String,
         idgroup: { type: mongoose.Types.ObjectId , ref:"Group" } ,
        //  permissions: [{ type: mongoose.Types.ObjectId , ref:"Permiso" }] ,
        permissions:[
            {
                permission: { type: mongoose.Schema.Types.ObjectId, ref:"Permission" },
                state: {type:Boolean}
            }
        ]
    } 
    );

    const group1 =  new Group({name:"Administradores"});
    const saveGroup = await  group1.save();

    const permission1 = new Permission({name:"Grabar"});
    const savePermission1= await  permission1.save();
    const permission2 = new Permission({name:"Eliminar"});
    const savePermission2 = await permission2.save();


    const user1=  new User(
        {
            name:"Usuario de prueba",
            idgroup: saveGroup._id,
            permissions: [
                {permission: savePermission1._id , state:true},
                {permission: savePermission2._id , state:true},
            ]
        }
        );
    const userSave=  await user1.save();

    const result =  await User.find()
    // .populate("idgroup")
    // .populate("permissions.permission");

    // console.log(result[result.length-1])
    console.log(userSave);
} catch (error) {
    console.log(error.message);       
}
})();
    
