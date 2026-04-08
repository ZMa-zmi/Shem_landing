# Design System Document

## 1. Overview & Creative North Star: "The Architectural Monolith"

This design system is built upon the concept of **Architectural Monolithism**. It treats the digital canvas not as a flat screen, but as a physical site where space, light, and mass interact. We move away from the "web-template" aesthetic by embracing high-contrast editorial typography, intentional negative space (voids), and a total rejection of traditional decorative containment.

The creative direction is defined by:
*   **Asymmetric Equilibrium:** Layouts should feel balanced but never perfectly symmetrical. Use oversized imagery to anchor one side of the screen while typography breathes in large white-space "galleries" on the other.
*   **Mass and Void:** Elements are either whisper-thin (labels/lines) or heavy and structural (display type/imagery). There is no middle ground.
*   **Editorial Authority:** We prioritize a "magazine-spread" feel over a "dashboard" feel. Every section should look like a bespoke architectural pitch.

## 2. Colors: Tonal Architecture

Our palette is derived from raw construction materials: bone, basalt, and limestone. It is sophisticated, muted, and relies on subtle shifts in temperature rather than hue.

### Surface Hierarchy & Nesting
To achieve a premium, custom feel, we utilize a **Tonal Layering** approach.
*   **Base:** Use `surface` (#fffcf7) for the primary "site" of the page.
*   **Elevation:** Instead of shadows, use `surface-container-low` (#fcf9f3) to define distinct content zones. To create focus, nest a `surface-container-lowest` (#ffffff) card within a lower-tier section.
*   **The "No-Line" Rule:** 1px solid borders for sectioning are strictly prohibited. Boundaries must be defined by background shifts (e.g., a transition from `background` to `surface-container-high`).

### Signature Textures & Glass
*   **The Glass Rule:** Floating navigation or overlay menus must use a Glassmorphism effect: `surface` color at 70% opacity with a `20px` backdrop-blur. This ensures the architecture of the site remains visible even when obscured.
*   **Polished Gradients:** For primary CTAs, use a subtle linear gradient from `primary` (#5f5e5e) to `primary-dim` (#535252) at a 135-degree angle. This mimics the light-catch on a polished concrete surface.

## 3. Typography: High-Contrast Editorial

The typography is a dialogue between the timeless elegance of the serif and the brutalist impact of the sans-serif.

*   **Display & Headline (Newsreader):** This is our "luxury" voice. Use `display-lg` for project titles (e.g., "Villa Elektra"). It should feel like an inscription on a building—airy, elegant, and authoritative.
*   **Navigation & Labels (Plus Jakarta Sans / Inter):** This is our "functional" voice. Navigation items and CTAs must be bold, high-contrast, and occasionally all-caps to provide a modern, technical counterpoint to the serif headings.
*   **Scale Usage:** Never crowd the type. If using `display-lg`, ensure at least `80px` of vertical breathing room (void) surrounds it.

## 4. Elevation & Depth: Tonal Stacking

Traditional drop shadows are too "digital" for a construction firm. We use ambient light principles.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section to create a soft, natural lift.
*   **Ambient Shadows:** If a "floating" effect is required for a modal or a primary image, use an extra-diffused shadow: `box-shadow: 0px 24px 48px rgba(56, 56, 49, 0.06);`. The shadow color is a tinted version of `on-surface` (#383831), not a generic black.
*   **The Ghost Border:** If accessibility requires a border, use the `outline-variant` (#babab0) at **15% opacity**. High-contrast, 100% opaque borders are strictly forbidden.

## 5. Components: Structural Elements

### Buttons
*   **Primary:** Rectangular, sharp corners (`0px` roundedness). Background: `primary` (#5f5e5e), Text: `on-primary`. Hover state: Shift to `primary-dim` with a slight `4px` vertical lift.
*   **Tertiary (Editorial):** Text only, `label-md` bold, with a `2px` underline using `surface-tint`. Include a small "arrow-up-right" icon to signify architectural movement.

### Input Fields
*   **Styling:** Only a bottom border using `outline-variant`. No background fill unless in a focused state.
*   **Focus State:** The bottom border thickens to `2px` using `primary`.

### Cards & Projects
*   **Construction:** Forbid divider lines. Separate project details (e.g., [ 1150 M² ] [ 2025 ]) using wide letter-spacing and `surface-container-high` background blocks behind the text.
*   **Imagery:** Always use 1:1 or 4:5 aspect ratios for a "gallery" feel. Images should have `0px` border-radius to maintain the "clean line" architectural aesthetic.

### Additional Components: The "Breadcrumb Monolith"
For the construction context, use a large-scale "Progress Bar" for project phases (Design, Foundation, Finishing) that uses `surface-container-highest` as the track and a `primary` solid block as the indicator. It should feel like a architectural ruler.

## 6. Do's and Don'ts

### Do:
*   **Embrace the Void:** Let a heading sit alone in a column for 50% of the screen width.
*   **Use Architectural Grids:** Align text to the left edge of an image, but allow the image to bleed off the right side of the screen.
*   **Color Shifts for State:** Use `surface-bright` for hover states on list items to create a "light-up" effect.

### Don't:
*   **No Rounded Corners:** `0px` is the absolute rule for this design system. Any rounding breaks the architectural integrity.
*   **No Generic Icons:** Avoid thin-line "app" icons. Use heavy, geometric shapes or custom SVG markers that look like architectural symbols.
*   **No Flat Grids:** Avoid the "3-column card row." Instead, stagger cards vertically or vary their widths (e.g., 60% / 40%) to create visual tension.
*   **Excessive Spacing:** The design is now more compact (`spacing: 2`). Avoid excessively large gaps between elements unless explicitly designed as a "void" for dramatic effect. Ensure elements are intentionally placed, rather than simply having large default margins.