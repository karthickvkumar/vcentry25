import express, { json } from "express";
import mysql from "mysql";
import cors from "cors";
import http from "http";

const app = express();
const server = http.createServer(app);

app.use(cors({
  credentials : true,
  origin : "*"
}));

app.use(express.json());

// http://localhost:4000/status
app.get("/status", (request, response)=> {
  response.status(200).send("REST API is working fine !! Good Day");
});

// http://localhost:4000/submit
app.post("/submit", (request, response) => {
  const data = request.body;
  console.log(data);
  response.status(200).send("Value has been received from React JS");
})


const portNumber = 4000;
server.listen(portNumber, () => {
  console.log("Node JS server is running on port 4000");
});


