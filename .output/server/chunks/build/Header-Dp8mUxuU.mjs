import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

//#region app/components/base/Header.vue?vue&type=script&setup=true&lang.ts
var Header_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "Header",
	__ssrInlineRender: true,
	props: { text: {
		type: String,
		default: "One"
	} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<h1${ssrRenderAttrs(mergeProps({ class: "text-[clamp(4.2rem,7vw,6rem)] sm:text-[clamp(9rem,7vw,6rem)] font-black uppercase leading-[0.85] tracking-tighter mb-8 italic" }, _attrs))}>${__props.text ?? ""}</h1>`);
		};
	}
});
//#endregion
//#region app/components/base/Header.vue
var _sfc_setup = Header_vue_vue_type_script_setup_true_lang_default.setup;
Header_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Header.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Header_default = Object.assign(Header_vue_vue_type_script_setup_true_lang_default, { __name: "BaseHeader" });

export { Header_default as H };
//# sourceMappingURL=Header-Dp8mUxuU.mjs.map
