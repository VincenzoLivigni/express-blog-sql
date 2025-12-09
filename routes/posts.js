const express = require("express")                                      // importo modulo express
const router = express.Router()                                         // creo variabile router per definire le rotte dei post

const postsController = require("../controllers/postsController")       // importo le funzioni dichiarate nel controller

// index                                                                // mostra la lista di post
router.get("/", postsController.index)

// show                                                                 // mostra uno specifico post
router.get("/:id", postsController.show)

// store                                                                // crea un nuovo post
router.post("/", postsController.store)

// update                                                               // modifica un post interamente
router.put("/:id", postsController.update)

// modify                                                               // modifica un solo elemento del post
router.patch("/:id", postsController.modify)

// destroy                                                              // elimina post
router.delete("/:id", postsController.destroy)

module.exports = router                                                 // esporto il router