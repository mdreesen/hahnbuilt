import { _ as _plugin_vue_export_helper_default, u as useSeoMeta$1 } from '../virtual/entry.mjs';
import { I as Image_default } from './Image-B8_MsMSW.mjs';
import { H as HeaderSection_default, D as Description_default } from './HeaderSection-BT_zWOrm.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
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

//#region app/pages/projects/setup/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		useSeoMeta$1({
			title: "Hahn Built | Projects Setup",
			description: "Projects Setup Hahn Built",
			ogDescription: "Projects Setup Hahn Built",
			ogTitle: "Hahn Built | Projects Setup",
			ogImage: "/images/logo.webp"
		});
		const projects = [
			{
				id: 1,
				title: "Lakeside Lodge (Whitefish)",
				loc: "Whitefish",
				img: "images/projects/setup/setup_one.webp",
				span: "high"
			},
			{
				id: 2,
				title: "Foundation Pour (Kalispell)",
				loc: "Kalispell",
				img: "images/projects/setup/setup_two.webp",
				span: "mid"
			},
			{
				id: 3,
				title: "Commercial Slabs (Flathead Valley)",
				loc: "Flathead Valley",
				img: "images/projects/setup/setup_three.webp",
				span: "low"
			},
			{
				id: 4,
				title: "Mountain Retreat (Bigfork)",
				loc: "Bigfork",
				img: "images/projects/setup/setup_four.webp",
				span: "high"
			},
			{
				id: 5,
				title: "Mill Creek Bridge",
				loc: "Remote MT",
				img: "images/projects/setup/setup_five.webp",
				span: "mid"
			},
			{
				id: 6,
				title: "Structural Steel (Evergreen)",
				loc: "Evergreen",
				img: "images/projects/setup/setup_six.webp",
				span: "low"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			const _component_baseHeaderSection = HeaderSection_default;
			const _component_baseDescription = Description_default;
			const _component_baseImage = Image_default;
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "py-24 px-6 md:px-12 border-t border-zinc-800" }, _attrs))} data-v-05262f3d><header class="mb-20" data-v-05262f3d>`);
			_push(ssrRenderComponent(_component_baseHeaderSection, { text: "Project<br><span class='text-orange-600'>Portfolio</span><br>Setup" }, null, _parent));
			_push(ssrRenderComponent(_component_baseDescription, { text: "From residential foundations to complex commercial scale, Hahn Built structures defines endurance with setup." }, null, _parent));
			_push(`</header><div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8" data-v-05262f3d><!--[-->`);
			ssrRenderList(projects, (project) => {
				_push(`<div class="break-inside-avoid group relative overflow-hidden bg-zinc-900 border border-zinc-800 rounded-sm shadow-xl transition-all duration-300 hover:border-orange-600/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-600/5" data-v-05262f3d><div class="${ssrRenderClass(["relative overflow-hidden", project.span === "high" ? "aspect-3/4.5" : project.span === "mid" ? "aspect-square" : "aspect-4/3"])}" data-v-05262f3d>`);
				_push(ssrRenderComponent(_component_baseImage, {
					source: project.img,
					style: `w-full h-full object-cover transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110`,
					alt: "Setup Concrete image"
				}, null, _parent));
				_push(`<div class="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8" data-v-05262f3d><span class="text-orange-500 font-mono text-xs uppercase tracking-widest mb-2" data-v-05262f3d>Hahn Built Verified</span></div> 1/div&gt; <div class="p-5 flex justify-between items-center bg-zinc-900 border-t border-zinc-800" data-v-05262f3d><span class="font-bold text-xs uppercase tracking-[0.2em] text-zinc-400 group-hover:text-white transition-colors duration-300" data-v-05262f3d>${ssrInterpolate(project.title)}</span><div class="w-8 h-0.5 bg-zinc-700 group-hover:w-16 group-hover:bg-orange-600 transition-all duration-300" data-v-05262f3d></div></div></div></div>`);
			});
			_push(`<!--]--></div></section>`);
		};
	}
});
//#endregion
//#region app/pages/projects/setup/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/setup/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var setup_default = /*#__PURE__*/ _plugin_vue_export_helper_default(index_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-05262f3d"]]);

export { setup_default as default };
//# sourceMappingURL=setup-PQsZUibO.mjs.map
