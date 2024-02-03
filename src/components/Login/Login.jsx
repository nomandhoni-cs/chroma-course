import { BsGoogle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Login = ({ text, loginSignupHandler, user, handleSignOut }) => {
  const navigate = useNavigate();
  const loginSignUpStyle = {
    width: "60%",
    margin: "auto",
    
  };
  const loginSignUpBtnStyle = {
    padding: " 20px 20px",
    margin: "auto",
    borderRadius: "7px",
    display: "block",
    marginBottom: "20px",
    cursor: "pointer",
    minWidth: "40%",
  }

  return (
    <div className="container">
      <div className="login-signup-form" style={loginSignUpStyle}>
        <div className="login-signup-button text-center">
          {
            user.isSignedIn? 
            <span style={loginSignUpBtnStyle} onClick={handleSignOut} className="normalBtn">
            <BsGoogle /> Sign Out
          </span> 
          : 
          <span style={loginSignUpBtnStyle} onClick={()=>loginSignupHandler(navigate)} className="normalBtn">
            <BsGoogle /> {text} with Google
          </span>
          }
        </div>
      </div>
    </div>
  );
};

export default Login;
