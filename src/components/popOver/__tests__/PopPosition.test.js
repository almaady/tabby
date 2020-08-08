import React from "react";
import { mount } from "enzyme";
import sinon from "sinon";

import PopOver from "../PopOver";
import ButtonText from "../../buttons/ButtonText";

import {
  getActivatorPosition,
  getPopDimensions,
  popXPosition,
  popYPosition
} from "../../../utils/popsPosition";
import * as utils from "../../../utils/popsPosition";

describe("PopOver", () => {
  const close = sinon.stub();
  const back = sinon.stub()
  let props;
  beforeEach(() => {
    props = {
      show: false,
      children: <div/>,
      onClose: close,
      activator: <ButtonText color="blue" onClick={() => {}} text="Activator" />,
      onBack: back
    }
  });

  it("should return activator's position", () => {
    const component = mount(<PopOver {...props} />);
    const activator = component.find("#activator").first().instance();    
    const ActivatorPosition = getActivatorPosition(activator);
    expect(ActivatorPosition).toBeDefined();
  });

  it("should return defined values", () => {
    const component = mount(<PopOver {...props} />);
    const activator = component.find("#activator").first().instance();  
    Element.prototype.getBoundingClientRect = jest.fn(() => {
      return {
        top: 100,
        left: 110,
        right: 120,
        bottom: 130,
        width: 140,
        height: 150
      }
  });
  const activatorPosition = getActivatorPosition(activator)
  expect(activatorPosition).toEqual({top:100, left: 110, right:120, bottom: 130, width: 140, height: 150})
})

  it("should return pop over card dimensions", () => {
    const component = mount(<PopOver {...props} />);
    const pop = component.first().instance().popRef.current;
    const popOverDimensions = getPopDimensions(pop);
    expect(popOverDimensions).toBeDefined();
  });

  it("should return defined values", () => {
    const component = mount(<PopOver {...props} />);
    const pop = component.first().instance().popRef.current
    Element.prototype.getBoundingClientRect = jest.fn(() => {
      return {
        width: 140,
        height: 150
      }
    });
  const popOverDimensions = getPopDimensions(pop)
  expect(popOverDimensions).toEqual({popWidth: 140, popHeight: 150})
})

  it("should return x position of the pop over", () => {
    const component = mount(<PopOver {...props} />);
    const activator = component.find("#activator").first().instance(); 
    const pop = component.first().instance().popRef.current;
    const leftPosition = popXPosition(activator, pop);
    expect(leftPosition).toBeDefined();
  });

  it("should return -122 of x position of the pop over", () => {
    Element.prototype.getBoundingClientRect = jest.fn(() => {
      return {
        left: 110,
        width: 1020,
        height: 150
      }
  });
  const component = mount(<PopOver {...props} />);
  const activator = component.find("#activator").first().instance(); 
  const pop = component.first().instance().popRef.current;
    const leftPosition = popXPosition(activator, pop);
    expect(leftPosition).toBe(-122);
  });

  it("should return 0 of x position of the pop over", () => {
    Element.prototype.getBoundingClientRect = jest.fn(() => {
      return {
        left: 110,
        width: 20,
        height: 150
      }
  });
  const component = mount(<PopOver {...props} />);
  const activator = component.find("#activator").first().instance(); 
  const pop = component.first().instance().popRef.current;
    const leftPosition = popXPosition(activator, pop);
    expect(leftPosition).toBe(0);
  });

  it("should return y position of the pop over", () => {
    const component = mount(<PopOver {...props} />);
    const activator = component.find("#activator").first().instance(); 
    const pop = component.first().instance().popRef.current;
    const topPosition = popYPosition(activator, pop);
    expect(topPosition).toBeDefined();
  });

  it("should return defined value of x position of the pop over", () => {
    Element.prototype.getBoundingClientRect = jest.fn(() => {
      return {
        top: 110,
        height: 800
      }
  });
  const component = mount(<PopOver {...props} />);
  const activator = component.find("#activator").first().instance(); 
  const pop = component.first().instance().popRef.current;
    const topPosition = popYPosition(activator, pop);
    expect(topPosition).toBe(-158);
  });

  it("should return 158 of y position of the pop over", () => {
    Element.prototype.getBoundingClientRect = jest.fn(() => {
      return {
        top: 110,
        height: 150
      }
  });
  const component = mount(<PopOver {...props} />);
  const activator = component.find("#activator").first().instance(); 
  const pop = component.first().instance().popRef.current;
    const topPosition = popYPosition(activator, pop);
    expect(topPosition).toBe(158);
  });
});
