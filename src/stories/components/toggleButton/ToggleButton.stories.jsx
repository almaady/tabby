import React from "react";
import {storiesOf} from "@storybook/react";
import ToggleButton from "../../../components/buttons/ToggleButton";
import ButtonText from "../../../components/buttons/ButtonText";
import ButtonIcon from "../../../components/buttons/ButtonIcon";



storiesOf("ToggleButton", module)
    .add("Default", () => (
        <ToggleButton
          on="On"
          off="Off"
          color="blue"
          icon="down"
        />
    ))
    .add("ToggleButton green", () => (
      <ToggleButton
      on="On"
      off="Off"
      color="green"
      icon="user"
    />
    ));
