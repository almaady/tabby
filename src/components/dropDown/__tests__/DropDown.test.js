import React from "react";
import { shallow } from "enzyme";

import DropDown from "../Dropdown";

describe("Dropdown", () => {
  let props;
  beforeEach(() => {
    props= {
      children: <div/>
    }
  })
  it("should render correctly with default state", () => {
    const component = shallow(<DropDown {...props} />);
    expect(component).toMatchSnapshot();
  });
})