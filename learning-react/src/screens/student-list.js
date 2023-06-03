import React, {useState, useEffect} from 'react';
import axios from "axios";

const StudentListPage = () => {
  const [studentListData, updateStudentListData] = useState([]); // API array store

  const [selectedStudentID, updateSelectedStudentID] = useState(null); // Edit -> User ID store

  const [editStudent, updateEditStudent] = useState({}); // Edit -> User Infomration store

  useEffect(() => {
    listStudentProfile();
  }, []);

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

    updateEditStudent(value);
  }

  const onInputEdit = (event) => {
    console.log(event.target.value)

    updateEditStudent({...editStudent, [event.target.name] : event.target.value});
    
  }

  const updateStudentProfile = () => {
    console.log(editStudent);
  }

  return (
    <div>
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
                          <input type="text" className='box' value={editStudent.firstName} onChange={onInputEdit} name='firstName' />
                          :
                          <span>{value.firstName}</span>
                       }
                       
                      </td>
                      <td className='outline'>
                        
                      {
                        selectedStudentID == value.id ?
                          <input type="text" className='box' value={editStudent.lastName} onChange={onInputEdit}  name='lastName' />
                          :
                          <span>{value.lastName}</span>
                       }

                      </td>
                      <td className='outline'>
                        
                        {
                          selectedStudentID == value.id ?
                            <input type="text" className='box' value={editStudent.age} onChange={onInputEdit} name='age' />
                            :
                            <span>{value.age}</span>
                        }
                      </td>
                      <td className='outline'>
                        <button onClick={() => EditStudentProfile(value)}>Edit</button>
                        {/* <button onClick={() => discardEditProfile()}>Discard</button> */}
                        <button onClick={() => updateStudentProfile()}>Upate</button>
                      </td>
                    </tr>
                  )
                })
              }
          </tbody>
        </table>
    </div>
  );
};

export default StudentListPage;