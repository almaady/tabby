import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";

import ButtonIcon from "../ButtonIcon";

describe("ButtonIcon", () => {
  const action = sinon.stub();
  let props;
  beforeEach(() => {
    props = {
      icon: "cross",
      onClick: action
    };
  });
  it("should render correctly with default state", () => {
    const component = shallow(<ButtonIcon {...props} />);
    expect(component).toMatchSnapshot();
  });
  it("should call action when you click ", () => {
    const component = shallow(<ButtonIcon {...props} />);
    component.simulate("click");
    expect(action.called).toBeTruthy();
  });
  it("should render new className", () => {
    const component = shallow(<ButtonIcon {...props} className="btn-2" />);
    expect(component.hasClass("btn-2"));
  });
});
