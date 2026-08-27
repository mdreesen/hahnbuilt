import { u as useSeoMeta$1, b as useHead$1 } from '../virtual/entry.mjs';
import { I as Image_default } from './Image-B8_MsMSW.mjs';
import { H as Header_default } from './Header-Dp8mUxuU.mjs';
import { D as Description_default, H as HeaderSection_default } from './HeaderSection-BT_zWOrm.mjs';
import { s as slideRight, a as slideUp, c as scrollTrigger, d as services, C as Card_default, f as faqs } from './gsap-DA4kK-XR.mjs';
import { mergeProps, resolveDirective, unref, defineComponent, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import 'nostics';
import 'nostics/formatters/ansi';
import 'unhead/plugins';
import 'unhead/utils';
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
import '@vue/shared';
import '@iconify/vue';
import 'tailwindcss/colors';
import 'fnv1a-64';
import 'object-identity';
import '@vueuse/core';
import '@vueuse/shared';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';

//#region app/components/app/Hero.vue
var _sfc_main$2 = {
	__name: "AppHero",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			const _component_baseHeader = Header_default;
			const _component_baseDescription = Description_default;
			const _component_baseImage = Image_default;
			const _directive_gsap = resolveDirective("gsap");
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "h-screen flex flex-col justify-center px-4 relative overflow-hidden" }, _attrs))}><div class="z-10"><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_gsap, { ...unref(slideRight) }, void 0, { from: true }))}>`);
			_push(ssrRenderComponent(_component_baseHeader, { text: "Built to<br><span class='text-orange-600'>Endure.</span>" }, null, _parent));
			_push(`</div>`);
			_push(ssrRenderComponent(_component_baseDescription, mergeProps({ text: "Advanced concrete solutions for residential and commercial developments. At Hahn Built, we bridge the gap\n        between architectural vision and structural permanence." }, ssrGetDirectiveProps(_ctx, _directive_gsap, { ...unref(slideUp) }, void 0, { from: true })), null, _parent));
			_push(`</div><div${ssrRenderAttrs(mergeProps({ class: "absolute right-0 top-0 w-1/2 h-full grayscale opacity-40" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { ...unref(scrollTrigger) }, void 0, { to: true })))}>`);
			_push(ssrRenderComponent(_component_baseImage, {
				source: "/images/home_one.webp",
				style: "w-full h-full object-cover",
				alt: "Hahn Built Worksite"
			}, null, _parent));
			_push(`</div></section>`);
		};
	}
};
var _sfc_setup$3 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Hero.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
//#endregion
//#region app/components/app/Description.vue
var _sfc_main$1 = {
	__name: "AppDescription",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			const _component_baseHeaderSection = HeaderSection_default;
			const _component_baseCard = Card_default;
			const _directive_gsap = resolveDirective("gsap");
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "text-white px-4 border-t border-white/5" }, _attrs))}><div class="max-w-7xl mx-auto"><div${ssrRenderAttrs(mergeProps({ class: "mb-24" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { ...unref(slideRight) }, void 0, { from: true })))}>`);
			_push(ssrRenderComponent(_component_baseHeaderSection, { text: "Everything<br><span class='text-orange-600'>You Need</span>" }, null, _parent));
			_push(`<p class="mt-8 max-w-2xl text-zinc-200 text-lg leading-relaxed"> From massive commercial foundations to custom architectural flatwork, Hahn Built delivers structural concrete that serves as the literal bedrock of Montana. </p></div><div class="grid grid-cols-1 md:grid-cols-2 border-l border-t border-white/10"><!--[-->`);
			ssrRenderList(unref(services), (item, index) => {
				_push(`<div${ssrRenderAttrs(mergeProps({
					key: index,
					class: "service-item group p-12 border-r border-b border-white/10 hover:bg-zinc-900/50 transition-colors duration-500"
				}, ssrGetDirectiveProps(_ctx, _directive_gsap, { ...unref(slideUp) }, void 0, { from: true })))}>`);
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
var _sfc_setup$2 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Description.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
//#endregion
//#region app/components/app/Faq.vue?vue&type=script&setup=true&lang.ts
var Faq_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "Faq",
	__ssrInlineRender: true,
	setup(__props) {
		const activeIndex = ref(null);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_baseHeaderSection = HeaderSection_default;
			const _directive_gsap = resolveDirective("gsap");
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "text-white px-4" }, _attrs))}><div class="max-w-4xl mx-auto"><div class="mb-20">`);
			_push(ssrRenderComponent(_component_baseHeaderSection, { text: "Common<br><span class='text-orange-600'>Questions</span>" }, null, _parent));
			_push(`</div><div class="border-t border-white/10"><!--[-->`);
			ssrRenderList(unref(faqs), (faq, i) => {
				_push(`<div class="border-b border-white/10 overflow-hidden"><button class="w-full py-10 flex items-center justify-between text-left group transition-all"><div class="flex items-center gap-8"><span class="font-mono text-zinc-400 group-hover:text-orange-600 transition-colors">${ssrInterpolate((i + 1).toString().padStart(2, "0"))}</span><span class="text-xl md:text-2xl font-bold uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500">${ssrInterpolate(faq.q)}</span></div><div class="relative w-6 h-6"><div class="${ssrRenderClass([{ "rotate-180": unref(activeIndex) === i }, "absolute inset-0 bg-white h-0.5 my-auto transition-transform duration-500"])}"></div><div class="${ssrRenderClass([{ "rotate-90 opacity-0": unref(activeIndex) === i }, "absolute inset-0 bg-white w-0.5 mx-auto transition-transform duration-500"])}"></div></div></button><div${ssrRenderAttrs(mergeProps({
					class: "pb-10 pl-8 md:pl-18 pr-5",
					style: unref(activeIndex) === i ? null : { display: "none" }
				}, ssrGetDirectiveProps(_ctx, _directive_gsap, {
					height: 0,
					opacity: 0,
					duration: .5,
					ease: "power4.out"
				}, void 0, { from: true })))}><p class="text-zinc-400 text-lg leading-relaxed max-w-2xl border-l-2 border-orange-600/30 pl-6">${ssrInterpolate(faq.a)}</p></div></div>`);
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
});
//#endregion
//#region app/components/app/Faq.vue
var _sfc_setup$1 = Faq_vue_vue_type_script_setup_true_lang_default.setup;
Faq_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Faq.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Faq_default = Object.assign(Faq_vue_vue_type_script_setup_true_lang_default, { __name: "AppFaq" });
//#endregion
//#region app/pages/index.vue
var _sfc_main = {
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		useSeoMeta$1({
			title: "Hahn Built | Home",
			description: "Home Hahn Built",
			ogDescription: "Home Hahn Built",
			ogTitle: "Hahn Built | Home",
			ogImage: "/images/logo.webp"
		});
		useHead$1({
			title: "Hahn Built | Main",
			meta: [{
				name: "Home",
				content: "Hahn Built Home."
			}]
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_appHero = _sfc_main$2;
			const _component_appDescription = _sfc_main$1;
			const _component_appFaq = Faq_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-40" }, _attrs))}>`);
			_push(ssrRenderComponent(_component_appHero, null, null, _parent));
			_push(ssrRenderComponent(_component_appDescription, null, null, _parent));
			_push(ssrRenderComponent(_component_appFaq, null, null, _parent));
			_push(`</div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=pages-CV-RFa-j.mjs.map
