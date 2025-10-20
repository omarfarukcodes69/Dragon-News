import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { use } from "react";

const LogIn = () => {
  const { logIn, logInWithGoogle, logInWithGitHub } = use(AuthContext);
  const location = useLocation();
  const nevigate = useNavigate();
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((UserContainer) => {
        const user = UserContainer.user;
        nevigate(`${location.state ? location.state : "/"}`);
        // console.log(user);
        toast(`Log In Successfully !!! ${user?.displayName}`);
      })
      .catch((error) => {
        // console.log(error.massage);
        toast(error.code, error.message);
      });
    // console.log("login Btn Cliked", email, password);
  };
  const handleGoogleLogIn = () => {
    console.log("google btn clicked");
    logInWithGoogle()
      .then((UserContainer) => {
        const user = UserContainer.user;
        nevigate(`${location.state ? location.state : "/"}`);
        console.log(user);
        toast(`Log In Successfully !!! ${user?.displayName} Sir`);
      })
      .catch((error) => {
        console.log(error.massage);
        toast(error.code, error.message);
      });
  };
  const handleGithubLogIn = () => {
    console.log("github btn clicked");
    logInWithGitHub()
      .then((UserContainer) => {
        const user = UserContainer.user;
        nevigate(`${location.state ? location.state : "/"}`);
        console.log(user);
        toast(`Log In With GitHub Successfully !!! ${user?.displayName} Sir`);
      })
      .catch((error) => {
        console.log(error.massage);
        toast(error.code, error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleLogIn}>
            <h1 className="text-2xl text-center font-bold text-accent">
              Login your account
            </h1>
            <div className="divider"></div>
            <fieldset className="fieldset">
              {/* Email  */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
                required
              />
              {/* passeword */}
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
                required
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            <div className="text-accent text-center my-2">
              Don't h Have an account ?{" "}
              <span>
                <Link to="/authlayout/register" className="text-red-500">
                  Resigser
                </Link>
              </span>
            </div>
          </form>
          <div className="divider"></div>
          {/* googleLogIn */}
          <div className=" space-y-2">
            <button
              onClick={handleGoogleLogIn}
              className="btn  btn-secondary w-full p-4"
            >
              <FaGoogle /> Log In With Google
            </button>
            <button
              onClick={handleGithubLogIn}
              className="btn btn-primary w-full p-4"
            >
              <FaGithub />
              Log In With GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
