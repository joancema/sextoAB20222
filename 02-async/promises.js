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

function findBookForId(id){
    return new Promise((resolve, reject)=>{
        const book = books.find((book)=> book.id===id );
        if (!book)
        {
            const error= new Error();
            error.message="El libro no fue encontrado";
            reject(error);
        }
        resolve(book);

    })

}

function findAuthorForId(id){
    return new Promise((resolve, reject)=>{
        const author =  authors.find((author)=>{
            return author.id===id;
        });
        if (!author)
        {
            const error =  new Error();
            error.message="No pudimos encontrar el autor";
            reject(error);
        }
        //libro.author = author;
        resolve(author);
    })
}
findBookForId(2)
.then((book)=>{ 
    console.log(book);
    return findAuthorForId(book.idauthor);
})
.then((author)=>{
    console.log(author)
})
.catch((error)=>{
    console.log(error.message)
})