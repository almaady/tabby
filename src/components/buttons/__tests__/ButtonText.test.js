import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";

import ButtonText from "../ButtonText";

describe("ButtonIcon", () => {
  const action = sinon.stub();
  let props;
  beforeEach(() => {
    props = {
      text: "text",
      onClick: action,
      color: "blue"
    };
  });
  it("should render correctly with default state", () => {
    const component = shallow(<ButtonText {...props} />);
    expect(component).toMatchSnapshot();
  });
  it("should call action when you click ", () => {
    const component = shallow(<ButtonText {...props} />);
    component.simulate("click");
    expect(action.called).toBeTruthy();
  });
  it("should render new className", () => {
    const component = shallow(<ButtonText {...props} className="btn-2" />);
    expect(component.hasClass("btn-2"));
  });
  it("should be a submit button", () => {
    const component = shallow(<ButtonText {...props} type="submit" /> );
    expect(component.find({type: "submit"})).toBeTruthy();
  });
});
