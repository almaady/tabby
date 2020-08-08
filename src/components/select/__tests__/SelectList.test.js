import React from 'react';
import {shallow} from "enzyme";
import sinon from "sinon"

import SelectList from "../SelectList";

describe(SelectList, () => {
  const click = sinon.stub();
  let props;
  beforeEach(() => {
    props = {
      onClick: click,
      options: [
        {
          title: "Yo soy la opción 1",
          icon: "top",
          id: "1",
          value: "option 1"
        },
        {
          title: "Yo soy la opción 2",
          icon: "left",
          id: "2",
          value: "option 2"
        },
        {
          title: "Yo soy la opción 3",
          icon: "right",
          id: "3",
          value: "option 3"
        }
      ]
    };
  });

  it("should render correctly with default state", () => {
    const component = shallow(<SelectList {...props} />);
    expect(component).toMatchSnapshot();
  });
  it("should has three node children", () => {
    const component = shallow(<SelectList {...props} />);
    expect(component.find('SelectListItem').length).toEqual(props.options.length);
  });
});