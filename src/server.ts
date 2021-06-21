import express from 'express'

export const app = express()

app.use(express.json())

app.get("/test", (request, response) => {
    response.send("Olá, Bahia!!!")
})

app.post("/test-post", (request, response) => {
    response.send("Test post Bahia")
})

app.listen(3003, () => {
    console.log("Server is running")
})