const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    //Inserir dados na tabela
    await saveOrphanage(db,{
        lat: "-27.222633",
        lng: "-49.6555874",
        name: "Lar dos Meninos",
        description: "Presta assistência a crianças de 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social.",
        images: [
            "https://images.unsplash.com/photo-1601564921647-b446839a013f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1601564267675-0377e2501d4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas das 18h até as 8h",
        open_on_weekends: "0"
    })

    //Consultar dados da tabel
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages) 

    //Consultar somente 1 orphanato, pelo ID
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

    // //deletar dado da tabela
    // console.log(await db.run("DELETE FROM orphanages"))
})