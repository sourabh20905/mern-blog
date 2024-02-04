import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
export default function SignIn() {
  const [formData,setFormData] = useState({});
  const [errorMessage,setErrorMessage] = useState(null);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({...formData,[e.target.id]:e.target.value});
    console.log(formData);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if( !formData.email || !formData.password){
        return setErrorMessage("All fields are required");
    }
    
    try {
      setLoading(true);
      setErrorMessage(null);
      const response = await fetch("/api/auth/signin",{
        method:"POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if(data.success === false){
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(response.ok){
        navigate("/")
      }
    } catch (error) {
      return setErrorMessage(error.message);
      setLoading(false);
    }
  }
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
          <form className=" flex flex-col gap-4" onSubmit={handleSubmit}>
            
            <div>
              <Label value="Email"/>
              <TextInput 
              type="email"
              placeholder="Email"
              id = "email"
              onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Password"/>
              <TextInput 
              type="password"
              placeholder="Password"
              id = "password"
              onChange={handleChange}/>
            </div>
            <Button gradientDuoTone = "purpleToPink" type = "submit" disabled={loading}>
              {
                loading ? (
                  <>
                    <Spinner size = "sm"/>
                    <span className="pl-3">Loading....</span>
                    
                  </>
                ) : "SignIn"
              }
            </Button>
          </form>
          <div className=" flex gap-2 mt-2 text-sm">
            <span>Don't have an account?</span>
            <Link to="/signup">
              Sign Up
            </Link>
          </div>
          {
            errorMessage && <Alert className=" my-3" color="failure">
              {errorMessage}
            </Alert>
          }
        </div>
      </div>
    </div>
  );
}
