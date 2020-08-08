import React from "react"
import {shallow, mount} from "enzyme"
import sinon from "sinon"

import ButtonIconText from "../ButtonIconText"

describe("ButtonIconText", () => {
  const action = sinon.stub()
  let props;
  beforeEach(() => {
    props = {
      text:'text',
      onClick: action,
      color: "blue",
      icon: "down",
      iconColor: "white"
    };
  });

  it("should render correctly with default state", () => {
    const component = shallow(<ButtonIconText {...props} />);
    expect(component).toMatchSnapshot();
  });
  it("should call action whe  you click", () => {
    const component = shallow(<ButtonIconText {...props} />);
    component.simulate("click");
    expect(action.called).toBeTruthy();
  });
  it("should render new className", () => {
    const component = shallow(<ButtonIconText {...props} className="btn-2" />);
    expect(component.hasClass("btn-2"));
  });
  it("should has an icon", () => {
    const component = mount(<ButtonIconText {...props} icon="cross" />);
    expect(component.find("Icon")).toBeTruthy();
  });
});
