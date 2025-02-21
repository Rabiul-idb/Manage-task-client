

import {  useNavigate,  } from "react-router-dom";
// import Swal from "sweetalert2";
// import { GoogleAuthProvider } from "firebase/auth";
// import { contextApi } from "../AuthContex/AuthContext";

// import useAuth from "../Hooks/useAuth";
// import axios from "axios";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../firebase";
import Swal from "sweetalert2";
import axios from "axios";


const auth = getAuth(app);

const Login = () => {

  
   const navigate = useNavigate();


const provider = new GoogleAuthProvider();
  // user login by google
  const handleGoogleLogin = async() => {

    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    
         // save to db
         const userInfo = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        }

        //console.log(userInfo)
        axios.post(`http://localhost:5000/addUser/${user?.email}`, userInfo);
        Swal.fire({
          title: "Success!",
          text: "Congrates! Successfully login",
          icon: "success",
          confirmButtonText: "OK",
        });
        navigate("/app");

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

   
   
     
  };

  return (
   <div>
      

      <div className="border border-gray-500 rounded-2xl w-[500px] py-10 mx-auto mt-12 mb-10 ">
      <div>
        <h2 className="font-bold lg:text-3xl md:text-2xl text-xl mb-5 text-center">
          User Login
        </h2>
        <div className="text-center">
          <button
             onClick={handleGoogleLogin}
            className="add-task-btn mx-auto mt-5"
          >
             login with google
          </button>
          
          
        </div>
        
      </div>
     
    
    </div>
   </div>
  );
};

export default Login;
