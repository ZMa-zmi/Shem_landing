# CLAUDE.md — WordPress Development Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.
- Check `brand_assets/` for logos, color palette, and style guide before designing anything.

## WordPress Environment
- Local WordPress runs at `http://localhost` (via Local by Flywheel, XAMPP, or Docker — confirm with user if unsure).
- Theme folder: `wp-content/themes/<theme-name>/`. All theme edits go here.
- Do not edit core WordPress files or plugin files directly.
- Use `functions.php` for enqueuing scripts/styles, registering menus, and custom functionality.
- Child theme preferred over editing parent theme directly.

## WordPress.com MCP Tools
- Use `wpcom-mcp-content-authoring` to create/edit posts, pages, media, and patterns.
- Use `wpcom-mcp-site-editor-context` to get theme presets, blocks, and style variations before designing.
- Use `wpcom-mcp-site-settings` to read or update site configuration.
- Workflow for new pages: get theme presets → browse patterns → customize → create as **draft** first.
- Always return edit/preview links after creating content.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Screenshot Workflow
- Puppeteer is installed at `C:/Users/nateh/AppData/Local/Temp/puppeteer-test/`. Chrome cache is at `C:/Users/nateh/.cache/puppeteer/`.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## Output Defaults
- WordPress templates: PHP files following WordPress template hierarchy (`page.php`, `single.php`, `front-page.php`, etc.).
- Styles go in `style.css` (theme stylesheet) or enqueued via `functions.php` — not inline unless inside a block template.
- For Gutenberg blocks: use `theme.json` for design tokens (colors, typography, spacing).
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive.

## Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.
- Register brand colors in `theme.json` under `settings.color.palette`.

## Anti-Generic Guardrails
- **Colors:** Never use default WordPress/Tailwind palette. Use brand colors defined in `theme.json` or `style.css` custom properties.
- **Shadows:** Never use flat `box-shadow`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body. Register fonts in `theme.json`.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use consistent spacing tokens via CSS custom properties or `theme.json` spacing scale.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## Hard Rules
- Do not edit WordPress core or plugin files
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default WordPress blue (#0073aa) as primary color — use brand color
- Always create content as **draft** first, never publish directly
