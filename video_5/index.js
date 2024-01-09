const express = require('express');
const Datastore = require('nedb') // import nedb as Datastore ( python similarity )
const { request } = require('http');
const app = express(); //make a server 

app.listen(3000, () => console.log("connectiong at 3000"));

app.use(express.static('public')); //called public to remind that anything put here
//is publicly accessible from the address 
app.use(express.json({limit: '1mb'})) // takes options to do things
//without the above line, the server can't understand JSON parsing 

const database = new Datastore('database.db'); 

database.loadDatabase(); 
//D6ag4h62hNxfd6YE here this entry has its own ID 
database.insert({
    name: "sriram",
    age: 18
})
//line below creates a route for the POST request to arrive 
app.post("/api", (request,res) => { //use this in the client code 
    console.log('received reuqet ')
    console.log(request.body); 
    //res.end(); //minimum to be polite 
    const data = request.body
    console.log("this data is in the server now ")
    console.log(data)
    database.insert({
        lat: data.lat ,
        long: data.long
    })
    
    res.json({
        status: "success",
        lati: data.lat,
        longi: data.long
    })
});

app.get('/weather/:la')