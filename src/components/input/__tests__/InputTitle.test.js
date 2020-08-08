import React from "react";
import { shallow, mount } from "enzyme";
import sinon from "sinon";

import InputTitle from "../InputTitle";

describe("Inputtitle", () => {
  const onTextEdited = sinon.stub();
  let props;
  beforeEach(() => {
    props = {
      resetOnFinish: true,
      readOnly: false,
      onTextEdited
    };
  });
  it("should render correctly with default state", () => {
    const component = shallow(<InputTitle {...props} />);
    expect(component).toMatchSnapshot();
  });
  it("should trim text from input value", () => {
    const component = mount(<InputTitle {...props} />);
    const instance = component.instance();
    instance.textInput.value = " without spaces ";
    component.simulate("blur");
    expect(component.state().text).toEqual("without spaces");
  });
  it("should return nothing", () => {
    const _onTextEdited = sinon.spy();
    const component = mount(
      <InputTitle {...props} allowBlank={false} onTextEdited={_onTextEdited} />
    );
    const instance = component.instance();
    instance.textInput.value = "";
    component.simulate("blur");
    expect(_onTextEdited.called).toEqual(false);
  });
  it("should return nothing", () => {
    const component = mount(<InputTitle {...props} resetOnFinish={true} />);
    const instance = component.instance();
    instance.textInput.value = "Value";
    component.simulate("blur");
    expect(instance.textInput.value).toEqual("");
  });
  it("should call onBlur text from input value", () => {
    const component = mount(<InputTitle {...props} />);
    const instance = component.instance();
    instance.textInput.blur = sinon.spy();
    component.simulate("keyDown", { keyCode: 13 });
    expect(instance.textInput.blur.called).toBeTruthy();
  });
});
