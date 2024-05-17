import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

import { useState } from "react";

import Alert_Section from "./Allert_Section.jsx"



export default function SimpleRegistrationForm() {
   const [result, setResult] = useState("");
   const [showAlert, setShowAlert] = useState(false);
  
  const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "aa80c511-a48c-4686-b767-dfdcf52e58a0");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        setShowAlert(true);
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
        setShowAlert(false);
      }
    };

  return (
    <div className="flex justify-center items-center h-screen text-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
        Connect With Us
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
           
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={onSubmit}>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
            name="name"
              size="lg"
              placeholder="Your Name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              required 
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
            type="email"
              name="email"
              size="lg"
              placeholder="name@mail.com (*optional)"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Message
            </Typography>
            
            <textarea className="shadow border-t-4 border-gray-blue-500 p-3 mb-4 w-full"
              name="message" required></textarea>            
          </div>
          
          <Button type="submit" className="mt-6" fullWidth>
            Submit
          </Button>
          
        </form>
      </Card>
      {showAlert && <Alert_Section message={result} />}
    </div>
  );
}