import React from "react";
import { shallow, mount } from "enzyme";
import sinon from "sinon";

import DropdownOption from "../DrodownOption";
import DropdownWrapper from "../DropdownWrapper";

describe("DropDownWrapper", () => {
  const clickOption = sinon.stub()
  let props;
  beforeEach(() => {
    props = {
      children: [
        <DropdownOption onClick={clickOption} text="Option 1" key={1} />,
        <DropdownOption onClick={clickOption} text="Option 2" key={2} />,
        <DropdownOption onClick={clickOption} text="Option 3" key={3} />
      ]
    };
  });
  it("should render correctly with default state", () => {
    const component = shallow(<DropdownWrapper {...props} />);
    expect(component).toMatchSnapshot();
  });
  it("should change state when you click on icon", () => {
    const component = shallow(<DropdownWrapper {...props} />);
    component.find("ButtonIcon").simulate("click");
    expect(component.state().show).toEqual(true);
  });
  it("should chnage state when you click outside", () => {
    const wrapper = mount(
      <div>
        <DropdownWrapper {...props} />
      </div>
    );
    wrapper.find("ButtonIcon").simulate("click");
    const event = new MouseEvent("mousedown");
    document.dispatchEvent(event);
    expect(wrapper.find(DropdownWrapper).state().show).toEqual(false);
  });
});