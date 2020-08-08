import React from "react";
import { shallow } from "enzyme";

import Icon from "../Icon";

describe("Icon", () => {
  let props;
  beforeEach(() => {
    props = {
      icon: ""
    };
  });

  it("should render correctly with default state", () => {
    const component = shallow(<Icon {...props} />);
    expect(component).toMatchSnapshot();
  });
  it("should add color--red class when color prop is red",() =>{
    const component = shallow(<Icon {...props} color="red"/>);
    expect(component.hasClass("color--red")).toEqual(true);
  })
});
