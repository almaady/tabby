import React from "react";
import { shallow } from "enzyme";

import ModalHeader from "../ModalHeader";

describe("Modal Header", () => {
  let props;
  beforeEach(() => {
    props = {
      title: 'Title'
    };
  });
  it("should render correctly with default state", () => {
    const component = shallow(<ModalHeader {...props} />);
    expect(component).toMatchSnapshot();
  });
});
