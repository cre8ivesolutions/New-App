const express = requrie('express')
const notes = express.Router()
const Note = require("../models/notes.js")
const notesSeedDate = require("../models/notes_seed")

notes.get("/data/seed", async (req, res) => {
    const seeded = await Note.insertMany(notesSeedData);
    console.log(seeded)
})

module.exports = notes;
