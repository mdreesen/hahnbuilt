import { u as useSeoMeta$1, a as useRuntimeConfig, C as ClientOnly } from '../virtual/entry.mjs';
import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

//#region app/pages/contact.vue?vue&type=script&setup=true&lang.ts
var contact_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "contact",
	__ssrInlineRender: true,
	setup(__props) {
		useSeoMeta$1({
			title: "Hahn Built | Contact",
			description: "Contact Hahn Built",
			ogDescription: "Contact Hahn Built",
			ogTitle: "Hahn Built | Contact",
			ogImage: "/images/logo.webp"
		});
		useRuntimeConfig().public.formSpreeKey;
		ref({
			name: "",
			email: "",
			projectType: "Residential",
			location: "",
			details: ""
		});
		ref(false);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_ClientOnly = ClientOnly;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen text-white pt-40 pb-20 px-4 relative overflow-hidden" }, _attrs))}><div class="absolute inset-0 z-0 opacity-10 pointer-events-none"><div class="absolute top-0 left-1/4 w-px h-full bg-white"></div><div class="absolute top-1/3 left-0 w-full h-px bg-white"></div></div>`);
			_push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
			_push(`</div>`);
		};
	}
});
//#endregion
//#region app/pages/contact.vue
var _sfc_setup = contact_vue_vue_type_script_setup_true_lang_default.setup;
contact_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var contact_default = contact_vue_vue_type_script_setup_true_lang_default;

export { contact_default as default };
//# sourceMappingURL=contact-0m2-f-0H.mjs.map
