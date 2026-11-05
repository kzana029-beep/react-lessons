import React from "react";
import Input from "./components/Input";
import Password from "./components/Password";
import Form from "./components/Form";
import CheckBox from "./components/CheckBox";
import RadioButton from "./components/RadioButton";
import RegisterForm from "./components/RegisterForm";
import ProductList from "./components/ProductList";
import RegisterFormm from "./components/RegisterFormm";

function App() {
  return (
    <div>
      <Input />
      <Password />
      <Form />
      <CheckBox />
      <RadioButton />
      <hr />
      <h1>Register here</h1>
      <RegisterForm />
      <ProductList />
      <hr />
      <RegisterFormm />
    </div>
  );
}

export default App;
