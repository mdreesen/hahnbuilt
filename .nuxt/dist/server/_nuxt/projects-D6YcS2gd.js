import { _ as __nuxt_component_0 } from "./Header-BMeOThra.js";
import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { u as useHead, _ as _export_sfc } from "../server.mjs";
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
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Hahn Built | Projects",
      meta: [
        { name: "Projects", content: "Hahn Built Projects." }
      ]
    });
    const projects2 = [
      {
        id: "01",
        title: "The Summit Estate",
        location: "Whitefish, MT",
        type: "Residential Foundation",
        img: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80",
        specs: "5,000 SQFT • 4500 PSI • Custom Rebar Grid"
      },
      {
        id: "02",
        title: "Ironwood Plaza",
        location: "Kalispell, MT",
        type: "Commercial Flatwork",
        img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80",
        specs: "12,000 SQFT • Industrial Grade • Laser Leveled"
      },
      {
        id: "03",
        title: "Flathead River Vault",
        location: "Bigfork, MT",
        type: "Retaining Structural",
        img: "https://images.unsplash.com/photo-1584467541268-b040f83be3fd?auto=format&fit=crop&q=80",
        specs: "Flood-Zone Rated • 20ft Vertical • Reinforced Steel"
      }
    ];
    const activeBg = ref(projects2[0].img);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseHeader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#0c0c0c] min-h-screen text-white pt-40 pb-20 relative overflow-hidden" }, _attrs))} data-v-a950ee48><div class="fixed inset-0 z-0 transition-all duration-1000 ease-in-out opacity-20 grayscale pointer-events-none" data-v-a950ee48><img${ssrRenderAttr("src", unref(activeBg))} class="w-full h-full object-cover scale-110" alt="Background Preview" data-v-a950ee48><div class="absolute inset-0 bg-linear-to-b from-[#0c0c0c] via-transparent to-[#0c0c0c]" data-v-a950ee48></div></div><div class="max-w-7xl mx-auto px-10 relative z-10" data-v-a950ee48><header class="mb-24" data-v-a950ee48><span class="text-orange-600 font-mono text-xs tracking-[0.3em] uppercase mb-4 block" data-v-a950ee48>Archive</span>`);
      _push(ssrRenderComponent(_component_baseHeader, { text: "Projects" }, null, _parent));
      _push(`</header><div class="flex flex-col border-t border-white/10" data-v-a950ee48><!--[-->`);
      ssrRenderList(projects2, (project) => {
        _push(`<div class="group border-b border-white/10 py-12 cursor-pointer transition-colors hover:bg-white/5 px-4" data-v-a950ee48><div class="grid grid-cols-1 md:grid-cols-12 items-center gap-8" data-v-a950ee48><div class="md:col-span-1 font-mono text-zinc-400 group-hover:text-orange-600 transition-colors" data-v-a950ee48>${ssrInterpolate(project.id)}</div><div class="md:col-span-5" data-v-a950ee48><h3 class="text-4xl md:text-6xl font-black uppercase italic tracking-tighter group-hover:translate-x-4 transition-transform duration-500" data-v-a950ee48>${ssrInterpolate(project.title)}</h3><p class="text-orange-600 font-mono text-[10px] uppercase tracking-widest mt-2" data-v-a950ee48>${ssrInterpolate(project.location)}</p></div><div class="md:col-span-3 text-zinc-400 text-sm font-bold uppercase tracking-widest" data-v-a950ee48>${ssrInterpolate(project.type)}</div><div class="md:col-span-3 text-right hidden md:block" data-v-a950ee48><span class="text-[10px] font-mono text-zinc-700 leading-none uppercase" data-v-a950ee48> Technical Specs:<br data-v-a950ee48><span class="text-zinc-400" data-v-a950ee48>${ssrInterpolate(project.specs)}</span></span></div></div></div>`);
      });
      _push(`<!--]--></div><footer class="mt-32 border-t border-white/5 pt-10 flex justify-between items-center text-zinc-400 font-mono text-[10px] uppercase tracking-widest" data-v-a950ee48><span data-v-a950ee48>Verified Structural Builds</span><span data-v-a950ee48>Montana Licensed #XXXXX</span></footer></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projects = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a950ee48"]]);
export {
  projects as default
};
//# sourceMappingURL=projects-D6YcS2gd.js.map
