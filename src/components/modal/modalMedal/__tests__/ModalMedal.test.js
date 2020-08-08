import React from "react";
import { shallow } from "enzyme";

import sinon from "sinon";
import ModalMedal from "../ModalMedal";
import Medal from "../Medal";

describe("Modal Medal", () => {
  const close = sinon.stub();
  let props;
  beforeEach(() => {
    props = {
      show: false,
      onClose: close,
      children: <div />,
      title: "Title",
      message: "message",
      btnText: "button text"
    };
  });
  it("should render correctly with default state", () => {
    const component = shallow(
      <ModalMedal {...props}>
        <Medal medalSrc="medal" />
        <Medal medalSrc="medal" />
        <Medal medalSrc="medal" />
      </ModalMedal>
    );
    expect(component).toMatchSnapshot();
  });
  it("should remove hiddden class when show is true", () => {
    const propsVisible = { ...props };
    propsVisible.show = true;
    const componentVisible = shallow(<ModalMedal {...propsVisible} />);
    expect(componentVisible.hasClass("hidden")).toEqual(false);
  });
  it("should call close when you click on ButtonText", () => {
    const component = shallow(<ModalMedal {...props} />);
    component.find("ButtonText").simulate("click");
    expect(close.called).toBeTruthy();
  });
});
