const books=[
    {
        id:1,
        tittle:"Node Js Aplicaciones distribuidas",
        idauthor:1
    },
    {
        id:2,
        tittle: "COdigo limpio con JavaScript",
        idauthor:1
    },
    {
        id:3,
        tittle: "Patrones de disenio con JavaScript",
        idauthor:2
    },
]
const authors=[
    {
        id:1,
        name:"Luis Morales",
        idcountry:1
    },
    {
        id:2,
        name:"Anthony Carranza",
        idcountry:2
    },
    {
        id:3,
        name:"Alexander SolOrzano",
        idcountry:2
    }
]
const countries=[
    {
        id:1,
        description:"Ecuador"
    },
    {
        id:2,
        description:"PerU"
    },
]

function findBookForId(id, callback  ){
    const book = books.find((book)=> book.id===id );
    if (!book)
    {
        const error= new Error();
        error.message="Libro no encontrado";
        return callback(error);
    }
    return callback(null, book );
}
function findAuthorForId(id, callback){
    const author =  authors.find((author)=>{
        return author.id===id;
    });
    if (!author)
    {
        const error =  new Error();
        error.message= "Autor no encontrado";
        return callback(error)
    }
    return callback(null, author)
}


findBookForId(3, (err,book)=>{
    if (err)
    {
        console.log(err.message);
        return;
    }
    // console.log(book)
    findAuthorForId( book.idauthor, ( err, author )=>{
        if (err)
        {
            return console.log(err.message);
        }
        book.author= author; 
        delete book.idautor;
        console.log(book);

    } )
})
