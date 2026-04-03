// store/blocksRegistry.ts
import type {
	BlockMeta,
	BlockWithMeta,
} from "../types/blocks";
import { BLOCKS } from "./cart";

// Block metadata that was previously hard-coded in the component
export const BLOCK_META: Record<string, BlockMeta> = {
	"responsive-layout": {
		icon: "devices",
		label: "Works on every screen",
		why: "Over 60% of web traffic is mobile. This ensures you never lose a customer.",
	},
	"ssg-engine": {
		icon: "bolt",
		label: "Blazing fast load speed",
		why: "Google ranks fast sites higher. Slow sites lose 53% of visitors before the page loads.",
	},
	"blog-engine": {
		icon: "edit_note",
		label: "Blog & news",
		why: "Fresh content tells Google your business is active and brings customers back.",
	},
	"portfolio-grid": {
		icon: "grid_view",
		label: "Gallery of work",
		why: "Showing work is more persuasive than describing it. Maximum visual proof.",
	},
	"contact-form": {
		icon: "mail",
		label: "Simple contact form",
		why: "The minimum path for enquiries. Name, message, send — direct to your inbox.",
	},
	"ai-personalization": {
		icon: "psychology",
		label: "Smart personalisation",
		why: "Your site adapts content to each visitor. Personalisation lifts conversions by 15%.",
	},
	"seo-supremacy": {
		icon: "search",
		label: "SEO foundation",
		why: "Everything Google needs to rank you. Sitemap, keywords — done once, works forever.",
	},
	"discovery-ux": {
		icon: "lightbulb",
		label: "Planning session",
		why: "We map your goals before writing code. This separates a site that converts.",
	},
	"responsive-navbar": {
		icon: "menu",
		label: "Navigation bar",
		why: "Your logo and links always visible. Collapses to a clean icon on phones.",
	},
	"hero-section": {
		icon: "star",
		label: "Opening statement",
		why: "The first thing every visitor sees. You have 8 seconds — make them count.",
	},
	"fleet-showcase": {
		icon: "inventory",
		label: "Show what you sell",
		why: "Cards for each offering. Comparing before contacting improves conversion.",
	},
	"pricing-table": {
		icon: "payments",
		label: "Pricing — clear & upfront",
		why: "Hidden pricing is the #1 reason people leave. Show it and trust goes up.",
	},
	"services-reservation": {
		icon: "event_available",
		label: "How to book",
		why: "Understanding what to do next removes the biggest customer friction point.",
	},
	"service-highlights": {
		icon: "verified",
		label: "Why choose you",
		why: "Three cards making your strongest case. Kills hesitation instantly.",
	},
	"google-reviews": {
		icon: "rate_review",
		label: "Customer reviews",
		why: "70% read reviews before buying. Real words outperform anything you write.",
	},
	"faq-accordion": {
		icon: "quiz",
		label: "Questions answered",
		why: "Every question answered is a phone call you don't have to take. 24/7 support.",
	},
	"contact-form-alt": {
		icon: "contact_mail",
		label: "Multi-Channel Contact",
		why: "Email, WhatsApp or Call — give customers the choice to reach you their way.",
	},
	"location-maps": {
		icon: "location_on",
		label: "Where to find you",
		why: "Live map and address. Essential for businesses with a physical presence.",
	},
	"footer-complex": {
		icon: "web_asset",
		label: "Professional Footer",
		why: "Quick links, social media and legal. Completes the page professionally.",
	},
	"sticky-mobile-cta": {
		icon: "phone_in_talk",
		label: "Mobile booking bar",
		why: "Fixed buttons at bottom of phones. The highest-converting element on mobile.",
	},
	"whatsapp-strategy": {
		icon: "chat",
		label: "WhatsApp deep links",
		why: "Every button opens WhatsApp pre-written. One tap from interest to contact.",
	},
	"performance-optimization": {
		icon: "tune",
		label: "Google Speed Guarantee",
		why: "Targets 95–100 on Google quality checks. Google notices and rewards speed.",
	},
	"brand-system": {
		icon: "palette",
		label: "Brand system",
		why: "Colours, fonts and logo applied consistently. Inconsistency kills credibility.",
	},
	"trust-badges": {
		icon: "verified_user",
		label: "Trust strip",
		why: "A slim banner of reassurances — insurance, no fees. Kills doubt immediately.",
	},
};

// Combine block data with metadata
export const BLOCKS_WITH_META: Record<string, BlockWithMeta> = Object.entries(
	BLOCKS,
).reduce(
	(acc, [id, block]) => ({
		...acc,
		[id]: {
			...block,
			...BLOCK_META[id],
		},
	}),
	{} as Record<string, BlockWithMeta>,
);

// SVG Coordinates - Now dynamically generated from block IDs
export const SVG_COORDINATES: Record<string, number> = {
	"hero-section": 24,
	"trust-badges": 96,
	"service-highlights": 110,
	"fleet-showcase": 140,
	"pricing-table": 190,
	"services-reservation": 240,
	"portfolio-grid": 285,
	"google-reviews": 330,
	"faq-accordion": 370,
	"location-maps": 420,
	"contact-form": 480,
	"blog-engine": 520,
	"responsive-navbar": 0,
	"footer-complex": 540,
	"sticky-mobile-cta": 560,
};

// Always active blocks (included in baseline)
export const ALWAYS_ACTIVE_BLOCKS = new Set([
	"responsive-navbar",
	"footer-complex",
	"responsive-layout",
	"ssg-engine",
	"seo-supremacy",
	"brand-system",
]);

// Helper function to check if a block is always active
export function isAlwaysActive(blockId: string): boolean {
	return ALWAYS_ACTIVE_BLOCKS.has(blockId);
}
