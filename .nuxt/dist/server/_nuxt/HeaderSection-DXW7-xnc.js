import { c as __nuxt_component_0$1 } from "../server.mjs";
import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttrs } from "vue/server-renderer";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Image",
  __ssrInlineRender: true,
  props: {
    source: {
      type: String,
      default: "One"
    },
    style: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtImg, mergeProps({
        class: __props.style,
        src: __props.source,
        format: "webp",
        alt: __props.alt,
        preload: "",
        loading: "eager",
        "fetch-priority": "high"
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Image.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "BaseImage" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HeaderSection",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      default: "One"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h2${ssrRenderAttrs(mergeProps({ class: "text-5xl sm:text-8xl font-black uppercase leading-[0.85] tracking-tighter mb-8 italic" }, _attrs))}>${__props.text ?? ""}</h2>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/HeaderSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "BaseHeaderSection" });
export {
  __nuxt_component_1 as _,
  __nuxt_component_0 as a
};
//# sourceMappingURL=HeaderSection-DXW7-xnc.js.map
