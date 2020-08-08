import React from "react";
import {shallow, mount} from "enzyme";
import sinon from "sinon"

import SelectHeader from "../SelectHeader";

describe("SelectHeader", () =>{
  const toggle = sinon.stub();
  let props={
    title: "Title",
    onClick: toggle
  }
  
  it("should render correctly with default state", () => {
    const component = shallow(<SelectHeader {...props} />);
    expect(component).toMatchSnapshot();
  });
  it("should call toggle action", () => {
    const component = shallow(<SelectHeader {...props} />);
    component.simulate('click');
    expect(toggle.called).toBeTruthy();
  });
  it("should change icon", () => {
    const component = mount(<SelectHeader {...props} listOpen={true} />);
    expect(component.find('ButtonIcon').props().icon).toEqual('top');
  });
});