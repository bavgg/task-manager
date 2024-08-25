import {  useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthProvider";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface LoginFormInputs {
  email: string;
  password: string;
}

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>(); // Use the defined type here

  

  function submitHandler(data: LoginFormInputs) {
    console.log(data);
  }

  return (
    <div className="p-4 grid-cols-1 grid max-w-[500px] mx-auto mt-32 justify-center"> 
      {/* header */}
      <div className="flex flex-col items-center w-full">
        <div className="border border-[var(--text)] rounded-md px-2 py-1 text-xs w-fit mb-1">Manage all your task in one place!</div>
        <div className=" text-5xl text-[var(--secondary)] font-[500] mb-4">
          <div >Cloud-Based</div>
          <div >Task Manager</div>
        </div>
      </div>

      {/* login form */}
      <div className="border border-[var(--text)] p-4 rounded-md">
      
        <div className=" text-[var(--secondary)] mb-4">
          <div className="text-4xl">Welcome back!</div>
          <div className="text-sm">Keep all your credentials safe.</div>
        </div>
      
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label htmlFor="email" className="text-sm">Email</label>
            <br />
            <input
              id="email"
              {...register("email", { required: "Email is required" })}
              placeholder="username@mail.com"
              className="px-4 py-2 border border-[var(--text)] rounded-md mt-1 w-full"
            />
            {errors.email && <p className="text-[var(--tertiary)]">{errors.email.message as string}</p>}
          </div>
      
          <div>
            <label htmlFor="password" className="text-sm">Password</label>
            <br />
            <input
              id="password"
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="password"
              className="px-4 py-2 border border-[var(--text)] rounded-md mt-1 w-full"
            />
            {errors.password && <p className="text-[var(--tertiary)]">{errors.password.message as string}</p>}
          </div>
      
          <button type="submit" className="mt-2 bg-[var(--secondary)] text-white px-2 py-1 rounded-md">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
