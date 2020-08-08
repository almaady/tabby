import React from "react";
import { storiesOf } from "@storybook/react";
import { State, Store } from "@sambego/storybook-state";
import Dropdown from "../../../components/dropDown/DropdownWrapper";
import DropdownOption from "../../../components/dropDown/DrodownOption";
import ButtonIcon from "../../../components/buttons/ButtonIcon";

const store = new Store({
  show: false
});
storiesOf("Dropdown", module)
  // Input
  .add("Default", () => (
    <div>
      <State store={store}>
        <Dropdown>
          <DropdownOption icon="pencil" text="Editar" iconDirection="right" />
          <DropdownOption
            icon="history"
            text="Historial"
            iconDirection="right"
          />
          <DropdownOption
            icon="archive-fill"
            text="Archivar"
            iconDirection="right"
          />
        </Dropdown>
      </State>
    </div>
  ));
