import "./signIn.css";

export default function SignIn() {
  return (
    <div className="container">
      <div className="left-side">hey</div>
      <div className="right-side">
        <div className="sign-up-box">
          <span
            style={{
              color: "red",
              fontSize: "20px",
              fontWeight: "bold",
              backgroundColor: "white",
            }}
          >
            Create your account
          </span>
          <form action="" className="inside-form">
            <span className="form-span-text">Name</span>
            <input type="text" placeholder="Enter your name" />

            <span className="form-span-text">Email Address</span>
            <input type="email" placeholder="Enter your email" />

            <span className="form-span-text">Mobile Number</span>
            <input type="number" placeholder="Number" />

            <span className="form-span-text">Create Password</span>
            <input type="password" placeholder="Password" />

            <button className="sign-up-button">Sign up</button>

            <span className="form-span-text">
              Already have an account Sign-in
            </span>
            <span style={{ backgroundColor: "white" }}>OR</span>

            <span className="form-span-text">Sign In with google account</span>
          </form>
        </div>
      </div>
    </div>
  );
}
