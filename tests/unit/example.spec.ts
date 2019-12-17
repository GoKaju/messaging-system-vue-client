import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import DFriendCard from "@/components/DFriendCard.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).to.include(msg);
  });
});
describe("DFriendCard.vue", () => {
  it("renders props.msg when passed", () => {
    const username = "username";
    const name = "name";
    const wrapper = shallowMount(DFriendCard, {
      propsData: { username, name }
    });
    expect(wrapper.text()).to.include(username);
    expect(wrapper.text()).to.include(name);
  });
});
