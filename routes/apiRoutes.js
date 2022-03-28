const express = require("express");
const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//API GET
app.get("/api/notes", function(req, res) {
  readFileAsync("./db/db.json", "utf8").then(function(data) {
    notes = [].concat(JSON.parse(data))
    res.json(notes);
  })
})

//API POST
app.post("api/notes", function(req,res) {
  const note = req.body;
  readFileAsync("./db/db.json", "utf8").then(function(data) {
    note.id = notes.length + 1
    notes.push(note);
    return notes
  }).then(function(notes) {
    writeFileAsync("./db/db.json", JSON.stringify(notes))
    res.json(note);
  })
});

//API DELETE
app.delete("api/notes/:id", function(req, res) {
  const idToDelete = parseInt(req, params.id);
  readFileAsync("./db/db.json", "utf8").then(function(data) {
    const notes = [].concat(JSON.parse(data));
    const newNotesData = []
    for (let i = 0; i < notes.length; i++) {
      if(idToData !== notes[i].id) {
        newNotesData.push(notes[i])
      }
    }
    return newNotesData
  }).then(function(notes) {
    writeFileAsync("./db/db.json", JSON.stringify(notes))
    res.send('saved!');
  })
})

module.export = app;