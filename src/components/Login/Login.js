import { BsGoogle } from "react-icons/bs";
const Login = ({ text, loginSignupHandler }) => {
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
          <span style={loginSignUpBtnStyle} onClick={loginSignupHandler} className="normalBtn">
            <BsGoogle /> {text} with Google
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
