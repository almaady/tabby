import React from "react"
import {shallow, mount} from "enzyme"
import sinon from "sinon"

import InputIcon from "../InputIcon"
import Input from "../Input";


describe("InputIcon", () => {
  const onBlur = sinon.stub();
  const onChange = sinon.stub();
  let props;
  beforeEach(() => {
    props = {
      name: "Input",
      type: "text",
      onBlur,
      onChange,
      icon: "down",
    };
  });


  it("should render correctly with default state", () => {
    const component = shallow(<InputIcon {...props} />);
    expect(component).toMatchSnapshot();
  });

  it("should add placeholder to the input", () => {
    const component = mount(<InputIcon {...props} placeholder="placeholder" />);
    expect(component.props().placeholder).toEqual("placeholder");
  });
  it("should call onChange when you change the input value", () => {
    const component = mount(<InputIcon {...props} />);
    component.find("input").simulate("change");
    expect(onChange.called).toBeTruthy();
  });
  it("should call onBlur when you focus the input ", () => {
    const component = mount(<InputIcon {...props} /> );
    component.find("input").simulate("blur");
    expect(onBlur.called).toBeTruthy();
  });
  it("should has an Icon ", () => {
    const component = mount(<InputIcon {...props} />)
    expect(component.find("Icon")).toBeTruthy();
  });
});
