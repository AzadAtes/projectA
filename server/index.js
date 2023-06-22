import express from "express";

const port = 8080

const app = express();

app.get("/api", (req, res) => {
    const msg = JSON.stringify("Hello from server")
    res.send(msg)
})

app.listen(port, () => 
    console.log(`server listening on port ${port}`)
)