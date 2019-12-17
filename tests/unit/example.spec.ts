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
  it("renders props.username when passed", () => {
    const username = "username";
    const wrapper = shallowMount(DFriendCard, {
      propsData: { username }
    });
    expect(wrapper.text()).to.include(username);
  });
});
describe("DFriendCard.vue", () => {
  it("renders props.name when passed", () => {
    const name = "name";
    const wrapper = shallowMount(DFriendCard, {
      propsData: { name }
    });
    expect(wrapper.text()).to.include(name);
  });
});
