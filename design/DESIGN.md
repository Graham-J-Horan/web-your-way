# Design System Specification

## 1. Overview & Creative North Star: "The Digital Architect"
The Creative North Star for this design system is **"The Digital Architect."** It rejects the soft, apologetic "tech-minimalism" of the last decade in favor of a confident, structural, and unapologetically bold aesthetic. By merging the raw honesty of Neo-Brutalism with the refined precision of a High-End Creative Agency, we create a platform that feels like a premium construction site for the web.

The system breaks the "template" look through **intentional asymmetry** and **structural weight**. We treat the browser window as a blueprint: elements are anchored by heavy strokes, overlapping geometric planes, and a high-contrast hierarchy that demands attention. This is not just a UI; it is a statement of technical mastery and creative transparency.

---

## 2. Colors
Our palette is built on extreme contrast to mirror the clarity of code and the vibrance of modern digital art.

*   **Foundation:** `on_background` (#1A1A1A) and `surface_container_lowest` (#FFFFFF) serve as the structural steel and white-space canvas.
*   **Primary Accent (The Pulse):** `primary_container` (#8A2BE2 - Electric Purple). Use this for high-impact brand moments and primary actions.
*   **Secondary Accent (The Warning):** `secondary_container` (#C1F100 - Toxic Lime). Use this for utility, success states, and breaking the visual rhythm.

### The "No-Line" Rule (Subverted)
In this specific system, we defy the standard "soft" UI. While traditional high-end design avoids lines, **The Digital Architect** uses them as a signature. However, we prohibit the "1px grey divider." Boundaries must be defined by **3px solid `on_background` strokes** or significant shifts between `surface` (#FCF9F8) and `surface_container_high` (#EAE7E7).

### Surface Hierarchy & Nesting
Instead of soft shadows, use the surface tiers to create a "top-down" blueprint view:
*   **Level 0:** `surface` (#FCF9F8) - The drafting table.
*   **Level 1:** `surface_container` (#F0EDED) - Secondary content blocks.
*   **Level 2:** `surface_container_highest` (#E5E2E1) - High-priority interactive modules.

### The "Glass & Grain" Rule
To elevate Neo-Brutalism into the "High-End" space, introduce **Grainy Textures** (5-10% opacity noise) over `primary` and `secondary` color blocks. For floating navigation or modals, use Glassmorphism: `surface` colors at 80% opacity with a `backdrop-blur` of 20px, but *always* contained within a 3px solid border.

---

## 3. Typography
Typography is the core of our technical identity. We pair a heavy, wide sans-serif for impact with a technical mono-spaced font for precision.

*   **Display & Headlines (Space Grotesk):** These are the "beams" of the layout. Use `display-lg` (3.5rem) and `headline-lg` (2rem) with tight letter-spacing (-2%). These should feel massive, often breaking the grid or overlapping image containers.
*   **Technical Details (Inter):** While the user requested Mono, we utilize **Inter** for core body copy (`body-md`) to ensure accessibility, but switch to a Mono-spaced font (mapped to `label-md` and `label-sm`) for prices, technical specs, and "system output" text.
*   **Hierarchy as Authority:** Use `display-lg` in all-caps for section titles to project a sense of "Commodity Web Development"—it is efficient, bold, and certain.

---

## 4. Elevation & Depth: "Hard-Shift" Layering
We do not use soft, ambient light. We use "Hard-Shift" layering to define depth.

*   **The Layering Principle:** Stacking is literal. A `surface_container_lowest` card sits on a `on_background` "shadow" offset by 4px or 8px.
*   **Hard Shadows:** Prohibit blurred shadows. Use the `on_background` (#1A1A1A) token to create a solid 4px/8px offset shadow. This creates a "sticker" effect that feels tactile and modern.
*   **The "Ghost Border" Fallback:** For inactive states, use `outline_variant` at 100% opacity. For active states, use `primary` at 3px width.
*   **Geometric Overlap:** Elements should feel "constructed." A headline might overlap a 3D render by 20px, framed by a `secondary_container` (Toxic Lime) accent block behind it.

---

## 5. Components

### Buttons
*   **Primary:** `primary_container` background, `on_primary_fixed` text, 3px `on_background` border. No rounded corners (`DEFAULT: 0px`).
*   **State:** On hover, the button shifts 4px up and 4px left, revealing a "hard" `on_background` shadow underneath.
*   **Secondary:** `secondary_container` background with the same 3px border logic.

### Checkboxes & Radios
*   **Scale:** Large (24px x 24px). 
*   **Style:** 3px `on_background` border. When checked, the fill is `secondary_container` (Toxic Lime) with a thick black "X" or "Check" mark. No smooth transitions; use "instant" state changes.

### Input Fields
*   **Base:** `surface_container_lowest` with a 3px `on_background` border.
*   **Focus:** Border color switches to `primary` (Electric Purple).
*   **Label:** Use `label-md` (Space Grotesk) positioned strictly above the input, never floating inside.

### Cards & Lists
*   **Forbid Dividers:** Do not use thin lines to separate list items. Use a `surface_container_low` background and 8px of vertical `spacing.4` to create separation.
*   **The "Block" List:** Each list item is its own bordered container. On hover, the background shifts to `secondary_fixed` (#C3F400).

### Additional Component: "The Status Tag"
*   Highly visible tags using `tertiary_fixed` (#FFDCBF) for neutral info and `secondary_container` for "Live" status. Always uppercase, mono-spaced, and framed in a 2px border.

---

## 6. Do's and Don'ts

### Do:
*   **Do** embrace the grid: Use `spacing.20` and `spacing.24` to create massive gaps between sections.
*   **Do** use "Toxic Lime" (#CCFF00) sparingly: It is a high-frequency color intended to draw the eye to specific conversion points or technical "wins."
*   **Do** use sharp corners (0px) everywhere. The "0px" roundedness scale is non-negotiable for this identity.

### Don't:
*   **Don't** use 1px lines or soft `#E0E0E0` greys. If it’s worth separating, it’s worth a 3px stroke or a high-contrast background shift.
*   **Don't** use "Natural" photography. Only use high-contrast 3D renders of abstract architecture or grainy, high-fashion editorial shots.
*   **Don't** use transitions longer than 150ms. The UI should feel "snappy" and mechanical, like a high-performance machine.