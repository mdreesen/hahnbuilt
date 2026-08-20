import { c as components_default } from '../virtual/entry.mjs';
import { D as Description_default } from './HeaderSection-BT_zWOrm.mjs';
import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

//#region app/components/base/Card.vue?vue&type=script&setup=true&lang.ts
var Card_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "Card",
	__ssrInlineRender: true,
	props: {
		number: { type: Number },
		icon: { type: String },
		title: {
			type: String,
			default: ""
		},
		description: {
			type: String,
			default: ""
		}
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Icon = components_default;
			const _component_baseDescription = Description_default;
			_push(`<div${ssrRenderAttrs(_attrs)}>`);
			if (__props.number || __props.icon) {
				_push(`<div class="flex justify-between items-start mb-12">`);
				if (__props.number) _push(`<span class="font-mono text-orange-600 text-sm">0${ssrInterpolate(__props.number)}</span>`);
				else _push(`<!---->`);
				_push(`<div class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-orange-600 transition-colors">`);
				if (__props.icon) _push(ssrRenderComponent(_component_Icon, {
					name: __props.icon,
					class: "w-5 h-5 text-zinc-400 group-hover:text-orange-600"
				}, null, _parent));
				else _push(`<!---->`);
				_push(`</div></div>`);
			} else _push(`<!---->`);
			_push(`<div class="flex flex-col items-center"><span class="text-xl font-black uppercase italic mb-4 tracking-tight">${ssrInterpolate(__props.title)}</span>`);
			_push(ssrRenderComponent(_component_baseDescription, { text: __props.description }, null, _parent));
			_push(`</div></div>`);
		};
	}
});
//#endregion
//#region app/components/base/Card.vue
var _sfc_setup = Card_vue_vue_type_script_setup_true_lang_default.setup;
Card_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Card.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Card_default = Object.assign(Card_vue_vue_type_script_setup_true_lang_default, { __name: "BaseCard" });
//#endregion
//#region app/utils/data.ts
var services = [
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
var faqs = [
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
var stats = [
	{
		label: "PSI Strength",
		value: "4500+"
	},
	{
		label: "Licensed In",
		value: "Montana"
	},
	{
		label: "Core Team",
		value: "Kalispell"
	},
	{
		label: "Years Experience",
		value: "15+"
	}
];
var qualityPoints = [
	{
		title: "Thermal Management",
		desc: "In Kalispell, the frost line is a moving target. We use specialized air-entrained admixtures to prevent internal pressure during Montana winters."
	},
	{
		title: "Laser Precision",
		desc: "Tolerances measured in millimeters. Using high-frequency laser screeds to ensure every commercial floor is perfectly planar."
	},
	{
		title: "Vapor Barrier Defense",
		desc: "Multi-layer moisture mitigation systems that prevent slab sweating and protect your finished flooring for decades."
	}
];
//#endregion
//#region app/utils/gsap.ts
var slideRight = {
	y: 100,
	opacity: 0,
	duration: 1.5,
	ease: "power4.out",
	stagger: .2
};
var slideUp = {
	opacity: 0,
	x: -50,
	duration: 1,
	delay: .8
};
var scrollTrigger = {
	scrollTrigger: {
		trigger: "section",
		start: "top top",
		scrub: true
	},
	scale: 1.2
};

export { Card_default as C, slideUp as a, stats as b, scrollTrigger as c, services as d, faqs as f, qualityPoints as q, slideRight as s };
//# sourceMappingURL=gsap-kMz7EYr2.mjs.map
