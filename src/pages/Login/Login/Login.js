import { useHistory, useLocation } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import './Login.css';
const Login = () => {
  const { singInGoogle, setUsers, } = useAuth();

  const history = useHistory();
  const location = useLocation();

  const url = location.state?.from || "/home";
   
  const googleLogIn = () => {
    singInGoogle().then((res) => {
      setUsers(res.users)
      history.push(url)
    }
  )
      .catch((err) => console.log(err));
  };


  return (
    <div className="login">
    <h1 className=" text-primary pb-3 ">Login</h1>
        <form>
          <input type="text" placeholder="Enter Your Email" /> <br />
          <input type="password" placeholder="Enter Your Password" /> <br />
          <input type="submit" value="Register" />
        </form>
        <br />
        <div>---------or----------</div> <br />

      <div className="login mt-3">
        <button onClick={googleLogIn} className="btn btn-warning fw-bolder">
          Google Sing In
        </button>
      </div>

    </div>
  );
};

export default Login;
