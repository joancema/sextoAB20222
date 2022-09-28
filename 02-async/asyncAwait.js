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

async function findBookForId(id){
    const book = books.find((book)=> book.id===id );
    if (!book)
    {
        const error =  new Error();
        error.message="No encontramos el libro";
        throw error;
    }
    return book;

}

async function findAuthorForId(id){
    const author =  authors.find((author)=>{
        return author.id===id;
    });
    if (!author)
    {
        const error = new Error();
        error.message="No encontramos el autor";
        throw error;
    }
    return author;
}
(async ()=>{
    try
    {
        const book  =   await findBookForId(1);
        const author =   await  findAuthorForId(book.idauthor);
        book.author = author;
        console.log(book)
    }
    catch (err)
    {
        console.log(err.message)
    }
}
)();


    