import React from "react";
import { storiesOf } from "@storybook/react";
import { State, Store } from "@sambego/storybook-state";
import PopOver from "../../../components/popOver/PopOver";
import ButtonText from "../../../components/buttons/ButtonText";

const store = new Store({
  show: false
});
storiesOf("Pop Over", module)
  // Pop Over default
  .add("Default", () => (
    <div>
      <State store={store}>
        <PopOver
          activator={(
            <ButtonText
              color="red"
              text="PopOver"
              onClick={() => store.set({ show: !store.get("show") })}
            />
          )}
          title="Popover"
          position="top"
          onClose={() => store.set({ show: !store.get("show") })}
        >
          <p> Holi</p>
        </PopOver>
      </State>
    </div>
  ));
