import { e as _sfc_main$13 } from '../virtual/entry.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

//#region app/components/base/Image.vue?vue&type=script&setup=true&lang.ts
var Image_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "Image",
	__ssrInlineRender: true,
	props: {
		source: {
			type: String,
			default: "One"
		},
		style: {
			type: String,
			default: ""
		},
		alt: {
			type: String,
			default: ""
		}
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$13, mergeProps({
				class: __props.style,
				src: __props.source,
				format: "webp",
				alt: __props.alt,
				preload: "",
				loading: "eager",
				"fetch-priority": "high"
			}, _attrs), null, _parent));
		};
	}
});
//#endregion
//#region app/components/base/Image.vue
var _sfc_setup = Image_vue_vue_type_script_setup_true_lang_default.setup;
Image_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Image.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Image_default = Object.assign(Image_vue_vue_type_script_setup_true_lang_default, { __name: "BaseImage" });

export { Image_default as I };
//# sourceMappingURL=Image-B8_MsMSW.mjs.map
