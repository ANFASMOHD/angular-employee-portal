//import json-server
const jsonServer = require('json-server')

// create jso-server

const empolyeeServer = jsonServer.create()

// set path for json file 
const router = jsonServer.router('db.json')
// middleware

const middleware= jsonServer.defaults()
 empolyeeServer.use(middleware)
 empolyeeServer.use(router)
    
    //set up port 
    const port = 3000||process.env.port

    
    empolyeeServer.listen(port,()=>{
        console.log(`EmployeeServer running Successfullt at port number ${port}`);
    })