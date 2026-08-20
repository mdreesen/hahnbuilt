import { d as useRoute, b as useHead$1, _ as _plugin_vue_export_helper_default, C as ClientOnly, c as components_default } from '../virtual/entry.mjs';
import { I as Image_default } from './Image-B8_MsMSW.mjs';
import { defineComponent, mergeProps, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
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

//#region app/components/base/Navigation.vue?vue&type=script&setup=true&lang.ts
var Navigation_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "Navigation",
	__ssrInlineRender: true,
	setup(__props) {
		computed(() => [
			{
				label: "Main",
				to: "/"
			},
			{
				label: "About",
				to: "/about"
			},
			{
				label: "Projects",
				to: "/projects"
			},
			{
				label: "Contact",
				to: "/contact"
			}
		]);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(ClientOnly, _attrs, {}, _parent));
		};
	}
});
//#endregion
//#region app/components/base/Navigation.vue
var _sfc_setup$2 = Navigation_vue_vue_type_script_setup_true_lang_default.setup;
Navigation_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Navigation.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var Navigation_default = Object.assign(Navigation_vue_vue_type_script_setup_true_lang_default, { __name: "BaseNavigation" });
//#endregion
//#region app/components/base/Footer.vue
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	const _component_baseImage = Image_default;
	const _component_Icon = components_default;
	_push(`<footer${ssrRenderAttrs(mergeProps({ class: "text-white pt-32 pb-10 px-10 border-t border-white/5 relative overflow-hidden" }, _attrs))}><div class="max-w-7xl mx-auto relative z-10"><div class="flex flex-col sm:flex-row justify-around gap-16 mb-24"><div class="md:col-span-5">`);
	_push(ssrRenderComponent(_component_baseImage, {
		source: "/images/logo_transparent.webp",
		style: "w-48 mb-8",
		alt: "Hahn Built transparent logo"
	}, null, _parent));
	_push(`<p class="text-zinc-400 max-w-sm mb-8 leading-relaxed"> Specializing in high-performance concrete structures across the Flathead Valley. From Kalispell to the peaks, we build the bedrock of Montana. </p><div class="flex flex-col gap-2 font-mono text-xs uppercase tracking-widest text-orange-600"><span>Kalispell, Montana</span><span>Licensed • Bonded • Insured</span></div></div><div class="flex flex-col gap-10"><span class="text-xs uppercase tracking-widest">Connect</span><div><a href="https://www.instagram.com/hahnbuilt/" name="instagram" aria-label="Instagram link for Hahn Built">`);
	_push(ssrRenderComponent(_component_Icon, {
		name: "skill-icons:instagram",
		class: "w-15 h-15 text-zinc-400 group-hover:text-orange-600"
	}, null, _parent));
	_push(`</a></div></div></div><div class="pt-10 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6"><p class="text-[10px] font-mono text-zinc-400 uppercase tracking-widest"> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Hahn Built Construction Co. All Rights Reserved. </p><div class="flex gap-8 text-[10px] font-mono text-zinc-400 uppercase tracking-widest"><a href="https://www.mdreesen.com/" name="White Raven Development" aria-label="Link for White Raven Development" class="text-zinc-400 hover:underline">Site by White Raven Development</a></div></div></div></footer>`);
}
var _sfc_setup$1 = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Footer.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Footer_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "BaseFooter" });
//#endregion
//#region app/layouts/default.vue?vue&type=script&setup=true&lang.ts
var default_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "default",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute();
		useHead$1({ meta: [{
			property: "og:title",
			content: `Hahn Built: ${route.meta.title}`
		}] });
		return (_ctx, _push, _parent, _attrs) => {
			const _component_baseNavigation = Navigation_default;
			const _component_baseFooter = Footer_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#0c0c0c] text-white min-h-screen selection:bg-orange-600 overflow-x-hidden" }, _attrs))}>`);
			_push(ssrRenderComponent(_component_baseNavigation, null, null, _parent));
			_push(`<main>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</main>`);
			_push(ssrRenderComponent(_component_baseFooter, null, null, _parent));
			_push(`</div>`);
		};
	}
});
//#endregion
//#region app/layouts/default.vue
var _sfc_setup = default_vue_vue_type_script_setup_true_lang_default.setup;
default_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var default_default = default_vue_vue_type_script_setup_true_lang_default;

export { default_default as default };
//# sourceMappingURL=default-CZVPGlFo.mjs.map
