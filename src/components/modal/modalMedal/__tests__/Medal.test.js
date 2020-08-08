import React from "react";
import { shallow } from "enzyme";

import Medal from "../Medal";

describe("Medal", () => {
  let props;
  beforeEach(() => {
    props = {
      medalSrc: "URL"
    };
  });
  it("should render correctly with default state", () => {
    const component = shallow(<Medal {...props} />);
    expect(component).toMatchSnapshot();
  });
});
