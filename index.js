


import express from "express"
import {data, users} from "./mock-db.js"
const app = express()


app.get("/data", (req, res)=> {


    res.send(data)
})

app.get("/users", (req, res)=> {


    res.send(users)
})





app.listen(5000, ()=> {console.log("Listening on 5000")})
