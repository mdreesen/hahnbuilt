import { _ as __nuxt_component_0$2 } from './Header-CUhTJL-d.mjs';
import { _ as __nuxt_component_1$2 } from './Description-CR3Na8no.mjs';
import { _ as __nuxt_component_0$1, a as __nuxt_component_1$3 } from './HeaderSection-DXW7-xnc.mjs';
import { resolveDirective, mergeProps, defineComponent, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrGetDirectiveProps, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { b as useSeoMeta, u as useHead, _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_1$1 } from './Card-BOTc6238.mjs';
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

const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_baseHeader = __nuxt_component_0$2;
  const _component_baseDescription = __nuxt_component_1$2;
  const _component_baseImage = __nuxt_component_1$3;
  const _directive_gsap = resolveDirective("gsap");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "h-screen flex flex-col justify-center px-12 relative overflow-hidden" }, _attrs))}><div class="z-10"><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_gsap, {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
    stagger: 0.2
  }, void 0, { from: true }))}>`);
  _push(ssrRenderComponent(_component_baseHeader, { text: "Built to<br><span class='text-orange-600'>Endure.</span>" }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_baseDescription, mergeProps({ text: "Advanced concrete solutions for residential and commercial developments. At Hahn Built, we bridge the gap\n        between architectural vision and structural permanence." }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, x: -50, duration: 1, delay: 0.8 }, void 0, { from: true })), null, _parent));
  _push(`</div><div${ssrRenderAttrs(mergeProps({ class: "absolute right-0 top-0 w-1/2 h-full grayscale opacity-40" }, ssrGetDirectiveProps(_ctx, _directive_gsap, {
    scrollTrigger: {
      trigger: "section",
      start: "top top",
      scrub: true
    },
    scale: 1.2
  }, void 0, { to: true })))}>`);
  _push(ssrRenderComponent(_component_baseImage, {
    source: "/images/home_one.webp",
    style: "w-full h-full object-cover",
    alt: "Hahn Built Worksite"
  }, null, _parent));
  _push(`</div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Hero.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]), { __name: "AppHero" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "RecentProjects",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = [
      { title: "The Summit Estate", type: "Residential", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" },
      { title: "Ironwood Plaza", type: "Commercial", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseImage = __nuxt_component_1$3;
      const _directive_gsap = resolveDirective("gsap");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-32 px-12" }, _attrs))}><div class="grid grid-cols-1 md:grid-cols-2 gap-12"><!--[-->`);
      ssrRenderList(projects, (project, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: index,
          class: ["project-card relative aspect-4/5 overflow-hidden group bg-[#1a1a1a]", index % 2 !== 0 ? "md:mt-32" : ""]
        }, ssrGetDirectiveProps(_ctx, _directive_gsap, {
          scrollTrigger: {
            trigger: ".project-card",
            start: "top 80%"
          },
          y: 50,
          opacity: 0,
          duration: 1,
          delay: index * 0.2
        }, void 0, { from: true })))}>`);
        _push(ssrRenderComponent(_component_baseImage, {
          source: project.img,
          style: "w-full h-full object-cover opacity-70 group-hover:scale-110 transition-all duration-700",
          alt: project.title
        }, null, _parent));
        _push(`<div class="absolute inset-0 p-12 flex flex-col justify-end bg-linear-to-t from-black/90 to-transparent"><span class="text-orange-500 font-mono text-sm mb-3 uppercase tracking-widest">${ssrInterpolate(project.type)}</span><span class="text-5xl font-extrabold uppercase italic">${ssrInterpolate(project.title)}</span></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/RecentProjects.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$3, { __name: "AppRecentProjects" });
const _sfc_main$2 = {
  __name: "AppDescription",
  __ssrInlineRender: true,
  setup(__props) {
    const services = [
      {
        title: "Foundation Systems",
        description: "Precision-engineered pouring for residential estates and commercial hubs. We build the base that never shifts.",
        icon: "lucide:layers"
      },
      {
        title: "Architectural Flatwork",
        description: "Custom stamped and stained concrete that blurs the line between structural necessity and high-end design.",
        icon: "lucide:layout-grid"
      },
      {
        title: "Reinforcement & Steel",
        description: "Industrial-grade rebar integration and structural reinforcement for high-stress Montana environments.",
        icon: "lucide:shield-check"
      },
      {
        title: "Site Preparation",
        description: "Comprehensive excavation, grading, and compaction to ensure your concrete sits on a perfect foundation.",
        icon: "lucide:mountain"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseHeaderSection = __nuxt_component_0$1;
      const _component_baseCard = __nuxt_component_1$1;
      const _directive_gsap = resolveDirective("gsap");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-[#0c0c0c] text-white py-32 px-10 border-t border-white/5" }, _attrs))}><div class="max-w-7xl mx-auto"><div class="mb-24">`);
      _push(ssrRenderComponent(_component_baseHeaderSection, { text: "Everything<br><span class='text-orange-600'>You Need</span>" }, null, _parent));
      _push(`<p class="mt-8 max-w-2xl text-zinc-200 text-lg leading-relaxed"> From massive commercial foundations to custom architectural flatwork, Hahn Built delivers structural concrete that serves as the literal bedrock of Montana. </p></div><div class="grid grid-cols-1 md:grid-cols-2 border-l border-t border-white/10"><!--[-->`);
      ssrRenderList(services, (item, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: index,
          class: "service-item group p-12 border-r border-b border-white/10 hover:bg-zinc-900/50 transition-colors duration-500"
        }, ssrGetDirectiveProps(_ctx, _directive_gsap, {
          scrollTrigger: { trigger: ".service-item", start: "top 90%" },
          opacity: 0,
          y: 30,
          delay: index * 0.1
        }, void 0, { from: true })))}>`);
        _push(ssrRenderComponent(_component_baseCard, {
          number: index + 1,
          icon: item.icon,
          title: item.title,
          description: item.description
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Description.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Faq",
  __ssrInlineRender: true,
  setup(__props) {
    const activeIndex = ref(null);
    const faqs = [
      {
        q: "What types of concrete projects do you handle?",
        a: "We specialize in high-durability residential foundations, commercial flatwork, architectural stamped concrete, and structural retaining walls designed for Montana’s freeze-thaw cycles."
      },
      {
        q: "What is your typical service area?",
        a: "Based in Kalispell, we primarily serve the Flathead Valley, including Kalispell, Whitefish, Columbia Falls, and Bigfork. For large-scale commercial builds, we extend across Western Montana."
      },
      {
        q: "Are you licensed and insured in Montana?",
        a: "Absolutely. Hahn Built is fully licensed, bonded, and carries comprehensive liability and worker's comp insurance. Safety and compliance are our structural bedrock."
      },
      {
        q: "How do you handle project estimates?",
        a: "We provide detailed, transparent bids based on site-specific variables. This includes excavation needs, reinforcement requirements, and concrete PSI grades tailored to your project’s load."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseHeaderSection = __nuxt_component_0$1;
      const _directive_gsap = resolveDirective("gsap");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-[#0c0c0c] text-white py-32 px-10" }, _attrs))}><div class="max-w-4xl mx-auto"><div class="mb-20">`);
      _push(ssrRenderComponent(_component_baseHeaderSection, { text: "Common<br><span class='text-orange-600'>Questions</span>" }, null, _parent));
      _push(`</div><div class="border-t border-white/10"><!--[-->`);
      ssrRenderList(faqs, (faq, i) => {
        _push(`<div class="border-b border-white/10 overflow-hidden"><button class="w-full py-10 flex items-center justify-between text-left group transition-all"><div class="flex items-center gap-8"><span class="font-mono text-zinc-700 group-hover:text-orange-600 transition-colors">${ssrInterpolate((i + 1).toString().padStart(2, "0"))}</span><span class="text-xl md:text-2xl font-bold uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500">${ssrInterpolate(faq.q)}</span></div><div class="relative w-6 h-6"><div class="${ssrRenderClass([{ "rotate-180": unref(activeIndex) === i }, "absolute inset-0 bg-white h-0.5 my-auto transition-transform duration-500"])}"></div><div class="${ssrRenderClass([{ "rotate-90 opacity-0": unref(activeIndex) === i }, "absolute inset-0 bg-white w-0.5 mx-auto transition-transform duration-500"])}"></div></div></button><div${ssrRenderAttrs(mergeProps({
          class: "pb-10 pl-16 md:pl-24 pr-10",
          style: unref(activeIndex) === i ? null : { display: "none" }
        }, ssrGetDirectiveProps(_ctx, _directive_gsap, { height: 0, opacity: 0, duration: 0.5, ease: "power4.out" }, void 0, { from: true })))}><p class="text-zinc-400 text-lg leading-relaxed max-w-2xl border-l-2 border-orange-600/30 pl-6">${ssrInterpolate(faq.a)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Faq.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$1, { __name: "AppFaq" });
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Hahn Built | Home",
      description: "Home Hahn Built",
      ogDescription: "Home Hahn Built",
      ogTitle: "Hahn Built | Home",
      ogImage: "/images/logo.webp"
    });
    useHead({
      title: "Hahn Built | Main",
      meta: [
        { name: "Home", content: "Hahn Built Home." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_appHero = __nuxt_component_0;
      const _component_appRecentProjects = __nuxt_component_1;
      const _component_appDescription = _sfc_main$2;
      const _component_appFaq = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_appHero, null, null, _parent));
      _push(`<section>`);
      _push(ssrRenderComponent(_component_appRecentProjects, null, null, _parent));
      _push(`</section><section>`);
      _push(ssrRenderComponent(_component_appDescription, null, null, _parent));
      _push(`</section><section>`);
      _push(ssrRenderComponent(_component_appFaq, null, null, _parent));
      _push(`</section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DxpHEVKv.mjs.map
