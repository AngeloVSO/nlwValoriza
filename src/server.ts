import 'reflect-metadata'
import express from 'express'
import "./database"

export const app = express()

app.use(express.json())

app.listen(3003, () => {
    console.log("Server is running")
})