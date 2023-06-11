import express from "express";
import mysql from "mysql";
import cors from "cors";
import http from "http";

const app = express();

const server = http.createServer(app);

app.use(cors({
  credentials: true,
  origin : "*"
}));

app.use(express.json({ limit : "50mb"}));

const connection = mysql.createConnection({
  host : "localhost",
  user: "root",
  password : "Test@123",
  database : "travelix",
  port : 3306
});

connection.connect((error) => {
  if(error){
    throw error;
  }
  else{
    console.log("MySQL connected successfully");
  }
})

// http://localhost:4000/add/destination
app.post("/add/destination", (request, response) => {
  const form = request.body;
  const sqlQuery = `insert into destinationList (destinationName, destinationImage, destinationCount) values ('${form.destinationName}', '${form.destinationImage}', '${form.destinationCount}')`;
  
  connection.query(sqlQuery, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send({
        message : "Destination has been created"
      })
    }
  })
})

// http://localhost:4000/list/destination
app.get("/list/destination", (request,  response) => {

  const destinationName = request.query.destinationName;

  let sqlQuery = "";

  if(destinationName == undefined){
     sqlQuery = `select * from destinationList`;
  }
  else{
    sqlQuery = `select * from destinationList where destinationName='${destinationName}'`;
  }

  console.log(sqlQuery)

  connection.query(sqlQuery, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send(result);
    }
  })
})

// http://localhost:4000/delete/destination/1
app.delete("/delete/destination/:id", (request, response) => {
  const recordId = request.params.id;

  const sqlQuery = `delete from destinationList where id=${recordId}`;

  connection.query(sqlQuery, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send({
        message : "Destination has been deleted"
      })
    }
  })
})

// http://localhost:4000/add/hotel
app.post("/add/hotel", (request, response) => {
  const form = request.body;
  const sqlQuery = `insert into hotelList (hotelName, hotelImage, hotelLocation, hotelPrice) values ('${form.hotelName}', '${form.hotelImage}', '${form.hotelLocation}', '${form.hotelPrice}')`;
  
  connection.query(sqlQuery, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send({
        message : "Hotels has been created"
      })
    }
  })
})


// http://localhost:4000/list/hotel
app.get("/list/hotel", (request,  response) => {

  const hotelName = request.query.hotelName;

  let sqlQuery = "";

  if(hotelName == undefined){
     sqlQuery = `select * from hotelList`;
  }
  else{
    sqlQuery = `select * from hotelList where destinationName='${destinationName}'`;
  }

  console.log(sqlQuery)

  connection.query(sqlQuery, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send(result);
    }
  })
})

// http://localhost:4000/delete/hotel/1
app.delete("/delete/hotel/:id", (request, response) => {
  const recordId = request.params.id;

  const sqlQuery = `delete from hotelList where id=${recordId}`;

  connection.query(sqlQuery, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send({
        message : "Hotel has been deleted"
      })
    }
  })
})


const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log("Node JS is running on port", port);
})


/*
create database travelix;
===================================
use travelix;
create table destinationList (destinationName varchar(255), destinationImage longtext, destinationCount varchar(255), id int not null auto_increment, primary key(id));
===================================
use travelix;
create table hotelList (hotelName varchar(255), hotelImage longtext, hotelLocation varchar(255), hotelPrice varchar(255), id int not null auto_increment, primary key(id));

*/