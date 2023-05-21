import express from "express";
import mysql from "mysql";
import cors from "cors";
import http from "http";

const app = express();
const server = http.createServer(app);

app.use(cors({
  credentials : true,
  origin : "*"
}));

// http://localhost:4000/status
app.get("/status", (request, response)=> {
  response.status(200).send("REST API is working fine !! Good Day");
});


const portNumber = 4000;
server.listen(portNumber, () => {
  console.log("Node JS server is running on port 4000");
});


