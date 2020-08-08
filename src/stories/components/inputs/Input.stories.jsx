import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "../../../components/input/Input";
import InputTitle from "../../../components/input/InputTitle"

storiesOf("Input", module)
  // Input
  .add("Default", () => (
    <Input
      name="Default"
      type="text"
      placeholder="Soy placeholder"
      onBlur={() => {}}
      onChange={() => {}}
    />
  ))
  .add("Input with error style", () => (
    <Input
      type={"text"} onChange={()=>{}} name="Default" onBlur={()=>{}}
      showError
      placeholder="Soy placeholder"
    />
    )
  )
  .add("InputTitle", () => (
    <InputTitle
      initialText="Escribe aquí el título"
    />
  ))

  ;
