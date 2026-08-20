import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

//#region app/components/base/Description.vue?vue&type=script&setup=true&lang.ts
var Description_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "Description",
	__ssrInlineRender: true,
	props: {
		text: {
			type: String,
			default: "One"
		},
		color: {
			type: String,
			default: "text-zinc-400"
		},
		size: {
			type: String,
			default: "text-xl"
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<p${ssrRenderAttrs(mergeProps({ class: `${props.color} ${props.size} leading-relaxed max-w-lg` }, _attrs))}>${__props.text ?? ""}</p>`);
		};
	}
});
//#endregion
//#region app/components/base/Description.vue
var _sfc_setup$1 = Description_vue_vue_type_script_setup_true_lang_default.setup;
Description_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Description.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Description_default = Object.assign(Description_vue_vue_type_script_setup_true_lang_default, { __name: "BaseDescription" });
//#endregion
//#region app/components/base/HeaderSection.vue?vue&type=script&setup=true&lang.ts
var HeaderSection_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "HeaderSection",
	__ssrInlineRender: true,
	props: { text: {
		type: String,
		default: "One"
	} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<h2${ssrRenderAttrs(mergeProps({ class: "text-5xl sm:text-8xl font-black uppercase leading-[0.85] tracking-tighter mb-8 italic" }, _attrs))}>${__props.text ?? ""}</h2>`);
		};
	}
});
//#endregion
//#region app/components/base/HeaderSection.vue
var _sfc_setup = HeaderSection_vue_vue_type_script_setup_true_lang_default.setup;
HeaderSection_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/HeaderSection.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var HeaderSection_default = Object.assign(HeaderSection_vue_vue_type_script_setup_true_lang_default, { __name: "BaseHeaderSection" });

export { Description_default as D, HeaderSection_default as H };
//# sourceMappingURL=HeaderSection-BT_zWOrm.mjs.map
