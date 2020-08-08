import React from "react";
import { storiesOf } from "@storybook/react";
import Select from "../../../components/select/Select";

const options= [
  {
    title: "Option 1",
    icon: "world",
    value: "Option 1"
  },
  {
    title: "Option 200000",
    icon: "flag-outline",
    value: "Option 2"
  },
  {
    title: "Option 3",
    icon: "planet-outline",
    value: "Option 3"
  },
  {
    title: "Option 4",
    icon: "flag-outline",
    value: "Option 4"
  },
  {
    title: "Option 5",
    icon: "flag-outline",
    value: "Option 5"
  }
]
storiesOf("Select", module)
  // Input
  .add("Default", () => (

  <Select name="default" options={options} placeholder="Select" icon="world" onSelect={() => {}}>
    
  </Select>
  ))
  ;
