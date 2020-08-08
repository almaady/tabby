import React from "react";
import { shallow, mount } from "enzyme";

import Modal from "../Modal";

describe("Modal", () => {
  let props;
  beforeEach(() => {
    props = {
      show: false,
      // eslint-disable-next-line react/jsx-filename-extension
      children: <div />,
      onClose: () => {}
    };
  });
  it("should render correctly with default state", () => {
    const component = shallow(<Modal {...props} />);
    expect(component).toMatchSnapshot();
  });

  it("should add hidden class when show is false", () => {
    const component = shallow(<Modal {...props} />);
    expect(component.hasClass("hidden")).toEqual(true);
  });

  it("should remove hiddden class when show is true", () => {
    const propsVisible = { ...props };
    propsVisible.show = true;
    const componentVisible = shallow(<Modal {...propsVisible} />);
    expect(componentVisible.hasClass("hidden")).toEqual(false);
  });
  it("should render correct onClose prop on ModalBackground", () => {
    const ModalBackground = shallow(<Modal {...props} />).find(
      "ModalBackground"
    );
    expect(ModalBackground.props().onClose).toBeFunction();
  });
  it("should render the same onClose func on ModalBackground", () => {
    const ModalBackground = shallow(<Modal {...props} />).find(
      "ModalBackground"
    );
    expect(ModalBackground.props().onClose).toEqual(props.onClose);
  });
  it("should render correct onClose prop on ModalCard", () => {
    const ModalCard = shallow(<Modal {...props} />).find("ModalCard");
    expect(ModalCard.props().onClose).toBeFunction();
  });
  it("should render the same onClose func on ModalCard", () => {
    const ModalBackground = shallow(<Modal {...props} />).find("ModalCard");
    expect(ModalBackground.props().onClose).toEqual(props.onClose);
  });
  it("should has a new classname", () => {
    const component =  shallow(<Modal {...props} classNameWrapper="classname--wrapper"/>);
    expect(component.hasClass("classname--wrapper")).toBeTrue();
  });
});
