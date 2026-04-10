import { b as useSeoMeta, c as __nuxt_component_0$4 } from './server.mjs';
import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ipx';
import 'vue-router';
import '@iconify/vue';
import 'tailwindcss/colors';
import 'perfect-debounce';
import '@vue/shared';
import '@vueuse/core';
import '@vueuse/shared';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Hahn Built | Contact",
      description: "Contact Hahn Built",
      ogDescription: "Contact Hahn Built",
      ogTitle: "Hahn Built | Contact",
      ogImage: "/images/logo.webp"
    });
    ref({
      name: "",
      email: "",
      projectType: "Residential",
      location: "",
      details: ""
    });
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen text-white pt-40 pb-20 px-4 relative overflow-hidden" }, _attrs))}><div class="absolute inset-0 z-0 opacity-10 pointer-events-none"><div class="absolute top-0 left-1/4 w-px h-full bg-white"></div><div class="absolute top-1/3 left-0 w-full h-px bg-white"></div></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-IP5R7ZFe.mjs.map
