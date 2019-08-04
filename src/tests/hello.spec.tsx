import * as React from "react";
import { Hello } from '../components/Hello';
import { expect } from 'chai';
import { shallow } from 'enzyme';


describe('Hello function', () => {

  it('should return hello world', () => {
    // const result = hello();
    expect(true).to.equal(true);
  });

  it('should understand the window property', () => {
      expect(window).to.not.be.undefined;
  })

});

describe("<Hello />", () => {
    it("renders the component", () => {
        const wrapper = shallow(<Hello compiler="Typescript" framework="React" />);
        expect(wrapper.find("h1").text()).to.equal("Hello from Typescript and React!")
    });
})