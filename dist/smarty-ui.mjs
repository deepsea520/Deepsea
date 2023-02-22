import { defineComponent, createVNode, openBlock, createElementBlock, createElementVNode, createTextVNode } from "vue";
const __uno = "";
const props = {
  color: {
    type: String,
    default: "blue"
    // 设定默认颜色
  },
  icon: {
    // 注册icon属性
    type: String,
    default: ""
  }
};
const SButton = defineComponent({
  name: "SButton",
  props,
  setup(props2, {
    slots
  }) {
    return () => createVNode("button", {
      "class": `
          py-2 
          px-4 
          font-semibold 
          rounded-lg 
          shadow-md 
          text-white 
          bg-${props2.color}-500 
          hover:bg-${props2.color}-700 
          border-none 
          cursor-pointer 
          m-1
          `
    }, [props2.icon !== "" ? createVNode("i", {
      "class": `i-ic-baseline-${props2.icon} p-3`
    }, null) : "", slots.default ? slots.default() : ""]);
  }
});
const _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createElementVNode("button", null, "SFCButton", -1);
const _hoisted_2 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_2);
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const JSXButton = defineComponent({
  name: "JSXButton",
  render() {
    return createVNode("button", null, [createTextVNode("JSX Button")]);
  }
});
const entry = {
  install(app) {
    app.component("SFCButton", SFCButton);
    app.component(SButton.name, SButton);
    app.component(JSXButton.name, JSXButton);
  }
};
export {
  JSXButton,
  SButton,
  SFCButton,
  entry as default
};
