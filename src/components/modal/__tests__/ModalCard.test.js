import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";

import ModalCard from "../ModalCard";

describe("Modal Card", () => {
  const close = sinon.stub();
  let props;
  beforeEach(() => {
    props = {
      onClose: close,
      children: <div />
    };
  });
  it("should render correctly with default state", () => {
    const component = shallow(<ModalCard {...props} />);
    expect(component).toMatchSnapshot();
  });
  it("should call OnClose when you click on button", () => {
    const component = shallow(<ModalCard {...props} />);
    component.find("ButtonIcon").simulate("click");
    expect(close.called).toBeTruthy();
  });
});
