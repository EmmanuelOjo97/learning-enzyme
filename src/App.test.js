import { render, screen } from "@testing-library/react";
import App from "./App";

import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

let wrapper;
beforeEach(() => {
  wrapper = shallow(<App />);
});
describe("Counter testing", () => {
  test("render the title of counter", () => {
    // console.log(wrapper.debug());
    expect(wrapper.find("h1").text()).toContain("This is the counter");
  });
  test("render a button with test of `increment`", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });
  test("render initial value of state in a div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
  test("render the click event of the increment button and increment counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });
  test("render the click event of the decrement button and decrement counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
  test("render click event of decrement button and decrement counter value", () => {
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
});
