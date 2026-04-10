import { _ as __nuxt_component_0 } from './Header-CUhTJL-d.mjs';
import { s as slideRight, _ as __nuxt_component_1$1, a as slideUp, b as stats, c as __nuxt_component_1, d as __nuxt_component_0$2, q as qualityPoints } from './gsap-Dvet-ndO.mjs';
import { _ as __nuxt_component_0$1 } from './Image-DzatZBeR.mjs';
import { defineComponent, resolveDirective, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { b as useSeoMeta } from './server.mjs';
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
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Hahn Built | About",
      description: "About Hahn Built",
      ogDescription: "About Hahn Built",
      ogTitle: "Hahn Built | About",
      ogImage: "/images/logo.webp"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseHeader = __nuxt_component_0;
      const _component_baseDescription = __nuxt_component_1$1;
      const _component_baseImage = __nuxt_component_0$1;
      const _component_baseCard = __nuxt_component_1;
      const _component_baseHeaderSection = __nuxt_component_0$2;
      const _directive_gsap = resolveDirective("gsap");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen pt-40 pb-20 px-4" }, _attrs))}><div class="max-w-7xl mx-auto"><header class="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32"><div class="relative z-10"><span class="text-orange-600 font-mono text-xs tracking-[0.3em] uppercase mb-4 block">The Mandate</span>`);
      _push(ssrRenderComponent(_component_baseHeader, mergeProps({ text: "Built to<br><span class='text-orange-600'>Outlast.</span>" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { ...unref(slideRight) }, void 0, { from: true })), null, _parent));
      _push(ssrRenderComponent(_component_baseDescription, mergeProps({ text: "In Montana, the environment is the ultimate inspector. At Hahn Built, we don't just pour\n                        concrete; we engineer foundations that withstand the shifting frost and heavy loads of the\n                        Flathead Valley." }, ssrGetDirectiveProps(_ctx, _directive_gsap, { ...unref(slideUp) }, void 0, { from: true })), null, _parent));
      _push(`</div><div class="relative aspect-square bg-zinc-900 overflow-hidden group">`);
      _push(ssrRenderComponent(_component_baseImage, {
        source: "/images/home_three.webp",
        alt: "Hahn Built personal image",
        style: `w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-3000`
      }, null, _parent));
      _push(`<div class="absolute inset-0 border-20 border-[#0c0c0c]"></div></div></header><section class="grid grid-cols-2 md:grid-cols-4 gap-1 border-y border-white/10 mb-32 bg-white/10"><!--[-->`);
      ssrRenderList(unref(stats), (stat) => {
        _push(`<div class="py-16 flex justify-center items-center text-center group">`);
        _push(ssrRenderComponent(_component_baseCard, {
          title: stat.label,
          description: stat.value
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></section><section class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end"><div class="lg:col-span-4"><span class="text-4xl font-black uppercase italic tracking-tight mb-6">Our Bedrock</span>`);
      _push(ssrRenderComponent(_component_baseDescription, { text: "Hahn Built was founded on the principle that a project is only as good as its base. We\n                        specialize in high-spec commercial foundations and custom residential flatwork where precision\n                        isn't optional—it's the standard." }, null, _parent));
      _push(`</div><div class="lg:col-span-8"><div class="blueprint-img h-px bg-orange-600 mb-10"></div><div class="flex flex-col md:flex-row justify-between gap-10"><div class="max-w-xs"><span class="text-orange-600 font-mono text-[10px] uppercase mb-4 tracking-widest">01. Precision</span><p class="text-sm text-zinc-400">Laser-leveled accuracy on every pour, ensuring a perfect start for every build.</p></div><div class="max-w-xs"><span class="text-orange-600 font-mono text-[10px] uppercase mb-4 tracking-widest">02. Durability</span>`);
      _push(ssrRenderComponent(_component_baseDescription, { text: "Mixed specifically for the local climate to prevent\n                                cracking and structural failure." }, null, _parent));
      _push(`</div></div></div></section><section class="text-white py-32 border-y border-white/5 relative overflow-hidden"><div class="absolute top-10 right-10 font-mono text-[10px] text-zinc-800 uppercase tracking-[0.5em] hidden lg:block"> Spec: ASTM C94/C94M-22a </div><div class="max-w-7xl mx-auto"><div class="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center"><div class="lg:col-span-5 relative group"><div class="relative aspect-3/4 overflow-hidden border border-white/10">`);
      _push(ssrRenderComponent(_component_baseImage, {
        source: "/images/about_one.webp",
        style: `w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 transition-all duration-1000`,
        alt: "About Image with filling concrete"
      }, null, _parent));
      _push(`<div class="absolute top-10 left-10 px-4 py-1 border border-orange-600 text-orange-600 font-mono text-[10px] uppercase tracking-widest -rotate-12"> QC Passed </div></div></div><div class="lg:col-span-7">`);
      _push(ssrRenderComponent(_component_baseHeaderSection, { text: "Our <span class='text-orange-600'>Standards</span>" }, null, _parent));
      _push(`<div class="space-y-12"><!--[-->`);
      ssrRenderList(unref(qualityPoints), (point, i) => {
        _push(`<div class="quality-point group flex gap-8 items-start border-b border-white/5 pb-8"><div class="text-orange-600 font-mono text-lg pt-1">/0${ssrInterpolate(i + 1)}</div><div><span class="text-xl font-black uppercase italic tracking-tight mb-2 group-hover:text-orange-600 transition-colors">${ssrInterpolate(point.title)}</span>`);
        _push(ssrRenderComponent(_component_baseDescription, {
          text: point.desc
        }, null, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></div></div></section></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-BZnwEZ0T.mjs.map
