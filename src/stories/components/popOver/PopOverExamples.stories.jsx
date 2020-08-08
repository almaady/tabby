import React from "react";
import { storiesOf } from "@storybook/react";
import PopOver from "../../../components/popOver/PopOver";
import ButtonText from "../../../components/buttons/ButtonText";
import { State, Store } from "@sambego/storybook-state";
import Modal from "../../../components/modal/Modal";


const store = new Store({
  show: false,
  back: false
});

storiesOf("Pop Over Examples", module)
  // Modal
  .add("Default", () => (
    <Modal show onClick={() => store.set({ show: !store.get("show") })}>
      <State store={store}>
        <PopOver
          activator={
          <ButtonText color="red" text="Poooop" onClick={() => store.set({ show: !store.get("show") })}/> 
          } position="top"
          onClose={() => store.set({ show: !store.get("show") })}
          >
            <p> Holi</p>
            <div>
            <div style={{backgroundColor: 'red', height: '100px'}}>
              HOLIII
            </div>
              <ButtonText color="blue" text="clickkk" onClick={()=> store.set({back: !store.get("back")})}/>
            </div>
        </PopOver>
        
      </State>
    </Modal>

  ));
