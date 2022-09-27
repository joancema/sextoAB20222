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
    },
    {
        id:2,
        name:"Anthony Carranza",
    },
    {
        id:3,
        name:"Alexander SolOrzano",
    }
]


for (const iterator of books) {
    authorAux= authors.find(ele=> ele.id===iterator.idauthor)
    console.log(`Book ${iterator.tittle}  Author: ${authorAux.name} `);
    // console.log(authorAux.name);
}