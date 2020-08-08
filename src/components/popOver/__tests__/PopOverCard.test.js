import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";

import PopOverCard from "../PopOverCard";

describe("PopOver", () => {
  const close = sinon.stub();
  const back = sinon.stub();
  let props;
  beforeEach(() => {
    props = {
      show: false,
      children: <div  />,
      onClose: close,
      onBack: back
    };
  });

  it("should render correctly with default state", () => {
    const component = shallow(<PopOverCard {...props} />);
    expect(component).toMatchSnapshot();
  });
  it("should add visibility-hidden class when show is false", () => {
    const compomnent = shallow(<PopOverCard {...props} />);
    expect(compomnent.hasClass("visibility-hidden")).toEqual(true);
  });
  it("should call OnClose when you click on button", () => {
    const component = shallow(<PopOverCard {...props} />);
    component
      .find("ButtonIcon")
      .last()
      .simulate("click");
    expect(close.called).toBeTruthy();
  });
  it("should call OnBack when you click on button", () => {
    const component = shallow(<PopOverCard {...props} />);
    component
      .find("ButtonIcon")
      .first()
      .simulate("click");
    expect(back.called).toBeTruthy();
  });
  it("should call onClose when you click ", () => {
    const component = shallow(<PopOverCard {...props} />);
    !component.simulate("click");
    expect(close.called).toBeTruthy();
  });
});
