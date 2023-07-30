import axios from 'axios';
import React, { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const VerifyEmailPage = () => {

  const params = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = params.pathname.replace("/verify/", "");
    const url = "http://localhost:5000/verify/" + token;

    axios.get(url)
      .then((response) => {
          navigate("/profile/basic");
      })
      .catch((error) => {
        navigate("/login");
      })
  }, [])

};

export default VerifyEmailPage;