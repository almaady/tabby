import React from "react";
import { storiesOf } from "@storybook/react";
import ModalBackground from "../../../components/modal/ModalBackground";

storiesOf("ModalBackground", module)
  // Modal Background
  .add("Default", () => <ModalBackground show />)

