import express from "express";
import mysql from "mysql";
import cors from "cors";
import http from "http";

import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";


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

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
    auth: {
        user: "karthick.afx@gmail.com",
        pass: "nukjltfmyvixxarj"
    }
});


app.post("/mail", (request, response) => {
  const token = jwt.sign(
    {
      data: 'Token Data'
    }, 'ourSecretKey', { expiresIn: '10s' }  
  );   

  const mailConfigurations = {

      // It should be a string of sender/server email
      from: 'no-reply@gmail.com',
    
      to: request.body.email,
    
      // Subject of Email
      subject: 'Email Verification',
        
      // This would be the text of email body
      text: `Hi! There, You have recently visited 
            our website and entered your email.
            Please follow the given link to verify your email 
            http://localhost:3000/verify/${token} 
            Thanks`
        
  };      
    
  transporter.sendMail(mailConfigurations, function(error, info){
      if (error) throw Error(error);
      console.log('Email Sent Successfully');
      response.status(200).send('Email Sent Successfully');
  });
});

app.get('/verify/:token', (req, res)=>{
  const {token} = req.params;

  jwt.verify(token, 'ourSecretKey', function(err, decoded) {
      if (err) {
          console.log(err);
          res.status(500).send("Email verification failed, possibly the link is invalid or expired");
      }
      else {
        res.status(200).send("Email verifified successfully");
      }
  });
});

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
// http://localhost:4000/create/student
app.post("/create/student", (request, response) => {
  const studentForm = request.body;
  
  const studentAge = parseInt(studentForm.age);

  const sqlQuery = `insert into studentList (firstName, lastName, age) values ('${studentForm.firstName}', '${studentForm.lastName}', ${studentAge})`;

  connection.query(sqlQuery, (error, result) => {
    if(error){
      response.status(500).send({
        message : "Some things pls went wrong pls try again later",
        error : error
      })
    }
    else{
      response.status(200).send({
        message : "Student profile has been created successfully"
      })
    }
  })
})

//  http://localhost:4000/list/student
app.get("/list/student", (request, response) => {
  const sqlQuery = `select * from studentList`;

  connection.query(sqlQuery, (error, result) => {
    if(error){
      response.status(500).send({
        message : "Some things pls went wrong pls try again later",
        error : error
      })
    }
    else{
      response.status(200).send(result);
    }
  })
})

// http://localhost:4000/edit/student/2
app.put("/edit/student/:id", (request, response) => {
  const uniqueId = request.params.id;
  const data = request.body;
  const age = parseInt(data.age);

  const sqlQuery = `update studentList set firstName='${data.firstName}', lastName='${data.lastName}', age=${age} where id = ${uniqueId}`;

  connection.query(sqlQuery, (error, result) => {
    if(error){
      response.status(500).send({
        message : "Some things pls went wrong pls try again later",
        error : error
      })
    }
    else{
      response.status(200).send({
        message : "Student profile has been updated successfully"
      })
    }
  })
})

// http://localhost:4000/delete/student/1

app.delete("/delete/student/:id", (request, response) => {
  const uniqueId = request.params.id;

  const sqlQuery = `delete from studentList where id = ${uniqueId}`;

  connection.query(sqlQuery, (error, result) => {
    if(error){
      response.status(500).send({
        message : "Some things pls went wrong pls try again later",
        error : error
      })
    }
    else{
      response.status(200).send({
        message : "Student profile has been deleted successfully"
      })
    }
  })
})

const portNumber = 5000;
server.listen(portNumber, () => {
  console.log("Node JS server is running on port", portNumber);
});


