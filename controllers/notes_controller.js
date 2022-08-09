const express = require('express')
const notes = express.Router()
const Note = require("../models/notes.js")
const notesSeedDate = require("../models/notes_seed.js")

notes.get("/", async (req, res) => {
    const notes = await Note.find();
    console.log({notes});
    res.render ('index', {
        notes: notes, 
        title: "To Do App Home"
    })
})

notes.get("/data/seed", async (req, res) => {
    const seeded = await Note.insertMany(notesSeedData);
    console.log(seeded)
})

notes.post('/', (req, res) => {
    Note.create(req.body)
})

module.exports = notes;
