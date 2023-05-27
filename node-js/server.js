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

app.use(express.json());

const connection = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "Test@123",
  database : "learning_nodejs",
  port : 3306
});

connection.connect((error) => {
  if(error){
    throw error;
  }
  else{
    console.log("MySQL Workbench is connect successfully with Node JS");
  }
})

// http://localhost:4000/listusers
app.get("/listusers", (request, response)=> {
  
  const sqlQuery = `select * from Users`;

  connection.query(sqlQuery, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send(result);
    }
  })

});

// http://localhost:4000/addusers
app.post("/addusers", (request, response) => {
  const data = request.body;
  console.log(data.username);

  const sqlQuery = `insert into Users (username) values ('${data.username}')`;

  connection.query(sqlQuery, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send(result);
    }
  })
})


const portNumber = 4000;
server.listen(portNumber, () => {
  console.log("Node JS server is running on port 4000");
});


