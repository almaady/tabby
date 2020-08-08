import React from "react";
import { shallow, mount } from "enzyme";
import sinon from "sinon";

import Input from "../Input";

describe("Input", () => {
  const onBlur = sinon.stub();
  const onChange = sinon.stub();
  let props;
  beforeEach(() => {
    props = {
      name: "Input",
      type: "text",
      onBlur,
      onChange,
      showError: false
    };
  });
  it("should render correctly with default state", () => {
    const component = shallow(<Input {...props} />);
    expect(component).toMatchSnapshot();
  });
  it("should add placeholder to the input", () => {
    const component = shallow(<Input {...props} placeholder="placeholder" />);
    expect(component.props().placeholder).toEqual("placeholder");
  });
  it("should call onChange when you change the input value", () => {
    const component = mount(<Input {...props} />);
    component.find("input").simulate("change");
    expect(onChange.called).toBeTruthy();
  });
  it("should call onBlur when you focus the input", () => {
    const component = mount(<Input {...props} />);
    component.find("input").simulate("blur");
    expect(onBlur.called).toBeTruthy();
  });
  it("should has class error_div with showError prop", () => {
    const component = shallow(<Input {...props} showError={true} />);
    expect(component.hasClass("input__error")).toBeTruthy();
  });
});
