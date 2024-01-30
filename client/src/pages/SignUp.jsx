import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto gap-2 flex-col sm:flex-row">
        {/* left */}
        <div className="flex-1 m-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Sourabh
            </span>
            Blogs
          </Link>
          <p className="text-sm mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            repellendus, ullam unde, magnam consectetur soluta ut
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className=" flex flex-col gap-4">
            <div>
              <Label value="Your Name"/>
              <TextInput 
              type="text"
              placeholder="first last name"
              id = "username"
              />
            </div>
            <div>
              <Label value="Email"/>
              <TextInput 
              type="text"
              placeholder="Email"
              id = "email"
              />
            </div>
            <div>
              <Label value="Password"/>
              <TextInput 
              type="text"
              placeholder="Password"
              id = "password"
              />
            </div>
            <Button gradientDuoTone = "purpleToPink" type = "submit">
              Sign up
            </Button>
          </form>
          <div className=" flex gap-2 mt-2 text-sm">
            <span>Have an account?</span>
            <Link to="/sign-in">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
