// npm init --y
// npm i mongoose

// mongodb+srv://joancema:joancema@cluster0.x7met.mongodb.net/test
const mongoose = require('mongoose');

// const { connect } = require('mongoose')


// const { Types } = require('mongoose')


const connectionURL= "mongodb+srv://joancema:joancema@cluster0.x7met.mongodb.net/ejemploDB?retryWrites=true&w=majority";
// mongodb+srv://joancema:joancema@cluster0.x7met.mongodb.net/prueba
( async ()=>{

try {

    //conectarse a la base de datos
    const stateConnection = await mongoose.connect(connectionURL);


    //crear un modelo de grupo
    const Group = mongoose.model("Group", {name:String});
    //crear modelo de permisos
    const Permission = mongoose.model("Permission", {name:String});

    //#region 
    
    ///nota
    //alumno
    ///asignatura
    
    // alumno (id, nombre, identificacion)
    //asignatura (id, descripcion)
    // nota ( id, idalumno, idasignatura,  calificacion, observacion )       
    
    // const Alumno = mongoose.model("alumno", { nombre:String, identificacion:String }  );
    // const Asignatura = mongoose.model("asignatura", { descripcion:String }  );
    // const Nota = mongoose.model("nota", 
    // { 
        //     idalumno: { type: mongoose.Types.ObjectId , ref:"alumno" } ,
        //     idasignatura: { type: mongoose.Types.ObjectId , ref:"asignatura" } ,
        //     calificacion:String, 
        //     observacion:String, 
        // }  
        // );
        // const alumno1 =  new Alumno({name:"John", identificacion:"123123123123"});
        // const saveAlumno = await  alumno1.save();
        // const asignatura1 =  new Asignatura({descripcion:"Programacion WEB II"});
        // const saveAsignatura = await  asignatura1.save();
        
        
        // const nota1=  new Nota(
            //     {
                //         calificacion:"8",
                //         observacion:"Debe estudiat mas",
                //         idasignatura: saveAsignatura._id,
                //         idalumno: saveAlumno._id
                //     }
                //     );
                
        // const saveNota = nota1.save();
                
                
                
                
                
                
                
                
    //#endregion

    // crear modelo de usuarios
    const User =  mongoose.model("User", 
    {
         name: String,
         idgroup: { type: mongoose.Types.ObjectId , ref:"Group" } ,
        // idpermission: { type: mongoose.Types.ObjectId , ref:"Permission" } ,
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

        //#region 
        // user1.save().then((usuarioAlmacenado)=>{
            //     console.log(usuarioAlmacenado);
            //     return User.find()
            // }).then((usuariosConsultados)=>{
                //     console.log(usuariosConsultados);
                // })
                // .catch((err)=>{
                    //     console.log(err);
                    // })
        //#endregion

    const userSave=  await user1.save();

    const result =   await User.find()
    .populate("idgroup")
    .populate("permissions.permission");

    console.log(result[result.length-1].permissions )
    // console.log(userSave);
} catch (error) {
    console.log(error.message);       
}
})();
    
