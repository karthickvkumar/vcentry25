import express from "express";
import mysql from "mysql";
import cors from "cors";
import http from "http";

const app = express();
const server = http.createServer(app);

const portNumber = 4000;
server.listen(portNumber, () => {
  console.log("Node JS server is running on port 4000");
})


