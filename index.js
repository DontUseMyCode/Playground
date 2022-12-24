


import express from "express"
import {data, users} from "./mock-db.js"
import process from "process"
const app = express()


app.get("/data", (req, res)=> {


    res.send(data)
})

app.get("/users", (req, res)=> {


    res.send(users)
})





app.listen(process.env.PORT || 5000, ()=> {console.log("Listening on 5000")})
