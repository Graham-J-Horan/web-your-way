import { persistentAtom } from "@nanostores/persistent";
import { computed } from "nanostores";

export interface Block {
	id: string;
	code: string;
	name: string;
	price: number;
	description: string;
}

export const BLOCKS: Record<string, Block> = {
	"responsive-layout": {
		id: "responsive-layout",
		code: "ARC-001",
		name: "Mobile & Tablet Ready",
		price: 120,
		description:
			"Looks perfect on every screen — phone, tablet, or laptop. No broken layouts, just a seamless experience for every customer.",
	},
	"ssg-engine": {
		id: "ssg-engine",
		code: "ARC-002",
		name: "Super-Fast Load Speeds",
		price: 150,
		description:
			"Pages load in the blink of an eye. We use elite technology to ensure your customers never wait for a spinning wheel.",
	},
	"blog-engine": {
		id: "blog-engine",
		code: "MOD-101",
		name: "Easy-Post News & Blog",
		price: 280,
		description:
			"Write and publish articles, updates or guides. Easy to manage yourself after setup — no developer needed.",
	},
	"portfolio-grid": {
		id: "portfolio-grid",
		code: "MOD-102",
		name: "Gallery of Work",
		price: 220,
		description:
			"A clean grid of photos or projects. Filterable by category. For anyone whose work speaks for itself.",
	},
	"contact-form": {
		id: "contact-form",
		code: "MOD-103",
		name: "Simple Contact Form",
		price: 35,
		description:
			"A clean name, email and message form that sends directly to your inbox.",
	},
	"ai-personalization": {
		id: "ai-personalization",
		code: "FEA-501",
		name: "Adaptive Experience",
		price: 450,
		description:
			"Your site automatically changes its message based on how a visitor found you. A high-end tool to turn more visitors into customers.",
	},
	"seo-supremacy": {
		id: "seo-supremacy",
		code: "FEA-502",
		name: "Google Search Foundation",
		price: 0,
		description:
			"Everything Google needs to find and rank your site. Included free with every build.",
	},
	"discovery-ux": {
		id: "discovery-ux",
		code: "DEL-901",
		name: "Blueprint & Strategy",
		price: 105,
		description:
			"We map out exactly what your customers need to see before we build. No guesswork, just a clear plan for success.",
	},
	"brand-system": {
		id: "brand-system",
		code: "DEL-902",
		name: "Visual Identity",
		price: 70,
		description:
			"Your colours, fonts and logo applied consistently everywhere. Included in every build.",
	},
	"responsive-navbar": {
		id: "responsive-navbar",
		code: "DEL-903",
		name: "Navigation Bar",
		price: 88,
		description:
			"Your logo, links and phone number always visible as visitors scroll. Collapses to a clean icon on phones.",
	},
	"hero-section": {
		id: "hero-section",
		code: "DEL-904",
		name: "Your Opening Statement",
		price: 70,
		description:
			"The first thing every visitor sees. Headline, image, one clear action button. You have 8 seconds.",
	},
	"trust-badges": {
		id: "trust-badges",
		code: "DEL-905",
		name: "Trust Strip",
		price: 18,
		description:
			"A slim banner of reassurances — insurance, no hidden fees, free cancellation. Kills doubt immediately.",
	},
	"fleet-showcase": {
		id: "fleet-showcase",
		code: "DEL-906",
		name: "Product & Service Cards",
		price: 70,
		description:
			"Cards showing each product or service with photo, details and price link.",
	},
	"pricing-table": {
		id: "pricing-table",
		code: "DEL-907",
		name: "Pricing — Clear & Upfront",
		price: 88,
		description:
			"Two or three options side by side. Most popular highlighted. Each button opens with a pre-written enquiry.",
	},
	"services-reservation": {
		id: "services-reservation",
		code: "DEL-908",
		name: "How to Book",
		price: 35,
		description:
			"A photo alongside a simple 3-step process showing customers exactly how to get started.",
	},
	"service-highlights": {
		id: "service-highlights",
		code: "DEL-909",
		name: "Three Reasons to Choose You",
		price: 35,
		description:
			"Three short cards stating your strongest case. Placed where hesitant customers pause.",
	},
	"google-reviews": {
		id: "google-reviews",
		code: "DEL-910",
		name: "Customer Reviews",
		price: 70,
		description:
			"Real reviews linked to your Google profile. Words from strangers outperform anything you write yourself.",
	},
	"faq-accordion": {
		id: "faq-accordion",
		code: "DEL-911",
		name: "Common Questions Answered",
		price: 70,
		description:
			"Every question answered here is a phone call you don't have to take. Works 24 hours a day.",
	},
	"contact-form-alt": {
		id: "contact-form-alt",
		code: "DEL-912",
		name: "Multi-Channel Contact",
		price: 35,
		description:
			"Email form with WhatsApp and Call buttons directly below. Catches every type of customer.",
	},
	"location-maps": {
		id: "location-maps",
		code: "DEL-913",
		name: "Where to Find You",
		price: 35,
		description:
			"Live Google Map with your address, phone and pickup locations. Essential for any physical business.",
	},
	"footer-complex": {
		id: "footer-complex",
		code: "DEL-914",
		name: "Footer",
		price: 35,
		description:
			"Quick links, social media, your Google reviews link, legal notices. Completes the page professionally.",
	},
	"sticky-mobile-cta": {
		id: "sticky-mobile-cta",
		code: "DEL-915",
		name: "Mobile Booking Bar",
		price: 53,
		description:
			"Fixed to the bottom of phones only: Call and WhatsApp. The highest-converting single element on mobile.",
	},
	"whatsapp-strategy": {
		id: "whatsapp-strategy",
		code: "DEL-916",
		name: "WhatsApp Deep Links",
		price: 35,
		description:
			"Every button opens WhatsApp with the right message pre-written. One tap from interest to contact.",
	},
	"performance-optimization": {
		id: "performance-optimization",
		code: "DEL-917",
		name: "Google Speed Guarantee",
		price: 35,
		description:
			"We optimize every line of code to hit 95-100% on Google’s official quality checks. Professional-grade performance, guaranteed.",
	},
};

export const ALWAYS_INCLUDED_IDS = [
	"responsive-layout",
	"ssg-engine",
	"responsive-navbar",
	"footer-complex",
	"seo-supremacy",
	"brand-system",
	"discovery-ux",
];

// ── Cart state ─────────────────────────────────────────────────────────────
export const selectedBlockIds = persistentAtom<string[]>(
	"selected-blocks",
	[],
	{ encode: JSON.stringify, decode: JSON.parse },
);

export type PaymentModel = "ownership" | "residency";
export type SubscriptionTier = "basic" | "premium" | "gold";

export const paymentModel = persistentAtom<PaymentModel>(
	"payment-model",
	"ownership",
);
export const subscriptionTier = persistentAtom<SubscriptionTier>(
	"subscription-tier",
	"basic",
);

// ── Style choices ──────────────────────────────────────────────────────────
export interface StyleChoices {
	palette: string; // e.g. 'classic-corporate'
	fontPair: string; // e.g. 'modern-clean'
	brandWords: string; // free text — up to three words from the client
}

export const styleChoices = persistentAtom<StyleChoices>(
	"style-choices",
	{ palette: "", fontPair: "", brandWords: "" },
	{ encode: JSON.stringify, decode: JSON.parse },
);

// ── Profile data from /start ───────────────────────────────────────────────
export interface ProfileData {
	businessType: string;
	primaryGoal: string;
	assets: string[];
	timeline: string;
}

export const profileData = persistentAtom<ProfileData>(
	"profile-data",
	{ businessType: "", primaryGoal: "", assets: [], timeline: "" },
	{ encode: JSON.stringify, decode: JSON.parse },
);

// ── Computed ───────────────────────────────────────────────────────────────
export const totalPrice = computed(selectedBlockIds, (ids) =>
	ids.reduce((sum, id) => sum + (BLOCKS[id]?.price || 0), 0),
);

export const setupFee = computed(totalPrice, (total) =>
	Math.floor(total * 0.25),
);

export const selectedBlocks = computed(selectedBlockIds, (ids) =>
	ids.map((id) => BLOCKS[id]).filter(Boolean),
);

// ── Helpers ────────────────────────────────────────────────────────────────
export function toggleBlock(id: string) {
	const current = selectedBlockIds.get();
	selectedBlockIds.set(
		current.includes(id) ? current.filter((i) => i !== id) : [...current, id],
	);
}
