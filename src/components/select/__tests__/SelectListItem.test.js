import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";

import SelectListItem from "../SelectListItem";

describe("SelectListItem", () => {
    const select = sinon.stub();
    let props;
    beforeEach(() => {
        props = {
        title: "Option",
        onClick: select,
        value: "option"
        };
    });

    it("should render correctly with default state", () => {
        const component = shallow(<SelectListItem {...props} />);
        expect(component).toMatchSnapshot();
    });
    it("should has class selected if value and selectedValue are equal", () =>{
        const component = shallow(<SelectListItem {...props} selectedValue="option" />);
        expect(component.hasClass("selected__item")).toBeTruthy();
    })
    it("should call select action", () => {
        const component = shallow(<SelectListItem {...props} />);
        component.simulate("click")
        expect(select.called).toBeTruthy();
    })
});
