import React from "react"
import {shallow, mount} from "enzyme"
import sinon from "sinon"

import ToggleButton from "../ToggleButton"


describe("ToggleButton", () => {
  const action = sinon.stub();
  let props;
  beforeEach(() => {
    props = {
      backgroundColor:"blue",
      onLabel:"On text",
      offLabel:"Off text",
      icon:"user-outline",
      toggleState: true,
      onClick: action
    };
  });


  it("should render correctly with default state", () => {
    const component = shallow(<ToggleButton {...props} />);
    expect(component).toMatchSnapshot();
  });
  it("should change state when you click", () => {
    const component =  mount(<ToggleButton {...props} />)
    component.find(".toggle--inside").simulate("click");
    expect(component.state().toggleState).toBeFalse();

  });
  it("should add className toggle-off when the state is false", () => {
     const component = shallow(<ToggleButton {...props} />);
    component.find(".toggle--inside").simulate("click");
    expect(component.find(".toggle--outside").hasClass("toggle--off")).toBeTruthy();
  });
  it("should call action toggle-off when the state is false", () => {
    const component = shallow(<ToggleButton {...props} />);
    component.find("button").simulate("click");
    expect(action.called).toBeTruthy();
  });
});
