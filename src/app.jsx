import React from "react";

let isNewUser = true;
let contant;

if (isNewUser){
  contant = <Signup />;
}else{
  contant = <Login />;
}


function Signup() {
  return <button>register</button>;
}
function Login() {
  return <button>login</button>;
}
export default function App() {
  return(
    <div>
      {contant}
    </div>
  );
}