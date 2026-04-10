import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/HeaderSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "BaseHeaderSection" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Description",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      default: "One"
    },
    color: {
      type: String,
      default: "text-zinc-400"
    },
    size: {
      type: String,
      default: "text-xl"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${ssrRenderAttrs(mergeProps({
        class: `${props.color} ${props.size} leading-relaxed max-w-lg`
      }, _attrs))}>${__props.text ?? ""}</p>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Description.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "BaseDescription" });

export { __nuxt_component_0 as _, __nuxt_component_1 as a };
//# sourceMappingURL=Description-BuATmeBm.mjs.map
