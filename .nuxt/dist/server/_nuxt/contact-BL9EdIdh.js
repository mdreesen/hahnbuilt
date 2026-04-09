import { _ as __nuxt_component_0 } from "./Header-BMeOThra.js";
import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { u as useHead } from "../server.mjs";
import "/Users/mdreesen/Documents/Programming/business-projects/hahnbuilt/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/mdreesen/Documents/Programming/business-projects/hahnbuilt/node_modules/hookable/dist/index.mjs";
import "/Users/mdreesen/Documents/Programming/business-projects/hahnbuilt/node_modules/unctx/dist/index.mjs";
import "/Users/mdreesen/Documents/Programming/business-projects/hahnbuilt/node_modules/@nuxt/nitro-server/dist/runtime/h3-compat.mjs";
import "vue-router";
import "/Users/mdreesen/Documents/Programming/business-projects/hahnbuilt/node_modules/defu/dist/defu.mjs";
import "/Users/mdreesen/Documents/Programming/business-projects/hahnbuilt/node_modules/ufo/dist/index.mjs";
import "/Users/mdreesen/Documents/Programming/business-projects/hahnbuilt/node_modules/@unhead/vue/dist/index.mjs";
import "@iconify/vue";
import "/Users/mdreesen/Documents/Programming/business-projects/hahnbuilt/node_modules/klona/dist/index.mjs";
import "tailwindcss/colors";
import "gsap/Draggable";
import "gsap/all";
import "gsap";
import "gsap/TextPlugin";
import "gsap/SplitText";
import "/Users/mdreesen/Documents/Programming/business-projects/hahnbuilt/node_modules/perfect-debounce/dist/index.mjs";
import "/Users/mdreesen/Documents/Programming/business-projects/hahnbuilt/node_modules/ohash/dist/index.mjs";
import "@vue/shared";
import "@vueuse/core";
import "@vueuse/shared";
import "tailwind-variants";
import "@iconify/utils/lib/css/icon";
import "/Users/mdreesen/Documents/Programming/business-projects/hahnbuilt/node_modules/h3/dist/index.mjs";
import "ohash/utils";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Hahn Built | Contact",
      meta: [
        { name: "Contact", content: "Hahn Built Contact." }
      ]
    });
    const formData = ref({
      name: "",
      email: "",
      projectType: "Residential",
      location: "",
      details: ""
    });
    const isSubmitting = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseHeader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#0c0c0c] min-h-screen text-white pt-40 pb-20 px-10 relative overflow-hidden" }, _attrs))}><div class="absolute inset-0 z-0 opacity-10 pointer-events-none"><div class="absolute top-0 left-1/4 w-px h-full bg-white"></div><div class="absolute top-1/3 left-0 w-full h-px bg-white"></div></div><div class="max-w-7xl mx-auto relative z-10"><header class="mb-24"><span class="text-orange-600 font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Intake</span>`);
      _push(ssrRenderComponent(_component_baseHeader, { text: "Contact" }, null, _parent));
      _push(`</header><div class="grid grid-cols-1 lg:grid-cols-12 gap-20"><div class="lg:col-span-7"><div class="bg-zinc-900/30 border border-white/5 p-10 rounded-3xl backdrop-blur-sm"><div class="space-y-12"><div class="grid grid-cols-1 md:grid-cols-2 gap-10"><div class="space-y-2"><label class="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Principal Name</label><input${ssrRenderAttr("value", unref(formData).name)} type="text" placeholder="Full Name" class="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-orange-600 transition-colors font-bold uppercase italic"></div><div class="space-y-2"><label class="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Contact Email</label><input${ssrRenderAttr("value", unref(formData).email)} type="email" placeholder="Email Address" class="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-orange-600 transition-colors font-bold uppercase italic"></div></div><div class="space-y-4"><label class="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block">Structural Category</label><div class="flex flex-wrap gap-4"><!--[-->`);
      ssrRenderList(["Residential", "Commercial", "Civil", "Other"], (type) => {
        _push(`<button class="${ssrRenderClass([unref(formData).projectType === type ? "bg-orange-600 text-black border-orange-600" : "bg-transparent text-white border-white/10", "px-8 py-3 border text-xs font-black uppercase italic tracking-widest transition-all"])}">${ssrInterpolate(type)}</button>`);
      });
      _push(`<!--]--></div></div><div class="space-y-2"><label class="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Project Details</label><textarea rows="4" placeholder="Briefly describe the structural requirements..." class="w-full bg-transparent border border-white/10 p-6 outline-none focus:border-orange-600 transition-colors font-medium text-zinc-400">${ssrInterpolate(unref(formData).details)}</textarea></div><button${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} class="group relative w-full py-6 bg-white text-black font-black uppercase tracking-widest italic overflow-hidden">`);
      if (!unref(isSubmitting)) {
        _push(`<span class="relative z-10 group-hover:text-white transition-colors duration-500">Transmit Data</span>`);
      } else {
        _push(`<span class="relative z-10 animate-pulse">Processing...</span>`);
      }
      _push(`<div class="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div></button></div></div></div><div class="lg:col-span-5 flex flex-col justify-between py-6"><div class="space-y-16"><div><h4 class="text-orange-600 font-mono text-[10px] uppercase tracking-[0.3em] mb-6">Headquarters</h4><p class="text-3xl font-bold uppercase italic leading-tight"> Evergreen, Montana<br> Flathead Valley </p></div><div><h4 class="text-orange-600 font-mono text-[10px] uppercase tracking-[0.3em] mb-6">Direct Line</h4><p class="text-3xl font-bold uppercase italic leading-tight hover:text-orange-600 transition-colors"><a href="tel:4063002052">(406) 300-2052</a></p><p class="text-sm text-zinc-400 mt-2 font-mono uppercase">Mon — Fri / 07:00 — 17:00</p></div></div><div class="p-10 border border-white/5 bg-zinc-900/10 mt-20"><h5 class="text-xs font-black uppercase tracking-widest mb-4">Structural Inspection</h5><p class="text-xs text-zinc-400 leading-relaxed uppercase tracking-tight"> All project manifests are reviewed by our lead engineers. Response time is typically within 24 operational hours. </p></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=contact-BL9EdIdh.js.map
