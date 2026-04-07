import { resolveDirective, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = [
      { title: "The Summit Estate", type: "Residential", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" },
      { title: "Ironwood Plaza", type: "Commercial", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_gsap = resolveDirective("gsap");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#0c0c0c] text-[#eaeaea] min-h-screen selection:bg-orange-600 overflow-x-hidden" }, _attrs))}><section class="h-screen flex flex-col justify-center px-12 relative overflow-hidden"><div class="z-10"><h1${ssrRenderAttrs(mergeProps({ class: "text-[clamp(4.5rem,18vw,14rem)] font-black leading-[0.80] uppercase tracking-tighter italic" }, ssrGetDirectiveProps(_ctx, _directive_gsap, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.2
      }, void 0, { from: true })))}><div>Built to</div><div class="text-orange-600">Endure.</div></h1><p${ssrRenderAttrs(mergeProps({ class: "mt-10 max-w-xl text-zinc-400 font-medium leading-relaxed text-lg" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, x: -50, duration: 1, delay: 0.8 }, void 0, { from: true })))}> Precision-engineered residential and commercial structures. Hahn Built combines rigorous design with industrial strength. </p></div><div${ssrRenderAttrs(mergeProps({ class: "absolute right-0 top-0 w-1/2 h-full grayscale opacity-40" }, ssrGetDirectiveProps(_ctx, _directive_gsap, {
        scrollTrigger: {
          trigger: "section",
          start: "top top",
          scrub: true
        },
        scale: 1.2
      }, void 0, { to: true })))}><img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&amp;fit=crop&amp;q=80" class="w-full h-full object-cover"></div></section><section id="projects" class="py-32 px-12"><div class="grid grid-cols-1 md:grid-cols-2 gap-12"><!--[-->`);
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
        }, void 0, { from: true })))}><img${ssrRenderAttr("src", project.img)} class="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-all duration-700"><div class="absolute inset-0 p-12 flex flex-col justify-end bg-linear-to-t from-black/90 to-transparent"><span class="text-orange-500 font-mono text-sm mb-3 uppercase tracking-widest">${ssrInterpolate(project.type)}</span><h3 class="text-5xl font-extrabold uppercase italic">${ssrInterpolate(project.title)}</h3></div></div>`);
      });
      _push(`<!--]--></div></section></div>`);
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
//# sourceMappingURL=index-DKVVTEfR.mjs.map
