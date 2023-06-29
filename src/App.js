import logo from "./logo.svg";
import "./App.css";
import Form from ".//form";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col bg-yellow-400 ">
      <h1 className="text-3xl font-bold">FORM</h1>
      <h2 className="text-xl font-bold">Enter Your Details</h2>
      <div className=" ">
        <Form />
      </div>
    </div>
  );
}

export default App;
