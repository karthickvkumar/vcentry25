import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const StudentList = () => {
  return (
    <div>
      <h2>Student List Page</h2>
      <div className='student-container'>
        <div className='student-page-link'>
          <div>
            <NavLink to="/students/create">Create Page</NavLink>
          </div>
          <div>
            <NavLink to="/students/list">List Page</NavLink>
          </div>
        </div>
        <div className='student-content'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default StudentList;