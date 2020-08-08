import React from 'react';
import {shallow} from "enzyme";
import sinon from "sinon";

import DropDownOption from "../DrodownOption";

describe("DropDownOption", () => {
  const click = sinon.stub()
  let props;
  beforeEach(() => {
    props = {
      onClick: click,
      text: "Text"
    };
  });

  it("should render correctly with default state", () => {
    const component = shallow(<DropDownOption {...props} />);
    expect(component).toMatchSnapshot();
  });
  it("should call action when you click", () => {
    const component = shallow(<DropDownOption {...props} />);
    component.simulate("click");
    expect(click).toBeTruthy();
  });
  it("should render the icon", () => {
    const component = shallow(<DropDownOption {...props} icon="world" />);
    expect(component.find("Icon")).toBeTruthy();
  });
  it("should change the position of the icon", () => {
    const component = shallow(<DropDownOption {...props} iconDirection="right" icon="world" />);
    expect(component.hasClass("dropdown__icon-right")).toBeTruthy();
  });
});