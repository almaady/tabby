import React from "react";
import { shallow } from "enzyme";

import ModalFooter from "../ModalFooter";

describe("Modal Footer", () => {
  let props;
  beforeEach(() => {
    props = {
      children: <div />
    };
  });
  it("should render correctly with default state", () => {
    const component = shallow(<ModalFooter {...props} />);
    expect(component).toMatchSnapshot();
  });
});
