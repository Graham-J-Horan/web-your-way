---
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import { BLOCKS } from '../store/cart';

// ── Section 1: Every website needs this (was: Foundation) ──────────────────
const coreBlocks = [
    BLOCKS['responsive-layout'],
    BLOCKS['ssg-engine'],
];

// ── Section 2: What your customers see (was: Digital Deliverables) ─────────
const visibleBlocks = [
    BLOCKS['responsive-navbar'],
    BLOCKS['hero-section'],
    BLOCKS['trust-badges'],
    BLOCKS['fleet-showcase'],
    BLOCKS['pricing-table'],
    BLOCKS['services-reservation'],
    BLOCKS['service-highlights'],
    BLOCKS['google-reviews'],
    BLOCKS['faq-accordion'],
    BLOCKS['contact-form-alt'],
    BLOCKS['location-maps'],
    BLOCKS['footer-complex'],
    BLOCKS['sticky-mobile-cta'],
];

// ── Section 3: Add more content (was: Content Modules) ────────────────────
const contentBlocks = [
    BLOCKS['blog-engine'],
    BLOCKS['portfolio-grid'],
    BLOCKS['contact-form'],
];

// ── Section 4: Power it up (was: Advanced Features) ───────────────────────
const powerBlocks = [
    BLOCKS['whatsapp-strategy'],
    BLOCKS['ai-personalization'],
    BLOCKS['performance-optimization'],
];

// ── Always included — shown as value, not line items ──────────────────────
const includedBlocks = [
    BLOCKS['discovery-ux'],
    BLOCKS['brand-system'],
    BLOCKS['seo-supremacy'],
];

// ── Human-readable content map ─────────────────────────────────────────────
// Replaces store name/description/price with outcome-focused copy
// and 2026 Spain/Europe market-rate pricing.
// The store still drives id/code — we override display only.
const blockContent: Record<string, {
    name: string;
    tagline: string;
    description: string;
    price: number | null;   // null = always free / included
    why: string;
    icon: string;
}> = {

    // ── Core ──────────────────────────────────────────────────────────────
    'responsive-layout': {
        name:        'Looks perfect on every screen',
        tagline:     'Mobile · Tablet · Desktop · TV',
        description: 'Your site adapts automatically to any device — phone, tablet, laptop, widescreen. No pinching, no broken layouts, no frustrated customers.',
        price:       120,
        why:         '68% of web traffic is now mobile. A site that breaks on phones loses bookings before a single word is read.',
        icon:        'devices',
    },
    'ssg-engine': {
        name:        'Blazing fast load speed',
        tagline:     'Loads in under a second',
        description: 'Your pages are pre-built and delivered from the nearest server to your visitor. No waiting, no spinning. The fastest way modern websites are made.',
        price:       150,
        why:         'Google ranks fast sites higher. 53% of visitors leave if a page takes more than 3 seconds to load.',
        icon:        'speed',
    },

    // ── Visible sections ──────────────────────────────────────────────────
    'responsive-navbar': {
        name:        'Navigation — always at the top',
        tagline:     'Your menu, logo and phone number — always visible',
        description: 'Your logo, page links and contact number stay in view as visitors scroll. Collapses to a clean icon on phones — one tap to open, one tap to call.',
        price:       88,
        why:         'If customers can\'t find their way around or reach you instantly, they leave for a competitor who makes it easier.',
        icon:        'menu',
    },
    'hero-section': {
        name:        'Your opening statement',
        tagline:     'The first thing every visitor sees',
        description: 'A bold headline, a strong image, and one clear action button. This section decides whether someone stays and reads — or leaves in the first 8 seconds.',
        price:       70,
        why:         'The most visited section on any website. Get it right and every section below it gets read. Get it wrong and nothing else matters.',
        icon:        'star',
    },
    'trust-badges': {
        name:        'A strip of quick reassurances',
        tagline:     'Kills doubt before it starts',
        description: 'A slim banner showing your key trust signals — "Insurance included", "No hidden fees", "Airport pick-up available". Appears right at the top so visitors see it immediately.',
        price:       18,
        why:         'Customers arrive sceptical. This answers their four biggest worries before they\'ve read a word of your content.',
        icon:        'verified',
    },
    'fleet-showcase': {
        name:        'Show what you\'re selling',
        tagline:     'Products, services or offerings — with photos',
        description: 'Cards showing each product or service with an image, key details and a price link. Works for vans, rooms, treatments, dishes — anything you sell or offer.',
        price:       70,
        why:         'Customers who can see and compare what they want before contacting you enquire with more confidence — and buy more often.',
        icon:        'grid_view',
    },
    'pricing-table': {
        name:        'Your prices — clear and upfront',
        tagline:     'No more "call for a quote" anxiety',
        description: 'Two or three options side by side so customers can choose without having to ask. Your most popular option is highlighted to guide the decision naturally.',
        price:       88,
        why:         'Hidden pricing is the number one reason people leave a site without enquiring. Show it and your conversion rate goes up.',
        icon:        'payments',
    },
    'services-reservation': {
        name:        'How to book or buy from you',
        tagline:     'Removes the "but how do I actually do it?" moment',
        description: 'A photo alongside a simple 3-step process showing exactly how customers get started — Book · Confirm · Enjoy. Reassuring and easy to follow.',
        price:       35,
        why:         'Customers who understand what to do next are far more likely to do it. This section turns browsers into buyers.',
        icon:        'event_available',
    },
    'service-highlights': {
        name:        'Three reasons to choose you',
        tagline:     'Your edge — stated simply',
        description: 'Three short cards making your strongest case — no hidden fees, 24/7 support, 30 years of experience. Whatever makes you different, this is where it lives.',
        price:       35,
        why:         'Placed where hesitant customers pause and compare you to a competitor. Gives them the confidence to act.',
        icon:        'emoji_events',
    },
    'google-reviews': {
        name:        'What your customers say about you',
        tagline:     'Real words from real people',
        description: 'Genuine reviews displayed on your site, linked to your Google profile so anyone can verify them. Star rating, name, date, and their exact words.',
        price:       70,
        why:         'Over 70% of customers read reviews before making a purchase. Words from strangers outperform anything you write about yourself.',
        icon:        'reviews',
    },
    'faq-accordion': {
        name:        'Answers to the questions you always get asked',
        tagline:     'Works for you 24 hours a day, 7 days a week',
        description: 'An expandable list of your most common questions — answered once, available always. Every question answered here is a phone call or WhatsApp message you don\'t have to handle.',
        price:       70,
        why:         'Saves you time. Builds confidence in nervous customers. Reduces the same five messages you answer every week.',
        icon:        'quiz',
    },
    'contact-form-alt': {
        name:        'Contact form with WhatsApp and call buttons',
        tagline:     'Never miss an enquiry — whatever channel they prefer',
        description: 'A short email form with WhatsApp and Call buttons directly below it. Catches every type of customer — those who email, those who message, and those who just want to call.',
        price:       35,
        why:         'Different customers prefer different channels. This gives them all three in one tidy section.',
        icon:        'contact_mail',
    },
    'location-maps': {
        name:        'Where to find you',
        tagline:     'Live map, address and contact details in one place',
        description: 'A live Google Map showing your address, alongside your phone number, email and any pickup or drop-off locations. Essential for any business with a physical presence.',
        price:       35,
        why:         'Customers arriving from elsewhere need this to find you. Without it, you\'re sending them to Google anyway — so keep them on your site.',
        icon:        'location_on',
    },
    'footer-complex': {
        name:        'Footer — links, legal and contact',
        tagline:     'The last thing on your page — make it count',
        description: 'Quick links, your social media, a Google reviews link and any legal notices. Customers who scroll all the way down are the most interested — give them every way to reach you.',
        price:       35,
        why:         'Completes the page professionally. Highly engaged visitors — often ready to buy — land here last.',
        icon:        'web_asset',
    },
    'sticky-mobile-cta': {
        name:        'Booking bar pinned to the bottom of phones',
        tagline:     'One tap to call or message — always visible on mobile',
        description: 'On phones only, a bar stays fixed at the bottom of the screen — two buttons: Call and WhatsApp. Your customer never has to scroll to find a way to reach you. Invisible on desktop.',
        price:       53,
        why:         'The highest-converting single element on any mobile site. Most of your visitors are on phones and most of them decide within seconds.',
        icon:        'phone_in_talk',
    },

    // ── Content additions ──────────────────────────────────────────────────
    'blog-engine': {
        name:        'A blog — write and publish your own articles',
        tagline:     'Your voice, your expertise, your Google ranking',
        description: 'A full system for writing and publishing posts, news, updates or guides. Easy to manage yourself after setup — no developer needed to add a new article.',
        price:       280,
        why:         'Regular content brings customers back and compounds your Google ranking over time. Every article is a permanent asset that keeps attracting visitors.',
        icon:        'edit_note',
    },
    'portfolio-grid': {
        name:        'A gallery of your work or projects',
        tagline:     'Show, don\'t just tell',
        description: 'A clean grid of photos, projects or case studies — filterable by category. Ideal for photographers, designers, builders, decorators — anyone whose work speaks for itself.',
        price:       220,
        why:         'Seeing examples is more persuasive than reading descriptions. Customers who see your work buy with more confidence.',
        icon:        'photo_library',
    },
    'contact-form': {
        name:        'Simple contact form',
        tagline:     'The minimum — name, email, message',
        description: 'A clean, basic form that sends directly to your inbox. Just the essentials — no WhatsApp or call buttons. Good as a secondary form on an inner page.',
        price:       35,
        why:         'Sometimes simple is right. If you already have WhatsApp buttons throughout the page, this covers email-only visitors cleanly.',
        icon:        'mail',
    },

    // ── Power-ups ─────────────────────────────────────────────────────────
    'whatsapp-strategy': {
        name:        'Every button opens WhatsApp with the message pre-written',
        tagline:     'Your customer just taps send',
        description: 'Every booking button on your site opens WhatsApp with a message already filled in — the product name, the enquiry type, everything relevant. Zero friction between interest and contact.',
        price:       35,
        why:         'The most direct path from website visitor to paying customer. Removing even one step from the booking process measurably increases conversion.',
        icon:        'chat',
    },
    'ai-personalization': {
        name:        'Smart content that adapts to each visitor',
        tagline:     'Different message for different visitors — automatically',
        description: 'Your site learns where visitors are coming from and shows them the most relevant content. Someone arriving from Instagram sees something different to someone arriving from a Google search.',
        price:       450,
        why:         'Premium conversion tool used by large travel and e-commerce sites. Now available for independent businesses that want a serious edge.',
        icon:        'psychology',
    },
    'performance-optimization': {
        name:        'Speed, accessibility and Google quality scores',
        tagline:     'Targets 95–100 on all four Google checks',
        description: 'A full audit and optimisation pass across Google Lighthouse — load speed, accessibility for all users, security best practices, and SEO readiness. The scores Google uses to rank your site.',
        price:       35,
        why:         'A 95+ score puts you ahead of the vast majority of local business websites. Google notices and rewards it.',
        icon:        'tune',
    },

    // ── Always included ────────────────────────────────────────────────────
    'discovery-ux': {
        name:        'Planning session — mapping what you actually need',
        tagline:     'We listen before we build',
        description: 'A conversation about your business, your customers and your goals before a line of code is written. Everything that follows is built on that foundation.',
        price:       null,
        why:         'Skipping this is why most websites miss the mark. It\'s the difference between a site that looks good and one that actually works.',
        icon:        'lightbulb',
    },
    'brand-system': {
        name:        'Your colours, fonts and logo — applied consistently',
        tagline:     'Looks like you, everywhere, every time',
        description: 'Your visual identity is built into the foundations of the site. Every page, every button, every heading looks deliberate and cohesive — not assembled from templates.',
        price:       null,
        why:         'Inconsistent branding makes businesses look unfinished. This makes yours look like a professional operation.',
        icon:        'palette',
    },
    'seo-supremacy': {
        name:        'Get found on Google — SEO foundation',
        tagline:     'Free with every build — valued at €200 separately',
        description: 'Everything Google needs to find and rank your site: structured business data, optimised page titles, sitemap, Google Search Console setup guide and local keyword strategy for your area.',
        price:       null,
        why:         'SEO stands for Search Engine Optimisation — it\'s how people searching for what you offer actually find you. Without it, your site is invisible to new customers.',
        icon:        'search',
    },
};
---

<Layout>
    <div class="fixed inset-0 grainy-overlay z-50 pointer-events-none"></div>
    <Header showDropdown={false} />

    <main class="pt-32 pb-48 px-4 md:px-12 max-w-7xl mx-auto">

        <!-- ── Page header ──────────────────────────────────────────────── -->
        <section class="mb-20">
            <div class="relative inline-block">
                <h1 class="text-6xl md:text-8xl font-black font-headline uppercase leading-[0.85] tracking-tighter relative z-10 text-on-background">
                    Build Your<br/>Website
                </h1>
                <div class="absolute -right-4 -bottom-2 bg-secondary-container w-full h-1/2 -z-0"></div>
            </div>
            <p class="mt-8 text-xl font-bold max-w-2xl opacity-80 leading-relaxed text-on-background">
                Tick what you need. Leave out what you don't. Your price updates as you go — no surprises, no hidden fees, no guesswork.
            </p>
        </section>

        <form class="space-y-24">

            <!-- ── Sticky section nav ───────────────────────────────────── -->
            <nav class="sticky top-24 z-40 bg-surface/80 backdrop-blur-md border-b-[3px] border-on-background py-4 hidden md:block">
                <div class="flex justify-between items-center px-4">
                    <div class="flex gap-8 flex-wrap">
                        <a href="#section-01" class="font-headline font-black text-xs uppercase tracking-widest hover:text-primary-container transition-colors text-on-background">01. Every site needs this</a>
                        <a href="#section-02" class="font-headline font-black text-xs uppercase tracking-widest hover:text-primary-container transition-colors text-on-background">02. What customers see</a>
                        <a href="#section-03" class="font-headline font-black text-xs uppercase tracking-widest hover:text-primary-container transition-colors text-on-background">03. More content</a>
                        <a href="#section-04" class="font-headline font-black text-xs uppercase tracking-widest hover:text-primary-container transition-colors text-on-background">04. Power it up</a>
                        <a href="#section-included" class="font-headline font-black text-xs uppercase tracking-widest hover:text-primary-container transition-colors text-on-background">Always included</a>
                    </div>
                </div>
            </nav>


            <!-- ════════════════════════════════════════════════════════════
                 SECTION 01 — Every website needs this
                 (was: Foundation)
            ════════════════════════════════════════════════════════════ -->
            <section id="section-01" class="scroll-mt-40">
                <div class="flex items-center gap-4 mb-4">
                    <div class="w-12 h-12 bg-on-background text-white flex items-center justify-center font-black text-2xl shrink-0">01</div>
                    <h2 class="text-4xl font-black font-headline uppercase tracking-tighter text-on-background">Every website needs this</h2>
                    <div class="flex-grow h-[3px] bg-on-background hidden md:block"></div>
                </div>
                <p class="mb-10 text-sm font-bold opacity-60 uppercase tracking-tight text-on-background pl-16">
                    The invisible structure that holds everything else together. Required on every build — without these, nothing above works properly.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {coreBlocks.map((block) => {
                        const c = blockContent[block.id];
                        if (!c) return null;
                        return (
                            <label class="group relative flex items-start gap-6 p-8 bg-surface border-[3px] border-on-background has-[:checked]:border-primary-container hard-shadow-sm hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(28,27,27,1)] transition-all cursor-pointer">
                                <input class="hidden block-checkbox" type="checkbox" data-id={block.id} />
                                <!-- Checkbox box -->
                                <div class="w-10 h-10 border-[3px] border-on-background flex-shrink-0 flex items-center justify-center group-has-[:checked]:bg-secondary-container transition-colors duration-75 mt-1">
                                    <span class="material-symbols-outlined text-on-background hidden group-has-[:checked]:block font-black" style="font-variation-settings: 'wght' 900;">check</span>
                                </div>
                                <div class="flex-grow">
                                    <!-- Name + price -->
                                    <div class="flex justify-between items-start gap-4 mb-1">
                                        <h3 class="text-xl font-black font-headline uppercase tracking-tighter text-on-background leading-tight">{c.name}</h3>
                                        <span class="font-mono text-xl font-bold tracking-tight text-on-background shrink-0">€{c.price}</span>
                                    </div>
                                    <!-- Tagline -->
                                    <p class="text-[11px] font-black uppercase tracking-widest opacity-40 text-on-background mb-3">{c.tagline}</p>
                                    <!-- Description -->
                                    <p class="text-sm font-medium opacity-70 leading-relaxed text-on-background mb-4">{c.description}</p>
                                    <!-- Why it matters -->
                                    <div class="border-l-[3px] border-primary-container pl-3">
                                        <p class="text-xs font-bold uppercase opacity-60 text-on-background leading-relaxed">{c.why}</p>
                                    </div>
                                </div>
                            </label>
                        );
                    })}
                </div>
            </section>


            <!-- ════════════════════════════════════════════════════════════
                 SECTION 02 — What your customers see
                 (was: Digital Deliverables)
            ════════════════════════════════════════════════════════════ -->
            <section id="section-02" class="scroll-mt-40">
                <div class="flex items-center gap-4 mb-4">
                    <div class="w-12 h-12 bg-on-background text-white flex items-center justify-center font-black text-2xl shrink-0">02</div>
                    <h2 class="text-4xl font-black font-headline uppercase tracking-tighter text-on-background">What your customers see</h2>
                    <div class="flex-grow h-[3px] bg-on-background hidden md:block"></div>
                </div>
                <p class="mb-10 text-sm font-bold opacity-60 uppercase tracking-tight text-on-background pl-16">
                    The visible sections of your page. Pick only what your business actually needs — you don't have to use all of them.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleBlocks.map((block) => {
                        const c = blockContent[block.id];
                        if (!c) return null;
                        return (
                            <label class="group relative flex flex-col p-8 bg-surface border-[3px] border-on-background has-[:checked]:border-primary-container hard-shadow-sm hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(28,27,27,1)] transition-all cursor-pointer">
                                <input class="hidden block-checkbox" type="checkbox" data-id={block.id} />
                                <!-- Top row: icon checkbox + price -->
                                <div class="flex justify-between items-start mb-6">
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 border-[3px] border-on-background flex items-center justify-center group-has-[:checked]:bg-secondary-container transition-colors duration-75 shrink-0">
                                            <span class="material-symbols-outlined text-on-background hidden group-has-[:checked]:block font-black" style="font-variation-settings: 'wght' 900;">check</span>
                                        </div>
                                        <span class="material-symbols-outlined text-2xl opacity-20 group-has-[:checked]:opacity-80 transition-opacity text-on-background">{c.icon}</span>
                                    </div>
                                    <span class="font-mono text-lg font-bold text-on-background">€{c.price}</span>
                                </div>
                                <!-- Name -->
                                <h3 class="text-lg font-black font-headline uppercase tracking-tighter text-on-background leading-tight mb-1">{c.name}</h3>
                                <!-- Tagline -->
                                <p class="text-[10px] font-black uppercase tracking-widest opacity-40 text-on-background mb-4">{c.tagline}</p>
                                <!-- Description -->
                                <p class="text-xs font-medium opacity-70 leading-relaxed text-on-background mb-5 flex-grow">{c.description}</p>
                                <!-- Why it matters -->
                                <div class="border-t-[2px] border-on-background/10 pt-4">
                                    <p class="text-[11px] font-bold uppercase opacity-50 text-on-background leading-relaxed">{c.why}</p>
                                </div>
                            </label>
                        );
                    })}
                </div>
            </section>


            <!-- ════════════════════════════════════════════════════════════
                 SECTION 03 — Add more content to your site
                 (was: Content Modules)
            ════════════════════════════════════════════════════════════ -->
            <section id="section-03" class="scroll-mt-40">
                <div class="flex items-center gap-4 mb-4">
                    <div class="w-12 h-12 bg-on-background text-white flex items-center justify-center font-black text-2xl shrink-0">03</div>
                    <h2 class="text-4xl font-black font-headline uppercase tracking-tighter text-on-background">Add more content</h2>
                    <div class="flex-grow h-[3px] bg-on-background hidden md:block"></div>
                </div>
                <p class="mb-10 text-sm font-bold opacity-60 uppercase tracking-tight text-on-background pl-16">
                    Extra pages and features when you need to publish more than a single landing page.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {contentBlocks.map((block) => {
                        const c = blockContent[block.id];
                        if (!c) return null;
                        return (
                            <label class="group relative flex flex-col p-8 bg-surface border-[3px] border-on-background has-[:checked]:border-primary-container hard-shadow-sm hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(28,27,27,1)] transition-all cursor-pointer">
                                <input class="hidden block-checkbox" type="checkbox" data-id={block.id} />
                                <div class="flex justify-between items-start mb-6">
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 border-[3px] border-on-background flex items-center justify-center group-has-[:checked]:bg-secondary-container transition-colors duration-75 shrink-0">
                                            <span class="material-symbols-outlined text-on-background hidden group-has-[:checked]:block font-black" style="font-variation-settings: 'wght' 900;">check</span>
                                        </div>
                                        <span class="material-symbols-outlined text-2xl opacity-20 group-has-[:checked]:opacity-80 transition-opacity text-on-background">{c.icon}</span>
                                    </div>
                                    <span class="font-mono text-lg font-bold bg-primary-container text-white px-3 py-1">€{c.price}</span>
                                </div>
                                <h3 class="text-lg font-black font-headline uppercase tracking-tighter text-on-background leading-tight mb-1">{c.name}</h3>
                                <p class="text-[10px] font-black uppercase tracking-widest opacity-40 text-on-background mb-4">{c.tagline}</p>
                                <p class="text-xs font-medium opacity-70 leading-relaxed text-on-background mb-5 flex-grow">{c.description}</p>
                                <div class="border-t-[2px] border-on-background/10 pt-4">
                                    <p class="text-[11px] font-bold uppercase opacity-50 text-on-background leading-relaxed">{c.why}</p>
                                </div>
                            </label>
                        );
                    })}
                </div>
            </section>


            <!-- ════════════════════════════════════════════════════════════
                 SECTION 04 — Power it up
                 (was: Advanced Features)
            ════════════════════════════════════════════════════════════ -->
            <section id="section-04" class="scroll-mt-40">
                <div class="flex items-center gap-4 mb-4">
                    <div class="w-12 h-12 bg-on-background text-white flex items-center justify-center font-black text-2xl shrink-0">04</div>
                    <h2 class="text-4xl font-black font-headline uppercase tracking-tighter text-on-background">Power it up</h2>
                    <div class="flex-grow h-[3px] bg-on-background hidden md:block"></div>
                </div>
                <p class="mb-10 text-sm font-bold opacity-60 uppercase tracking-tight text-on-background pl-16">
                    Serious tools for businesses ready to go further. Each one compounds the value of everything else on your site.
                </p>
                <div class="space-y-4">
                    {powerBlocks.map((block) => {
                        const c = blockContent[block.id];
                        if (!c) return null;
                        return (
                            <label class="group relative flex items-start gap-6 md:gap-10 p-6 md:p-8 bg-surface-container border-[3px] border-on-background has-[:checked]:border-primary-container hard-shadow-sm hover:bg-secondary-fixed transition-all cursor-pointer">
                                <input class="hidden block-checkbox" type="checkbox" data-id={block.id} />
                                <!-- Checkbox -->
                                <div class="w-12 h-12 border-[3px] border-on-background flex-shrink-0 flex items-center justify-center bg-surface group-has-[:checked]:bg-secondary-container transition-colors duration-75 mt-1">
                                    <span class="material-symbols-outlined text-on-background hidden group-has-[:checked]:block font-black" style="font-variation-settings: 'wght' 900;">check</span>
                                </div>
                                <!-- Icon + text -->
                                <div class="flex-grow min-w-0">
                                    <div class="flex items-start gap-4 mb-2">
                                        <span class="material-symbols-outlined text-3xl opacity-20 group-has-[:checked]:opacity-70 transition-opacity text-on-background shrink-0">{c.icon}</span>
                                        <div>
                                            <h3 class="text-xl md:text-2xl font-black font-headline uppercase tracking-tighter text-on-background leading-tight">{c.name}</h3>
                                            <p class="text-[10px] font-black uppercase tracking-widest opacity-40 text-on-background mt-1">{c.tagline}</p>
                                        </div>
                                    </div>
                                    <p class="text-sm font-medium opacity-70 leading-relaxed text-on-background mb-3">{c.description}</p>
                                    <div class="border-l-[3px] border-primary-container pl-3">
                                        <p class="text-xs font-bold uppercase opacity-60 text-on-background leading-relaxed">{c.why}</p>
                                    </div>
                                </div>
                                <!-- Price -->
                                <div class="font-mono text-2xl font-black tracking-tighter border-l-[3px] border-on-background pl-6 md:pl-8 ml-auto shrink-0 text-on-background self-center">
                                    €{c.price}
                                </div>
                            </label>
                        );
                    })}
                </div>
            </section>


            <!-- ════════════════════════════════════════════════════════════
                 ALWAYS INCLUDED — shown as value, not clickable line items
            ════════════════════════════════════════════════════════════ -->
            <section id="section-included" class="scroll-mt-40">
                <div class="flex items-center gap-4 mb-4">
                    <div class="w-12 h-12 bg-secondary-container text-on-background flex items-center justify-center shrink-0">
                        <span class="material-symbols-outlined font-black" style="font-variation-settings: 'wght' 900;">check_circle</span>
                    </div>
                    <h2 class="text-4xl font-black font-headline uppercase tracking-tighter text-on-background">Always included — at no extra charge</h2>
                    <div class="flex-grow h-[3px] bg-on-background hidden md:block"></div>
                </div>
                <p class="mb-10 text-sm font-bold opacity-60 uppercase tracking-tight text-on-background pl-16">
                    Every build includes these three things — not as optional extras, but as the professional baseline. You don't need to tick them. They're already in.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {includedBlocks.map((block) => {
                        const c = blockContent[block.id];
                        if (!c) return null;
                        return (
                            <div class="relative flex flex-col p-8 bg-on-background text-white border-[3px] border-on-background hard-shadow-sm overflow-hidden">
                                <div class="grainy-overlay absolute inset-0 opacity-5 pointer-events-none"></div>
                                <div class="relative z-10 flex flex-col h-full">
                                    <!-- Icon + free badge -->
                                    <div class="flex justify-between items-start mb-6">
                                        <span class="material-symbols-outlined text-3xl text-secondary-container">{c.icon}</span>
                                        <span class="bg-secondary-container text-on-background text-[10px] font-black uppercase tracking-widest px-3 py-1">
                                            Free
                                        </span>
                                    </div>
                                    <!-- Name -->
                                    <h3 class="text-lg font-black font-headline uppercase tracking-tighter leading-tight mb-1">{c.name}</h3>
                                    <!-- Tagline -->
                                    <p class="text-[10px] font-black uppercase tracking-widest opacity-40 mb-4">{c.tagline}</p>
                                    <!-- Description -->
                                    <p class="text-sm font-medium opacity-70 leading-relaxed mb-5 flex-grow">{c.description}</p>
                                    <!-- Why -->
                                    <div class="border-t border-white/10 pt-4">
                                        <p class="text-[11px] font-bold uppercase opacity-40 leading-relaxed">{c.why}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>


            <!-- ════════════════════════════════════════════════════════════
                 FINAL CTA
            ════════════════════════════════════════════════════════════ -->
            <section class="mt-32 p-12 bg-on-background text-white flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div class="grainy-overlay absolute inset-0 opacity-10"></div>
                <h2 class="text-5xl md:text-7xl font-black font-headline uppercase tracking-tighter mb-6 relative z-10">
                    Happy with your selections?
                </h2>
                <p class="text-xl font-bold max-w-xl opacity-60 mb-4 relative z-10">
                    Review your choices on the next screen. You'll get a free, no-obligation quote — yours to keep with zero pressure to proceed.
                </p>
                <p class="text-sm font-bold opacity-40 uppercase mb-12 relative z-10">
                    You can always come back and change your selection.
                </p>
                <div class="relative z-10 w-full flex flex-col items-center gap-6">
                    <div class="font-headline font-black text-4xl uppercase tracking-tighter flex items-baseline gap-4">
                        <span class="opacity-60 text-xl">Your estimate so far:</span>
                        <span id="total-price-display" class="text-secondary-container">€0</span>
                    </div>
                    <a href="/summary-and-quote" class="group relative w-full max-w-2xl py-8 bg-secondary-container text-on-background text-3xl md:text-4xl font-black font-headline uppercase tracking-widest border-[4px] border-white shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] active:translate-x-[12px] active:translate-y-[12px] active:shadow-none transition-all inline-block">
                        See my full quote
                    </a>
                    <p class="text-xs opacity-30 uppercase tracking-widest">
                        Free · No obligation · No credit card
                    </p>
                </div>
            </section>

        </form>
    </main>

    <Footer />

    <!-- ── Sticky real-time total bar ──────────────────────────────────── -->
    <div class="fixed bottom-0 left-0 right-0 bg-on-background text-white border-t-[4px] border-white z-[100]">
        <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
            <div class="flex items-center gap-8">
                <div class="hidden md:block">
                    <p class="text-[10px] font-black uppercase tracking-[0.2em] opacity-50 mb-1">Your running total</p>
                    <div class="flex items-baseline gap-2">
                        <span id="sticky-total-display" class="text-3xl font-headline font-black text-secondary-container">€0</span>
                        <span class="text-xs font-bold opacity-40 uppercase">estimated</span>
                    </div>
                </div>
                <div class="hidden md:block h-10 w-[2px] bg-white/10"></div>
                <div>
                    <p class="text-[10px] font-black uppercase tracking-[0.2em] opacity-50 mb-1">Items ticked</p>
                    <p id="sticky-count-display" class="font-headline font-bold text-sm uppercase tracking-tight">Nothing selected yet</p>
                </div>
            </div>
            <a href="/summary-and-quote" class="bg-secondary-container text-on-background px-8 py-3 font-headline font-black uppercase text-sm border-[3px] border-white hard-shadow-sm hover:-translate-y-1 hover:-translate-x-1 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all whitespace-nowrap">
                See my quote
            </a>
        </div>
    </div>

</Layout>

<script>
    import { selectedBlockIds, toggleBlock, totalPrice } from '../store/cart';

    // ── Restore any previously selected blocks ────────────────────────────
    const checkboxes = document.querySelectorAll('.block-checkbox') as NodeListOf<HTMLInputElement>;
    const currentSelected = selectedBlockIds.get();

    checkboxes.forEach(checkbox => {
        const id = checkbox.dataset.id;
        if (id && currentSelected.includes(id)) {
            checkbox.checked = true;
        }
        checkbox.addEventListener('change', () => {
            if (id) toggleBlock(id);
        });
    });

    // ── Live price displays ───────────────────────────────────────────────
    const totalPriceDisplay  = document.getElementById('total-price-display');
    const stickyTotalDisplay = document.getElementById('sticky-total-display');
    const stickyCountDisplay = document.getElementById('sticky-count-display');

    totalPrice.subscribe((price) => {
        if (totalPriceDisplay)  totalPriceDisplay.textContent  = `€${price.toLocaleString()}`;
        if (stickyTotalDisplay) stickyTotalDisplay.textContent = `€${price.toLocaleString()}`;
    });

    selectedBlockIds.subscribe((ids) => {
        if (stickyCountDisplay) {
            stickyCountDisplay.textContent = ids.length === 0
                ? 'Nothing selected yet'
                : `${ids.length} item${ids.length === 1 ? '' : 's'} selected`;
        }
    });
</script>