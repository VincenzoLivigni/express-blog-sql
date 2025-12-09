const express = require("express")
const app = express()
const port = 3000

const postsRouter = require("./routes/posts")                   // importo router dei post

app.use(express.static("public"))

app.use(express.json())                                         // body-parser -> permette all'app di leggere le request-body in formato JSON

app.get("/", (req, res) => {
    // app.plicazione()                                         // errore forzato (per test "error 500")
    res.send("Welcome to my blog")
})

app.use("/posts", postsRouter)                                  // tutte le richieste a "/posts/.." verranno gestite da "postsRouter"

app.use((req, res) => {                                         // Middleware per la gestione delle rotte non registrate (404) -- si esegue solo se nessuna delle rotte inserite sopra è stata chiamata
    res.status(404).json({                                      // oggetto Json con le informazioni sull'errore
        error: "404",
        message: "Endpoint not found"
    })
})

app.use((err, req, res, next) => {                              // Middleware per la gestione degli errori (500) -- errore lato server
    res.status(500).json({                                      // oggetto Json con le informazioni sull'errore
        error: "Internal Server Error",
        message: err.message
    })
})

app.listen(port, () => {
    console.log(`Example app ${port}`)
})