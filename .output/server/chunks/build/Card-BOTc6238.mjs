import { d as __nuxt_component_0$2 } from './server.mjs';
import { _ as __nuxt_component_1$1 } from './Description-CR3Na8no.mjs';
import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    number: {
      type: Number
    },
    icon: {
      type: String
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$2;
      const _component_baseDescription = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.number || __props.icon) {
        _push(`<div class="flex justify-between items-start mb-12">`);
        if (__props.number) {
          _push(`<span class="font-mono text-orange-600 text-sm">0${ssrInterpolate(__props.number)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-orange-600 transition-colors">`);
        if (__props.icon) {
          _push(ssrRenderComponent(_component_Icon, {
            name: __props.icon,
            class: "w-5 h-5 text-zinc-500 group-hover:text-orange-600"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-col items-center"><h3 class="text-xl font-black uppercase italic mb-4 tracking-tight">${ssrInterpolate(__props.title)}</h3>`);
      _push(ssrRenderComponent(_component_baseDescription, { text: __props.description }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "BaseCard" });

export { __nuxt_component_1 as _ };
//# sourceMappingURL=Card-BOTc6238.mjs.map
