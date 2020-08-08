import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";

import ModalBackground from "../ModalBackground";

describe("Modal Background", () => {
  let props;
  beforeEach(() => {
    props = {
      onClose: () => {}
    };
  });
  it("should render correctly with default state", () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const component = shallow(<ModalBackground {...props} />);
    expect(component).toMatchSnapshot();
  });
  it("should call onClose when you click ", () => {
    const close = sinon.stub();
    const component = shallow(<ModalBackground onClose={close} />);
    component.simulate("click");
    expect(close.called).toBeTruthy();
  });
  it("should call onClose when you press ESC key ", () => {
    const close = sinon.stub();
    shallow(<ModalBackground onClose={close} />);
    // eslint-disable-next-line no-undef
    const event = new KeyboardEvent("keydown", { keyCode: 27 });
    document.dispatchEvent(event);
    expect(close.called).toBeTruthy();
  });
  it("should not call onClose when you press another key ", () => {
    const close = sinon.stub();
    shallow(<ModalBackground onClose={close} />);
    // eslint-disable-next-line no-undef
    const event = new KeyboardEvent("keydown", { keyCode: 25 });
    document.dispatchEvent(event);
    expect(close.called).toBeFalsy();
  });
});
