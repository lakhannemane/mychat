import React, { useEffect } from "react";
import MainWraper from "../../Hoc/MainWraper";
// // import { GoogleLogin } from "react-google-login";

import GoogleLogin, { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";

const clientId = "957385858873-7ifa7seicebvqta0810m9j789be9acse.apps.googleusercontent.com";



const bussiness = "https://www.googleapis.com/auth/business.manage"
const Activity = () => {

  const navigate = useNavigate();






  const onLogoutSuccess = () => {
    console.log("logout SuccessFull")
    localStorage.clear();
    navigate("/login")
  }
  return (
    <>


      <GoogleLogout
        clientId={clientId}

        onLogoutSuccess={onLogoutSuccess}
      >

      </GoogleLogout>
    </>
  )
}
export default MainWraper(Activity);