# Layout pattern inventory

Date: 2026-10-10

The 183 patterns that replace the 478 retired components (spec: [layout patterns design](../specs/2026-10-10-layout-patterns-design.md), §8). Built by clustering the retired components by structure and adding canonical layouts they missed. `from` names retired components (in git history before the port) that show the structure.

Authors may adjust details while building, but keep each slug, name, kind and structure recognisable; record any change in the pattern's brief.

## Group: Sections

### hero (8 patterns; 21 retired components reviewed)

#### hero-split-image
- name: Hero — Split with image
- kind: section
- tags: split, media, spacious
- structure: One 1152px container. From 1024px two equal columns, vertically centred, 64px gap: the text column holds an eyebrow, the display headline, a lede (max 512px) and a row of primary + secondary actions; the media column holds one square media placeholder. Below 1024px the columns stack (text first, then the image at 4:3) with a 48px gap, and the actions wrap. Static apart from action hover and focus.
- from: hero-split-image, hero-climbing-wall, hero-district-energy

#### hero-centered-media
- name: Hero — Centred with media below
- kind: section
- tags: centered, stacked, media
- structure: A centred text column (max-w-3xl) holds a badge-style eyebrow link, the display headline, a lede and a centred row of primary + secondary actions. 64px below, a 16:9 media placeholder (product screenshot) with a hairline border spans the full 1152px container, followed 48px lower by a centred meta label and a row of five logo placeholders. Below 640px the media switches to 4:3, the actions stack full width and the logos wrap three per line. Static apart from link hover and focus.
- from: new

#### hero-centered-form
- name: Hero — Centred with email form
- kind: section
- tags: centered, form, spacious
- structure: A centred column (max-w-2xl) holds an eyebrow, the display headline, a lede, then an email form: a visually hidden label, one row with the email input (flex-1, 44px) and a primary submit button, and a hint line tied to the input with aria-describedby. Under the form, a stack of five overlapping 32px avatar placeholders sits beside a meta line ("Join 1,284 people on the waitlist"). Below 640px the input and button stack full width. Static apart from hover and focus.
- from: hero-centered-gradient, hero-letter-post

#### hero-overlay-media
- name: Hero — Text over full-bleed media
- kind: section
- tags: layered, media, centered
- structure: A full-bleed section (min-height 640px, 560px below 640px) with an absolutely positioned media placeholder filling it and a bg-neutral-950/70 scrim over the placeholder. A centred column (max-w-3xl) sits on top in white: eyebrow, display headline, lede in neutral-300, and a white-filled primary action beside a white-outlined secondary action. Below 640px the actions stack full width and the headline drops to 36px. Static.
- from: new

#### hero-search-bar
- name: Hero — Centred search bar
- kind: section
- tags: centered, form, row
- structure: A centred header (max-w-3xl) holds an eyebrow, the display headline and a lede. Below it, a bordered search card (max-w-4xl, 12px padding, shadow-sm) holds a GET form with two fields that have visible labels (keyword, location) and a primary submit button: from 1024px one row in 1fr 1fr auto columns; from 640px to 1023px the two fields sit side by side with a full-width button under them; below 640px everything stacks. Under the card, a centred row wraps a "Popular:" label and five badge-style links, followed by a meta count line ("1,284 open roles").
- from: hero-careers-search, hero-rail-route

#### hero-headline-stats
- name: Hero — Headline with stats row
- kind: section
- tags: asymmetric, numbers, grid
- structure: From 1024px a 12-column grid puts the eyebrow, display headline, lede and two actions in columns 1–8, and a supporting note in columns 10–12, aligned to the bottom (left hairline border, 24px left padding, two sentences and a text link). 64px below, after a hairline, a stats row holds four items, each a figure (text-4xl semibold) over a muted label: four equal columns from 1024px, two columns below. Below 1024px the note moves under the actions.
- from: hero-counsel-workflow, hero-deploy-terminal, hero-district-energy

#### hero-bento-tiles
- name: Hero — Bento tiles
- kind: section
- tags: bento, media, compact
- structure: From 1024px a 3-column grid with 16px gaps holds five bordered tiles (rounded-lg, 24–32px padding): the headline tile spans 2 columns and 2 rows (eyebrow at the top; display headline, lede and two actions pushed to the bottom), column 3 stacks a 4:3 media tile above a metric tile (large figure, label, one sentence), and a third row holds a 2-column 21:9 media tile and a dark neutral-900 tile with one line of copy and a text link. From 640px to 1023px the grid has 2 columns, with the headline tile and the wide media tile spanning both and the rest paired up. Below 640px it is one column in source order.
- from: hero-brutalist-grid, hero-editorial-serif

#### hero-media-band
- name: Hero — Headline over wide media band
- kind: section
- tags: asymmetric, media, spacious
- structure: From 1024px a 12-column intro puts the display headline in columns 1–7 and the lede and two actions in columns 9–12, aligned to the bottom. 48px below, a 21:9 media placeholder spans the full container, then a caption row of three facts (label above value) separated by vertical hairlines. Below 1024px the intro stacks and the media becomes 16:9. Below 640px the media is 4:3 and the facts stack with top hairlines instead of side ones.
- from: hero-kiln-collection, hero-residency-atlas, hero-exhibition-poster

### navbar (8 patterns; 19 retired components reviewed)

#### navbar-links-actions
- name: Navbar — Logo, links and actions
- kind: section
- tags: row, compact
- structure: A full-width header with a bottom hairline holds a 64px row inside the 1152px container: a logo placeholder, five text links 32px to its right (the current page marked with aria-current and neutral-900 text), and a "Log in" text link and a primary action pushed to the right end. Below 1024px the links and Log in move behind a 40px menu button, the <summary> of a <details> whose panel opens absolutely under the header at full width with the five links stacked as 44px rows and a full-width secondary "Log in" action. The summary icon swaps from bars to a cross with group-open, and the primary action stays in the bar at every width.
- from: navbar-simple

#### navbar-floating-pill
- name: Navbar — Floating pill
- kind: section
- tags: layered, row, centered
- structure: A section on the alternate surface (bg-neutral-50, about 240px tall, with open space under the bar) holds a white bar floating 16px from the top. The bar is a centred rounded-full pill (max-w-4xl, 56px tall, hairline border, shadow-sm) with the logo on the left, four links centred, and a rounded-full primary action at the right end. Below 768px the links move into a <details> menu whose 40px round summary button opens a white rounded-lg card 8px under the pill (shadow-lg). The card holds the four links in a 2×2 grid above a full-width primary action, and the section is tall enough to contain it when open.
- from: navbar-glass, navbar-mountain-stay

#### navbar-centered-masthead
- name: Navbar — Centred masthead
- kind: section
- tags: centered, stacked, row
- structure: Three stacked rows in the 1152px container: a 40px utility row with a date or edition meta on the left and "Subscribe" and "Sign in" links on the right; a centred logo block (wordmark text-4xl, text-3xl below 640px) with a one-line tagline under it and 32px vertical padding; and a centred row of seven topic links between top and bottom hairlines (16px vertical padding, 24px gaps). Below 640px the utility row keeps only the right-hand links and the topic links wrap onto centred lines with a 12px row gap. Static apart from link hover and focus.
- from: navbar-journal-masthead

#### navbar-two-row-search
- name: Navbar — Two rows with search
- kind: section
- tags: stacked, row, form
- structure: Three stacked bands: a full-width neutral-900 announcement strip (40px tall) with one centred white sentence and an underlined link; a main row with the logo, a search form (visually hidden label, an input up to 576px wide, an icon submit button with an aria-label) and utility links on the right (Account, and Cart with a count badge); and a hairline-topped category row of six links with 32px gaps. Below 768px the main row wraps, with the logo and utilities sharing the first line and the search form taking the full second line. The category links wrap at every width.
- from: navbar-storefront-utility, navbar-developer-status, navbar-festival-ticket

#### navbar-dropdown-menus
- name: Navbar — Dropdown menus
- kind: section
- tags: row, layered, list
- structure: A 64px bar holds the logo, then a link row in which "Product" and "Resources" are <details> triggers (label plus a chevron that rotates 180° with group-open) between two plain links, and a primary action at the right end. Each open panel is a 288px white card (rounded-lg, hairline border, shadow-lg) placed absolutely 8px under its trigger, listing four links that each have a title and a one-line muted description. The triggers share a name attribute so opening one closes the other where supported. Below 768px the bar wraps (logo and action on the first line, the four items on the second) and the panels span the header width instead of hanging from their trigger; the section reserves room under the bar for an open panel.
- from: navbar-studio-disclosure, navbar-mountain-stay

#### navbar-mega-menu
- name: Navbar — Mega menu panel
- kind: section
- tags: layered, grid, media
- structure: A 64px bar holds the logo, "Products" as a <details> trigger with a chevron, three plain links, and "Log in" and a primary action on the right. The open panel spans the container width (absolute, 8px under the bar, white, rounded-lg, hairline border, shadow-lg, 24px padding) as a 12-column grid: columns 1–8 hold two columns of three links (icon tile, title, one-line description), and columns 9–12 hold a feature card (16:9 media placeholder, title, sentence, text link). Below 1024px the whole navigation folds into one <details> mobile menu (bars-to-cross icon) that lists the six product links under a "Products" label, then the plain links and full-width actions, with no nested disclosure. The section reserves about 360px under the bar so the open panel stays inside it.
- from: new

#### navbar-index-callout
- name: Navbar — Link index with callout
- kind: section
- tags: asymmetric, grid, list
- structure: A static header on a 12-column grid with 32px gaps and 32px vertical padding: a brand block in columns 1–3 (logo placeholder, two-line descriptor), a link index in columns 4–9 (two columns of four links, each with a bottom hairline and a trailing mono number), and a callout card in columns 10–12 (bg-neutral-50, eyebrow label, item title, primary action). From 768px to 1023px the brand and index sit side by side and the callout spans both columns below them. Below 768px all three stack, and the index keeps two columns at every width.
- from: navbar-oyster-farm, navbar-museum-exhibit, navbar-archive-room

#### navbar-app-tabs
- name: Navbar — App header with tabs
- kind: section
- tags: stacked, row, compact
- structure: Three stacked rows in a full-width app header (max-w-7xl): a breadcrumb row of three 12px links separated by slashes, with the current page as plain text; a 56px toolbar with the logo, project name and a status badge on the left and, on the right, a search icon link, a notifications icon link and an account <details> whose avatar summary opens a 192px right-aligned menu card (absolute, shadow-lg) with three links; and a tab row of five links on a hairline. The current tab (aria-current="page") has a 2px neutral-900 bottom border. Below 640px the project name truncates and the tab row scrolls sideways inside its own overflow-x-auto strip instead of wrapping.
- from: navbar-sailmaker-workspace

### features (8 patterns; 20 retired components reviewed)

#### features-icon-grid
- name: Features — Icon grid
- kind: section
- tags: centered, grid, icons
- structure: A centred header (max-w-2xl) holds an eyebrow, the section headline and a lede. 64px below, a <ul role="list"> of six items sits in a 3-column grid (32px column gap, 48px row gap). Each item has a 40px icon tile, an item title 16px below and a two-sentence body. The grid has two columns from 640px to 1023px and one column below 640px. Static.
- from: features-icon-grid, features-security-assurance, features-sake-flight

#### features-alternating-rows
- name: Features — Alternating media rows
- kind: section
- tags: split, media, spacious
- structure: A left-aligned header (eyebrow, section headline, lede max-w-2xl) sits above three feature rows, 96px apart (64px below 1024px). From 1024px each row has two equal columns with a 64px gap, vertically centred: a 4:3 media placeholder and a text block (eyebrow, item title text-2xl, body, a three-item check list, text link), with the media on the left in rows 1 and 3 and on the right in row 2 (lg:order-last). Below 1024px every row stacks media first, text second, 32px apart; the section is static.
- from: features-alternating, features-freight-desk, features-listening-room

#### features-bento-grid
- name: Features — Bento grid
- kind: section
- tags: bento, media, icons
- structure: A header row has the section headline and lede on the left (max-w-2xl) and a secondary action on the right, aligned to the bottom; below 1024px they stack. Under it, a 6-column grid with 16px gaps holds five bordered tiles in two rows: row 1 is a 4-column tile (title, body, and a 16:9 media placeholder flush to the tile's bottom edge) beside a 2-column metric tile (large figure, label, one sentence), and row 2 is three 2-column tiles, each with an icon tile, a title and a body. From 640px to 1023px the grid has two columns, the large tile spans both and the other four pair up; below 640px it is one column.
- from: features-bento, features-lunchbox, features-mending-club

#### features-media-list
- name: Features — List beside media
- kind: section
- tags: split, media, icons
- structure: From 1024px two equal columns with a 64px gap, vertically centred: the text column holds an eyebrow, the section headline and a lede, then a list of three features 24px apart (each a 40px icon tile beside an item title and a one-sentence body), then a text link; the media column holds one 4:3 media placeholder (product screenshot). Below 1024px the columns stack, text first. Static apart from link hover and focus.
- from: features-command-workspace, features-charge-stop, features-seed-archive

#### features-accordion-media
- name: Features — Accordion beside media
- kind: section
- tags: asymmetric, list, media
- structure: A left-aligned header (eyebrow, section headline, lede) sits above a 12-column body that, from 1024px, puts four <details> items in columns 1–5 and one 4:3 media placeholder in columns 7–12, aligned to the top. The items are separated by hairlines and share a name so only one stays open where supported, with the first open; each summary is an item title with a chevron that rotates with group-open, and each panel holds a two-sentence body and a text link. Below 1024px the media follows the list.
- from: features-repair-bench, features-lending-library

#### features-numbered-steps
- name: Features — Numbered steps
- kind: section
- tags: grid, numbers
- structure: A header holds an eyebrow and the section headline (max-w-2xl). An <ol> of three steps follows in three equal columns from 768px, stacked 40px apart below that. Each step has a top hairline, a 40px bordered number circle, an item title, a two-sentence body and a muted timing line ("Day 1"). 48px below, a full-width bg-neutral-50 note bar (rounded-lg, 24px padding) holds one sentence and a primary action, as a justified row from 640px and stacked below.
- from: features-process-timeline

#### features-sidebar-list
- name: Features — Intro beside numbered list
- kind: section
- tags: asymmetric, list, numbers
- structure: From 1024px a 1:2 grid with an 80px gap. The intro column (eyebrow, section headline, a lede up to 384px, text link) is sticky 32px from the top. The main column is an <ol> of four rows, each with a top hairline (the last also has a bottom one), a 32px mono number column and content: an item title (text-2xl), a two-sentence body (max 576px) and a muted meta line of deliverables. Below 1024px the intro sits above the list and is no longer sticky; the number column stays 32px wide at every width.
- from: features-service-index, features-security-assurance

#### features-comparison-panels
- name: Features — Before and after panels
- kind: section
- tags: split, list, icons
- structure: A centred header (max-w-2xl) holds an eyebrow, the section headline and a lede, above two equal panels from 768px (stacked below that, 24px gap). The left panel sits on bg-neutral-50 and the right on white with a 2px neutral-900 border; each has a label ("Before" or "After"), an item title and a list of four rows, each led by a 20px icon (a cross on the left, a check on the right). A centred text link sits below the panels; the section is static.
- from: features-before-after

### pricing (8 patterns; 19 retired components reviewed)

#### pricing-three-tiers
- name: Pricing — Three tiers, middle highlighted
- kind: section
- tags: centered, grid, numbers
- structure: A centred header (section headline, lede) sits above a billing toggle: a <fieldset> with a visually hidden legend and two radio <label>s in a rounded-full bordered pill, Monthly (checked) and Yearly with a "Save 20%" badge; the checked label fills neutral-900 via has-checked, and the section is a group that swaps every price with group-has-[#…-yearly:checked]:hidden / :inline. Three plan cards follow in equal columns from 1024px (24px gap), each with the plan name, a one-line description, the price with "/month", a billing note, a full-width action, then a hairline and a five-item check list. The middle card has a 2px neutral-900 border, a "Most popular" badge, shadow-lg and the only primary action. Below 1024px the cards stack in one centred column (max-w-md).
- from: pricing-three-tier

#### pricing-comparison-table
- name: Pricing — Comparison table
- kind: section
- tags: table, numbers, compact
- structure: A header puts the section headline on the left and a lede on the right, aligned to the bottom from 1024px. Below it, a <table> has a first column of feature names and three plan columns: the <thead> row holds each plan's name, price and a full-width action (primary for the middle plan, secondary for the others), and the body has three row groups ("Usage", "Collaboration", "Support"), each opened by a full-width group header row, with eight feature rows in total whose cells hold a check icon, a dash or a short value. Rows are separated by hairlines and the middle column sits on bg-neutral-50. Below 768px the table keeps its columns (min-width 640px) inside an overflow-x-auto region (tabIndex 0, aria-label, focus outline), so only the table scrolls sideways, with the feature column sticky on the left.
- from: pricing-brutalist

#### pricing-two-plans
- name: Pricing — Two plans
- kind: section
- tags: centered, split, numbers
- structure: A centred header (max-w-xl: eyebrow, section headline, lede) sits above two plan cards in equal columns within a max-w-4xl container (24px gap) from 768px, stacked below that. Each card is a flex column with an eyebrow label, the plan name, the price (text-5xl) with its period, a one-sentence description, a four-item check list and a full-width action pinned to the bottom with mt-auto; the second card uses the dark surface (bg-neutral-900, white text, white primary action). A centred meta line with a text link sits 32px below the cards.
- from: pricing-community-duo, pricing-rail-fares, pricing-audio-license

#### pricing-single-plan
- name: Pricing — Single plan with benefits
- kind: section
- tags: asymmetric, list, numbers
- structure: From 1024px two columns at 7/5 with a 48px gap, vertically centred. The left column holds an eyebrow, the section headline, a lede and a six-item check list, in two columns from 640px. The right column holds one plan card: a badge, the plan label, the price (text-5xl) with "/year", a monthly-equivalent meta line, a full-width primary action and a renewal note, then a hairline and an avatar stack with a member count. Below 1024px the card follows the copy at full width.
- from: pricing-membership-pass, pricing-legal-workspace, pricing-usage-credits

#### pricing-intro-plans
- name: Pricing — Intro beside two plans
- kind: section
- tags: asymmetric, grid, numbers
- structure: From 1024px a 1:2 grid with a 48px gap: the intro column holds an eyebrow, the section headline, a lede and a "Talk to sales" text link; the main column holds two plan cards side by side from 640px (stacked below), each a flex column with the plan name, a description, the price, a billing meta line, a four-item check list and an action pinned to the bottom, the second card carrying a badge and the primary action. Below the grid, after a hairline, an "Every plan includes" label precedes three icon items (icon tile, title, one sentence) in three columns from 768px, stacked below that. Below 1024px the intro sits above the cards.
- from: pricing-enterprise-contract, pricing-candle-seasons

#### pricing-price-list
- name: Pricing — Price list rows
- kind: section
- tags: stacked, list, numbers
- structure: The header is a justified row from 640px, with an eyebrow and the section headline on the left and a lede (max 384px) on the right, aligned to the bottom; it stacks below 640px. Below it are four full-width rows with 32px vertical padding, separated by hairlines (with one above the first and one below the last). From 768px each row is a 48px / flexible / 192px grid: a mono index number; the item title, a two-sentence description and a muted scope line; and a right-aligned price block ("From" label, price at text-2xl, text link). Below 768px each row is a 32px index column plus content, with the price block under the description.
- from: pricing-studio-packages, pricing-rehearsal-hours, pricing-cobbler-menu

#### pricing-option-picker
- name: Pricing — Option picker
- kind: section
- tags: asymmetric, form, numbers
- structure: From 1024px an 8/4 grid of two bordered panels with a 24px gap. The main panel holds the product title and description; a <fieldset> with a "Choose a size" legend and three radio cards (each a <label> wrapping a visually hidden radio, an option name and a short meta line, the checked card getting a neutral-900 border via has-checked and a focus outline via has-focus-visible); a price block with one price span per option, shown with group-has-[#…:checked]; a full-width primary action; and a terms hint tied to the fieldset with aria-describedby. The side panel, on bg-neutral-50, holds a "What's included" definition list of four rows and a note. The radio cards sit in three columns from 640px and stack below; below 1024px the side panel follows the main panel.
- from: pricing-soap-boxes

#### pricing-media-rates
- name: Pricing — Rates beside image
- kind: section
- tags: split, media, list
- structure: From 1024px two equal columns with a 64px gap, aligned to the top: a 4:5 media placeholder with a one-line caption, and a rates column. The rates column holds an eyebrow, the section headline, a lede, a <dl> of four rows with hairlines between them (a label and a short muted note on the left, a non-shrinking price aligned right), a full-width primary action and an access meta line. Below 1024px the media comes first at 4:3, then the rates.
- from: pricing-museum-admission, pricing-print-journal, pricing-cabin-stays

### testimonials (8 patterns; 19 retired components reviewed)

#### testimonials-large-quote
- name: Testimonials — Single large quote
- kind: section
- tags: centered, spacious
- structure: A centred column (max-w-4xl) holds a 48px decorative quote glyph (aria-hidden) and a <figure>. The figure's <blockquote> is one quote at text-3xl medium with balanced wrapping (text-2xl below 640px). Its <figcaption>, 40px below, has a 48px avatar placeholder beside a name and role, followed by a text link to the full story. Static.
- from: testimonials-quote-large, testimonials-river-defence

#### testimonials-card-grid
- name: Testimonials — Card grid
- kind: section
- tags: centered, grid
- structure: A centred header holds an eyebrow, the section headline and a lede. Below it, a <ul role="list"> of six cards sits in three equal columns from 1024px (two from 640px, one below, 24px gaps). Each card is a flex column: a row of five stars (fill currentColor) with an sr-only "Rated 5 out of 5", a quote of three to four lines, and an attribution pinned to the bottom (40px avatar, name, role). Static.
- from: testimonials-seismic-stations, testimonials-cycling-route-cards, testimonials-ferry-crossing

#### testimonials-masonry
- name: Testimonials — Masonry wall
- kind: section
- tags: grid, compact
- structure: A header puts the section headline on the left and a lede with a "Read customer stories" text link on the right. Below it, a CSS-columns masonry (columns-1, sm:columns-2, lg:columns-3, 20px column gap) holds eight <figure> tiles, each break-inside-avoid with a 20px bottom margin. Each tile has a quote of one to five sentences, then a 40px avatar beside the name and role. The second tile is featured on the dark surface (neutral-900, white text, larger quote).
- from: testimonials-grid

#### testimonials-featured-mosaic
- name: Testimonials — Featured quote mosaic
- kind: section
- tags: bento, asymmetric
- structure: A left-aligned header (eyebrow, section headline) sits above a 7/5 grid with a 20px gap from 768px. The lead figure fills the left column at full height with a logo placeholder, a quote at text-2xl, and an attribution pinned to the bottom after a hairline (avatar, name, role, text link); the right column stacks two smaller figures, each a quote at text-base with an avatar, name and role. Below 768px all three stack, lead first.
- from: testimonials-dark-mosaic, testimonials-member-wall, testimonials-cat-cafe-chats

#### testimonials-quote-metrics
- name: Testimonials — Quote with metrics
- kind: section
- tags: split, numbers
- structure: From 1024px two equal columns with a 64px gap. The first is a quote panel on bg-neutral-50 (rounded-lg, 40px padding) with a logo placeholder, a quote at text-2xl and an attribution (44px avatar, name, role). The second is a story column with an eyebrow, the section headline, a two-sentence paragraph, a <dl> of three metric rows (each figure at text-4xl before its label, hairlines between) and a "Read the case study" text link. Below 1024px the quote panel sits above the story.
- from: testimonials-case-study, testimonials-snowboard-service

#### testimonials-review-list
- name: Testimonials — Rating summary and review list
- kind: section
- tags: list, numbers, compact
- structure: A header row puts the section headline and a lede on the left and a rating summary on the right ("4.9" at text-5xl, five stars, a "from 1,284 reviews" meta line); it is a justified row aligned to the bottom from 640px and stacks below. Four review rows follow, separated by hairlines, with 28px vertical padding. From 768px each row puts a 192px identity column (40px avatar, name, "Verified customer" meta) beside a flexible column with stars, a short review title, the quote and a date/service meta line. Below 768px the identity sits above the review.
- from: testimonials-review-ledger, testimonials-tackle-field-notes, testimonials-editorial-dialogue

#### testimonials-media-quote
- name: Testimonials — Quotes beside image
- kind: section
- tags: asymmetric, media
- structure: From 1024px a 5/7 grid with a 48px gap: a 4:5 media placeholder (customer portrait) on the left; on the right, an eyebrow, the section headline and two quote figures separated by a hairline, each a quote at text-xl with a name and role caption. Below 1024px the media comes first at 4:3, then the quotes. Static.
- from: testimonials-drone-survey, testimonials-restoration-caption, testimonials-weather-radar

#### testimonials-scroll-row
- name: Testimonials — Scrolling card row
- kind: section
- tags: stacked, row
- structure: A header row puts the section headline and a lede on the left and an "All stories" text link on the right; it stacks below 640px. Below it, a horizontally scrolling <ul role="list"> (overflow-x-auto, snap-x snap-mandatory, 24px gap, bottom padding for the scrollbar) holds six cards. Each card is snap-start with a fixed basis (85% of the row below 640px, 45% from 640px, 31% from 1024px, so the next card always peeks) and holds a quote and an attribution (avatar, name, role). The scroller sits in a focusable region (tabIndex 0, aria-label) with a focus outline so keyboard users can scroll it with the arrow keys; there are no buttons, and only the strip scrolls, never the page.
- from: new

### cta (8 patterns; 19 retired components reviewed)

#### cta-centered-actions
- name: Call to action — Centred with actions
- kind: section
- tags: centered, stacked, spacious
- structure: A section on the alternate surface (bg-neutral-50) with a centred column (max-w-2xl) holding the section headline, a lede, a centred row of primary + secondary actions and a meta line under them ("No card required"). Below 640px the actions stack full width. Static.
- from: new

#### cta-inline-banner
- name: Call to action — Inline banner
- kind: section
- tags: row, compact
- structure: Inside the 1152px container, one rounded-lg panel on the dark surface (bg-neutral-900, 40px × 32px padding, 48px horizontal padding from 1024px). From 1024px the panel is a justified row: the section headline (text-3xl, white) and a one-line lede (neutral-300) on the left, and two actions on the right (a white-filled primary and a white-outlined secondary). Below 1024px the text stacks above the actions, which wrap left-aligned; below 640px the actions stack full width.
- from: cta-banner-gradient, cta-circus-starter, cta-volunteer-community

#### cta-email-signup
- name: Call to action — Email sign-up
- kind: section
- tags: split, form
- structure: A band with a top hairline. From 1024px it has two equal columns with a 64px gap, aligned to the bottom: the left holds the section headline and a lede; the right holds a form with a visible "Email" label, a row with the email input (flex-1, 44px) and the submit button, and a hint line tied to the input with aria-describedby. Below 1024px the form follows the copy; below 640px the input and button stack full width.
- from: cta-newsletter, cta-solar-survey

#### cta-split-image
- name: Call to action — Card with image
- kind: section
- tags: split, media
- structure: One rounded-lg panel on bg-neutral-50 with overflow hidden. From 1024px it has two equal columns: a media placeholder fills the left half edge to edge (no padding, full panel height), and the right half (48px padding) holds an eyebrow, the section headline, a lede, two actions and a hairline-topped meta row (a price or detail on the left, a text link on the right). Below 1024px the media sits on top at 16:9 (4:3 below 640px), with the text below it at 24px padding.
- from: cta-bookshop-circle, cta-film-scan, cta-jazz-table

#### cta-overlay-media
- name: Call to action — Detail card over media
- kind: section
- tags: layered, media, asymmetric
- structure: A full-bleed section with an absolutely positioned media placeholder and a bg-neutral-950/70 scrim behind the 1152px container. From 1024px a 7/5 grid is aligned to the bottom: the section headline (white, text-5xl) and lede (neutral-300) on the left, and on the right a white detail card (rounded-lg, 24px padding, neutral-900 text) with a <dl> of three rows (label on the left, value on the right, hairlines between) and a full-width primary action. Below 1024px the card follows the copy at full width, and vertical padding steps from 64px to 96px at 640px.
- from: cta-sailing-week

#### cta-detail-card
- name: Call to action — Event detail card
- kind: section
- tags: asymmetric, numbers
- structure: From 1024px a 7/5 grid with a 48px gap, vertically centred. The left column holds an eyebrow, the section headline, a lede (max 448px) and a capacity meta line. The right column holds one bordered card with a header row (a date block with the day at text-4xl over the month, a vertical hairline, then the item title and a time/place meta line), a <dl> of two rows (price, places left) and a full-width primary action. Below 1024px the card follows the copy; below 640px the date block sits above the title, with a horizontal hairline between them.
- from: cta-event-reservation, cta-heat-pump-survey, cta-lido-mornings

#### cta-numbered-steps
- name: Call to action — Steps checklist
- kind: section
- tags: split, list, numbers
- structure: From 768px two equal columns with a 64px gap, vertically centred: the left holds an eyebrow, the section headline, a lede and a wrapping row of primary + secondary actions; the right holds a bordered card with an <ol> of three steps, 24px apart, each a 32px numbered circle beside an item title and a one-sentence body. Below 768px the card follows the copy. Static apart from action hover and focus.
- from: cta-migration-checklist, cta-cargo-dispatch

#### cta-contact-form
- name: Call to action — Contact form
- kind: section
- tags: split, form
- structure: From 768px two equal columns with a 64px gap. The left holds a status line (8px dot plus "Taking new projects"), the section headline, a lede and an alternative contact line with an email link. The right holds a bordered form card with a labelled email input, a labelled textarea (min 128px tall), a reply-time hint tied to the textarea with aria-describedby, and the submit button; from 1024px the hint and button share a justified row. Below 768px the form follows the copy and the button is full width.
- from: cta-project-enquiry

### faq (8 patterns; 18 retired components reviewed)

#### faq-accordion
- name: FAQ — Accordion
- kind: section
- tags: centered, stacked, list
- structure: A centred column (max-w-3xl) opens with a centred section headline and a lede that contains a support text link, then six <details> items between hairlines (top border on the list, bottom border on each item) that share one name so only one stays open where supported, the first open. Each <summary> hides the default marker, shows the focus outline, and is a 24px-padded justified row with the question (font-medium, text-base, text-lg from 640px) and a 20px plus icon that rotates 45° with group-open. Each answer is a paragraph (max 65ch) with 24px bottom padding, and the layout is one column at every width.
- from: faq-developer-answers, faq-comedy-box-office, faq-film-darkroom

#### faq-sidebar-accordion
- name: FAQ — Accordion beside intro
- kind: section
- tags: asymmetric, list
- structure: From 1024px a 12-column grid. Columns 1–4 hold an intro: the section headline, a lede and a bg-neutral-50 contact card (title, hours meta, text link). Columns 6–12 hold six <details> items between hairlines, the first open, with the same plus icon rotating with group-open. Below 1024px the intro and card sit above the questions with a 48px gap.
- from: faq-accordion, faq-shipping-help, faq-drum-first-lesson

#### faq-two-column-accordion
- name: FAQ — Two-column accordion
- kind: section
- tags: grid, list, compact
- structure: From 1024px a header row puts the section headline and a lede on the left and a short note card (bg-neutral-50: label, one sentence, text link) on the right; below 1024px the card follows the header. Eight independent <details> items, none open and with no shared name, sit in two separate column lists of four from 768px (64px column gap), so opening one item never leaves a gap in the other column. Each item has a bottom hairline and a summary with the question and a chevron that rotates with group-open. Below 768px the two lists form one column.
- from: faq-hearing-appointments, faq-seed-packets

#### faq-qa-grid
- name: FAQ — Open answer grid
- kind: section
- tags: grid, icons
- structure: A header (max-w-2xl: eyebrow, section headline, lede) sits above six always-visible Q&A items in three equal columns from 1024px (two from 640px, one below; 48px column gaps, 40px row gaps). Each item has a top hairline, a 40px icon tile, the question as an item title and a two- to three-sentence answer. A closing row after a hairline holds one sentence and a text link to support; the section is static.
- from: faq-course-notes

#### faq-question-rows
- name: FAQ — Question and answer rows
- kind: section
- tags: asymmetric, list
- structure: A header (section headline, lede) sits above five always-visible rows separated by hairlines, with 32px vertical padding. From 1024px each row is a 12-column grid with the question (item title) in columns 1–5 and the answer (one or two paragraphs) in columns 6–12; below 1024px the answer sits 12px under the question. A closing meta line with a contact link ends the section, which is static.
- from: faq-service-contract

#### faq-grouped-topics
- name: FAQ — Grouped topic cards
- kind: section
- tags: split, list
- structure: A centred header holds an eyebrow and the section headline. Two topic cards follow in equal columns from 768px (stacked below, 24px gap). Each is a bordered card with a topic label, a group title and three independent <details> items between hairlines (the question plus an icon that rotates with group-open, and the answer below). A centred contact line with a text link sits 32px below the cards.
- from: faq-membership-categories

#### faq-category-sidebar
- name: FAQ — Category sidebar
- kind: section
- tags: sidebar, list
- structure: From 1024px a 1:3 layout: a sticky sidebar nav (32px from the top) with a "Topics" label and four anchor links to the groups (#…), beside a main column of four groups, each an h3 group title followed by three <details> items between hairlines. Below 1024px the sidebar becomes a wrapping row of four badge-style anchor links above the groups and is no longer sticky. Each group has scroll-margin-top so anchor jumps land clear of the top edge.
- from: faq-care-home-welcome, faq-energy-switch

#### faq-media-accordion
- name: FAQ — Accordion beside image
- kind: section
- tags: asymmetric, media, list
- structure: From 1024px a 5/7 grid with a 64px gap. The left column holds a 3:4 media placeholder with a one-line caption. The right column holds the section headline, a lede and four <details> items between hairlines, the first open. Below 1024px the media comes first at 4:3, then the intro and questions.
- from: faq-architecture-open-day, faq-opera-evening

### footer (8 patterns; 19 retired components reviewed)

#### footer-link-columns
- name: Footer — Brand and link columns
- kind: section
- tags: asymmetric, grid, compact
- structure: A <footer> with a top hairline whose main area, from 1024px, is a 12-column grid: columns 1–4 hold a brand block (logo placeholder, a one-sentence blurb up to 320px, a row of four 20px social icon links with aria-labels), and columns 5–12 hold four link groups. Each group is a <nav aria-labelledby> with a small label and five links; the groups sit in four columns from 768px and two below, and below 1024px the brand block sits above them. A bottom bar after a hairline holds the copyright on the left and three legal links on the right, as one justified row from 768px and stacked below.
- from: footer-columns, footer-developer-system, footer-festival-archive

#### footer-newsletter-columns
- name: Footer — Newsletter above links
- kind: section
- tags: stacked, form, grid
- structure: Three stacked bands. The newsletter band, from 1024px, has two equal columns aligned to the bottom (a headline at text-2xl and one sentence on the left; a form on the right with a visible label, an input + submit row and a hint tied to the input with aria-describedby), followed by a hairline; below 1024px the form follows the copy, and below 640px the input and button stack full width. The links band holds four link groups in four columns from 768px (two below), and the bottom bar holds the copyright and legal links as a justified row from 768px.
- from: footer-newsletter-inverse, footer-big-wordmark

#### footer-big-wordmark
- name: Footer — Oversized wordmark
- kind: section
- tags: stacked, grid, spacious
- structure: A dark footer (bg-neutral-950, white and neutral-400 text) with overflow hidden. From 1024px a 4-column grid of cells is divided by neutral-800 hairlines: a closing line with a text link spans 2 columns, then a link list column and a contact column (an <address> and an email link). The grid has two columns from 640px, with the first cell spanning both, and one column below 640px. A bottom bar with the copyright and legal links follows, then the logo word as a giant aria-hidden wordmark across the full container width (about 18vw, leading-none), with its bottom edge cropped by the footer.
- from: footer-big-wordmark, footer-vintage-stencil

#### footer-centered-links
- name: Footer — Centred links
- kind: section
- tags: centered, row, compact
- structure: A centred stack in the 1152px container with 48px vertical padding and 24px between items: a logo placeholder, a row of six links with 24px gaps, a row of four 20px social icon links with aria-labels, and a muted copyright line. The layout is the same at every width; only the link row wraps, onto centred lines. Static apart from link hover and focus.
- from: new

#### footer-single-row
- name: Footer — Single row
- kind: section
- tags: row, compact
- structure: One row inside the 1152px container (32px vertical padding, top hairline), justified from 768px: a logo placeholder and copyright meta on the left, then four links, then three social icon links at the far right. Below 768px the three groups stack left-aligned, 16px apart, and the links wrap. Static apart from link hover and focus.
- from: new

#### footer-cta-band
- name: Footer — Closing call to action band
- kind: section
- tags: split, grid
- structure: Three stacked bands. The closing band, from 1024px, is a justified row aligned to the bottom: the section headline (max-w-2xl) and a one-sentence lede on the left, primary + secondary actions on the right. Below 1024px it stacks, and below 640px the actions go full width; a hairline follows the band. The links band holds a brand block and three link groups in four equal columns from 1024px (two from 640px, one below), followed by a bottom bar with the copyright and legal links.
- from: footer-artisan-signature, footer-credit-union-window, footer-refill-loop

#### footer-contact-hours
- name: Footer — Contact, hours and directory
- kind: section
- tags: grid, list, compact
- structure: A contact strip on bg-neutral-50 between hairlines holds a phone label and number on the left and a primary action ("Book a visit") on the right, as a justified row from 768px and stacked below. The main grid has three columns from 1024px, two from 640px (the third column wraps under the first two) and one below 640px. The columns hold identity (logo, <address>, an access note), opening hours as a <dl> of seven justified day/time rows (max 320px wide), and a directory <nav> of six links in two columns. A bottom bar holds the copyright and legal links.
- from: footer-local-directory, footer-bakery-stamp, footer-wedding-contact

#### footer-large-links
- name: Footer — Large numbered links
- kind: section
- tags: asymmetric, list, numbers
- structure: From 1024px a 1:2 grid with a 64px gap: the identity column holds a logo, a one-sentence statement and a large figure (text-5xl) with a label such as "1,284 members"; the main column holds an <ol> of three large link entries with top hairlines, each a 112px index column (mono number) beside a link title (text-2xl) and a one-sentence description, with a trailing arrow that shifts 4px on group-hover. Below 1024px the identity sits above the list, and below 640px each index sits above its title. A bottom row after a hairline holds the copyright and legal links.
- from: footer-funeral-membership, footer-tailor-order, footer-maritime-manifest

## Group: Cards & profiles

### profile-card (7 patterns; 18 retired components reviewed)

#### profile-card-centered-stats
- name: Profile cards — Centred with stats row
- kind: element
- tags: stacked, centered, numbers
- structure: A bordered card 288px wide (320px from 640px), p-6, about 330px tall, with every line centred: a 64px avatar, the name (text-lg semibold), the role in meta text, then a three-column stats row between two hairlines (py-4), each cell a semibold value over a muted label ("1,284" / "Followers"). An action row closes it: a flex-1 primary "Follow" action beside a 44px square secondary icon button (message glyph, labelled "Message Alex Rivera"). Below 640px only the width changes; the stats stay three columns. Hover and focus-visible on the two actions only.
- from: profile-card-glass, profile-card-terminal, profile-card-bowling-captain

#### profile-card-cover-avatar
- name: Profile cards — Cover banner with overlapping avatar
- kind: element
- tags: stacked, layered, media
- structure: A bordered card 288px wide (320px from 640px), about 300px tall, clipped to an 8px radius and with no top padding: a full-width media placeholder 96px tall (cover image), then a row inset 20px holding a 72px avatar with a 4px white ring pulled up (-mt-9) to overlap the cover's bottom edge, and a small secondary "Message" action bottom-aligned at the right. Below the row: name, role or @handle, a two-line bio, and a meta row of two icon + text items (location, "Joined Mar 2024"). The arrangement is identical at both widths.
- from: profile-card-hazard-mapper, profile-card-indoor-surveyor, profile-card-aquascaper

#### profile-card-identity-details
- name: Profile cards — Identity row with details list
- kind: element
- tags: stacked, list, compact
- structure: A bordered card 288px wide (320px from 640px), p-5, about 330px tall: an identity row (48px avatar beside name and role), a two-line bio, then a `<dl>` of three label/value rows divided by hairlines (muted label left, value right-aligned, e.g. Location, Languages, Next available). A full-width 40px primary action ("Book a session") closes the card. Below 640px only the width changes; long values wrap under the right edge.
- from: profile-card-interpreter, profile-card-hygienist, profile-card-field-notes

#### profile-card-portrait-side
- name: Profile cards — Portrait column beside text
- kind: element
- tags: asymmetric, media
- structure: A bordered card 288px wide (400px from 640px), about 330px tall, clipped to an 8px radius. The upper region is a 224px-tall two-column grid: a portrait media placeholder filling a 112px column (144px from 640px) edge to edge, and a p-4 text column with an eyebrow, the name (text-lg semibold), role and a three-line bio. A full-width lower strip under a hairline (p-4) holds a small label, a one-line "currently working on" sentence and a text link with an arrow. Both columns persist at every width; only the card and portrait widths change.
- from: profile-card-perfumer, profile-card-parachute-inspector, profile-card-stage-rigger

#### profile-card-inline-follow
- name: Profile cards — Compact row with follow toggle
- kind: element
- tags: row, compact
- structure: A bordered card 288px wide (352px from 640px), p-4, about 160px tall. One header row holds a 40px avatar, the name over an @handle (truncating), and a Follow toggle pushed right: a `<label>` pill wrapping a visually hidden native checkbox (accessible name "Follow Alex Rivera") whose `peer-checked:` state swaps the filled "Follow" for an outlined "Following", with the focus outline drawn on the pill via `peer-focus-visible:`. Under the row sit a two-line bio and a meta line of two counts ("1,284 followers · 312 following", the numbers in neutral-900). Nothing reflows below 640px; the name truncates before the toggle wraps.
- from: new

#### profile-card-status-skills
- name: Profile cards — Status badge with skill tags
- kind: element
- tags: stacked, compact
- structure: A bordered card 288px wide (320px from 640px), p-5, about 355px tall. A top row spaces a 48px initials avatar on the left against an availability badge with a small dot ("Available from Mar 14") on the right; the name and role follow below the avatar, then a positioning statement of two or three lines. A wrapping row of four skill badges (8px gap, at most two lines) sits above a full-width 40px primary action with a trailing arrow. Below 640px only the width changes; badges re-wrap.
- from: profile-card-consultant, profile-card-community, profile-card-terminal

#### profile-card-expandable-details
- name: Profile cards — Expandable details
- kind: element
- tags: stacked, compact
- structure: A bordered card 288px wide (320px from 640px), p-5, about 240px tall closed and under 370px open. An identity row (48px avatar, name, role) and a one- or two-line summary sit above a native `<details>` between two hairlines: the `<summary>` row reads "Experience and credentials" with a chevron that rotates on `open:` (hover tints the row neutral-50; the summary takes the focus outline), and the panel holds a short paragraph and two label/value rows. A "View full profile" text link closes the card. Nothing reflows below 640px.
- from: profile-card-shearer

### team (7 patterns; 18 retired components reviewed)

#### team-portrait-grid
- name: Team — Centred header with portrait grid
- kind: section
- tags: centered, grid, media
- structure: Standard section shell (max-w-6xl) with a centred header: eyebrow, section headline and a lede capped at 672px. 64px below, a `role="list"` grid of eight people, each a 4:5 portrait media placeholder, the name (text-base semibold) 16px below, the role in meta text, and a row of two 20px icon links ("Email Alex Rivera", "Alex Rivera's profile"). Two columns (16px column gap, 40px row gap) below 640px and four columns from 640px (24px gap, 32px from 1024px), so the eight people always fill complete rows; the header stays centred at every width.
- from: team-grid, team-gem-bureau, team-puppet-company

#### team-grouped-label-column
- name: Team — Groups with label column
- kind: section
- tags: sidebar, grid, media
- structure: Section shell with a left-aligned header: the section headline, and a lede plus an "Open roles" text link that sit beside the headline from 1024px (7/5 split, bottom-aligned) and under it below. Two or three groups follow ("Leadership", "Engineering"), each between hairlines with 48px vertical padding; from 1024px each group is a 12-column grid with its label (h3 plus a one-line note) in columns 1–3 and a people grid in columns 4–12, and below 1024px the label stacks above the people. The people grid holds three to six people (4:5 portrait placeholder, name, role) in two columns below 640px and three from 640px.
- from: team-grid, team-fencing-club

#### team-tile-directory
- name: Team — Hairline tile directory
- kind: section
- tags: grid, compact
- structure: Section shell with a header row: the section headline on the left and a two-line lede on the right, side by side from 768px and stacked below. Below it, one bordered panel (8px radius, clipped) of six white tiles separated by 1px hairlines (`gap-px` over a neutral-200 fill): three columns from 1024px, two from 640px, one below. Each p-6 tile holds a row with a 48px initials avatar and a right-aligned meta badge (team or time zone, "UTC+1"), then the name, "Role · City" in meta text, a two-line bio and an "Email Alex" text link.
- from: team-remote-directory, team-makers-cooperative, team-project-pod

#### team-split-roster-list
- name: Team — Intro beside roster list
- kind: section
- tags: split, list, compact
- structure: Section shell; from 1024px two columns (2:3, 64px gap). The left column holds an eyebrow, section headline, lede and a secondary action ("Join the team") and is `lg:sticky lg:top-8`; the right column is a `role="list"` roster of six rows between hairlines, each a three-column grid (48px avatar | name, role and a location meta line | a 40px square icon link labelled "Email Alex Rivera") with 20px vertical padding. Below 1024px the intro stacks above the list; rows keep their three columns down to 320px and the middle text wraps.
- from: team-studio-roster, team-culture-lab, team-rescue-duty

#### team-featured-lead-roster
- name: Team — Featured lead with roster
- kind: section
- tags: asymmetric, list, media
- structure: Section shell with a left-aligned header (section headline, lede). From 1024px a 12-column grid with a 32px gap: a featured card in columns 1–7 (16:9 media placeholder on top, then a "Lead" badge, the name in text-xl, role, a three-line bio and two text links) and, in columns 8–12, a card titled "Team" with a list of four rows (40px avatar, name, role) divided by hairlines and a "View all" text link at the bottom. Below 1024px the featured card stacks above the roster card; nothing else changes.
- from: team-research-lab, team-harbour-watch, team-atlas-office

#### team-bio-rows
- name: Team — Portrait and biography rows
- kind: section
- tags: asymmetric, list, media, spacious
- structure: Section shell with a header (section headline, lede). Below it, two to four people as rows separated by hairlines with 48px vertical padding: from 640px each row is a two-column grid with a 4:5 portrait media placeholder in a 192px column (288px from 1024px) and a text column holding the name (text-xl semibold), role, two paragraphs of biography capped at 640px and a row of two text links. Below 640px the portrait sits above the text at 160px wide. For founders or leadership with long biographies.
- from: team-gem-bureau, team-atlas-office, team-prosthetic-care

#### team-expandable-bios
- name: Team — Expandable biography list
- kind: section
- tags: stacked, list, compact
- structure: Narrow section (max-w-3xl) with a header (section headline, lede) above a list of five native `<details>` rows between hairlines. Each `<summary>` is a row with a 40px avatar, the name over the role, and a chevron at the right that rotates on `open:`; hover tints the row neutral-50 and the summary takes the focus outline. The open panel, indented 56px to the text column, holds a two- or three-sentence bio and two text links; the first row starts open. One column at every width.
- from: team-film-vault

### product-card (6 patterns; 18 retired components reviewed)

#### product-card-media-footer
- name: Product cards — Image with price footer
- kind: element
- tags: stacked, media
- structure: A bordered card 288px wide (320px from 640px), about 330px tall, clipped to an 8px radius: a full-width media placeholder 160px tall on top, then a p-4 body with a category eyebrow, the product name (item title) and a two-line description. A footer row under a hairline holds the price ("$48", text-lg semibold) on the left and a "View details" text link with an arrow on the right. Below 640px only the width changes; the footer stays one row.
- from: product-card-ceramic, product-card-hologram-film, product-card-water-test

#### product-card-overlay-actions
- name: Product cards — Image with overlaid badge and actions
- kind: element
- tags: layered, media
- structure: A frameless card 288px wide (320px from 640px), about 310px tall. A 4:3 media placeholder carries three overlays: a "Sale" badge at the top-left; a 36px round wishlist toggle at the top-right (a `<label>` wrapping a visually hidden checkbox named "Save {product name} to wishlist", whose `peer-checked:` state fills the heart and whose focus outline shows via `peer-focus-visible:`); and a full-width "Add to cart" button inset 12px from the bottom, hidden on fine pointers (`pointer-fine:opacity-0`) until `group-hover:` or `group-focus-within:` and always visible on touch. Below the media come the name and price on one row (sale price plus a struck-through compare-at price), then a rating row of five 16px stars (`role="img"`, "Rated 4 out of 5") and a review count "(128)". Nothing reflows below 640px.
- from: product-card-minimal, product-card-studio-lamp, product-card-planter-kit

#### product-card-horizontal-media
- name: Product cards — Horizontal with media column
- kind: element
- tags: asymmetric, media, compact
- structure: A bordered card 288px wide (448px from 640px), about 150px tall, clipped to an 8px radius: a two-column grid with a media placeholder filling a 96px column (160px from 640px) edge to edge and a p-4 content column. The content column holds the name, a one-line variant meta line, a rating line, and a bottom row pushed down with `mt-auto` holding the price on the left and a small secondary "Add" button on the right. Both columns persist at every width; only the widths change. For list views, search results and related items.
- from: product-card-camera-rental, product-card-dog-travel, product-card-nail-pigment

#### product-card-variant-picker
- name: Product cards — Variant picker
- kind: element
- tags: stacked, form, media
- structure: A bordered card 288px wide (320px from 640px), p-4, up to about 365px tall: a 96px media placeholder, the name and price on one row, then two fieldsets with visible legends. Colour holds four 24px round swatch radios filled with neutral shades (white, neutral-300, neutral-500, neutral-900) with visually hidden names, where `peer-checked:` adds a 2px ring; Size holds four 36px segmented radio pills (S, M, L, XL), where `peer-checked:` fills neutral-900 and one pill is `disabled` and struck through. A full-width 40px primary "Add to cart" closes the card; keyboard focus shows on the visible swatch or pill via `peer-focus-visible:`, and nothing reflows below 640px.
- from: product-card-minimal, product-card-linen-roll, product-card-dog-travel

#### product-card-spec-columns
- name: Product cards — Specs row with price footer
- kind: element
- tags: stacked, numbers, compact
- structure: A bordered card 288px wide (320px from 640px), p-4, about 350px tall: a header row with a category eyebrow on the left and a badge ("Digital") on the right, a 64px-tall media placeholder band, the name and a two-line description. A three-column spec strip between hairlines follows, each cell a semibold value over a meta label ("24-bit" / "Format", "1.2 GB" / "Size", "120" / "Files"), divided by vertical hairlines. A footer row pairs the price (text-xl semibold) with a primary "Buy" action. Nothing reflows below 640px; the strip stays three columns.
- from: product-card-sound-kit, product-card-fire-extinguisher, product-card-caption-credits

#### product-card-four-column-grid
- name: Product cards — Four-column product grid
- kind: section
- tags: grid, media
- structure: Section shell (max-w-6xl) with a header row: the section headline on the left and a "Shop all" text link on the right (it drops under the headline below 640px). Below it, a `role="list"` grid of eight frameless product tiles: two columns (16px column gap, 32px row gap) below 1024px and four from 1024px (32px gaps). Each tile holds a square media placeholder, the name, a one-line meta ("3 colours") and the price. The name link's `::after` covers the tile, so the whole tile is the hit area; hover underlines the name and darkens the placeholder to neutral-200.
- from: new

### stat-card (7 patterns; 18 retired components reviewed)

#### stat-card-figure-delta
- name: Stat cards — Figure with change and link
- kind: element
- tags: stacked, numbers, compact
- structure: A bordered card 288px wide (320px from 640px), p-5, about 190px tall: a meta label ("Monthly revenue"), the value in text-4xl semibold tabular figures ("$48,290"), and a change row with a badge holding an up-arrow and "+12.4%" followed by "vs last month" in meta text. A footer under a hairline holds a "View report" text link with an arrow. Below 640px only the width changes.
- from: stat-card-water-loss, stat-card-glass-recovery, stat-card-goalball-blocks

#### stat-card-icon-inline
- name: Stat cards — Icon, label and value in one row
- kind: element
- tags: row, icons, numbers, compact
- structure: A bordered card 288px wide (352px from 640px), p-4, about 88px tall, laid out as one row: a 40px icon tile, a middle column with a meta label over the value (text-2xl semibold, tabular figures), and a change badge ("+4.1%" with an arrow) pushed to the right edge. The label truncates instead of wrapping and nothing reflows below 640px. Several of these stack into a dashboard column or a KPI row.
- from: new

#### stat-card-bar-chart
- name: Stat cards — Figure with bar chart
- kind: element
- tags: stacked, numbers
- structure: A bordered card 288px wide (320px from 640px), p-5, about 300px tall: a header row with the metric label on the left and the period ("Last 6 months") on the right, the value in text-3xl, and a one-line change sentence. Below it, an 80px chart of six equal columns with bottom-aligned bars (neutral-200, the current month neutral-900) and a month label under each, exposed as `role="img"` with an aria-label summarising the trend. A footnote under a hairline closes the card. The six columns stay equal at both widths.
- from: stat-card-revenue-ledger, stat-cards, stat-card-balloon-ascent

#### stat-card-progress-target
- name: Stat cards — Progress toward a target
- kind: element
- tags: stacked, numbers
- structure: A bordered card 288px wide (320px from 640px), p-5, about 220px tall: the label and period on one row, then the value (text-3xl semibold) sharing a baseline with "/ 10,000 target" in meta text. A full-width 8px rounded progress bar follows (neutral-200 track, neutral-900 fill at 74%, a native `<meter>` or `role="progressbar"` with its values), with scale labels at each end ("0", "10,000"). A footer under a hairline reads the remainder ("2,580 to go · 9 days left"). Nothing reflows below 640px.
- from: stat-card-energy-meter, stat-card-school-bus-fleet, stat-card-customer-retention

#### stat-card-ring-gauge
- name: Stat cards — Ring gauge beside summary
- kind: element
- tags: split, numbers
- structure: A bordered card 288px wide (320px from 640px), p-5, about 285px tall: a header row with the title on the left and a status badge on the right. A two-column row follows, with a 96px ring gauge (two concentric SVG circles with `currentColor` strokes, a neutral-200 track and a neutral-900 arc, the percentage centred inside) beside two or three lines of comparison text. Under a hairline sit a two-column `<dl>` of totals (value over label, e.g. "1,184" Passed, "26" Failed) and a text link. The ring and text stay side by side at both widths.
- from: stat-card-release-health, stat-card-insect-survey, stat-card-costume-return

#### stat-card-breakdown-rows
- name: Stat cards — Total with breakdown rows
- kind: element
- tags: list, numbers, compact
- structure: A bordered card 288px wide (320px from 640px), p-5, about 300px tall closed and under 370px open: a label with a 40px icon tile at the right, the total in text-4xl semibold, then a `role="list"` of three rows, each with a label on the left, a count on the right and a 6px bar underneath showing its share. A native `<details>` ("How this is counted", one or two sentences, chevron rotating on `open:`) under a hairline closes the card. Nothing reflows below 640px.
- from: stat-card-support-queue, stat-card-customer-retention, stat-card-rpg-playtest

#### stat-card-joined-trio
- name: Stat cards — Three metrics in one panel
- kind: element
- tags: grid, numbers, compact
- structure: One bordered panel 288px wide (640px from 768px), clipped to an 8px radius: a header row (title "Last 7 days" on the left, date range on the right) above a hairline, then a `role="list"` of three metrics. Below 768px each metric is a row (label over value on the left, change badge on the right) with horizontal hairlines between, about 300px tall overall; from 768px the three sit in equal columns divided by vertical hairlines, each stacking the label, value (text-3xl) and change, about 170px tall overall. Each label is a link whose `::after` covers its cell, and hover tints the cell neutral-50.
- from: stat-cards, stat-card-rowing-split

### testimonial-card (7 patterns; 18 retired components reviewed)

#### testimonial-card-quote-author
- name: Testimonial cards — Quote with author footer
- kind: element
- tags: stacked, spacious
- structure: A bordered `<figure>` 288px wide (352px from 640px), about 300px tall, p-6 (p-8 from 640px): a logo placeholder (24px glyph plus "Logo"), a `<blockquote>` of three to five lines (text-base, text-lg from 640px) 20px below, and a `<figcaption>` under a hairline with a 40px avatar beside the name and "Role, Company". One column at both widths; from 640px only the padding, quote size and width step up.
- from: testimonial-card-letter, testimonial-card-pullquote, testimonial-card-audio-note

#### testimonial-card-centered-quote
- name: Testimonial cards — Centred large quote
- kind: element
- tags: centered, spacious
- structure: A bordered `<figure>` 288px wide (384px from 640px), p-6 (p-8 from 640px), about 330px tall, with every line centred: a logo placeholder, a large quote (text-base, text-xl from 640px, font-medium, balanced wrapping, at most 20 words), then a 48px avatar centred above the name and role. Nothing reflows below 640px; only the width, padding and quote size change.
- from: testimonial-card-surtitles, testimonial-card-antiquarian-auction

#### testimonial-card-metric-lead
- name: Testimonial cards — Outcome figure above quote
- kind: element
- tags: stacked, numbers
- structure: A bordered `<figure>` 288px wide (320px from 640px), p-5, about 350px tall: a company eyebrow, then the outcome figure (text-5xl semibold, e.g. "3.2×") with a one-line label ("faster month-end close") under it, and a hairline. Below come a short quote (text-sm, at most 25 words), the author's name and role on one line, and a "Read the case study" text link with an arrow. Variation: swap the single figure for a two- or three-cell results strip. Nothing reflows below 640px.
- from: testimonial-card-case-study, testimonial-card-cold-chain, testimonial-card-fireworks-lot

#### testimonial-card-rating-review
- name: Testimonial cards — Star rating review
- kind: element
- tags: stacked, icons, compact
- structure: A bordered `<figure>` 288px wide (320px from 640px), p-5, about 270px tall: a wrapping row with five 16px stars on the left (`role="img"`, "Rated 4 out of 5"; filled stars `fill="currentColor"`, empty ones outlined) and a "Verified purchase" badge on the right, then a review title (text-base semibold) and a three- or four-line review body (text-sm). A footer under a hairline has the reviewer's name and the date (`<time>`, "Mar 14") on one space-between row and a meta line for variant and usage ("Size M · Used for 3 months"). The badge wraps under the stars when space runs out; nothing else reflows.
- from: testimonial-card-verified-purchase, testimonial-card-playful

#### testimonial-card-portrait-side
- name: Testimonial cards — Portrait column beside quote
- kind: element
- tags: asymmetric, media
- structure: A bordered `<figure>` 288px wide (448px from 640px), about 240px tall, clipped to an 8px radius: a two-column grid with a portrait media placeholder filling an 80px column (160px from 640px) edge to edge and a p-5 text column holding the quote (text-sm, text-base from 640px, at most 30 words) and, pushed to the bottom with `mt-auto`, a figcaption with the name and role. Both columns persist at every width, and the portrait stretches to the text column's height.
- from: testimonial-card-shared-studio, testimonial-card-first-dental-visit

#### testimonial-card-speech-bubble
- name: Testimonial cards — Speech bubble with author below
- kind: element
- tags: stacked, layered
- structure: A frameless `<figure>` 288px wide (352px from 640px), about 270px tall. A bordered bubble (neutral-50 fill, 8px radius, p-6) holds an optional star row and the quote, with a 16px tail on its bottom edge 32px from the left (a rotated square that shares the bubble's fill and draws only its right and bottom borders). The figcaption sits 20px below the bubble, indented to line up with the tail: a 40px avatar beside the name and role. Nothing reflows below 640px.
- from: testimonial-card-playful, testimonial-card-escape-room

#### testimonial-card-social-post
- name: Testimonial cards — Social post
- kind: element
- tags: stacked, compact
- structure: A bordered card 288px wide (352px from 640px), p-5, about 220px tall: a header row with a 40px avatar, the name over an @handle, and a 20px generic platform glyph at the right. The post text follows (text-sm, three to five lines, with an @mention in neutral-900 medium), then a meta row with the date and time (`<time>`) and a reply count. The whole card is one link to the original post (the name link's `::after` covers it) and hover tints it neutral-50. Nothing reflows below 640px.
- from: testimonial-card-microloan

### blog-card (7 patterns; 18 retired components reviewed)

#### blog-card-cover-stacked
- name: Blog cards — Cover image above text
- kind: element
- tags: stacked, media
- structure: A bordered card 288px wide (352px from 640px), about 360px tall, clipped to an 8px radius: a full-width media placeholder 144px tall at both widths, then a p-5 body with category and date on one meta line, the headline (text-base semibold, at most two lines) as a link whose `::after` covers the card, and a two-line excerpt. A footer under a hairline holds a 24px avatar, the author name and the reading time. Hover underlines the headline; nothing reflows below 640px.
- from: blog-card-design-notes, blog-card-field-guide, blog-card-research-brief

#### blog-card-media-left
- name: Blog cards — Media column beside text
- kind: element
- tags: asymmetric, media
- structure: A bordered card 288px wide that becomes 640px wide from 768px, clipped to an 8px radius. Below 768px it stacks a 2:1 media placeholder above a p-5 text block (about 360px tall); from 768px it is a two-column grid, with the media filling a 240px column at the text's full height (about 240px) and a p-6 text column. The text holds the category meta, a headline link (text-lg, text-2xl from 768px) whose `::after` covers the card, an excerpt of two lines (three from 768px) and, pushed to the bottom with `mt-auto`, a byline with a 32px avatar, the name, the date and the reading time.
- from: blog-card-editorial, blog-card-elevator-audit

#### blog-card-thumb-right
- name: Blog cards — Text with thumbnail at right
- kind: element
- tags: asymmetric, media, compact
- structure: A bordered card 288px wide (352px from 640px), p-4, about 190px tall. A top row puts the text column (category meta, then a headline link of up to three lines whose `::after` covers the card) on the left and an 80px square media placeholder (96px from 640px) on the right, 16px apart. A full-width two-line excerpt follows, then a meta row with the author, date and reading time. Hover underlines the headline; nothing else changes below 640px.
- from: blog-card-honey-harvest, blog-card-puppet-stage, blog-card-flower-border

#### blog-card-text-only
- name: Blog cards — Text only with author footer
- kind: element
- tags: stacked, compact
- structure: A bordered card 288px wide (352px from 640px), p-5, about 260px tall, with no media: a meta row with the date (`<time>`) and a category badge, a headline link (text-lg semibold) whose `::after` covers the card, and a three-line excerpt. A footer under a hairline holds a 32px avatar beside the author's name and role, and a trailing arrow that shifts 2px right on group-hover. Nothing reflows below 640px.
- from: blog-card-translation-margin, blog-card-marine-transect, blog-card-release-log

#### blog-card-text-on-media
- name: Blog cards — Text over full-bleed media
- kind: element
- tags: layered, media
- structure: A card 288px wide (352px from 640px) and 320px tall, clipped to an 8px radius: a media placeholder fills the whole card with its glyph centred in the upper half. A white category badge sits at the top-left, and a bg-neutral-950/80 panel anchored to the bottom (p-5) holds the headline link in white (text-lg semibold, at most three lines, its `::after` covering the card) and a neutral-300 meta line ("Author · 6 min read"). Hover underlines the headline; nothing reflows below 640px. For a featured or pinned post.
- from: blog-card-greenhouse-glass, blog-card-field-guide, blog-card-honey-harvest

#### blog-card-date-column
- name: Blog cards — Date column beside text
- kind: element
- tags: asymmetric, numbers, compact
- structure: A bordered card 288px wide (352px from 640px), p-5, about 190px tall: a two-column grid in which a 56px date column (the day number in text-3xl semibold over the short month, inside one `<time>`) is divided by a vertical hairline from the text column. The text column holds a category meta line, a headline link (text-base semibold) whose `::after` covers the card, a two-line excerpt and the reading time in meta text. Both columns persist at every width. For news, announcements and event write-ups.
- from: blog-card-ballot-count, blog-card-elevator-audit

#### blog-card-featured-with-list
- name: Blog cards — Featured post with list
- kind: section
- tags: asymmetric, list, media
- structure: Section shell (max-w-6xl) with a header row: the section headline on the left and a "View all posts" text link on the right (it drops under the headline below 640px). From 1024px a 7/5 grid with a 48px gap: the left column holds a featured post (16:9 media placeholder, category and date meta, a text-2xl headline, a three-line excerpt and a byline with a 32px avatar), and the right column holds a `role="list"` of three compact posts divided by hairlines, each with category meta, a two-line headline and the reading time on the left and an 80px square media placeholder on the right. Below 1024px the featured post stacks above the list. Each headline link's `::after` covers its own item, and hover underlines the headline.
- from: new

## Group: Elements

### buttons (6 patterns; 18 retired components reviewed)

#### buttons-hierarchy
- name: Buttons — Primary, secondary and tertiary
- kind: element
- tags: row, compact
- structure: Two captioned groups stacked 24px apart, each a text-xs neutral-500 caption over a flex-wrap row of 40px buttons (h-10, px-4, rounded-md, text-sm font-medium, one-word labels) with 12px gaps: "Emphasis" holds a filled neutral-900 primary, an outlined neutral-300 secondary, a text-only tertiary and a destructive action, outlined with a leading 16px trash icon and explicit wording ("Delete item"); "States" holds a 40px square icon-only button with an aria-label, a disabled primary, and a disabled loading primary whose leading 16px ring spinner uses `animate-spin motion-reduce:animate-none` beside the visible label "Saving…". Root `w-72 sm:w-[30rem]`, about 150px tall from 640px; below 640px the Emphasis row wraps its fourth button onto a second line (about 200px tall) and nothing else changes. States: hover (primary to neutral-700, secondary, destructive and icon-only fill neutral-50, tertiary underlines), the kit FOCUS outline, `disabled:` (50% opacity, not-allowed cursor, no hover) and loading.
- from: buttons-minimal

#### buttons-sizes-icons
- name: Buttons — Sizes and icon placement
- kind: element
- tags: row, icons, compact
- structure: Three size rows stacked 20px apart, each a text-xs neutral-500 caption ("Small · 32px", "Medium · 40px", "Large · 48px") over a flex-wrap row with 8px gaps holding the same three buttons: an outlined button with a leading icon, a filled primary with a trailing arrow icon, and a square outlined icon-only button with an aria-label. Sizes: small h-8 px-3 text-xs with 14px icons, medium h-10 px-4 text-sm with 16px icons, large h-12 px-5 text-base with 20px icons (icon-only buttons size-8/10/12); labels are one word. Root `w-72 sm:w-[26rem]`, about 250px tall; below 640px the large row may wrap its icon-only button onto a second line (about 300px). States: hover fills, FOCUS outline, decorative icons `aria-hidden` while visible labels or aria-labels carry the name.
- from: buttons-minimal, buttons-spice-dispatch, buttons-dive-inspection

#### buttons-stacked-full-width
- name: Buttons — Stacked full-width actions
- kind: element
- tags: stacked, compact
- structure: A kit card (rounded-lg border neutral-200 bg-white p-5) holding, top to bottom: an item title (text-base font-semibold) over one line of meta (text-sm neutral-500); 16px below, a full-width 44px primary; 8px below, a two-column grid (8px gap) of equal 40px outlined secondary buttons with 16px leading icons; 16px below, a centred tertiary text link; and 12px below, a one-line text-xs neutral-500 note. Root `w-72 sm:w-80`, about 260px tall; nothing changes below 640px except the width (288px to 320px). States: hover per tier (primary neutral-700, secondaries neutral-50, link neutral-600) and FOCUS on every action.
- from: buttons-calendar-actions, buttons-commerce-checkout, buttons-peat-fieldwork

#### buttons-joined-group
- name: Buttons — Joined button groups
- kind: element
- tags: row, compact
- structure: Three left-aligned `role="group"` button groups with aria-labels, stacked 16px apart; in each, 40px segments share one neutral-300 border (`-ml-px` on all but the first, only the outer corners rounded-md): (1) three outlined text buttons with 16px leading icons; (2) an icon-and-label action joined to a non-interactive count segment (bg-neutral-50, tabular-nums, e.g. "1,284"); (3) a pager: previous icon button (disabled), a "Page 3 of 12" text segment and a next icon button. Root `w-72 sm:w-80`, about 150px tall; every group is under 260px wide, so nothing reflows below 640px. States: per-segment hover fill neutral-50, FOCUS raised with `relative focus-visible:z-10` so the ring shows over neighbours, and disabled (50% opacity, no hover).
- from: buttons-peat-fieldwork, buttons-scrap-weighbridge

#### buttons-split-menu
- name: Buttons — Split button with menu
- kind: element
- tags: row, layered, compact
- structure: A right-aligned row of two split buttons 8px apart: an outlined secondary split ("Save" plus a 36px chevron segment) and a filled primary split ("Publish" plus a 40px chevron segment behind a 1px white/20 divider); each chevron segment is the `<summary>` (aria-label such as "More publish options") of its own relative `<details>`, and the primary one starts open. Its panel sits absolutely 8px below, right-aligned, w-56, rounded-md border neutral-200 bg-white p-1 shadow-lg: three 36px items with 16px leading icons, a 1px divider and one more item. Root `relative w-72 sm:w-[24rem]` with a fixed height of about 220px that reserves the open panel; nothing changes below 640px except the width. States: segment and item hover, FOCUS on the main segment, the summary and each item, the chevron turning 180° with `group-open:`, and items as plain buttons in a list (not `role="menu"`, which needs scripted arrow keys).
- from: buttons-fencing-strip, buttons-scrap-weighbridge, buttons-rewilding-survey

#### buttons-toolbar
- name: Buttons — Icon toolbar with primary action
- kind: element
- tags: row, icons, compact
- structure: One bordered strip (rounded-lg border neutral-200 bg-white p-1, about 46px tall) holding two `role="group"` clusters of 36px square ghost icon buttons (two, then three) separated by 1px × 20px vertical dividers, and a right-aligned (`ml-auto`) 36px primary button. Every icon button has an aria-label plus a CSS-only tooltip: an `aria-hidden` bg-neutral-900 text-white text-xs label absolutely positioned 8px below, shown on `group-hover:` and `group-focus-visible:` with an opacity transition. Root `w-72 sm:w-[28rem]`, about 90px tall including the reserved tooltip space; below 640px the primary reads "Save", and from 640px "Save changes" (the extra word is `hidden sm:inline`). States: hover fill neutral-100, FOCUS, one disabled icon button (Redo) and the tooltip reveal.
- from: buttons-studio-tools, buttons-arcade-controls

### inputs (6 patterns; 18 retired components reviewed)

#### inputs-field-anatomy
- name: Inputs — Label, hint and error states
- kind: element
- tags: stacked, form, compact
- structure: Three fields stacked 20px apart, each a label row (text-sm font-medium; the first has a right-aligned "Optional" in neutral-500), a 40px kit input 6px below and a one-line text-sm message 6px below it, linked with aria-describedby: (1) default with a hint; (2) error, with `aria-invalid="true"`, a neutral-900 border (`aria-invalid:border-neutral-900`) and a message led by a 16px alert icon and the word "Error:", so it never relies on colour; (3) disabled with a value, bg-neutral-50, neutral-500 text and a not-allowed cursor. Root `w-72 sm:w-80`, about 300px tall; nothing changes below 640px except the width, and messages stay one line. States: hover border neutral-400, FOCUS, neutral-500 placeholder, aria-invalid and disabled.
- from: inputs-glass, inputs-garden-signup, inputs-postal-note

#### inputs-leading-trailing-addons
- name: Inputs — Leading and trailing addons
- kind: element
- tags: stacked, form, icons, compact
- structure: Four labelled 40px fields stacked 16px apart, each inside a wrapper that carries the neutral-300 border and rounded-md radius: (1) a leading text addon ("https://") in a bg-neutral-50 segment with a right border; (2) an inline "$" prefix and "USD" suffix in neutral-500, with the suffix linked by aria-describedby; (3) a leading 16px mail icon inside the field; (4) a trailing attached outlined "Copy" button with an icon, sharing the wrapper border. Root `w-72 sm:w-80`, about 310px tall; nothing changes below 640px except the width. States: the wrapper shows FOCUS through `has-[input:focus-visible]:` while the input uses `focus-visible:outline-hidden` (with the forced-colours fallback), the attached button has its own hover (neutral-50) and FOCUS, and placeholders are neutral-500.
- from: inputs-invoice-fields, inputs-farm-pledge, inputs-aquarium-log

#### inputs-search-scopes
- name: Inputs — Search with scope filters
- kind: element
- tags: stacked, form, icons, compact
- structure: A `<form role="search">` holding a 40px `type="search"` field with an sr-only label, a leading 16px search icon and a trailing bordered `<kbd>` hint ("⌘K", font-mono text-xs); 12px below, a fieldset (sr-only legend "Scope") of four radio pills (h-8, rounded-full, border neutral-300, text-sm) in a wrapping row with 8px gaps, the first checked; 20px below, a "Recent" caption (text-xs neutral-500) over a `role="list"` of three 36px link rows, each a 16px clock icon plus a past query. Root `w-72 sm:w-[26rem]`, about 230px tall; the pills fit one line at 288px, so nothing changes below 640px except the width. States: input FOCUS; pill hover fill neutral-50, checked pill neutral-900 with white text through `has-checked:` on the label (the radio is sr-only), pill FOCUS through `has-focus-visible:`; recent rows hover neutral-100 with FOCUS.
- from: inputs-command-search

#### inputs-otp-row
- name: Inputs — One-time code row
- kind: element
- tags: row, form, compact
- structure: A fieldset with a text-sm font-medium legend and a one-line instruction (text-sm neutral-500) linked by aria-describedby; below it a row of six single-character inputs in two groups of three around a 12px dash, each 36×44px (w-9 h-11) below 640px and 44×48px from 640px, centred text-lg font-mono, `inputMode="numeric"`, maxLength 1, aria-label "Digit n of 6", the first three pre-filled. Below the row, a full-width 44px primary "Verify" and a text-sm line "Didn't get a code?" with a "Resend" text link. Root `w-72 sm:w-[22rem]`, about 210px tall. States: FOCUS on each box, primary hover and link hover; there is no auto-advance or paste-splitting, which would need a script.
- from: inputs-verification-code

#### inputs-textarea-counter
- name: Inputs — Textarea with counter and action bar
- kind: element
- tags: stacked, form, compact
- structure: A label row (label left, "Optional" right) over a bordered wrapper (rounded-md border neutral-300) that contains a borderless 96px textarea and, inside the same border, a 44px bottom bar: two 32px ghost icon buttons (attach, mention) on the left, and on the right a static counter ("0 / 280", text-xs tabular-nums neutral-500, linked by aria-describedby) beside a 32px primary "Post" button. A one-line hint (also linked) sits 6px below the wrapper. Root `w-72 sm:w-[26rem]`, about 200px tall; nothing changes below 640px except the width. States: the wrapper shows FOCUS through `has-[textarea:focus-visible]:` with the textarea's own outline hidden via `focus-visible:outline-hidden`, icon buttons hover neutral-100 with FOCUS, primary hover, placeholder neutral-500; the host's script updates the counter text.
- from: inputs-postal-note, inputs-bike-wash, inputs-glass

#### inputs-field-grid
- name: Inputs — Field grid with mixed widths
- kind: element
- tags: grid, form, compact
- structure: Three rows of labelled 40px fields stacked 16px apart (labels 6px above controls, every control `min-w-0`): a full-width field; a row of a flexible field beside a fixed 96px field (`grid-cols-[1fr_6rem]`, 12px gap); and two equal columns holding a native `<select>` (`appearance-none` with a 16px chevron icon absolutely positioned 12px from the right, `pointer-events-none`) and a field. Root `w-72 sm:w-[26rem]`, about 230px tall; the columns keep their ratios below 640px and only narrow. States: hover border neutral-400 and FOCUS on every control, including the select.
- from: inputs-hat-blocking, inputs-salvage-intake, inputs-derby-roster

### badges (6 patterns; 18 retired components reviewed)

#### badges-variant-set
- name: Badges — Styles, sizes and indicators
- kind: element
- tags: row, compact
- structure: Three captioned rows stacked 20px apart, each a text-xs neutral-500 caption over a `role="list"` flex-wrap row with 8px gaps: (1) Styles: outline (the kit badge), solid (bg-neutral-900 text-white), subtle (bg-neutral-100 text-neutral-700) and dashed outline; (2) Indicators: a leading 6px filled dot, a leading hollow ring, a leading 12px check icon and a trailing count ("Label 12"); (3) Shape and size: rounded-full against rounded-md, small (text-xs, px-2, 20px tall) against large (text-sm, px-3, 28px tall). Root `w-72 sm:w-[26rem]`, about 170px tall from 640px; below 640px each row wraps to two lines (about 240px). Static, with no hover or focus; each state is named in words, never by fill alone.
- from: badges-playful, badges-issue-labels

#### badges-status-list
- name: Badges — Status in list rows
- kind: element
- tags: list, compact
- structure: A kit card without inner padding: a header row (px-4 py-3, bottom hairline) with a text-sm font-semibold title on the left and a "View all" text link on the right, then a `role="list"` of four 56px rows divided by neutral-200 hairlines, each a truncating name (text-sm font-medium) over a text-xs neutral-500 timestamp on the left and a status badge on the right. The four badges differ by leading glyph as well as word: a filled dot (Live), a half-filled ring (In progress), a × icon (Failed) and a hollow dot (Queued). Root `w-72 sm:w-[26rem]`, about 280px tall; nothing changes below 640px except the width (names truncate). States: the badges are static; only the "View all" link has hover and FOCUS.
- from: badges-release-track, badges-cold-chain, badges-field-passes

#### badges-tag-groups
- name: Badges — Labelled tag groups
- kind: element
- tags: stacked, compact
- structure: An item header (a text-xs font-mono neutral-500 ID over a text-sm font-semibold title), then three groups 16px apart, each an h3 (text-xs font-medium neutral-500) over a `role="list"` wrapping row with 6px gaps: "Priority" with one dot badge; "Labels" with three rounded-md outline tags and a "+2" overflow badge; "Owners" with two person chips (20px initials circle plus a name). Root `w-72 sm:w-80`, about 220px tall; below 640px the Labels row may wrap (about 250px). Static, with no hover or focus.
- from: badges-issue-labels, badges-marsh-restoration, badges-pantry-labels

#### badges-removable-chips
- name: Badges — Removable filter chips
- kind: element
- tags: row, compact
- structure: A header row with "Active filters" (text-sm font-medium) on the left and a "Clear all" text button on the right; 12px below, a `role="list"` wrapping row (8px gaps) of four 28px chips (rounded-full, border neutral-300, text-xs, pl-2.5 pr-1), each a "Key: Value" label (key in neutral-500) followed by a 20px round remove button with a 12px × icon and an aria-label ("Remove filter: Status Open"), ending with a dashed-border "+ Add filter" chip button; then a text-sm neutral-500 result count ("1,284 results") 16px below. Root `w-72 sm:w-[28rem]`, about 130px tall from 640px and about 170px below 640px, where the chips wrap onto three lines. States: remove buttons fill neutral-200 on hover and drop their own outline with `focus-visible:outline-hidden` while the chip shows FOCUS through `has-[:focus-visible]:`; Add filter and Clear all have hover and FOCUS.
- from: badges-playful

#### badges-count-indicators
- name: Badges — Counts and dot indicators
- kind: element
- tags: layered, numbers, icons, compact
- structure: Two blocks 24px apart: (1) a row of three 40px anchors with overlaid indicators, namely an outlined bell icon button with a top-right count pill (absolute -top-1.5 -right-1.5, min-w-5 h-5, rounded-full bg-neutral-900 text-white text-xs, ring-2 ring-white), an icon button with an 8px dot only, and an initials avatar with a 10px status dot at its bottom right; (2) a `role="list"` nav of three 36px links (16px icon plus label) with right-aligned count pills (rounded-full bg-neutral-100 px-1.5 text-xs tabular-nums; white on the current row), the first link current. Counts and dots are part of the accessible name through sr-only text ("3 unread notifications", "New messages"). Root `w-72 sm:w-80`, about 190px tall; nothing changes below 640px except the width. States: icon buttons and links hover neutral-50, FOCUS on each, and the current link (aria-current) bg-neutral-100 font-medium.
- from: badges-playful

#### badges-credential-plate
- name: Badges — Featured credential with tags
- kind: element
- tags: stacked, numbers, compact
- structure: A kit card (p-5) whose header row puts a 64px square plate (rounded-lg, 2px neutral-900 border, a text-2xl font-semibold grade or rank figure over a text-xs caption) 16px from a text column holding the credential name (text-base font-semibold), issuer meta (text-sm neutral-500) and a "Verified" badge with a leading check icon. 16px below sits a `role="list"` wrapping row of three or four small outline tags, then a footer behind a hairline with "Issued Mar 14" on the left and a font-mono ID on the right (text-xs neutral-500). Root `w-72 sm:w-80`, about 220px tall; nothing changes below 640px except the width. Static; status and grade are written in words and figures, never by fill alone.
- from: badges-esports-seeding, badges-piano-grades, badges-donor-record

### toggles (6 patterns; 18 retired components reviewed)

#### toggles-switch-states
- name: Toggles — Switch states and sizes
- kind: element
- tags: grid, compact
- structure: Two captioned columns side by side at every width ("Default · 44×24" and "Small · 36×20", about 136px each at 288px), each a stack of four `<label>` rows 16px apart pairing a switch with its text: Off, On, Disabled off, Disabled on. Each switch is a native `<input type="checkbox" role="switch">` (sr-only peer) followed by a rounded-full track (border neutral-300, bg-neutral-200; checked bg-neutral-900) and a white shadow-sm knob (20px or 16px) that moves with `peer-checked:translate-x-*`. Root `w-72 sm:w-[24rem]`, about 170px tall; nothing changes below 640px except the width. States: hover (off track to neutral-300, on track to neutral-700), checked, FOCUS on the track through `peer-focus-visible:`, `peer-disabled:` 50% opacity with a not-allowed cursor, a 150ms knob slide with `motion-reduce:transition-none`, and a forced-colours border on the track.
- from: toggles-projector-booth, toggles-corporate, toggles-workspace-access

#### toggles-switch-list
- name: Toggles — Settings list with switches
- kind: element
- tags: list, form, compact
- structure: A kit card without inner padding: a header (px-4 py-3, bottom hairline) with a text-sm font-semibold title over a one-line text-sm neutral-500 description, then a `role="list"` of four rows divided by hairlines (px-4 py-3, flex, 16px gap, items centred), each a `<label for>` title (text-sm font-medium) over a one-line text-xs neutral-500 hint linked by aria-describedby on the left and a 44×24 switch on the right. The fourth row is disabled, with a 14px lock icon and the hint "Managed by an admin". Root `w-72 sm:w-[26rem]`, about 310px tall; nothing changes below 640px except the width, so keep hints to about 32 characters. States: switch hover, checked, FOCUS, disabled, a 150ms knob slide, and the title label also toggles the switch.
- from: toggles-corporate, toggles-audio-mixer, toggles-braille-embosser

#### toggles-checkbox-nested
- name: Toggles — Checkbox group with nested options
- kind: element
- tags: stacked, form, compact
- structure: A fieldset with a text-sm font-semibold legend and a one-line text-sm neutral-500 description, then three top-level rows 16px apart, each a native 16px checkbox (`accent-neutral-900`) aligned to the first text line beside a label (text-sm font-medium) over a description (text-sm neutral-500, aria-describedby). The first row starts checked and reveals two indented (pl-7) child checkboxes 8px below it, shown only while the parent is checked (`hidden` plus `group-has-[#parent:checked]:block`); the third row is disabled. Root `w-72 sm:w-80`, about 260px tall from 640px and up to about 300px below 640px, where descriptions wrap to two lines. States: checked, FOCUS on each checkbox, disabled (50% opacity), and the CSS-only reveal of the child options.
- from: toggles-deployment-guardrails, toggles-key-collection

#### toggles-segmented-control
- name: Toggles — Segmented controls and toggle buttons
- kind: element
- tags: row, compact
- structure: Three fieldsets stacked 20px apart, each with a text-xs neutral-500 legend: (1) a text segmented control, a bg-neutral-100 rounded-lg p-1 track with four equal 32px radio segments, one checked and one disabled; (2) an icon-only segmented control of two 32px radio segments (list view, grid view) with sr-only names; (3) a joined group of three 36px icon toggle buttons backed by checkboxes (for example bold, italic, underline), two checked. Checked radio segments turn bg-white with shadow-sm and neutral-900 text; checked checkbox buttons fill neutral-900 with white icons; every input is sr-only and its label shows FOCUS through `has-[:focus-visible]:`. Root `w-72 sm:w-80`, about 210px tall; nothing changes below 640px except the width. States: hover (neutral-900 text, or a neutral-50 fill), checked, FOCUS and disabled.
- from: new

#### toggles-radio-cards
- name: Toggles — Radio cards
- kind: element
- tags: grid, form, numbers, compact
- structure: A fieldset with a text-sm font-semibold legend and three radio cards (`<label>`, rounded-lg, border neutral-300, p-4, sr-only radio), each led by a 16px custom radio indicator (a bordered circle whose 6px inner dot appears through `has-checked:`), then a title (text-sm font-semibold), a description (text-sm neutral-500) and a figure (text-base font-semibold, for example "$29"). Below 640px the cards stack in a list with 12px gaps, each a row with the indicator, title and one-line description on the left and the figure on the right; from 640px they form three equal columns, each stacking indicator, title, a two-line description and the figure. Root `w-72 sm:w-[36rem]`, about 270px tall below 640px and 180px from 640px. States: hover border neutral-400, checked card with a neutral-900 border and `ring-1 ring-neutral-900`, FOCUS through `has-[:focus-visible]:`, and a disabled third card (50% opacity, not-allowed cursor).
- from: new

#### toggles-checkbox-tile-grid
- name: Toggles — Checkbox tile grid
- kind: element
- tags: grid, form, compact
- structure: A fieldset with a text-sm font-semibold legend and a one-line hint (aria-describedby), then seven 56px day tiles (`<label>`, rounded-md, border neutral-300, an sr-only checkbox named with the full day, a visible three-letter abbreviation in text-sm font-medium and a 14px check icon whose opacity follows `has-checked:`), followed by a text-xs neutral-500 note. Below 640px the tiles form a 4-column grid (two rows: 4 + 3), and from 640px a single 7-column row, with 8px gaps; three tiles start checked and one is disabled. Root `w-72 sm:w-[28rem]`, about 200px tall below 640px and 140px from 640px. States: hover bg-neutral-50 on unchecked tiles, checked tiles filled neutral-900 with white text, FOCUS through `has-[:focus-visible]:`, and a disabled tile at 50% opacity.
- from: toggles-delivery-days, toggles-keeper-training, toggles-waterjet-cutting

### tabs (6 patterns; 18 retired components reviewed)

#### tabs-underline-panels
- name: Tabs — Underline with panels
- kind: element
- tags: row, compact
- structure: A radio group (`role="radiogroup"` with an aria-label) of three sr-only radios whose labels form a tab row on a 1px neutral-200 bottom border: tabs 40px tall, text-sm font-medium neutral-500; the checked tab turns neutral-900 with a 2px neutral-900 underline over the border (`-mb-px`). One panel per tab sits 16px below and only the panel matching the checked radio shows (`hidden group-has-[#id:checked]:block`): a text-base font-semibold heading, two lines of text-sm body and three label/value rows divided by hairlines. Root `w-72 sm:w-[28rem]`, about 240px tall; below 640px the tabs are equal thirds with centred text, and from 640px they size to their labels with 24px gaps. States: unchecked hover (neutral-700 text, neutral-300 underline), checked, FOCUS on the label through `has-[:focus-visible]:`, and native arrow-key switching between radios (not `role="tablist"`, which needs a script).
- from: tabs-recipe-notebook, tabs-vineyard-parcels, tabs-equestrian-roster

#### tabs-segmented-pills
- name: Tabs — Segmented pills with panel
- kind: element
- tags: row, list, compact
- structure: A bg-neutral-100 rounded-lg p-1 track holding three equal 32px radio-backed segments (rounded-md, text-sm; the checked segment is bg-white, shadow-sm, neutral-900 font-medium, the others neutral-600). 16px below, one panel per segment, shown with `group-has-[#id:checked]:`, holds a `role="list"` of three 56px rows: a 40px initials avatar, a title over text-xs meta, and a right-aligned time. Root `w-72 sm:w-80`, about 220px tall; nothing changes below 640px except the width. States: segment hover to neutral-900 text, checked, FOCUS on the label through `has-[:focus-visible]:`, and arrow-key switching.
- from: tabs-inbox-views, tabs-telemetry-window, tabs-travel-itinerary

#### tabs-vertical-rail
- name: Tabs — Vertical rail with panel
- kind: element
- tags: sidebar, icons, compact
- structure: A two-column grid: a rail of four radio-backed tabs stacked 4px apart (36px tall, rounded-md, a 16px leading icon and a text-sm label) and a panel column behind a 1px neutral-200 left border with 16px left padding (a heading, two lines of body and an outlined secondary action), one panel per tab shown with `group-has-[#id:checked]:`. Below 640px the rail is 44px wide and icon-only (labels `sr-only sm:not-sr-only`, so the name stays); from 640px it is 160px wide with visible labels. Root `w-72 sm:w-[32rem]`, about 200px tall. States: hover bg-neutral-50, checked bg-neutral-100 neutral-900 font-medium, FOCUS on the label, and arrow-key switching.
- from: tabs-document-outline, tabs-origami-folds, tabs-cement-batches

#### tabs-enclosed-panel
- name: Tabs — Enclosed tabs on a bordered panel
- kind: element
- tags: row, layered, compact
- structure: A row of three radio-backed folder tabs (40px, px-4, text-sm, rounded-t-md, 1px neutral-200 border, `-ml-px` overlaps) sitting on a bordered panel (rounded-b-lg rounded-tr-lg, border neutral-200, bg-white, p-4); unchecked tabs are bg-neutral-50 neutral-600, and the checked tab is bg-white neutral-900 with a white bottom border, so it merges into the panel (`relative z-10 -mb-px`). Each panel holds a text-base font-semibold heading, two lines of text-sm body and an outlined secondary action, one per tab through `group-has-[#id:checked]:`. Root `w-72 sm:w-[28rem]`, about 200px tall; the three tabs fit at 288px, so nothing changes below 640px except the width. States: hover bg-white neutral-900, checked, and FOCUS on the label raised to z-20 so the ring shows over the panel edge.
- from: tabs-brutalist, tabs-cinema-reel, tabs-network-rack

#### tabs-bottom-icon-bar
- name: Tabs — Bottom bar with icons
- kind: element
- tags: stacked, icons, media, compact
- structure: A rounded-lg bordered frame: on top, a p-4 panel region (a text-base font-semibold heading, a line of text-sm neutral-500 meta and a 16:9 media placeholder), one panel per tab; below it, a bottom bar (border-t, 4-column grid) of four radio-backed tabs, each 56px tall with a 20px icon over a text-xs label. The checked tab is neutral-900 font-medium with a 2px top indicator bar, and the others are neutral-500; panels swap with `group-has-[#id:checked]:`. Root `w-72 sm:w-80`, about 290px tall at 288px and 310px at 320px; nothing changes below 640px except the width. States: hover neutral-900 text, checked, and an inset FOCUS outline (`-outline-offset-2`) on the label, so the frame's `overflow-hidden` cannot clip it.
- from: tabs-cricket-score, tabs-satellite-pass, tabs-cinema-reel

#### tabs-link-overflow
- name: Tabs — Link tabs with counts and More menu
- kind: element
- tags: row, layered, numbers, compact
- structure: A `<nav aria-label>` holding an underline row (1px neutral-200 bottom border) of 40px link tabs (text-sm font-medium neutral-500), each with a trailing count pill (rounded-full bg-neutral-100 px-1.5 text-xs tabular-nums); the current link has `aria-current="page"`, neutral-900 text and a 2px underline, and the row ends with a "More" tab that is the summary of a relative `<details open>`. Below 640px two links show and More lists the rest; from 640px four links show (the extra links are `hidden sm:flex` in the row and `sm:hidden` in the menu). More's panel sits absolutely below it, right-aligned, w-48, rounded-md border shadow-lg p-1, with three 36px links; root `relative w-72 sm:w-[32rem]` with a fixed height of about 190px that reserves the open panel. States: link hover (neutral-700 text, neutral-300 underline), current, FOCUS on links and summary, and the chevron turning 180° when open.
- from: tabs-brutalist, tabs-civic-petitions

### dropdowns (6 patterns; 18 retired components reviewed)

#### dropdowns-action-menu
- name: Dropdowns — Action menu with sections and shortcuts
- kind: element
- tags: layered, icons, compact
- structure: A relative `<details open>` whose summary is a 40px outlined button ("Options" plus a 16px chevron); its panel sits absolutely 8px below, left-aligned, w-56, rounded-md border neutral-200 bg-white p-1 shadow-lg. The panel holds three 32px items (a 16px icon, a label and a right-aligned `<kbd>` shortcut in font-mono text-xs neutral-500), a 1px divider, a text-xs neutral-500 section heading over two items (one disabled), another divider, and a destructive "Delete" item marked by a trash icon and its wording. Root `relative w-72 sm:w-80` with a fixed height of about 300px that reserves the open panel; nothing changes below 640px. States: summary hover and FOCUS, the chevron turning 180° with `group-open:`, items hover and focus-visible bg-neutral-100 with an inset outline, the disabled item at 50% opacity; items are plain buttons in a `role="list"`, not `role="menu"`.
- from: dropdowns-report-export, dropdowns-dark

#### dropdowns-account-menu
- name: Dropdowns — Account menu with profile header
- kind: element
- tags: layered, icons, compact
- structure: A right-aligned relative `<details open>` whose summary is a 40px ghost trigger with a 32px initials avatar, the name (text-sm font-medium) and a chevron; the panel sits absolutely 8px below, right-aligned, w-64, border, shadow-lg, p-1. The panel opens with a profile header (name text-sm font-semibold over an email in text-sm neutral-500, px-3 py-2, bottom hairline), then a `role="list"` of three 36px links with 16px leading icons, a divider and a full-width 36px "Sign out" button with an icon. Root `relative w-72 sm:w-80` with a fixed height of about 280px; below 640px the trigger shows only the avatar and chevron (the name is `hidden sm:inline`, and the avatar keeps an sr-only name). States: trigger hover bg-neutral-50 and FOCUS, chevron rotation when open, links and sign-out hover bg-neutral-100 with FOCUS, and a current link (`aria-current`) in font-medium.
- from: dropdowns-account-menu, dropdowns-project-switcher

#### dropdowns-select-descriptions
- name: Dropdowns — Select menu with descriptions
- kind: element
- tags: layered, form, compact
- structure: A visible label ("Plan") over a relative `<details open>` whose summary is styled as a 40px input (border neutral-300, rounded-md, current value on the left, a 16px up-down chevron on the right); the panel sits absolutely 4px below at full width (border, shadow-lg, p-1) and holds a fieldset (sr-only legend) of three radio option rows (px-3 py-2): a title (text-sm font-medium) over a one-line description (text-xs neutral-500), with a 16px check icon on the right shown only when checked; the third option is disabled. The summary's value follows the checked radio with no script by swapping spans with `group-has-[#option:checked]:inline`. Root `relative w-72 sm:w-80` with a fixed height of about 250px; nothing changes below 640px except the width. States: option hover bg-neutral-100, checked (check icon plus font-semibold), inset FOCUS through `has-[:focus-visible]:`, disabled, summary FOCUS and the open chevron.
- from: dropdowns-shipping-selector, dropdowns-chess-lessons, dropdowns-typography-menu

#### dropdowns-filter-checkboxes
- name: Dropdowns — Filter menu with checkboxes
- kind: element
- tags: layered, form, compact
- structure: A relative `<details open>` whose summary is a 36px outlined button with a 16px filter icon, a label ("Status"), a count badge ("2") and a chevron; the panel sits absolutely 8px below, w-64, border, shadow-lg, p-2. The panel holds a 36px search input with a leading icon and an sr-only label, a fieldset of four 32px checkbox rows (a 16px native checkbox with `accent-neutral-900`, a label and a right-aligned text-xs tabular-nums count, two rows checked), a divider, and a footer with a "Clear" text button on the left and a 32px primary "Apply" on the right. Root `relative w-72 sm:w-80` with a fixed height of about 290px; nothing changes below 640px. States: row hover bg-neutral-100, checkbox and input FOCUS, checked, button hovers, and the open chevron; the host's script wires Clear and Apply.
- from: dropdowns-recycling-streams, dropdowns-report-export

#### dropdowns-tile-picker
- name: Dropdowns — Picker with option tiles
- kind: element
- tags: layered, grid, form, compact
- structure: A visible label over a relative `<details open>` whose summary is styled as a 40px input (a 16px clock icon, the selected value and a chevron); the panel sits absolutely 4px below at full width (border, shadow-lg, p-3) with a text-xs neutral-500 heading ("Today, Mar 14"), a 3-column grid (8px gaps) of six 40px radio tiles (text-sm tabular-nums times) and a one-line text-xs note linked by aria-describedby. The checked tile fills neutral-900 with white text, one tile is disabled (50% opacity, line-through) and the summary value swaps with `group-has-[#id:checked]:` as in the select. Root `relative w-72 sm:w-80` with a fixed height of about 250px; the grid stays three columns at every width. States: tile hover bg-neutral-50, checked, FOCUS through `has-[:focus-visible]:`, disabled, summary FOCUS and the open chevron.
- from: dropdowns-pharmacy-pickup, dropdowns-laundry-cycle, dropdowns-flower-stems

#### dropdowns-nav-flyout
- name: Dropdowns — Navigation flyout with descriptions
- kind: element
- tags: layered, icons, list
- structure: A row of three nav items: a relative `<details open>` whose summary is a 36px text trigger ("Product" plus a chevron) and two plain links ("Pricing", "Docs"). The flyout sits absolutely 8px below the row's left edge at the root's full width (rounded-lg, border, shadow-lg, overflow-hidden): a p-2 `role="list"` of three link rows (p-3, flex, 12px gap: a 40px icon tile, a text-sm font-semibold title over a one-line text-sm neutral-500 description of at most about 28 characters) and a bg-neutral-50 footer band (border-t, px-4 py-3) with two text links. Root `relative w-72 sm:w-[24rem]` with a fixed height of about 300px; nothing changes below 640px except the width. States: summary and nav-link hover and FOCUS, chevron rotation when open, and flyout rows that hover bg-neutral-50 with FOCUS.
- from: dropdowns-wine-vintages, dropdowns-demolition-permits, dropdowns-balloon-flights

## Group: App UI

### login (7 patterns; 18 retired components reviewed)

#### login-centered-card
- name: Login — Centred card
- kind: section
- tags: centered, form, compact
- structure: A bg-neutral-50 section (py-16 sm:py-24, px-6) centres one white bordered card, max-w-sm (384px), p-6 sm:p-8. The card stacks a logo placeholder, h1 and one-line lede, then a form: Email, Password (its label row carries a right-aligned "Forgot password?" text link), a "Remember me" checkbox row and a full-width primary submit; a centred "No account? Sign up" meta line sits 24px under the card. One column at every width (below 640px the card fills the width inside the 24px gutters); only hover and focus-visible states.
- from: login-studio-portal, login-reading-room

#### login-split-media
- name: Login — Split with media panel
- kind: section
- tags: split, media, form
- structure: A full-width section at least 720px tall; from 1024px two equal columns: left a media placeholder inset 16px that fills the column height (rounded-lg), right a flex column with the logo at the top, the form block (max-w-sm: h1, lede, Email, Password, remember/forgot row, full-width submit, sign-up line) centred vertically, and a footer row at the bottom (copyright left, Privacy and Terms links right). Below 1024px the media becomes a band above the form (192px tall, 288px from 640px) and the logo, form and footer stack in one column with 24px side padding (40px from 640px).
- from: login-split-image, login-horse-studbook, login-flower-market

#### login-split-context
- name: Login — Context column beside form
- kind: section
- tags: asymmetric, list, form
- structure: A max-w-6xl container; from 1024px a 1.4fr/1fr grid (gap-16, items centred). Left: eyebrow, section headline, lede, then a list of three rows split by hairlines (icon tile + item title + one-line detail, e.g. what the account gives access to or system status). Right: a bordered card (p-6 sm:p-8) with form title, Email, Password, forgot link, full-width submit and a hint line under a hairline. Below 1024px the context column stacks above the card with a 48px gap; the list stays one column.
- from: login-developer-console, login-workspace-switch, login-hearing-care

#### login-card-on-media
- name: Login — Card over full-bleed media
- kind: section
- tags: layered, media, form
- structure: A section at least 640px tall whose background is a full-bleed media placeholder (absolute inset-0, bg-neutral-200, role="img"); a white card (max-w-sm, p-8, rounded-lg, shadow-lg) sits on top, vertically centred, pushed to the right edge of a max-w-6xl container from 1024px and centred below that. The card holds logo, h1, Email, Password, full-width submit and a sign-up link. Below 640px the media shrinks to a 160px band above the card, and the card drops its shadow and fills the width.
- from: login-snowmaking-console, login-dive-log

#### login-magic-link
- name: Login — Passwordless email link
- kind: section
- tags: centered, form, icons, spacious
- structure: A centred max-w-md column with no card (py-24): a 48px icon tile with an envelope glyph, h1, a lede explaining that a sign-in link will be emailed, then a form with a single Email field and a full-width "Email me a sign-in link" primary button, and a meta line about link expiry. Below sit a `<details>` "Didn't get the email?" disclosure (three short tips in a list) and a top-ruled footer with a "Sign in with a password instead" text link. One column at every width; only the side gutters change.
- from: login-email-link

#### login-sso-first
- name: Login — Single sign-on first
- kind: section
- tags: centered, list, form
- structure: A centred bordered card, max-w-sm. After the logo and h1 come three stacked full-width secondary buttons, each a 20px provider glyph placeholder plus "Continue with provider name" (the last reads "Continue with SSO"), then an "or" divider (hairlines either side of meta text), then one Email field with a "Continue" primary button (password comes on a later step) and a terms meta line. A "Use a different workspace" text link sits under the card. One column at every width.
- from: new (the provider-button row and divider appear in login-split-image)

#### login-inline-row
- name: Login — Inline credential row
- kind: section
- tags: stacked, row, form, compact
- structure: A max-w-6xl band: from 1024px a 1.6fr/1fr top row with the h1 and lede on the left and a short status or note on the right (bottom-aligned), then under a hairline a form whose Email, Password and submit sit in one row (`grid-cols-[1fr_1fr_auto]`, aligned to the bottom so the labels sit above), with "Forgot password?" and "Create account" links in a row beneath. Below 1024px the heading block stacks and the three controls stack at full width (submit full-width); links wrap.
- from: login-satellite-tasking, login-animation-dailies

### signup (7 patterns; 18 retired components reviewed)

#### signup-centered-social
- name: Sign-up — Centred card with providers
- kind: section
- tags: centered, form, compact
- structure: A bg-neutral-50 section centres a white bordered card, max-w-md, p-6 sm:p-8. A header row puts the logo on the left and "Have an account? Log in" on the right; then h1 and lede, two secondary provider buttons side by side (grid-cols-2, gap-3), an "or" divider, and a form: Name, Email (with an error-text slot tied by `aria-describedby`), Password (with a rules hint), full-width submit and a centred terms meta line. One column at every width; below 640px the card fills the width inside 16px gutters and the provider buttons stay two-up with shortened labels.
- from: signup-card-gradient

#### signup-split-benefits
- name: Sign-up — Benefits panel beside form
- kind: section
- tags: split, form, icons
- structure: A max-w-6xl container; from 1024px two equal columns (gap-12). Left is a bg-neutral-50 rounded-lg panel (p-8 sm:p-10) with a badge ("Free 14-day trial"), section headline, three benefit rows split by hairlines (check icon + title + one line) and a closing meta note ("No card required"); right is the form: title, Workspace name, Email, Password with hint, a required terms checkbox, full-width submit and an "Already have an account? Log in" line. Below 1024px the form comes first and the benefits panel stacks under it.
- from: signup-workspace-starter, signup-course-registration, signup-dog-training

#### signup-form-aside
- name: Sign-up — Form with next-steps aside
- kind: section
- tags: asymmetric, form, list
- structure: A max-w-6xl container; from 1024px a 2fr/1fr grid aligned to the top (gap-8). The form card holds heading and lede, paired rows (First and Last name, City and Postcode, two-up from 640px), Email, Phone, one select, a consent checkbox and the submit. The aside is a bg-neutral-50 card with a "What happens next" heading, an ordered list of three steps (24px number circle + title + one line) and a `<details>` "How we use your data" disclosure. Below 1024px the aside stacks under the form; below 640px the paired fields stack.
- from: signup-donor-registration, signup-marathon-entry, signup-firefighter-intake

#### signup-plan-choice
- name: Sign-up — Plan choice then details
- kind: section
- tags: stacked, grid, form, numbers
- structure: One max-w-5xl form: a title row (h1 + lede left, "Log in" link right from 768px), then a fieldset of three radio cards (one column, three from 768px), each a `<label>` holding plan name, price ("$29 / month"), one-line description and a native radio; the checked card gets a neutral-900 border via `has-[:checked]:` and an outline via `has-[:focus-visible]:`. Below it Name, Email and Company sit in one row from 768px, then a strip with the consent checkbox on the left and the submit on the right. Below 768px everything stacks; below 640px the submit goes full width.
- from: signup-cider-share, signup-campus-hackathon, signup-chess-evenings

#### signup-waitlist-inline
- name: Sign-up — Waitlist with inline email
- kind: section
- tags: centered, row, form, spacious
- structure: A centred max-w-2xl column (py-24): a badge ("Opens Mar 14"), section headline, lede, then a form whose Email field (flex-1) and "Join the waitlist" primary button share one row from 640px, a hint line under it, and a social-proof row of three overlapping avatar placeholders with "1,284 people have joined". Below 640px the field and button stack at full width; nothing else changes.
- from: signup-event-waitlist, signup-weekend-digest

#### signup-invite-accept
- name: Sign-up — Accept an invitation
- kind: section
- tags: centered, form, compact
- structure: A centred bordered card (max-w-md, p-6 sm:p-8) whose header puts a 48px workspace-initial tile beside "Alex Rivera invited you to join Workspace name" and a role meta line, over a hairline. The form shows the invited Email read-only (bg-neutral-50), then Full name, Password with hint, a required terms checkbox and a full-width "Accept and join" submit; a "Not you? Use another account" meta link closes the card. One column at every width; the header text wraps beside the non-shrinking tile.
- from: signup-team-invitation

#### signup-multi-step
- name: Sign-up — Multi-step with progress
- kind: section
- tags: stacked, row, form
- structure: A max-w-2xl column: an ordered step indicator of three steps in a row (number circle + label, joined by hairlines; the current step has `aria-current="step"` and a filled neutral-900 circle, the finished step shows a check), then a bordered card holding the current step's fieldset (legend, Company name, Team size select, Role select) and a footer row with a "Back" secondary link on the left and a "Continue" primary on the right. The markup is static and shows step 2. Below 640px the labels of the other steps are visually hidden so only "Step 2 of 3: Workspace" shows, and the footer stacks with Continue first at full width.
- from: new

### settings (7 patterns; 18 retired components reviewed)

#### settings-sidebar-sections
- name: Settings — Sidebar navigation with sections
- kind: section
- tags: sidebar, form, icons
- structure: A bg-neutral-50 section, max-w-7xl: h1 and meta line, then from 1024px a 208px nav (six links with 16px icons; the current link has `aria-current="page"` and a white fill) beside one white card. The card holds two sections split by a hairline, each with a 224px title-and-description column beside its controls from 768px (section 1: text fields two-up from 640px, a prefixed URL field and two selects; section 2: four switch rows, label + hint on the left and a switch on the right built from a native checkbox with `role="switch"` and `peer-checked:` styles), and a footer with "Last saved" meta on the left and Discard/Save on the right. Below 1024px the nav becomes a link grid above the card (two columns, three from 640px); below 768px section titles stack above their controls.
- from: settings-panel

#### settings-described-rows
- name: Settings — Described rows
- kind: section
- tags: asymmetric, list, form
- structure: A max-w-4xl form: eyebrow, h1 and lede, then three settings rows split by hairlines, each a 1fr/2fr grid from 768px with an h3 and a one- or two-sentence description on the left and the controls on the right (row 1: two checkboxes with hints; row 2: a select with hint; row 3: a text input plus a two-option radio group). A ruled footer with a meta note on the left and Save on the right ends the form. Below 768px each row stacks title, description, then controls.
- from: settings-workspace-access, settings-newsroom-policy, settings-fleet-capture

#### settings-stacked-cards
- name: Settings — Stacked cards with save rows
- kind: section
- tags: stacked, form, compact
- structure: A max-w-3xl column of three bordered cards 24px apart, each its own `<form>` with a body (p-6: h2, one-line description, controls) and a footer row (bg-neutral-50, top hairline, px-6 py-4) with a hint on the left and that card's Save button on the right. Card 1 Profile: 64px avatar placeholder with Change and Remove buttons, First/Last name two-up from 640px, Email and a Bio textarea with a character hint; card 2 Password: current and new password fields; card 3 Notifications: three switch rows. Below 640px each footer stacks the hint above a full-width Save.
- from: settings-account-profile, settings-notification-inbox

#### settings-preview-split
- name: Settings — Live preview beside controls
- kind: section
- tags: split, media, form
- structure: A max-w-7xl form: h1 and lede, then from 1024px a 1.2fr/1fr grid (gap-12, top-aligned). Left: a 4:3 media placeholder standing for the live preview, `lg:sticky lg:top-8`, with a caption line under it. Right: a fieldset of three radio cards (swatch placeholder + label; checked card gets a neutral-900 border via `has-[:checked]:`), two selects, a checkbox with hint, and a footer with Reset (type="reset") and Save. Below 1024px the preview stacks above the controls and is not sticky; below 640px the radio cards stack.
- from: settings-camera-privacy, settings-reader-comfort, settings-appearance-studio

#### settings-master-detail
- name: Settings — Item list with detail panel
- kind: section
- tags: sidebar, list, form
- structure: A max-w-7xl form: h1 and lede, then from 1024px a 352px fieldset of selectable rows beside a flexible bg-neutral-50 detail panel (gap-12). Each row is a `<label>` with an avatar placeholder, name and meta line and a native radio; the checked row gets a white fill and neutral-900 border via `has-[:checked]:` and an outline via `has-[:focus-visible]:`. The panel holds a legend naming the selected item, a description, three checkbox rows with hints and a select; a ruled footer under both columns has a meta note and Save. Below 1024px the list stacks above the panel as full-width rows.
- from: settings-family-listening, settings-rota-handover, settings-crew-rest

#### settings-billing-overview
- name: Settings — Plan and billing overview
- kind: section
- tags: asymmetric, numbers, table
- structure: A max-w-5xl section: a header row (h1 + lede left, "Renews Mar 14" badge right), then from 1024px two cards at 3fr/2fr: Current plan (plan name, "$29 / month", a usage bar drawn as a neutral-200 track with a neutral-900 fill plus visible "8 of 10 seats" text, "Change plan" primary and "Compare plans" link) and Payment method (card glyph tile, "Card ending 4242", expiry meta, billing email, "Update" secondary). Below them an Invoices table (Date, Description, Amount right-aligned, Status badge, Download link naming its invoice) with four rows in a focusable horizontal-scroll region. Below 1024px the cards stack; below 640px the table scrolls sideways.
- from: settings-billing-summary

#### settings-danger-zone
- name: Settings — Danger zone
- kind: section
- tags: stacked, list, form
- structure: A max-w-3xl column: section heading and description, then a bordered card titled "Danger zone" with three rows split by hairlines, each with a title and one-line consequence on the left and an outlined action on the right (Transfer ownership, Archive workspace, Delete workspace). The delete row is a `<details>` whose `<summary>` is the whole row (text plus a button-styled span); opening it reveals a bg-neutral-50 confirm panel with a warning-icon line, an input labelled "Type the workspace name to confirm" and a filled "Delete permanently" button. No hue: the danger is carried by copy, the warning icon and the neutral-900 outline. Below 640px each action stacks under its text at full width.
- from: new

### data-table (7 patterns; 18 retired components reviewed)

#### data-table-toolbar-pagination
- name: Data table — Toolbar, tabs and pagination
- kind: section
- tags: stacked, table, compact
- structure: A max-w-7xl section: a header row (h2 + one-line summary left; Export secondary and New item primary right), four status tab links with count badges over a hairline (current has `aria-current` and a 2px neutral-900 underline), and a toolbar with a search input with icon, a Status select and a "More filters" secondary button. Then a rounded bordered region (`role="region"`, `tabIndex={0}`, `overflow-x-auto`) holding a six-column table (ID link, name over a secondary line, date, two right-aligned numeric columns, status badge) with a sort link and chevron in every header and eight rows, and a footer with "Showing 1–8 of 64" on the left and pagination on the right (Previous, 1, 2, 3, …, 8, Next; current has `aria-current="page"`). Below 640px the tab counts and the Previous/Next words become visually hidden, the toolbar stacks, and the table keeps its natural width and scrolls sideways.
- from: data-table

#### data-table-stacked-cards
- name: Data table — Rows become cards on mobile
- kind: section
- tags: stacked, table, list
- structure: A max-w-5xl section: header (h2, description, a text link right) and a strip of two or three inline facts over a hairline, then a native table with an identity column (avatar placeholder, name, email), Role, Status badge, Last active and a trailing "Edit" link naming its row; five rows and a count footer. Below 768px the table, rows and cells switch to block/grid display with explicit table roles kept: each row becomes a bordered card, the identity cell spans the top, and every other cell shows a visible `aria-hidden` column label beside its value in a two-column grid.
- from: data-table-team-directory, data-table-deployments-console, data-table-invoice-ledger

#### data-table-row-selection
- name: Data table — Row selection with bulk actions
- kind: section
- tags: stacked, table, form, compact
- structure: A max-w-7xl section: header (h2 + description), then a bordered `group` container with a bulk-action bar above the table ("Bulk actions for selected rows" plus Archive, Assign and Delete secondary buttons) that stays `invisible` until a row is checked (`group-has-[:checked]:visible`, so the hidden buttons are out of the tab order). The table's first column holds a native checkbox per row labelled "Select <item name>"; checked rows fill neutral-50 via `has-[:checked]:`; then name, owner, status badge, date and a right-aligned amount across six rows. No select-all or live count (those need script). Below 768px the owner and date columns hide (`hidden md:table-cell`), leaving checkbox, name, status and amount.
- from: data-table-admissions-review

#### data-table-expandable-rows
- name: Data table — Expandable rows
- kind: section
- tags: stacked, table, list
- structure: A max-w-5xl section: header, then a bordered list (`role="list"`) under an `aria-hidden` column-header row; each item is a `<details>` whose `<summary>` uses the same grid as the header (chevron, Name, Owner, Updated, right-aligned Amount, with visually hidden labels in each cell) and whose open body is a bg-neutral-50 panel with a two-column `<dl>` of four extra fields and two small actions. Five rows; the second is open by default; the chevron rotates 90° when open (`group-open:`). Below 768px the summary shows only chevron, name and amount, and the hidden columns appear inside the open panel instead.
- from: data-table-cellar-catalogue

#### data-table-sidebar-filters
- name: Data table — Filter sidebar
- kind: section
- tags: sidebar, table, form
- structure: A max-w-7xl section: header (h2, result count, Export). From 1024px a 256px filter sidebar beside the table (gap-8): a search input, three filter groups as `<details>` (Status open by default; Owner and Date closed), each with three or four checkboxes plus counts, and a "Clear filters" link; the main column has a row of applied-filter badges (each with a remove link naming its filter) above a bordered five-column, six-row table and a count footer. Below 1024px the sidebar stacks above the table and its filter groups sit in a three-column row from 640px (stacked below); below 640px the table scrolls sideways in a focusable region.
- from: data-table-admissions-review, data-table-trial-enrolment, data-table-vaccine-stock

#### data-table-metrics-header
- name: Data table — Summary metrics above table
- kind: section
- tags: stacked, numbers, table
- structure: A max-w-6xl section: header (h2, description, text link), then one bordered box of three stat cells split by hairlines (label, 30px tabular figure, change meta). Below it a five-column table with right-aligned tabular numeric columns, five rows and a semibold `<tfoot>` totals row, then an "Updated Mar 14" meta line. Below 640px the stat cells stack; below 768px the table scrolls sideways in a focusable region with its first column sticky (`sticky left-0 bg-white`) so each row stays identifiable.
- from: data-table-inventory-stock, data-table-crop-yields, data-table-grid-outages

#### data-table-priority-columns
- name: Data table — Dense table with priority columns
- kind: section
- tags: stacked, table, numbers, compact
- structure: A max-w-4xl section: header row (h2 + meta left; segmented range links right, current has `aria-current`), then a compact table (px-3 py-2 cells, text-sm, hairline rows, hover fill neutral-50) inside a 384px-tall focusable scroll region with a sticky header row; twelve rows of rank, name with a 24px avatar placeholder, four right-aligned tabular numeric columns and a "Recent" column of five small status badges. Columns are ranked: below 768px the two lowest-priority columns hide (`hidden md:table-cell`) and cell padding drops to 8px, so it stays a real table at 320px with no sideways scroll.
- from: data-table-league-standings, data-table

### empty-state (7 patterns; 18 retired components reviewed)

#### empty-state-centered-icon
- name: Empty state — Centred icon with action
- kind: element
- tags: centered, icons, compact
- structure: A bordered card, 288px wide (384px from 640px), p-6, text centred: a 48px icon tile (folder-plus glyph), item-title heading 16px below, a two-line description, then a primary action ("Create your first item") and a secondary text link ("Import from a file") stacked 12px apart. The same layout at every width; about 300px tall, within the 384px frame.
- from: empty-state-first-project, empty-state-team-invitation, empty-state-inbox-cleared

#### empty-state-no-results
- name: Empty state — No results with suggestions
- kind: element
- tags: stacked, list, icons
- structure: A left-aligned bordered panel, 288px wide (384px from 640px), p-6: a row with a 40px search icon tile and a badge quoting the query, a heading ("No results for this search"), a `role="list"` of three suggestion rows (small bullet icon + one short line each), then an action row with a "Clear filters" secondary button and a "Browse all items" text link (wrapping if needed). Same layout at every width; stays under 340px tall.
- from: empty-state-search-refinement

#### empty-state-error-retry
- name: Empty state — Error with retry
- kind: element
- tags: stacked, icons, compact
- structure: A bordered panel, 288px wide (384px from 640px), p-6: a status row (alert icon + meta label "Couldn't load"), heading, one-sentence explanation, then "Try again" primary and "Status page" secondary side by side (grid-cols-2 at every width), and a `<details>` "Technical details" that opens a bg-neutral-50 box with a mono error code and timestamp. Closed by default; open it still fits the 384px frame, so keep the explanation to two lines.
- from: empty-state-offline-library

#### empty-state-permission
- name: Empty state — Access required
- kind: element
- tags: centered, icons, compact
- structure: A bordered card, 288px wide (384px from 640px), p-6, centred: a 40px lock icon tile, a short heading ("You need access", at most four words), a two-line explanation, a left-aligned owner box (bordered, p-3: avatar placeholder + "Alex Rivera" + "Owner · name@example.com"), a full-width "Request access" primary and a "Switch account" meta text link. Same layout at every width; about 340px tall.
- from: new

#### empty-state-skeleton-preview
- name: Empty state — Ghost rows preview
- kind: element
- tags: stacked, list, compact
- structure: A bordered panel, 288px wide (384px from 640px), p-6: an `aria-hidden` preview of three ghost rows (each a 32px neutral-100 square plus two neutral-100 bars at 60% and 40% width; the third row is a dashed neutral-300 slot with a plus glyph) showing where content will appear, then a heading, a two-line description and a full-width primary action. Same layout at every width; about 340px tall.
- from: empty-state-family-chores, empty-state-meal-week, empty-state-photo-book

#### empty-state-media-side
- name: Empty state — Illustration beside text
- kind: element
- tags: asymmetric, media, compact
- structure: Below 640px a 288px card (p-6), stacked and centred: a 128px-tall media placeholder for an illustration, heading, one-line help text, then a primary action and a secondary text link stacked 12px apart (about 370px tall). From 640px the card is 608px wide (p-8) and becomes a flex row (items centred, gap-7): a 160px square illustration placeholder on the left, and a left-aligned text column with heading, help line and the two actions in a row (about 224px tall).
- from: empty-state-playful, empty-state-travel-journal

#### empty-state-first-run-checklist
- name: Empty state — First-run checklist
- kind: element
- tags: stacked, list, compact
- structure: A bordered panel, 288px wide (384px from 640px), p-5: a meta label ("Get started · 1 of 3 done") over a thin progress bar drawn as a neutral-200 track with a neutral-900 fill, a heading and a one-line description, then an ordered `role="list"` of three step rows, each a full-row link (24px number circle — the done step shows a check and a "Done" badge — step title, chevron icon) with hover fill neutral-50. The rows are the actions, so there is no separate button; about 320px tall.
- from: new

### dashboard (7 patterns; 18 retired components reviewed)

#### dashboard-sidebar-shell
- name: Dashboard — App shell with sidebar
- kind: section
- tags: sidebar, grid, numbers
- structure: A full-width section; from 1024px a 240px bg-neutral-50 sidebar (logo, six nav links with 20px icons — current has `aria-current="page"` and a white fill — a second group of three project links, and a user row with avatar pinned to the bottom) beside the main column. Main: a top bar (search input with icon, notifications icon button, avatar) over a hairline; a page header (h1 + date meta, "New report" primary); a KPI grid of four cards (label, 30px figure, change meta; two columns from 640px, four from 1024px); a chart panel (title, legend, `aria-hidden` inline SVG of twelve bars in `currentColor` with a visually hidden summary); and a five-row recent-activity table. Below 1024px the sidebar becomes a top strip: logo row, then the main nav links in one horizontally scrolling row; the project group and user row hide.
- from: new

#### dashboard-kpi-chart-list
- name: Dashboard — KPI row, chart and ranked list
- kind: section
- tags: asymmetric, grid, numbers
- structure: A max-w-7xl section: a header row (h1 + meta left; segmented range links "Today / 7 days / 30 days" right, current has `aria-current`), then a four-cell KPI `<dl>` (label, figure with unit, change against the previous period with an arrow icon and visually hidden "Up"/"Down"). From 1024px a three-column grid follows: a chart panel spanning two columns (h2, summary, `aria-hidden` SVG bar chart placeholder with gridlines and axis labels, plus a visually hidden text summary) and a list panel (h2 + ordered list of five items: name, value and an 8px bar sized relative to the largest). KPIs are one column below 640px, two from 640px, four from 1024px; panels stack below 1024px.
- from: dashboard-stats-dark, dashboard-sales-pipeline, dashboard-project-command

#### dashboard-split-panels
- name: Dashboard — Two panels, trend and list
- kind: section
- tags: split, numbers, list
- structure: A max-w-6xl section: a wrapping header (h1, date meta, status badge) over a hairline, then from 1024px two equal bordered panels (gap-6, p-6). Left: label, 30px headline figure and a 128px-tall seven-bar chart placeholder (`aria-hidden` SVG, `currentColor`) with day labels. Right: h2 and four list rows split by hairlines (icon tile, name + meta, value or status badge on the right). A footer strip under both panels holds a meta line and a text link; below 1024px the panels stack; rows wrap their value under the name below 640px.
- from: dashboard-service-operations, dashboard-cashflow-report, dashboard-newsroom-pulse

#### dashboard-bento
- name: Dashboard — Bento overview
- kind: section
- tags: bento, numbers, media
- structure: A max-w-7xl section: header (h1 + meta, one primary action), then from 1024px a four-column grid of bordered tiles with ~160px rows: a line-chart tile spanning columns 1–2 and rows 1–2 (title, figure, `aria-hidden` SVG line placeholder), two single KPI tiles stacked in column 3, an activity tile spanning column 4 and rows 1–2 (four avatar rows), a progress tile spanning columns 1–2 in row 3 (three labelled progress bars), and a tile spanning columns 3–4 in row 3 with a media placeholder beside a short announcement and link. From 640px it is two columns (chart, activity, progress and media tiles span both; the KPI tiles sit side by side); below 640px every tile stacks.
- from: new

#### dashboard-main-rail
- name: Dashboard — Main list with summary rail
- kind: section
- tags: sidebar, list, numbers
- structure: A max-w-7xl section: a wrapping header over a hairline, then from 1024px a flexible main column beside a 320px rail (gap-8). Main: h2 with a filter text link, then five schedule rows split by hairlines, each a grid of a 56px time column, title + meta, and a status badge. Rail (bg-neutral-50, p-6): label, 48px key figure, a two-column `<dl>` of four facts and a `<details>` "More context" note. Below 1024px the rail stacks above the list at full width; below 640px each row's badge moves under its title.
- from: dashboard-shoot-day, dashboard-transit-load, dashboard-vet-rounds

#### dashboard-tile-board
- name: Dashboard — Status tile board
- kind: section
- tags: stacked, grid, numbers, compact
- structure: A max-w-7xl section: a header row (h1 + updated time), then a summary strip of four inline counts (Active, Idle, Offline, Total) that doubles as the legend, then a grid of twelve equal tiles (three columns, four from 640px, six from 1024px). Each tile is a link with an ID, name and status word; the status also shows without hue: neutral-900 fill with white text for Active, a solid border for Idle, a dashed border for Offline; hover darkens the border. Tiles have no minimum width, so three columns fit at 320px.
- from: dashboard-call-floor, dashboard-wind-array, dashboard-kitchen-pass

#### dashboard-activity-feed
- name: Dashboard — Activity feed
- kind: section
- tags: stacked, list, compact
- structure: A max-w-3xl column: a header (h1 + filter tab links All, Comments, Changes; current has `aria-current`), then the feed grouped under day headings ("Today", "Yesterday"), each group an ordered `role="list"` of timeline items joined by a vertical hairline: a 32px avatar placeholder, a sentence ("Alex Rivera updated Item name", with the item as a link) and a time meta on the right. One item carries an inline quoted comment box (bg-neutral-50, p-4) and one a file chip; seven items in all, then a "Load older activity" secondary link. Below 640px the time moves under the sentence.
- from: new

