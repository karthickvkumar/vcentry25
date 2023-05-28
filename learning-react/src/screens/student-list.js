import React, {useState} from 'react';
import axios from "axios";

const StudentList = () => {

  const [studentForm, UpdateStudentForm] = useState({
    firstName : "",
    lastName : "",
    age : ""
  });

  const [studentListData, updateStudentListData] = useState([]);

  const [selectedStudentID, updateSelectedStudentID] = useState(null);

  const onHandleInput = (event) => {
    UpdateStudentForm({...studentForm, [event.target.name] : event.target.value });
  }

  const submitStudentProfile = () => {
    console.log(studentForm);

    const url = "http://localhost:4000/create/student";

    axios.post(url, studentForm)
      .then((response) => {
        const result = response.data;
        alert(result.message);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const listStudentProfile = () => {
    const url = "http://localhost:4000/list/student";

    axios.get(url)
      .then((response) => {
        const result = response.data;
        updateStudentListData(result);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const discardEditProfile = () => {
    updateSelectedStudentID(null);
  }

  const EditStudentProfile = (value) => {
    console.log(value);
    updateSelectedStudentID(value.id);
  }

  return (
    <div>
      <h2>Student List Page</h2>
      <div>
        <label>Enter your First Name :</label>
        <input type='text' placeholder='Enter First Name' onChange={onHandleInput} name='firstName' />
        <br></br>
        <label>Enter your Last Name :</label>
        <input type='text' placeholder='Enter Last Name' onChange={onHandleInput} name='lastName'/>
        <br></br>
        <label>Enter your Age :</label>
        <input type='text' placeholder='Enter Age' onChange={onHandleInput} name='age'/>
        <br></br>
        <button onClick={() => submitStudentProfile() }>Submit Student Profile</button>
        
        <button onClick={() => listStudentProfile() }>Load Student Profile</button>
        <table className='outline'>
          <thead>
            <tr>
              <th className='outline'>First Name</th>
              <th className='outline'>Last Name</th>
              <th className='outline'>Age</th>
              <th className='outline'>Action</th>
            </tr>
          </thead>
          <tbody>
              {
                studentListData.map((value, index) => {
                  return(
                    <tr key={index}>
                      <td className='outline'>
                       
                       {
                        selectedStudentID == value.id ?
                          <input type="text" className='box' value={value.firstName} />
                          :
                          <span>{value.firstName}</span>
                       }
                       
                      </td>
                      <td className='outline'>
                        
                      {
                        selectedStudentID == value.id ?
                          <input type="text" className='box' value={value.lastName} />
                          :
                          <span>{value.lastName}</span>
                       }

                      </td>
                      <td className='outline'>
                        
                        {
                          selectedStudentID == value.id ?
                            <input type="text" className='box' value={value.age}/>
                            :
                            <span>{value.age}</span>
                        }
                      </td>
                      <td className='outline'>
                        <button onClick={() => EditStudentProfile(value)}>Edit</button>
                        <button onClick={() => discardEditProfile()}>Discard</button>
                      </td>
                    </tr>
                  )
                })
              }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;