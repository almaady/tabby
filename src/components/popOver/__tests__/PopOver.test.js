import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";

import PopOver from "../PopOver";
import ButtonText from "../../buttons/ButtonText";

describe("PopOver", () => {
  const close = sinon.stub();
  let props;
  beforeEach(() => {
    props = {
      show: false,
      children: <div/>,
      onClose: close,
      activator: <ButtonText color="blue" onClick={() => {}} text="Activator" />
    }
  });

  it("should render correctly with default state", () => {
    const component = shallow(<PopOver {...props} />);
    expect(component).toMatchSnapshot();
  });
  it("should call onClose when you press ESC key ", () => {
    shallow(<PopOver {...props} />);
    // eslint-disable-next-line no-undef
    const event = new KeyboardEvent("keydown", { keyCode: 27 });
    document.dispatchEvent(event);
    expect(close.called).toBeTruthy();
  });
});