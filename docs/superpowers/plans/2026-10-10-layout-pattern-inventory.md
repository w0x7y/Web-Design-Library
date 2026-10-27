# Layout pattern inventory

Date: 2026-10-11

The current library has 389 patterns. The initial 183 replaced 478 retired components (spec: [layout patterns design](../specs/2026-10-10-layout-patterns-design.md), §8); another 156 add six layouts to each category, and 50 more bring every card, element and app UI category to 15 or 16. The original set came from clustering retired components by structure and adding canonical layouts they missed. `from` names retired components (in git history before the port) that show the structure.

The pattern folders are the source of truth for names, kinds and tags. Original entries retain their planned `structure`; the additional entries describe their built layout and responsive behavior.

## Group: Sections

### hero (14 patterns; 21 retired components reviewed)

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

#### hero-announcement-rail
- name: Hero — Announcement rail and wide pitch
- kind: section
- tags: sidebar, numbers, spacious
- structure: At 1024px, a 192px announcement rail sits beside a flexible pitch with a 32px gap and 1px divider. The max-w-6xl section has 24px side padding and 64px to 96px vertical padding. A two-column definition list follows the actions after 40px. Below 1024px the announcement becomes a horizontal block above the pitch with a bottom border. The fact row stays two columns and actions wrap. Display type steps at 640px and 1024px.
- from: new

#### hero-editorial-dual-media
- name: Hero — Editorial headline and paired media
- kind: section
- tags: asymmetric, media, spacious
- structure: A max-w-6xl container uses 24px side padding and 64px vertical padding, increasing to 96px at 640px. The upper grid becomes 2:1 at 1024px; the lower image pair becomes 2:1 at 640px with 24px gaps and bottom alignment. Both grids stack below their breakpoints. The primary image changes from 4:3 to 16:9 at 640px; the supporting image stays 4:3. The headline steps at 640px and 1024px.
- from: new

#### hero-form-sidebar
- name: Hero — Invitation with a request form
- kind: section
- tags: asymmetric, form, list
- structure: A max-w-6xl section becomes a 3:2 grid at 1024px with a 48px gap. The pitch contains the headline, lede and checklist; the form has a 1px border, 8px radius, 24px padding and vertically stacked 40px inputs. The form follows the pitch below 1024px. All fields and the submit button fill their column; the checklist stays one column. Vertical section padding increases at 640px.
- from: new

#### hero-pitch-checklist
- name: Hero — Pitch beside a benefit checklist
- kind: section
- tags: asymmetric, list, spacious
- structure: Use a max-w-6xl grid with 24px side padding, 64px vertical padding and a 48px gap. At 1024px, divide it 3:2 and align the pitch and neutral-50 benefit panel centrally. The panel has a 1px border, 8px radius and 24px padding. Below 1024px the panel follows the pitch. Headline sizes are 36px, 48px at 640px and 60px at 1024px. Actions wrap; benefits remain a single list.
- from: new

#### hero-stacked-proof-band
- name: Hero — Text hero above an endorsement band
- kind: section
- tags: stacked, row, spacious
- structure: A max-w-6xl section holds a max-w-4xl pitch and max-w-2xl lede. The proof band sits 48px below the actions with a 1px top border and 32px top padding. At 768px it uses equal columns with a 32px gap. The proof band stacks below 768px; its logo group stays two columns. Display type steps from 36px through 48px to 60px. Actions wrap without changing reading order.
- from: new

#### hero-video-caption-sidebar
- name: Hero — Video with an explanatory sidebar
- kind: section
- tags: asymmetric, media, sidebar
- structure: The headline spans a max-w-6xl section. A 32px-gap grid below it becomes 2:1 at 1024px. The left figure has a 16:9 video region and 12px caption gap; the right column has a 1px left divider and 32px inset. Below 1024px the sidebar follows the video and uses a top divider with 24px padding instead of a left divider. The video retains 16:9 at every width. Actions wrap.
- from: new

### navbar (14 patterns; 19 retired components reviewed)

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
- name: Navbar — Announcement, search and categories
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

#### navbar-brand-utility-stack
- name: Navbar — Brand beside stacked navigation
- kind: section
- tags: asymmetric, row, compact
- structure: At 768px, a 224px brand column sits beside flexible stacked navigation with a 24px gap. The utility row has a bottom border and 16px lower padding; the primary row follows after 20px. The header uses max-w-6xl and 24px padding. Below 768px the brand precedes the navigation stack. Both navigation rows align left and wrap. Utility and primary roles retain separate labelled nav elements.
- from: new

#### navbar-category-tile-strip
- name: Navbar — Brand row and category tiles
- kind: section
- tags: grid, icons, compact
- structure: A max-w-6xl header has a brand row and a category grid 24px below. The grid uses 12px gaps, two columns by default and four at 768px. Each destination has a 1px border, 8px radius and 16px padding. The category grid stays two columns below 768px and becomes four above it. The account link stays in the wrapping brand row; tile labels can wrap within their cells.
- from: new

#### navbar-breadcrumb-toolbar
- name: Navbar — Breadcrumb and section toolbar
- kind: section
- tags: row, layered, compact
- structure: A max-w-6xl header uses 24px padding and a flex row that wraps with 16px gaps. Breadcrumb segments wrap independently. The section menu is right-aligned, 176px wide and elevated with shadow-sm. The toolbar wraps at available width with breadcrumb context first. The menu stays within its 176px anchor width, and breadcrumb segments wrap without truncation.
- from: new

#### navbar-centered-brand-zones
- name: Navbar — Centered brand with three zones
- kind: section
- tags: row, centered, compact
- structure: The max-w-6xl header has 24px padding and a 24px-gap grid. At 768px, equal flexible outer columns surround an auto-width brand; the action group aligns to the right. Primary actions remain 44px tall. Below 768px the three zones stack in source order: destinations, brand, then account actions. Both link and action groups wrap to fit 320px viewports.
- from: new

#### navbar-split-menu-panel
- name: Navbar — Open two-column menu panel
- kind: section
- tags: split, list, spacious
- structure: A max-w-6xl header holds a brand row and a navigation panel separated by a 1px border and 24px padding. At 768px the panel becomes two equal columns with a 32px gap; resources form a two-column grid from 640px. The panel columns stack below 768px and resource destinations stack below 640px. The brand row wraps. All destinations stay visible at every width.
- from: new

#### navbar-sidebar-rail
- name: Navbar — Workspace sidebar rail
- kind: section
- tags: sidebar, list, compact
- structure: Use a max-w-6xl header with 24px padding. At 768px, a 192px navigation rail and flexible page context share a 32px gap. The rail has a right border and 24px inset; destinations use 8px vertical spacing. Below 768px the rail becomes a block above the page context with a bottom border. The destination list remains vertical, and the page action row wraps.
- from: new

### features (14 patterns; 20 retired components reviewed)

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

#### features-capability-matrix
- name: Features — Capability scope matrix
- kind: section
- tags: table, compact
- structure: A max-w-6xl section places a full-width table 40px below the introduction. The table uses four equal fixed columns, 12px cell padding, 1px borders and a neutral-50 header. A caption labels the comparison above it. The table remains within the container using table-fixed and wrapping cell text. Text is 12px below 640px and 14px above it. Cells retain 12px padding, including at 320px.
- from: new

#### features-expandable-card-grid
- name: Features — Expandable capability cards
- kind: section
- tags: grid, list, compact
- structure: A max-w-6xl section places an items-start grid 40px below its introduction. Three equal columns appear at 768px with 24px gaps. Each disclosure card has a 1px border, 8px radius and 24px padding; expanded content follows after 20px. Cards stack below 768px and retain independent native open states. Their height grows naturally with content, without clipping other cards.
- from: new

#### features-numbered-ledger
- name: Features — Numbered capability ledger
- kind: section
- tags: list, row, numbers
- structure: A max-w-6xl section contains a bordered ordered list 40px below its introduction. Rows have 24px vertical padding and 12px gaps. At 768px, a 48px index, flexible title, double-width explanation and auto-width link form four columns. Below 768px each row stacks index, title, explanation and action in source order. No fixed table width is required; borders still separate the four rows.
- from: new

#### features-paired-media-shared-list
- name: Features — Paired media and shared capabilities
- kind: section
- tags: split, media, row
- structure: A max-w-6xl container places two visual figures in equal columns from 768px with a 32px gap. Each uses a 16:9 media region, 16px caption spacing and an 18px title. A shared list follows after 32px with a top border and 24px padding. Visual figures stack below 768px. The capability strip becomes three columns at 640px and stacks below it. Both media regions retain 16:9.
- from: new

#### features-grouped-checklists
- name: Features — Two grouped capability checklists
- kind: section
- tags: split, list, icons
- structure: A max-w-6xl container uses 24px side padding and 64px to 96px vertical padding. Two capability groups appear 40px below the introduction and form equal columns from 768px with a 40px gap. Each begins with a top border and 24px padding; a shared action panel follows. Groups stack below 768px. The shared closing panel wraps its note and action while checklists stay vertical. Section type changes from 30px to 36px at 640px.
- from: new

#### features-wide-showcase-captions
- name: Features — Wide showcase with three captions
- kind: section
- tags: stacked, media, grid
- structure: Use a centered max-w-3xl introduction inside a max-w-6xl section. A 16:9 visual follows after 40px. Its caption uses 24px top spacing and three equal columns from 768px; each caption starts with a 1px top border and 16px inset. Caption columns stack below 768px while the media remains 16:9. The centered introduction stays centered at every width and the section adds 96px vertical padding from 640px.
- from: new

### pricing (14 patterns; 19 retired components reviewed)

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

#### pricing-annual-payment-schedule
- name: Pricing — Annual price with a payment schedule
- kind: section
- tags: split, numbers, list
- structure: A max-w-6xl section contains a bordered two-column region from 768px with a 40px gap and 32px top padding. The annual amount uses 48px semibold type. Schedule rows use 32px numbered circles and 16px horizontal gaps. The payment schedule follows the annual price below 768px. Timeline rows remain horizontal internally with flexible text; the primary action wraps its label if needed.
- from: new

#### pricing-base-plan-addons
- name: Pricing — Base plan with optional additions
- kind: section
- tags: stacked, grid, numbers
- structure: A max-w-6xl section holds a bordered base-plan panel 40px below its introduction. At 768px the panel splits 1:2 with 32px gaps. An add-on heading and three equal 24px-padded cards follow after 40px with 16px gaps. The base panel and add-on row each stack below 768px. Links fit their cards, and prices preserve their unit labels as inline content.
- from: new

#### pricing-free-custom-contact
- name: Pricing — Free access and a custom pricing form
- kind: section
- tags: asymmetric, form, numbers
- structure: A max-w-6xl section places a 3:2 offer grid below its introduction from 768px with 24px gaps. Both regions have 1px borders, 8px radii and 24px padding; the custom region uses neutral-50 and a 40px email field. Offers stack below 768px with free access first. The custom email field and submit button fill their region and the hint wraps without overflow.
- from: new

#### pricing-license-rows-inclusions
- name: Pricing — License rows with shared inclusions
- kind: section
- tags: sidebar, form, numbers
- structure: A max-w-6xl section becomes a 2:1 grid at 768px with a 32px gap. The left fieldset contains three 20px-padded radio rows with aligned prices. A right inclusion panel has 24px padding, 1px border and a full-width action. The shared inclusions follow the options below 768px. License descriptions wrap while the price stays in an auto-width end column; radios remain visible.
- from: new

#### pricing-seat-payment-breakdown
- name: Pricing — Seat cost and first payment breakdown
- kind: section
- tags: asymmetric, numbers, list
- structure: A bordered max-w-6xl section panel uses a 1:2 split from 768px. The total region has a neutral-50 fill and 24px padding; the breakdown has matching padding and 16px row spacing with 1px separators. The total panel precedes the breakdown below 768px. Definition-list rows keep amounts aligned at the right while descriptions wrap. The action fits within its panel.
- from: new

#### pricing-usage-bands-summary
- name: Pricing — Usage bands with an example bill
- kind: section
- tags: asymmetric, table, numbers
- structure: A max-w-6xl section becomes a 2:1 grid at 1024px with a 32px gap. A two-column semantic rate table uses 16px row padding. The example bill sits in a neutral-50 bordered panel with 24px padding and a full-width 44px action. The summary follows the rate table below 1024px. Both table columns wrap within their half-width cells; the action fills the example panel.
- from: new

### testimonials (14 patterns; 19 retired components reviewed)

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

#### testimonials-audience-outcome-table
- name: Testimonials — Audience and outcome table
- kind: section
- tags: table, numbers, compact
- structure: The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. A table starts 40px below the heading. Desktop columns take one quarter, one half and one quarter of the width. Three rows use 24px py-6 spacing, 24px right padding and bottom hairlines. Quote attributions sit 8px below each statement. Below 768px each table row becomes a stacked group and the header row hides. Audience, quote and outcome stay in the same order; no horizontal scrolling is required.
- from: new

#### testimonials-before-after-columns
- name: Testimonials — Before and after columns
- kind: section
- tags: split, spacious
- structure: The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. The introduction precedes two equal md:grid-cols-2 panels by 48px. Panels use 24px p-6 padding, 32px sm:p-8, and a 24px gap. Each contains a stage label, 20px quote, a divided context line and attribution. Below 768px the panels stack in chronological order. From 640px padding grows to 32px; text continues wrapping naturally.
- from: new

#### testimonials-lead-quote-strip
- name: Testimonials — Lead quote over a supporting strip
- kind: section
- tags: stacked, row, spacious
- structure: The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. A centered heading precedes a max-w-3xl 768px lead figure by 40px. The lead quote is 24px, 30px from 640px, with attribution 24px below. A supporting strip begins 48px later with a top border, 32px padding-top and three md:grid-cols-3 columns separated by 24px. Below 768px supporting figures stack. The lead stays centered and grows from 24px to 30px at 640px.
- from: new

#### testimonials-quote-timeline
- name: Testimonials — Quote timeline
- kind: section
- tags: sidebar, list, spacious
- structure: The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. An ordered list starts 48px below the heading with 32px gap-8 rows. At 768px each row has a 144px date rail and flexible figure separated by 16px. Figures have a left hairline, 24px padding-left and a 40px avatar below the quote. Below 768px each date sits above its figure. The figure retains its vertical rule and 24px indentation. No fixed-width text column remains on mobile.
- from: new

#### testimonials-rating-distribution
- name: Testimonials — Rating distribution beside quotes
- kind: section
- tags: sidebar, numbers, list
- structure: The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. The content sits 48px below the heading in a 1fr/2fr lg:grid-cols-[1fr_2fr] layout with a 40px gap. The p-6 sidebar has a 36px score, review count and five 8px histogram bars. The main column stacks two p-6 figures 24px apart. Below 1024px the histogram comes before the quote stack. Its flexible bar column and fixed 16px/40px label columns fit narrow screens.
- from: new

#### testimonials-video-transcript-grid
- name: Testimonials — Video stories with transcripts
- kind: section
- tags: grid, media, spacious
- structure: The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. A centered introduction leads a three-column lg:grid-cols-3 grid by 48px. Cards have 24px p-6 padding and 24px gaps. Each 16:9 media region is followed by a quote after 20px, byline after 16px and a divided disclosure after 20px. Below 1024px the cards form one column. Media remains 16:9 and transcript content expands the card in normal flow.
- from: new

### cta (14 patterns; 19 retired components reviewed)

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
- name: Call to action — Dated detail card
- kind: section
- tags: asymmetric, numbers
- structure: From 1024px a 7/5 grid with a 48px gap, vertically centred. The left column holds an eyebrow, the section headline, a lede (max 448px) and a capacity meta line. The right column holds one bordered card with a header row (a date block with the day at text-4xl over the month, a vertical hairline, then the item title and a time/place meta line), a <dl> of two rows (price, places left) and a full-width primary action. Below 1024px the card follows the copy; below 640px the date block sits above the title, with a horizontal hairline between them.
- from: cta-event-reservation, cta-heat-pump-survey, cta-lido-mornings

#### cta-numbered-steps
- name: Call to action — Numbered steps
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

#### cta-audience-choice-cards
- name: Call to action — Audience choice cards
- kind: section
- tags: split, list, spacious
- structure: The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. Two equal md:grid-cols-2 cards sit 48px below a centered introduction with a 24px gap. Cards have 24px padding, 32px from 640px, a title, paragraph, two check rows and a bottom-aligned action with 32px top separation. Below 768px the cards stack in reading order. At 640px card padding grows to 32px. Actions remain aligned to the bottom within each card.
- from: new

#### cta-contact-directory
- name: Call to action — Contact route directory
- kind: section
- tags: list, icons, compact
- structure: The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. The directory starts 48px below a centered heading. Three border-divided rows use 24px vertical spacing and 16px gaps. At 768px each row has a 48px icon column, flexible text column and auto action column, vertically centered. Below 768px each row stacks icon, text and action. The directory stays full width and longer labels wrap inside the available space.
- from: new

#### cta-price-inclusions-strip
- name: Call to action — Price and inclusions strip
- kind: section
- tags: row, numbers, list
- structure: The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. An inset rounded-lg panel has three horizontal bands. The 24px top band becomes a 1fr/auto/auto md:grid grid with 24px gaps. A divided p-6 inclusion band has three sm:grid-cols-3 cells. A neutral-50 terms strip has 24px horizontal and 16px vertical padding. Below 768px top-band items stack; below 640px inclusions stack. Price and action remain visible above the scope details.
- from: new

#### cta-readiness-checklist
- name: Call to action — Readiness checklist close
- kind: section
- tags: centered, list, icons
- structure: The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. A max-w-3xl bordered panel sits 40px below the centered heading. It has 24px padding, 32px from 640px, and a two-column sm:grid-cols-2 checklist with 24px gaps. A centered action footer starts 32px later with a top rule and 24px top padding. Below 640px checklist items stack and panel padding is 24px. From 640px they become two columns with 32px panel padding.
- from: new

#### cta-resource-download
- name: Call to action — Resource download columns
- kind: section
- tags: asymmetric, media, list
- structure: The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. The lg:grid-cols-[192px_1fr_256px] grid uses 32px gap-8 and centered alignment. A 3:4 cover leads, the middle holds a heading and checklist, and a p-6 alternate-surface download panel closes the row. Below 1024px columns stack as cover, description and download panel. The cover retains 3:4 proportions and the action fills its panel width.
- from: new

#### cta-schedule-options
- name: Call to action — Session time options
- kind: section
- tags: centered, form, grid
- structure: The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. The centered max-w-2xl introduction precedes a max-w-3xl 768px form by 40px. A fieldset contains three sm:grid-cols-3 choices with 12px gaps and 16px padding. The hint and 44px submit action share a footer 24px below. Below 640px choices stack and the hint sits above the submit action. From 640px choices and the form footer become rows.
- from: new

### faq (14 patterns; 18 retired components reviewed)

#### faq-accordion
- name: FAQ — Accordion
- kind: section
- tags: centered, list, spacious
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

#### faq-answer-spotlight
- name: FAQ — Answer spotlight with contents
- kind: section
- tags: sidebar, spacious
- structure: The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. A 256px contents rail and flexible answer form an lg:grid with 32px gaps 48px below the heading. The answer is a neutral-50 p-6 panel, p-8 from 640px. Subheads have 32px top separation and anchor scroll margins. Below 1024px the contents panel stacks above the answer. At 640px answer padding increases to 32px.
- from: new

#### faq-comparison-answers
- name: FAQ — Comparison answer table
- kind: section
- tags: table, compact
- structure: The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. A full-width table starts 40px below the heading. Three equal columns hold a question and two answers. Rows have 24px vertical padding, 24px cell spacing and bottom rules; each answer is 14px body text. Below 768px rows stack into question and two labelled answers; desktop option headings hide and mobile labels appear. The table needs no horizontal scroll.
- from: new

#### faq-decision-branches
- name: FAQ — Decision branches
- kind: section
- tags: split, list
- structure: The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. Two md:grid-cols-2 p-6 panels begin 40px after a centered heading with 24px gap-6. Each panel has a 18px question, 14px prompt and two divided branch summaries 24px later. Below 768px panels stack. Branch summaries wrap while their chevrons retain a fixed 20px width.
- from: new

#### faq-glossary-answers
- name: FAQ — Glossary answer rows
- kind: section
- tags: list, sidebar, compact
- structure: The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. A definition list starts 40px below the heading. Rows have 24px vertical padding and 16px gaps. Desktop columns are 48px for an alphabet marker, 192px for a term and a flexible question/answer column. Each row has a bottom rule. Below 768px each row stacks marker, term and question/answer. The reading order and definition association remain consistent.
- from: new

#### faq-nested-topics
- name: FAQ — Nested topic disclosures
- kind: section
- tags: stacked, list, compact
- structure: The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. A max-w-3xl centered topic list begins 40px below the heading. Outer summaries have 24px vertical padding and stacked title/caption text. Their inner questions sit in a p-x-6 neutral-50 panel with 20px summary padding and bottom rules. The centered list remains stacked at every width. Side padding and natural wrapping keep both disclosure levels within narrow screens.
- from: new

#### faq-question-index
- name: FAQ — Question index over answers
- kind: section
- tags: stacked, list, spacious
- structure: The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. A p-6 anchor panel starts 40px below the heading and uses two sm:grid-cols-2 columns with 16px gaps. Four answer articles start 48px below, separated by 32px. Each has a small answer number, 18px question, paragraph and bottom rule. Below 640px the anchor index stacks. Answers remain in one column with a max-w-3xl reading width at all sizes.
- from: new

### footer (14 patterns; 19 retired components reviewed)

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
- tags: centered, grid
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

#### footer-accordion-sitemap
- name: Footer — Accordion sitemap
- kind: section
- tags: stacked, list, compact
- structure: The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. The top row stacks identity and a top link, becoming a space-between flex row at 640px. A sitemap starts 40px later with three native details, 20px summary spacing and 24px link gaps. Copyright follows after 32px. Below 640px the identity and top link stack. Sitemap rows remain one column and revealed links wrap at every width.
- from: new

#### footer-address-map
- name: Footer — Address beside a map
- kind: section
- tags: asymmetric, media, spacious
- structure: The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. At 1024px a 1fr/1fr/192px grid uses 40px gap-10. The address column has identity, a semantic address 24px below and links after 20px. The 4:3 map has a note 12px below; the directory lists four links. A legal/availability bar starts 40px below. Below 1024px the three columns stack in identity, map and pages order. Legal and availability text wrap into separate lines when needed.
- from: new

#### footer-directory-rows
- name: Footer — Directory rows with descriptions
- kind: section
- tags: list, row, compact
- structure: The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. Identity precedes the directory by 40px. Each row has 24px vertical padding and a 1px bottom rule. Desktop columns use 160px for the heading and equal flexible description and link areas with 16px gaps. Links wrap with 24px horizontal gaps. Below 768px every directory row stacks heading, description and links. Link sets wrap rather than causing horizontal scroll.
- from: new

#### footer-document-register
- name: Footer — Document register
- kind: section
- tags: table, compact
- structure: The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. An identity and heading share a desktop row with a short publication note. A table starts 32px below with 50%/25%/25% fixed columns. Header padding is 12px and body rows use 16px vertical padding with hairline dividers. Copyright and contact follow 32px later. The header stacks below 640px. The table retains its three fixed columns and wraps document names inside the 50% column; the final contact row wraps naturally.
- from: new

#### footer-audience-directories
- name: Footer — Two audience directories
- kind: section
- tags: split, list, spacious
- structure: The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. Two equal md:grid-cols-2 directory panels have 24px gaps and 24px padding, 32px from 640px. Each has an 18px audience title, paragraph and a three-link list. Identity and legal destinations share a divided row 40px below. Below 768px directories stack. The legal bar becomes a horizontal flex row at 640px; below that identity and legal links stack.
- from: new

#### footer-utility-rail
- name: Footer — Utility rail beside directory
- kind: section
- tags: sidebar, form, grid
- structure: The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. A 240px utility rail and flexible directory form a lg:grid with 40px gaps. The rail is a p-6 neutral-50 panel with status and a labelled 40px select. Directory groups use three sm:grid-cols-3 columns and 32px gaps. The legal bar follows after 40px. Below 1024px utilities sit above the directory. Directory columns stack below 640px. Legal items wrap into a new row at narrow widths.
- from: new

## Group: Cards & profiles

### profile-card (15 patterns; 18 retired components reviewed)

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
- name: Profile cards — Row with follow toggle
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

#### profile-card-biography-identity-footer
- name: Profile cards — Biography above a portrait footer
- kind: element
- tags: stacked, media, compact
- structure: A 288px card expands to 320px at 640px with 16px padding. An eyebrow and 16px biography occupy the top. A footer follows after 20px with a 1px top border, 16px inset and a 64px square portrait beside flexible identity text. The footer retains its horizontal portrait-and-text structure at both widths. The 64px portrait stays fixed while biography and identity copy wrap naturally.
- from: new

#### profile-card-credential-timeline
- name: Profile cards — Identity and credential timeline
- kind: element
- tags: stacked, list, compact
- structure: A 288px to 320px card uses 16px padding. The timeline follows after 16px with a top border and 16px inset. Each row uses a 48px year column, flexible text column and 12px gaps; three rows have 12px vertical separation. The year and text columns stay intact at both fixed widths. Details wrap while the 48px year column remains aligned; there are no disclosure controls.
- from: new

#### profile-card-project-preview
- name: Profile cards — Identity and featured project
- kind: element
- tags: stacked, media, compact
- structure: A 288px card widens to 320px at 640px with 16px padding. The 40px identity row is followed after 16px by a 16:9 project figure. A caption beneath uses 12px spacing and aligns a short project title opposite its link. The fixed width steps preserve the 16:9 image. The caption text wraps within a flexible column while its short link stays at the end.
- from: new

#### profile-card-vertical-stat-rail
- name: Profile cards — Identity beside a vertical metric rail
- kind: element
- tags: sidebar, numbers, compact
- structure: A 288px card widens to 320px at 640px. A 64px stat rail and flexible identity column use a 16px gap and 16px card padding. The rail has a right border, 12px inset and 20px vertical gaps; the main column ends with a full-width 44px contact link. The rail and main column stay side by side at both fixed widths. Copy wraps in the flexible column; metric labels stay compact.
- from: new

#### profile-card-contact-grid
- name: Profile cards — Identity with a contact grid
- kind: element
- tags: stacked, grid, compact
- structure: A w-72 card is 288px wide, widening to 320px at 640px. It uses a 1px border, 8px radius and 16px padding. A 40px avatar leads the identity row; a two-column contact grid follows the biography with 8px gaps and 12px cell padding. The contact grid keeps two columns at all widths. The card uses fixed 288px and 320px width steps so it stays compact. Biography and link text wrap naturally.
- from: new

#### profile-card-availability-slots
- name: Profile cards — Identity with available time slots
- kind: element
- tags: stacked, form, compact
- structure: A 288px card widens to 320px at 640px with 16px padding. A fieldset sits 16px below the biography; three equal time labels use 8px gaps, 12px vertical padding and native radio controls. The booking link is full-width and 44px tall. All three slots remain equal columns at both fixed widths. Labels use 12px text; the booking note wraps below the action.
- from: new

#### profile-card-provider-facts
- name: Profile cards — Provider with rate and response facts
- kind: element
- tags: stacked, numbers, compact
- structure: A 288px card (w-72) that widens to 320px at 640px (sm:w-80), with a 1px border and rounded-lg corners. The p-5 header puts a 48px avatar 16px from an identity column: the name with a verified glyph, a service line, and a star rating with review count 8px below. A full-width two-column fact strip (hourly rate, typical response) has hairlines above and below and between its cells, with 20px × 12px cell padding. A two-column action grid (gap-3, p-5) holds equal 44px Book (primary link) and Message (secondary button). Only the width changes at 640px.
- from: new

#### profile-card-business-contact-rows
- name: Profile cards — Business card with contact rows
- kind: element
- tags: split, list, icons, compact
- structure: A 288px card (w-72) that widens to 448px at 640px (sm:w-[28rem]), with a 1px border, rounded-lg corners and overflow hidden. Below 640px the two panels stack: a neutral-50 identity panel (p-5, logo above the name, job title and organization), a hairline, then the contact panel. From 640px it is a grid of two equal columns with a vertical hairline, and the identity panel stretches to the contact column's height (flex-col justify-between) so the logo sits at the top and the identity at the bottom. The contact panel (p-5) lists four 20px icon rows with 12px gaps (email, phone and website links, plus a plain location) and a full-width 44px secondary Save contact action 20px below.
- from: new

### team (15 patterns; 18 retired components reviewed)

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
- name: Team — Tile directory
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

#### team-chronological-roster
- name: Team — Chronological roster with avatar ends
- kind: section
- tags: list, numbers, spacious
- structure: A max-w-6xl section places a chronological ordered list below its introduction. Rows have 24px vertical padding, 1px top borders and 16px gaps. A 48px year column becomes 96px at 768px; biography text fills the middle and a 40px avatar anchors the end. The three-column row remains intact at small widths with a 48px year and 40px avatar. Flexible biography text wraps; the year rail widens at 768px.
- from: new

#### team-department-columns
- name: Team — Department columns with compact rosters
- kind: section
- tags: grid, list, compact
- structure: A max-w-6xl section forms three equal department columns at 768px with 32px gaps. Each column starts with a top border and 24px padding, then a title, 14px focus statement and two member rows separated by 20px. Avatars are 40px. Departments stack below 768px. Identity rows remain horizontal inside each column; profile links align beneath the identity copy.
- from: new

#### team-group-media-roster
- name: Team — Group portrait and individual contacts
- kind: section
- tags: asymmetric, media, grid
- structure: A max-w-6xl section becomes a 2:3 grid from 1024px with a 40px gap. The left group portrait is square with a 12px caption gap. The right roster forms two columns from 640px with 24px gaps and 1px top dividers. Below 1024px the group portrait precedes the roster. Individual summaries become one column below 640px. Identity rows stay horizontal, with flexible text beside 40px avatars.
- from: new

#### team-roster-contact-table
- name: Team — Team roster as a contact table
- kind: section
- tags: table, list, compact
- structure: A max-w-6xl section places a full-width table 40px below its introduction. Four equal fixed columns use 12px cell padding and 1px row borders. The header has neutral-50 fill and a caption appears above it. The table stays within the viewport using table-fixed and wrapping text. Cell type changes from 12px to 14px at 640px; all four columns remain available at 320px.
- from: new

#### team-duo-spotlights
- name: Team — Two horizontal profile spotlights
- kind: section
- tags: split, media, spacious
- structure: A max-w-6xl section uses two equal spotlight columns from 1024px with 24px gaps. Cards have 24px padding and a 20px gap; each becomes a 96px portrait plus flexible copy from 640px. A shared note follows after 32px with a top border. Cards stack below 1024px. Below 640px each portrait moves above its text; wider cards keep the 96px portrait beside the biography.
- from: new

#### team-principle-profile-cards
- name: Team — Working principles with identity footers
- kind: section
- tags: grid, stacked, spacious
- structure: A max-w-6xl section holds three equal cards from 768px with 24px gaps. Each card uses a 1px border, 8px radius and 24px padding. An 18px principle statement sits above an identity footer separated by 32px spacing and a top border. Cards stack below 768px. Text remains above identity at every width; the horizontal 40px avatar row allows names and roles to wrap.
- from: new

#### team-org-chart
- name: Team — Org chart with connector lines
- kind: section
- tags: centered, list, compact
- structure: Section shell (max-w-6xl) with a max-w-2xl header (eyebrow, section headline, lede) that is left-aligned below 1024px and centered from 1024px, 48px above the chart (64px from 1024px). The chart is a nested `role="list"` tree of rounded-lg bordered p-4 person cards (40px initials avatar, name, role), each nested list labelled "Reports to <name>". From 1024px the lead card is 320px wide and centered; a 32px vertical connector drops to a horizontal rule running between the first and last column centers, and three equal manager columns (32px gap) hang their full-width cards from it by 32px stubs, all drawn as 1px neutral-300 borders on pseudo-elements. Under each manager a reports list is indented 36px behind a 1px left rule (16px gaps, 32px avatar, 14px name and role). Below 1024px the connectors disappear and the managers list is indented 36px behind a left rule too, giving an indented tree; section padding and headline size step up at 640px.
- from: new

#### team-avatar-wall
- name: Team — Avatar wall with headcount
- kind: section
- tags: split, grid, numbers, compact
- structure: Section shell (max-w-6xl) that becomes two equal, vertically centered columns with a 64px gap from 1024px and stacks with a 48px gap below. The left column holds an eyebrow, section headline, a max-w-xl lede and a wrapping row of a primary and a secondary action. The right column (max-w-lg until 1024px) is a `role="list"` wall of 24 full-width aspect-square round initials avatars with visually hidden names: six columns with 8px gaps below 640px and eight columns with 12px gaps from 640px, so the tiles always fill complete rows. The last tile is a dashed neutral-300 "+25" circle. Below the wall, 32px down, a three-column definition list (14px label over a 30px semibold figure) sits above a hairline with 24px top padding. Section padding and headline size step up at 640px.
- from: new

### product-card (16 patterns; 18 retired components reviewed)

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

#### product-card-compact-order-summary
- name: Product cards — Compact product order summary
- kind: element
- tags: stacked, media, numbers
- structure: A 288px card widens to 320px at 640px with 16px padding. A 64px thumbnail sits beside identity and quantity with a 12px gap. A definition list follows after 16px with a top border and 16px inset; cost rows have 12px spacing. The thumbnail remains 64px at both fixed widths. Product text and cost labels wrap in flexible areas; amounts align at the right and the action fills the card.
- from: new

#### product-card-included-download-list
- name: Product cards — Digital product with included files
- kind: element
- tags: stacked, list, icons
- structure: A 288px card widens to 320px at 640px with 16px padding. A 40px icon tile sits beside product identity with a 12px gap. Included files follow in a bordered list with 12px row padding; the footer aligns an 18px price and 44px outlined action. The file list remains single-column at both widths. File names wrap beside fixed short format labels, and the footer accommodates its short action label.
- from: new

#### product-card-featured-collection-list
- name: Product cards — Featured product and related list
- kind: section
- tags: asymmetric, media, list
- structure: A max-w-6xl section becomes a 3:2 grid from 1024px with a 32px gap. The featured card uses 24px padding and a 16:9 visual. Related rows use 64px thumbnails, 16px gaps and 20px vertical padding with 1px separators. The related list follows the featured card below 1024px. Its thumbnail rows remain horizontal with wrapping flexible copy; the featured media keeps 16:9.
- from: new

#### product-card-paired-item-bundle
- name: Product cards — Paired product bundle
- kind: element
- tags: split, media, numbers
- structure: A 288px card widens to 320px at 640px with 16px padding. Two equal 4:3 media slots use an 8px gap beneath the eyebrow. A shared title and 14px description follow; the price row has a top border and 12px inset before a 44px action. The paired media stays two columns at both fixed widths. The price comparison wraps within its row if needed; the action remains full width.
- from: new

#### product-card-three-view-gallery
- name: Product cards — Three-view gallery card
- kind: element
- tags: asymmetric, media, compact
- structure: A 288px card widens to 320px at 640px with 16px padding. A 3:1 gallery uses 8px gaps; the main media is 4:3 and the two supporting regions are square. A name-price row follows after 16px, then a 14px description and full-width 44px link. The gallery keeps its 3:1 structure at both fixed widths. The product name wraps while the price stays aligned at the end; the action fills the card.
- from: new

#### product-card-expandable-specifications
- name: Product cards — Thumbnail and expandable specifications
- kind: element
- tags: stacked, media, compact
- structure: A 288px card widens to 320px at 640px with 16px padding. A 64px thumbnail leads a horizontal identity row. The specification disclosure sits 16px below with top and bottom borders and 12px vertical padding; its definition-list rows use 8px gaps. The identity row remains horizontal at both fixed widths. Specification labels and values wrap inside the card; the action fills its width.
- from: new

#### product-card-cart-line-items
- name: Product cards — Cart line items with quantity
- kind: section
- tags: list, media, form
- structure: The container is max-w-3xl (48rem) with 24px side padding and 64px vertical padding (96px from 640px). A heading row with the title and item count sits above a bordered list, and each item is a flex row with an 80px thumbnail (96px from 640px) and a 16px gap (24px from 640px). The item body is a grid of details and a right-aligned price, with the 80px quantity select and Remove button on a second row below 640px. From 640px the body becomes three columns (details, controls, 96px price), and Check out and Continue shopping sit side by side, right-aligned, Check out first. Below 640px the actions stack full width, Check out first.
- from: new

#### product-card-gallery-buy-box
- name: Product cards — Gallery beside buy box
- kind: section
- tags: split, media, form
- structure: The container is max-w-6xl (72rem) with 24px side padding and 64px vertical padding (96px from 640px). Below 1024px the gallery and buy box stack in one column with a 40px gap. From 1024px they form two equal top-aligned columns with a 64px gap. The gallery is a 4:3 media placeholder with four square thumbnails in a 4-column grid, 16px below and 16px apart, and the first is marked current. The buy box holds an eyebrow, a 30px headline (36px from 640px), a rating row, a 24px price, a description, a size select beside a 96px quantity field, a full-width Add to cart button beside a 44px save button, and two delivery notes after a top border.
- from: new

#### product-card-purchase-options
- name: Product cards — One-time or subscription purchase
- kind: element
- tags: stacked, form, compact
- structure: The card is 288px wide (w-72) and 320px from 640px, with 16px padding, a 1px border and an 8px radius. A 48px thumbnail sits beside the name and variant, and the Purchase option fieldset follows 16px below. Two option cards (6px radius, 12px padding, 8px apart) each hold a native radio, a label and a price, and the subscription card adds a hint and a 112px-wide frequency select. The frequency row shows only while subscribe is checked, and the checked card takes a neutral-900 border. A full-width 44px Add to cart button ends the card 16px below, and nothing changes at 640px except the card width.
- from: new

#### product-card-restock-alert
- name: Product cards — Sold-out item with restock alert
- kind: element
- tags: stacked, form, media
- structure: The card is 288px wide (w-72) and 320px from 640px, with 16px padding, a 1px border and an 8px radius. A 96px-tall media placeholder leads, followed by the name and an 18px price on one row 12px below. A Sold out badge and the variant sit 4px below, then a top-bordered form holds a 14px label and hint and a row of a flexible 44px email field beside a 44px Notify me button, 8px apart. The width is the only breakpoint change, and the email row stays horizontal at every width.
- from: new

### stat-card (15 patterns; 18 retired components reviewed)

#### stat-card-figure-delta
- name: Stat cards — Figure with change and link
- kind: element
- tags: stacked, numbers, compact
- structure: A bordered card 288px wide (320px from 640px), p-5, about 190px tall: a meta label ("Monthly revenue"), the value in text-4xl semibold tabular figures ("$48,290"), and a change row with a badge holding an up-arrow and "+12.4%" followed by "vs last month" in meta text. A footer under a hairline holds a "View report" text link with an arrow. Below 640px only the width changes.
- from: stat-card-water-loss, stat-card-glass-recovery, stat-card-goalball-blocks

#### stat-card-icon-inline
- name: Stat cards — Icon, label and value row
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

#### stat-card-activity-calendar
- name: Stat cards — Activity calendar
- kind: element
- tags: grid, numbers, compact
- structure: The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. At 640px the root grows to 320px sm:w-80. It uses 24px padding. A 30px count and period share the top region; a seven-column grid follows after 20px with 4px gaps and square bordered cells. The explanatory caption is 16px below. The seven-column grid stays intact at every width; flexible squares expand with the root at 640px. The root widens from 288px to 320px at that breakpoint.
- from: new

#### stat-card-benchmark-range
- name: Stat cards — Benchmark range
- kind: element
- tags: numbers, compact
- structure: The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. The p-6 root becomes 320px sm:w-80 at 640px. A 36px value precedes a bordered 12px range by 32px. Its fill reaches 72% and a 28px vertical marker sits at 60%. Endpoints appear 12px below; two detail columns start 20px later with a divided footer. The range and two detail columns remain unchanged on mobile; only the root grows at 640px.
- from: new

#### stat-card-paired-periods
- name: Stat cards — Paired reporting periods
- kind: element
- tags: split, numbers, compact
- structure: The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. The root grows to 384px sm:w-96 at 640px and uses 24px p-6. A two-column dl begins 20px below the metric label. The second value has a left divider and 20px padding. A change footer starts 24px later with 16px top padding. Both metric columns remain visible on mobile; their short four-digit values fit within the 288px root. The desktop width expands at 640px.
- from: new

#### stat-card-ranked-contributors
- name: Stat cards — Ranked contributor list
- kind: element
- tags: list, numbers, compact
- structure: The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. The p-6 root becomes 320px sm:w-80 at 640px. A 30px total precedes an ordered list by 20px. Rows have 12px vertical padding, 12px gaps, monospaced rank markers and right-aligned tabular counts. The text link sits 16px below. Rows remain in one column on mobile and the flexible name region wraps if needed. The root widens at 640px.
- from: new

#### stat-card-stage-funnel
- name: Stat cards — Stage funnel
- kind: element
- tags: list, numbers, compact
- structure: The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. The root uses 24px padding and becomes 320px sm:w-80 from 640px. A 30px conversion figure sits above three 16px-separated rows. Each has a labelled count and a 12px bordered track 8px below. The final note follows by 20px. The ordered rows and flexible tracks remain stacked at every width. The root expands at 640px.
- from: new

#### stat-card-threshold-status
- name: Stat cards — Threshold status rail
- kind: element
- tags: sidebar, numbers, compact
- structure: The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. The p-6 root is a 40px/flexible two-column grid with a 20px gap. It grows to 320px at 640px. A decorative rail has three equal bordered bands; the main column holds a 36px value, explicit state label and two limit rows. A full-width note closes the card. The rail and metric remain side by side at all widths. The footnote spans both columns; the root expands at 640px.
- from: new

#### stat-card-sparkline-tiles
- name: Stat cards — Sparkline tiles
- kind: section
- tags: grid, numbers, compact
- structure: A white section with a max-w-6xl (1152px) container, px-6 and py-16 (sm:py-24). A header row puts an 18px heading and a 14px comparison note at opposite ends, baseline-aligned and wrapping when narrow. Below it, a dl grid with gap-4 holds four bordered rounded-lg p-6 tiles. Each tile has a label, a figure row (30px tabular figure left, pill change badge with an arrow and a hidden Up/Down word right, wrapping if tight) and a full-width 40px SVG trend line that stretches without thickening its stroke. The grid is one column below 640px, sm:grid-cols-2 from 640px and lg:grid-cols-4 from 1024px.
- from: new

#### stat-card-stacked-distribution
- name: Stat cards — Stacked distribution bar
- kind: element
- tags: stacked, numbers, list
- structure: A bordered rounded-lg card, w-72 (288px) stepping to sm:w-80 (320px), with p-6. A label and period row sits above a 30px tabular total with a small unit. Below it, a 12px rounded-full bar is split into 45/30/15/10% segments shaded neutral-900, -600, -400 and -300, separated by 2px white dividers and hidden from assistive tech. A role="list" legend follows with 8px gaps; each row has a matching 10px dot, a flex-1 name, a medium count and a 40px right-aligned percentage. A bordered note closes the card, and only the width changes at 640px. In forced-colors mode the bar and dots get a 1px outline so the dividers still mark each part.
- from: new

### testimonial-card (15 patterns; 18 retired components reviewed)

#### testimonial-card-quote-author
- name: Testimonial cards — Quote with author footer
- kind: element
- tags: stacked, spacious
- structure: A bordered `<figure>` 288px wide (352px from 640px), about 300px tall, p-6 (p-8 from 640px): a logo placeholder (24px glyph plus "Logo"), a `<blockquote>` of three to five lines (text-base, text-lg from 640px) 20px below, and a `<figcaption>` under a hairline with a 40px avatar beside the name and "Role, Company". One column at both widths; from 640px only the padding, quote size and width step up.
- from: testimonial-card-letter, testimonial-card-pullquote, testimonial-card-audio-note

#### testimonial-card-centered-quote
- name: Testimonial cards — Centred quote with logo
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

#### testimonial-card-attribution-rail
- name: Testimonial cards — Attribution rail beside quote
- kind: element
- tags: sidebar, compact
- structure: The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. A 72px attribution rail and flexible quote column use a 20px gap and 20px padding. At 640px the root expands to 384px. The rail has a right rule, 16px padding-right, 40px avatar and stacked 12px author text. The interview link sits 20px below the quote. Both columns remain on mobile. The quote wraps in the flexible column and the short attribution prevents excessive card height.
- from: new

#### testimonial-card-before-after
- name: Testimonial cards — Before and after statements
- kind: element
- tags: stacked, compact
- structure: The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. The figure has 20px p-5 padding and grows to 320px from 640px. Before uses a 12px label and 14px quote. After sits 20px below with a rule and 20px top padding, followed by a 16px quote. One byline starts 20px later. Both statements remain stacked at all widths. The desktop root widens at 640px without changing their order.
- from: new

#### testimonial-card-criteria-scores
- name: Testimonial cards — Criteria scores with quote
- kind: element
- tags: list, numbers, compact
- structure: The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. The p-5 figure grows to 320px at 640px. Its reviewer header uses a space-between row, followed by three score rows after 20px with 12px gaps. A 14px quote sits below a rule with 20px margin and 16px top padding. The score rows retain their horizontal alignment at every width. Header metadata wraps if needed within the card.
- from: new

#### testimonial-card-source-citation
- name: Testimonial cards — Quote and source citation
- kind: element
- tags: sidebar, compact
- structure: The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. A 32px annotation rail and flexible body use a 16px horizontal gap and 20px row gap with 20px padding. The quote occupies the first row and a top-bordered citation occupies the second. The root grows to 320px at 640px. The annotation grid remains intact at every width. The citation wraps inside its flexible column.
- from: new

#### testimonial-card-two-voices
- name: Testimonial cards — Two connected voices
- kind: element
- tags: stacked, list, compact
- structure: The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. The p-5 article grows to 320px at 640px. Two figures each start after 16px with a top border and 16px top padding. Each 14px quote is followed after 12px by a 32px avatar and 12px author name. The two figures remain stacked at every width. Compact quotes and bylines keep the card below the element height limit.
- from: new

#### testimonial-card-video-transcript
- name: Testimonial cards — Video with transcript excerpt
- kind: element
- tags: stacked, media, compact
- structure: The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. The p-4 figure becomes 320px sm:w-80 at 640px. Its video region is 96px h-24 tall. A 14px quote and 40px-avatar caption follow with 16px margins. A divided transcript summary starts 16px later with 12px top padding. The same vertical structure remains at all widths. Short content keeps both closed and open states within the 384px frame allowance.
- from: new

#### testimonial-card-support-chat
- name: Testimonial cards — Support chat excerpt
- kind: element
- tags: stacked, list, compact
- structure: A bordered figure 288px wide (w-72) with 20px padding, growing to 384px (sm:w-96) with 24px padding at 640px. The figcaption comes first, with a 40px initials avatar beside the name and a channel/date line. Below it, a role="list" ordered list stacks three bubbles with 12px gaps. Customer rows align left and leave 32px (pr-8) on the right. The support row aligns right and leaves 32px (pl-8) on the left. Bubbles shrink to their text and are squared at the corner nearest the sender: customer bubbles are neutral-100, the support reply is white on neutral-900. A hairline footer sets a check-icon resolution time against a rating with space-between; only the card width and padding change at the breakpoint.
- from: new

#### testimonial-card-review-summary
- name: Testimonial cards — Review summary with avatar stack
- kind: element
- tags: stacked, numbers, layered
- structure: A bordered section 288px wide (w-72) that grows to 320px (sm:w-80) at 640px, with 24px padding and an eyebrow h2. A rating row puts a 36px (text-4xl) average beside a five-star row and a label, 12px apart. A second row overlaps four 32px initials avatars by 8px (-space-x-2, each with a 1px white border) next to the review count. A neutral-50 inset panel (p-4, rounded-lg) holds the highlighted quote and its byline, followed by an underlined text link with an arrow. Only the card width changes at the breakpoint; both rows stay on one line at both widths.
- from: new

### blog-card (15 patterns; 18 retired components reviewed)

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
- name: Blog cards — Text only with author header
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

#### blog-card-abstract-citation
- name: Blog cards — Abstract and citation
- kind: element
- tags: stacked, sidebar, compact
- structure: The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. The p-5 card grows to 320px at 640px. A metadata line precedes the 18px title by 12px. The abstract starts 20px below with a left rule and 16px indentation. A citation dl follows after 20px with a top rule and 16px top padding, using a 64px label column. The title and abstract remain stacked. The small label/value citation grid retains its two columns on mobile.
- from: new

#### blog-card-table-of-contents
- name: Blog cards — Article contents card
- kind: element
- tags: stacked, list, compact
- structure: The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. The p-5 article becomes 320px from 640px. Metadata leads a linked 18px title after 12px, excerpt after 12px and a divided contents list after 20px with 16px top padding. Three 12px links have 8px gaps; author metadata follows 16px below. The contents list and article body remain stacked at every width. Keep the abstract to two short lines and the contents to three concise titles.
- from: new

#### blog-card-document-preview
- name: Blog cards — Document preview and report
- kind: element
- tags: sidebar, media, compact
- structure: The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. A 72px preview column and flexible text column use 16px gaps and 20px p-5 padding. The root grows to 384px at 640px. The bordered preview has 8px inset and a 128px h-32 media region. A shared metadata/action footer spans both columns below a top rule. The preview and title remain side by side on mobile; the shared footer wraps as needed. The root expands at 640px.
- from: new

#### blog-card-issue-editorial
- name: Blog cards — Issue editorial
- kind: element
- tags: stacked, numbers, compact
- structure: The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. The p-5 card grows to 320px at 640px. A bottom-aligned header combines a 48px issue number and stacked metadata with a 20px gap and bottom rule. The title starts 20px below, excerpt after 12px and byline/reading-time footer after 20px. The number remains beside metadata at all widths. The title, excerpt and footer stay full width below the header.
- from: new

#### blog-card-series-index
- name: Blog cards — Ordered article series
- kind: element
- tags: list, numbers, compact
- structure: The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. The p-5 card becomes 320px from 640px. A series label and 18px heading lead a divided ordered list after 20px. Each row has a 24px number rail, 12px gap, 8px vertical padding and a linked topic above a reading time. The numbered rows remain stacked at every width, with the topic column filling available space.
- from: new

#### blog-card-paired-digest
- name: Blog cards — Paired article digest
- kind: element
- tags: split, compact
- structure: The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. The p-5 article has a shared header and a two-part grid 20px below with 20px gaps. Each part has a top rule, 16px top padding, category, title, one-line note and time. At 640px the root grows to 384px and the grid becomes two columns. The articles stack on mobile and become two columns from 640px. Compact summaries keep the mobile pair below 384px.
- from: new

#### blog-card-podcast-episode
- name: Blog cards — Podcast episode with play action
- kind: element
- tags: asymmetric, media, compact
- structure: A bordered white article, 288px wide (w-72) and 352px from 640px (sm:w-[22rem]), with p-5 and rounded-lg. The header is a flex row with gap-4: an 80px square cover placeholder (size-20) and a min-w-0 column with a 12px show and episode line above a 16px semibold title link. A 14px show-notes excerpt follows 16px below. The footer is a justify-between flex row with gap-3: a 44px primary "Play episode" button with a play glyph and an aria-label naming the episode, and a right-aligned 12px duration over the date. The only breakpoint is the 640px width step; the title wraps to three lines on mobile and two from 640px.
- from: new

#### blog-card-release-notes
- name: Blog cards — Release notes with grouped changes
- kind: element
- tags: stacked, list, compact
- structure: A bordered white article, 288px wide (w-72) and 352px from 640px (sm:w-[22rem]), with p-5 and rounded-lg. A header row pairs a pill version badge with the date (gap-3), followed by an 18px semibold headline 12px below. A changes block with a 1px top rule and pt-4 stacks two groups 16px apart. Each group has a 12px label and a role="list" list whose items sit 6px apart, each a flex row with a 6px round bullet. An underlined "Read the full notes" text link with an arrow sits 20px below and names the version in its aria-label. The only breakpoint is the 640px width step; the layout stays one column and the headline wraps to two lines on mobile.
- from: new

## Group: Elements

### buttons (16 patterns; 18 retired components reviewed)

#### buttons-hierarchy
- name: Buttons — Primary, secondary and tertiary
- kind: element
- tags: grid, icons, compact
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

#### buttons-bulk-selection-bar
- name: Buttons — Bulk selection bar
- kind: element
- tags: row, split, numbers, compact
- structure: A 288px card grows to 448px at sm. The border encloses 16px padding. A 32px clear control aligns with the selection count; two equal 44px action columns sit 12px below with an 8px gap. The root changes from 288px to 448px at 640px. Both action columns remain equal; Export selected wraps only if replaced with a longer label, so retain the 3-word limit.
- from: new

#### buttons-command-tiles
- name: Buttons — Command tiles with descriptions
- kind: element
- tags: grid, icons, compact
- structure: A 288px (w-72) two-column grid grows to 448px at sm and uses 12px gaps. Each rounded-md button has a 1px neutral-300 border, 16px padding, a 20px icon and 8px vertical gaps. Minimum tile height is 112px (min-h-28). The grid remains two columns at every width. From 640px its width grows from 288px to 448px, allowing descriptions to fit on fewer lines without changing the tile order.
- from: new

#### buttons-confirmation-footer
- name: Buttons — Confirmation footer
- kind: element
- tags: stacked, split, compact
- structure: A 288px (w-72) bordered card grows to 384px (sm:w-96). Its summary uses 20px padding, a 16px heading and an 8px copy gap. A neutral-50 footer has a top divider, 16px padding and a justified pair of standard 44px actions. Below 640px the card is 288px wide. From 640px it becomes 384px. The two actions remain in one row and the short explanation wraps naturally.
- from: new

#### buttons-item-row-actions
- name: Buttons — Inline actions below item rows
- kind: element
- tags: list, stacked, compact
- structure: A 288px list grows to 416px at sm with 16px padding, 1px row dividers and 12px vertical row padding. Each title/date summary uses a justified flex row; three underlined actions follow by 8px with 16px gaps. The root is 288px below 640px and 416px from 640px. Action rows wrap as needed while title and date retain their aligned reading order. Keep item titles short enough to fit the mobile summary.
- from: new

#### buttons-directional-links
- name: Buttons — Previous and next destination cards
- kind: element
- tags: split, row, compact
- structure: A 288px root stacks two destination links with 12px gaps. At sm it becomes a 512px two-column grid. Each link is at least 96px high with 16px padding, a 20px icon and 12px gap. Labels are 12px; titles are 14px medium. Below 640px the two 288px-wide links stack. From 640px the root is 512px and the links become two equal columns. Titles wrap within their flexible text region.
- from: new

#### buttons-wizard-navigation
- name: Buttons — Step navigation with progress
- kind: element
- tags: stacked, row, numbers, compact
- structure: A 288px (w-72) root grows to 448px (sm:w-[28rem]). Three equal progress columns use 8px gaps, 2px top rules and 8px top padding. Actions sit 24px below, separated across the row. A centered exit link follows by 16px. The root is 288px below 640px and 448px from 640px. Progress always uses three columns; the action pair keeps its edge alignment and the exit link stays centered.
- from: new

#### buttons-platform-downloads
- name: Buttons — Two-line platform download buttons
- kind: element
- tags: grid, icons, compact
- structure: A 288px (w-72) root grows to 448px (sm:w-[28rem]). A role="list" grid with 12px gaps holds two 56px-tall (h-14) neutral-900 rounded-md links, each with 16px side padding, a 24px leading glyph and a two-line label (12px neutral-300 lead-in over a 16px semibold platform name). Below 640px the links stack full width; from 640px they sit in two equal columns. A footer row 16px below puts the version and size on the left and an underlined "Other platforms" link on the right at both widths.
- from: new

#### buttons-speed-dial
- name: Buttons — Floating action button with speed dial
- kind: element
- tags: layered, icons, stacked
- structure: A 288px by 320px (w-72 h-80) neutral-50 bordered rounded-lg surface stands in for the screen, widens to 320px (sm:w-80), and holds a short page-content slot at the top. A `<details open>` sits absolute 16px from the bottom-right; its summary is a 56px rounded-full neutral-900 button with shadow-lg whose plus glyph rotates 45 degrees when open. The action list sits 16px above it, right-aligned and inset 8px, in flex-col-reverse with 12px gaps, so the first action is nearest the button. Each action is one button pairing a white label chip with a 40px white icon circle 12px apart. Only the surface width changes at 640px.
- from: new

#### buttons-numbered-pagination
- name: Buttons — Numbered pagination with ellipses
- kind: element
- tags: row, numbers, compact
- structure: A nav with a 288px (w-72) root grows to 512px (sm:w-[32rem]) and spreads Previous, the middle and Next with justify-between and an 8px minimum gap. Previous and Next are 40px-tall outlined rounded-md links with 16px chevrons. Below 640px the middle is a 14px "Page 6 of 12" status. From 640px it becomes a role="list" row of 40px square page links with 4px gaps: 1, ellipsis, 5, 6 (current), 7, ellipsis, 12. The current page's fill follows aria-current="page", and forced-colors mode paints it with Highlight.
- from: new

#### buttons-vote-counters
- name: Buttons — Vote buttons with counts
- kind: element
- tags: list, numbers, compact
- structure: A 288px (w-72) role="list" card grows to 416px (sm:w-[26rem]), with a neutral-200 border, rounded-lg corners and 1px row dividers. Each row has 16px padding and centers a 48px by 56px rounded-md vote toggle (16px chevron over a 14px semibold count) beside a title and a 12px meta line, with a 16px gap. The pressed look follows aria-pressed (neutral-900 fill, white text, Highlight in forced colors), so the host only flips the attribute. Only the root width changes at 640px; titles wrap beside the fixed-size toggle.
- from: new

### inputs (16 patterns; 18 retired components reviewed)

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

#### inputs-date-range
- name: Inputs — Date range with a shared note
- kind: element
- tags: split, form, compact
- structure: A 288px bordered fieldset grows to 448px at sm with 16px padding and a 14px legend. Two labelled 40px date fields use a 12px grid gap. Each label sits 6px above its field, and a shared 12px note follows by 12px. Below 640px the date inputs stack inside the 288px fieldset. From 640px the fieldset is 448px wide and the inputs occupy two equal columns. Native date controls retain min-w-0 to fit their column.
- from: new

#### inputs-dimension-pair
- name: Inputs — Dimensions with proportions and units
- kind: element
- tags: split, form, numbers, compact
- structure: A 288px root grows to 384px at sm. Two equal numeric fields surround a flexible 40px-high multiplication divider in a three-track grid with 12px gaps. A lower flex row pairs a native checkbox with a 64px units select. Labels have 6px bottom gaps; the hint follows by 8px. The width changes from 288px to 384px at 640px. The fields keep their three-track arrangement and min-w-0 sizing; the lower controls remain on one row with short labels.
- from: new

#### inputs-floating-labels
- name: Inputs — Labels inside tall fields
- kind: element
- tags: stacked, form, compact
- structure: A 288px (w-72) stack grows to 384px at sm with 16px gaps. Each relative field contains a 56px input with 12px horizontal padding, 24px top padding and 8px bottom padding. The absolute label sits 12px from the left; a hint follows by 6px. The root grows from 288px to 384px at 640px. Fields remain full width in one column; label positions and 56px heights do not change.
- from: new

#### inputs-range-endpoints
- name: Inputs — Range with endpoints and an exact field
- kind: element
- tags: row, form, numbers, compact
- structure: A 288px bordered fieldset grows to 384px at sm with 16px padding. Its flex row separates a flexible slider from an 80px (w-20) number field by 16px. Slider labels have 8px bottom gaps; its 32px control sits above justified 12px endpoints. The exact field is 40px high. The root is 288px below 640px and 384px above. The exact field remains 80px wide; the slider takes the remaining width without overflowing its flexible region.
- from: new

#### inputs-linked-url-preview
- name: Inputs — URL field with a linked-page preview
- kind: element
- tags: stacked, form, icons, compact
- structure: A 288px stack grows to 416px at sm. A 14px label sits 6px above the 40px URL field; its hint has a 6px top gap. A neutral-50 preview starts 16px below, with a 1px border, 12px padding and 12px gaps between a 40px icon, flexible text and 32px remove button. The root grows from 288px to 416px at 640px. The preview keeps one row, its icon and button stay fixed, and the min-w-0 text region truncates long titles and domains.
- from: new

#### inputs-file-dropzone
- name: Inputs — Upload zone with a native file field
- kind: element
- tags: centered, stacked, form, icons, compact
- structure: A 288px dashed-border zone grows to 384px at sm with 20px padding and centered content. A 40px icon tile precedes the 14px label by 12px. The full-width native file field has 8px padding and a compact dark chooser button. The hint follows by 12px. The zone is 288px below 640px and 384px from 640px. Its file field stays full width and permits the browser to truncate long filenames within the available space.
- from: new

#### inputs-payment-card
- name: Inputs — Card number with joined expiry and security code
- kind: element
- tags: stacked, form, icons, numbers, compact
- structure: A fieldset 288px wide (w-72), 352px (sm:w-[22rem]) from 640px, with a 16px semibold legend 16px above three field groups spaced 16px apart. The card number input is 40px high with a 16px card glyph inset 12px from the left. Expiry and security code sit in a two-column grid with no gap: the left input rounds only its left corners and the right input drops its left border, so they read as one bordered box with a single divider, and a 14px hint sits 6px below. Name on card is a full-width 40px input. Only the root width changes at 640px.
- from: new

#### inputs-address-block
- name: Inputs — Address block with country first
- kind: element
- tags: stacked, grid, form, compact
- structure: A fieldset 288px wide (w-72), 448px (sm:w-[28rem]) from 640px, with a screen-reader legend and three groups spaced 16px apart. A full-width country select with an inset chevron leads, then Street address with two 40px inputs 8px apart. The last group is a grid with a 12px column gap and 16px row gap: below 640px City spans the full row above a flexible Region and a 112px Postal code (grid-cols-[1fr_7rem]). From 640px City, Region and Postal code sit in three equal columns.
- from: new

#### inputs-tag-entry
- name: Inputs — Tag entry with chips inside the field
- kind: element
- tags: stacked, row, form, compact
- structure: A root 288px wide (w-72), 416px (sm:w-[26rem]) from 640px. A label row puts Tags and a 3 of 10 count at opposite ends above a wrapping flex field at least 40px high, with a 1px border, 6px/4px padding and 6px/4px gaps. Inside it, 28px chips with 20px round remove buttons are followed by a 28px inline input at least 96px wide, and the field shows the focus outline through has-[input:focus-visible]. A 14px hint sits 6px below, and a Suggested row of 28px dashed add buttons follows 16px lower. On mobile the input wraps to a second row inside the border; at 416px it fits beside the chips.
- from: new

#### inputs-password-requirements
- name: Inputs — Password with strength and requirements
- kind: element
- tags: stacked, list, form, icons, compact
- structure: A root 288px wide (w-72), 416px (sm:w-[26rem]) from 640px. A 40px bordered field wrapper holds a flexible password input and an attached Show button with an eye icon behind a left divider. 12px below, a flexible four-column meter of 6px segments with 4px gaps sits beside a 12px Strength label. A requirements list starts 16px lower as a grid with 8px gaps, each row a 16px check or empty-circle icon before 14px text. The list is one column below 640px and two equal columns from 640px.
- from: new

### badges (16 patterns; 18 retired components reviewed)

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

#### badges-access-matrix
- name: Badges — Access badges in a comparison table
- kind: element
- tags: table, compact
- structure: A 288px bordered card grows to 448px at sm with 16px padding. Its full-width native table has a left-aligned caption and 12px column headings. Three rows use top dividers and 12px vertical padding; access cells center small outlined pills. The root grows from 288px to 448px at 640px. The three columns stay together; short group names and status labels may wrap naturally without widening the table.
- from: new

#### badges-capability-grid
- name: Badges — Capability badges in a small grid
- kind: element
- tags: grid, icons, compact
- structure: A 288px two-column list grows to 416px at sm with 12px gaps. Each rounded-lg card has a neutral-200 border and 12px padding. A 16px icon and small pill share the top row; a 12px semibold feature title starts 12px below. The grid remains two columns at every width. Its root grows from 288px to 416px at 640px. State rows can wrap if a host uses longer status labels; retain the short-label guidance for a compact result.
- from: new

#### badges-provenance-header
- name: Badges — Document header with provenance
- kind: element
- tags: split, stacked, compact
- structure: A 288px bordered card grows to 384px at sm. The 16px-padded heading row places a flexible 16px title beside a small version pill. Description and ownership metadata follow by 8px and 12px. A neutral-50 footer has 12px vertical and 16px horizontal padding. The card grows from 288px to 384px at 640px. The title can wrap while the version pill stays fixed. Ownership metadata wraps as a group and the footer keeps its justified alignment.
- from: new

#### badges-grouped-counters
- name: Badges — Grouped totals with state labels
- kind: element
- tags: row, numbers, compact
- structure: A 288px bordered list grows to 416px at sm with three equal columns. Each column uses 12px padding and a right divider except the last. A 20px semibold total sits over a 12px label by 4px; a small pill follows by 8px. The root grows from 288px to 416px at 640px. The three equal columns remain side by side, with labels allowed to wrap to two lines on mobile.
- from: new

#### badges-label-value-tokens
- name: Badges — Joined label and value tokens
- kind: element
- tags: grid, row, compact
- structure: A 288px root grows to 416px at sm. A 14px heading precedes a two-column token grid by 12px, with 8px gaps. Each rounded-full token has a 1px border, a neutral-50 label segment, a vertical divider and a flexible centered value segment. Both segments use 10px horizontal and 4px vertical padding. The root grows from 288px to 416px at 640px. Tokens stay in two columns and keep their shared pill anatomy; values remain short enough to fit the mobile segments.
- from: new

#### badges-milestone-strip
- name: Badges — Milestone status strip
- kind: element
- tags: row, numbers, compact
- structure: A 288px root grows to 448px at sm. A 14px heading leads a three-column list by 12px. Each column shares a 1px top rule and 12px top padding, with a centered status pill, 8px title gap and 4px date gap. The three columns remain in one row. The root grows from 288px to 448px at 640px; titles may wrap to two lines on mobile while dates and badges stay compact.
- from: new

#### badges-announcement-pills
- name: Badges — Announcement pill links
- kind: element
- tags: centered, stacked, compact
- structure: A flex column, w-72 (288px) growing to sm:w-[26rem] (416px), centers three content-width pill links with gap-4 (16px). Each pill is h-8 (32px), rounded-full, max-w-full, with a 1px border and text-sm. The first has pl-1/pr-3, a 22px solid New label, the message and a 16px arrow with gap-2. The second has a neutral-50 fill, px-3 and gap-3 around a 1px × 16px divider before "Read more" and an arrow. The third is solid neutral-900 with a calendar icon, white medium text and a chevron. At sm only the column width changes. Pills never wrap; a long message truncates with an ellipsis.
- from: new

#### badges-inline-labels
- name: Badges — Inline beside titles and links
- kind: element
- tags: stacked, compact
- structure: A bordered rounded-lg card, w-72 (288px) growing to sm:w-[26rem] (416px), has three regions divided by neutral-200 rules. The header (p-4) has a text-base semibold heading that wraps with gap-2 to an outline Beta badge, then a text-sm description. The nav row (px-4) has a wrapping list of h-11 links with gap-x-5. The current link has a 2px bottom border, and Reports carries an 18px solid New badge 6px after its label. The footer row (p-4, justify-between) has a text-sm medium option name with a neutral-100 Pro badge with a lock icon, a text-xs note, and a right-aligned Upgrade text link. At sm only the card width changes; heading, nav and option name wrap instead of overflowing.
- from: new

#### badges-release-notes
- name: Badges — Release notes with change labels
- kind: section
- tags: asymmetric, list
- structure: The container is mx-auto max-w-3xl px-6 py-16 sm:py-24, with an eyebrow, a text-3xl/sm:text-4xl headline and a text-lg lede. Below that, an ordered list (mt-12) has a top border and neutral-200 dividers between releases (py-8). Below 768px each release stacks: version pill, Latest badge and date share one wrapping row (gap-x-3), then a text-lg semibold title and the change rows. From md (768px) each release is a grid-cols-[10rem_1fr] grid with gap-8: version above the date on the left, title and changes on the right. Change rows (space-y-3) baseline-align a w-20 (80px) centered label (solid New, outline Improved, dashed Fixed) with gap-3 to text-sm neutral-600 text.
- from: new

#### badges-media-overlays
- name: Badges — Overlays on media thumbnails
- kind: element
- tags: grid, layered, media, compact
- structure: A list, w-72 (288px) growing to sm:w-[26rem] (416px), forms a two-column grid with gap-x-4 and gap-y-5. Each item is a relative aspect-video neutral-100 rounded-lg video placeholder with a centered play glyph (24px, 32px from sm), followed by a truncating text-sm medium title (mt-2) and a text-xs meta line. Badges sit absolutely 8px from corners. Top left holds status (solid Live with a white dot, or a white New pill). Top right holds access (Members with a lock). Bottom right holds duration (rounded-md neutral-900/75 tag, tabular figures, visually hidden "Duration" wording). Bottom left holds schedule (Upcoming with a clock). At sm the thumbnails grow from 136px to 200px wide; badges keep their size and offsets.
- from: new

### toggles (16 patterns; 18 retired components reviewed)

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

#### toggles-checklist-rows
- name: Toggles — Checklist rows with descriptions
- kind: element
- tags: list, form, compact
- structure: A 288px fieldset grows to 448px at sm with 16px padding. Three divided rows use 12px vertical padding. Each label aligns a 16px checkbox with flexible copy and a small fixed badge using 12px gaps. Descriptions start 4px under 14px medium titles. Below 640px the root is 288px, and from 640px it is 448px. Copy wraps within min-w-0 while checkbox and requirement badge keep their size. The three items stay stacked.
- from: new

#### toggles-inline-consent
- name: Toggles — Consent row with a separate explanation
- kind: element
- tags: stacked, form, compact
- structure: A 288px bordered card grows to 416px at sm. The explanation uses 16px padding, an 8px description gap and a 12px link gap. A neutral-50 footer has a top divider and 16px padding, aligning a 16px checkbox with a right-side 12px status word. The card grows from 288px to 416px at 640px. The explanation wraps naturally while the checkbox and short status label remain opposite each other on one row.
- from: new

#### toggles-master-detail-summary
- name: Toggles — Enabled mode with a summary preview
- kind: element
- tags: split, stacked, form, compact
- structure: A 288px card grows to 384px at sm with 16px padding. Its header pairs a 16px native checkbox with a 14px semibold title and 12px gap. An 8px-spaced hint precedes the preview by 16px. The neutral-50 preview has two equal columns, a middle divider and 12px padding. The root grows from 288px to 384px at 640px. The summary remains two columns, and the off note occupies a single compact text region when the checkbox is cleared.
- from: new

#### toggles-icon-choice-grid
- name: Toggles — Icon radio choice grid
- kind: element
- tags: grid, icons, form, compact
- structure: A 288px fieldset grows to 384px at sm. The two-column grid has 12px gaps and minimum 96px choices with 12px padding. Each card pairs a 24px icon and 16px check marker, then a 14px label 12px below. The hint follows the grid by 12px. The root grows from 288px to 384px at 640px. The four choices remain in two columns and two rows, with identical icon and label placement at both sizes.
- from: new

#### toggles-permission-matrix
- name: Toggles — Permission checkbox matrix
- kind: element
- tags: table, form, compact
- structure: A 288px bordered card grows to 448px at sm with 16px padding. A full-width native table uses 12px headers, 12px vertical row padding and 1px top dividers. Three capability columns center 16px checkboxes. The shared hint follows by 12px. The root grows from 288px to 448px at 640px. The four table columns remain together; short row labels can wrap without widening the checkbox columns.
- from: new

#### toggles-switch-dependent-options
- name: Toggles — Switch with dependent delivery options
- kind: element
- tags: stacked, form, compact
- structure: A 288px root grows to 384px at sm. A justified header pairs a short label and hint with a 44px by 24px switch. The dependent fieldset sits 16px below with 16px padding and two checkbox rows separated by 12px. A note follows by 12px. The root changes from 288px to 384px at 640px. The header and dependent checkbox stack keep their arrangement. Hiding the dependent group reduces the component height.
- from: new

#### toggles-filter-chips
- name: Toggles — Filter chip toggles
- kind: element
- tags: row, form, compact
- structure: The group is 288px wide (w-72) and widens to 448px (sm:w-[28rem]) at 640px. A header row places the 14px semibold label and a Clear text button at opposite ends, and a flex row of 32px pill chips with 8px gaps sits 12px below. A 12px hint closes the group 12px under the chips. Selected chips gain a check glyph and a neutral-900 border, and Clear shows only while a chip is selected. The seven chips wrap to two rows at 448px and to three rows at 288px.
- from: new

#### toggles-star-rating
- name: Toggles — Star rating input
- kind: element
- tags: row, icons, form, compact
- structure: The fieldset is 288px wide and widens to 320px (sm:w-80) at 640px. A 14px semibold question and a 14px hint sit above a row 12px lower, which holds five adjoining 36px star tiles with 28px icons and a 14px caption. The 180px star row stays on one line at both widths, so only the fieldset grows. The checked star and every star before it fill, and the caption shows the matching word.
- from: new

#### toggles-theme-previews
- name: Toggles — Theme choice with previews
- kind: element
- tags: grid, form, compact
- structure: The fieldset is 288px wide and widens to 448px (sm:w-[28rem]) at 640px. A 14px semibold legend and a 14px hint sit above three columns with 8px gaps, which become 16px at 640px. Each option is a 4:3 preview frame with a miniature light, dark or split screen, then a 16px radio indicator and a 14px medium name 8px below. Frames measure about 91 by 68px at 288px and 139 by 104px at 448px, with the same proportions and name rows at both widths.
- from: new

#### toggles-time-slot-grid
- name: Toggles — Time slot grid
- kind: element
- tags: grid, numbers, form, compact
- structure: The fieldset is 288px wide and widens to 448px (sm:w-[28rem]) at 640px. A 14px semibold date and a 14px time zone hint sit above two nested Morning and Afternoon fieldsets, each with a 12px legend and 16px between periods. Each period is a grid of 36px slots with 8px gaps, three columns wide below 640px and six from 640px up. On mobile each period becomes two rows, so the element is about 284px tall there against 196px on desktop.
- from: new

### tabs (16 patterns; 18 retired components reviewed)

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
- name: Tabs — Counted links with More menu
- kind: element
- tags: row, layered, numbers, compact
- structure: A `<nav aria-label>` holding an underline row (1px neutral-200 bottom border) of 40px link tabs (text-sm font-medium neutral-500), each with a trailing count pill (rounded-full bg-neutral-100 px-1.5 text-xs tabular-nums); the current link has `aria-current="page"`, neutral-900 text and a 2px underline, and the row ends with a "More" tab that is the summary of a relative `<details open>`. Below 640px two links show and More lists the rest; from 640px four links show (the extra links are `hidden sm:flex` in the row and `sm:hidden` in the menu). More's panel sits absolutely below it, right-aligned, w-48, rounded-md border shadow-lg p-1, with three 36px links; root `relative w-72 sm:w-[32rem]` with a fixed height of about 190px that reserves the open panel. States: link hover (neutral-700 text, neutral-300 underline), current, FOCUS on links and summary, and the chevron turning 180° when open.
- from: tabs-brutalist, tabs-civic-petitions

#### tabs-centered-metric
- name: Tabs — Centered period choices and a metric
- kind: element
- tags: centered, stacked, numbers, compact
- structure: A 288px centered card grows to 384px at sm with 20px padding. Its 16px heading precedes three 36px period choices by 12px, with 4px gaps. A panel starts 20px below a top divider, using 20px top padding, a 36px total and 8px text gaps. The card grows from 288px to 384px at 640px. The three choices remain centered on one row and the total retains its size. Short text wraps inside the padded panel.
- from: new

#### tabs-counted-toolbar
- name: Tabs — Counted views beneath a toolbar
- kind: element
- tags: stacked, row, numbers, compact
- structure: A 288px root grows to 448px at sm. Its header aligns a 14px heading with a 32px add button. A three-column counted selector starts 12px below with a bottom divider and 40px choices. The panel begins 16px later and contains two 12px-padded bordered rows with 12px gaps. The root grows from 288px to 448px at 640px. All three view choices remain visible, while item titles wrap within flexible list rows if needed.
- from: new

#### tabs-responsive-disclosure
- name: Tabs — Disclosure selector that becomes a tab row
- kind: element
- tags: stacked, layered, compact
- structure: A 288px root grows to 448px at sm. On mobile a bordered disclosure has a 40px summary and three 36px radio rows inside 4px padding. The content panel begins 16px below with 16px padding. At sm the summary hides only while the disclosure is open, and the revealed radio list becomes three equal columns with 12px gaps. Below 640px the 288px selector is an open vertical disclosure. From 640px the root is 448px and an open choice list becomes horizontal. The summary hides only while open; after closing on mobile and resizing wider, the summary remains visible and can reopen the desktop choices. The panel stays below the selector in both layouts.
- from: new

#### tabs-grouped-navigation
- name: Tabs — Grouped view choices in two columns
- kind: element
- tags: grid, stacked, compact
- structure: A 288px root grows to 448px at sm. The selector has two equal columns with a 16px gap. Each fieldset places a 12px group heading 8px over two 36px choices separated by 4px. A single selected panel follows by 16px with a top divider and 16px top padding. Below 640px the root is 288px; above it is 448px. The two selector groups stay side by side and each keeps its two stacked options. The content panel stays full width underneath.
- from: new

#### tabs-numbered-stages
- name: Tabs — Numbered stage views
- kind: element
- tags: row, stacked, numbers, compact
- structure: A 288px root grows to 448px at sm. Three equal stage columns have 8px gaps, top rules and 12px top padding. Each stage centers a 32px number circle with a label 8px below. The selected panel starts 16px later with 16px padding and a neutral-50 surface. The root grows from 288px to 448px at 640px. The three selectors keep one row and the selected requirement panel remains a single-column stack.
- from: new

#### tabs-selector-cards
- name: Tabs — Selector cards above a content panel
- kind: element
- tags: grid, stacked, icons, compact
- structure: A 288px root grows to 448px at sm. Two equal selector cards use 12px gaps, 12px padding and at least 112px height. Each holds a 20px icon, check marker, 14px title and 12px description. The 16px-padded bordered content panel follows by 12px. The root grows from 288px to 448px at 640px. Selector cards remain side by side and their short descriptions wrap on mobile. The content region stays underneath both choices.
- from: new

#### tabs-code-snippet
- name: Tabs — Code snippet with copy button
- kind: element
- tags: stacked, row, compact
- structure: The root is a 288px (`w-72`) neutral-950 block with rounded-lg corners, and it widens to 448px (`sm:w-[28rem]`) at 640px. A neutral-900 header with a 1px neutral-800 bottom border holds four 40px tab labels (npm, pnpm, yarn, bun) on the left and a 32px icon-only copy button on the right, with 8px side padding. Below it, each tab has a pre panel with 16px padding, font-mono text-sm, a 24px line height and a neutral-400 `$` prompt on each line, and only the checked panel displays. Commands never wrap; a long line scrolls sideways inside a keyboard-focusable block. Only the width changes at 640px.
- from: new

#### tabs-document-strip
- name: Tabs — Document strip with close buttons
- kind: element
- tags: row, layered, icons, compact
- structure: The white frame has a 1px neutral-200 border and rounded-lg corners, clipped to its edges, at 288px (`w-72`), and it grows to 576px (`sm:w-[36rem]`) at 640px. A neutral-100 strip holds the document tabs: 36px high, each with a 16px file icon, a name truncated at 112px (`max-w-28`) and a 24px close button, with 4px gaps. A 32px New document button follows the scrolling tab row and stays pinned at the right edge. The selected tab turns white and joins the document area below, which has 20px padding (24px from 640px) and holds a title, an edit line and two paragraphs. At 288px only the first tab and part of the second fit, so the row scrolls with its scrollbar hidden; at 640px all three tabs fit.
- from: new

#### tabs-icon-split-panels
- name: Tabs — Icon tabs over split panels
- kind: section
- tags: centered, split, icons, media, spacious
- structure: The white section uses a max-w-6xl container with 24px side padding and 64px vertical padding (96px from 640px). A max-w-2xl centered intro stacks the eyebrow, headline and lede, and 48px below it four tabs sit on a 2px neutral-200 track, each a 24px icon over a text-sm label. Tabs are 96px wide and grow to 144px at 640px; below 640px the row bleeds to the screen edges and scrolls sideways. The selected panel starts 48px below and stacks copy above a 4:3 image placeholder until 1024px, where it becomes two 64px-gapped columns with the copy vertically centered against the image.
- from: new

#### tabs-sticky-section-links
- name: Tabs — Sticky links to page sections
- kind: section
- tags: stacked, row, spacious
- structure: The intro (eyebrow, headline and a max-w-2xl lede) sits in a max-w-6xl container with 24px side padding and 64px top padding (96px from 640px). A full-width band with 1px neutral-200 top and bottom borders starts 40px below and sticks to the top of the viewport (`sticky top-0`, `z-10`), and its max-w-6xl row holds 36px pill links with 8px gaps. Four sections follow, each with 48px vertical padding, a 1px neutral-200 rule and a 64px scroll margin so jumps land below the band. From 1024px each section is three columns, with the heading in one and the content in two, 64px apart. Below 1024px headings stack above their content with 16px between; the feature list is one column until 640px and two after, and the band's links scroll sideways on small screens.
- from: new

### dropdowns (16 patterns; 18 retired components reviewed)

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

#### dropdowns-breadcrumb-branch
- name: Dropdowns — Breadcrumb branch disclosure
- kind: element
- tags: layered, list, compact
- structure: A relative 288px by 256px root grows to 448px at sm. Its breadcrumb uses 8px gaps and a 36px middle summary. The full-width panel is absolutely placed 44px below the root top with 12px padding and shadow-lg. A small heading precedes three 36px links; child links indent 24px. The root grows from 288px to 448px at 640px. The breadcrumb remains one row with short labels, and the panel spans the full root width at both sizes. The 256px root contains its open branch panel.
- from: new

#### dropdowns-display-settings
- name: Dropdowns — Disclosure with paired native settings
- kind: element
- tags: layered, stacked, form, compact
- structure: A 288px disclosure grows to 384px at sm. A 44px outlined trigger has a 16px settings icon, flexible label and chevron. Its full-width panel starts 8px below with 12px padding. Two labelled 40px native selects use 12px group gaps and 6px label gaps; a shared hint follows by 12px. The root grows from 288px to 384px at 640px. Both selects remain stacked and full width in the panel; all labels and hints wrap within their available width.
- from: new

#### dropdowns-nested-destinations
- name: Dropdowns — Nested destination disclosures
- kind: element
- tags: layered, list, compact
- structure: A 288px disclosure grows to 384px at sm. Its 44px trigger precedes a 12px-padded panel by 8px. The panel has a 288px max-height and vertical scrolling. Two 36px group summaries lead 32px indented links with a left rule. A divided footer contains a 36px Browse all link. The root grows from 288px to 384px at 640px. Groups stay stacked and the panel is capped at 288px tall, scrolling when both branches are open. The complete element stays within a 340px initial height.
- from: new

#### dropdowns-sort-direction
- name: Dropdowns — Sort field and direction panel
- kind: element
- tags: layered, form, compact
- structure: A 288px disclosure grows to 384px at sm. A 44px trigger leads a full-width panel by 8px. The panel has 12px padding, three 32px field rows and a direction fieldset separated by a top border and 12px spacing. Two equal 36px direction labels use an 8px gap. The root grows from 288px to 384px at 640px. Sort fields stay stacked and direction stays in two equal columns. Short labels fit within the mobile panel.
- from: new

#### dropdowns-two-column-commands
- name: Dropdowns — Two-column commands and resources
- kind: element
- tags: layered, split, list, compact
- structure: A 288px disclosure grows to 448px at sm. The 44px summary sits 8px above a 12px-padded panel. Its two equal columns use a 12px gap, with a left border and 12px padding on Resources. Three 36px commands sit beside two title/description links. A divided footer holds a 36px destination. The root grows from 288px to 448px at 640px. The panel keeps two columns with short text; resource descriptions wrap without widening their column. The footer remains full width.
- from: new

#### dropdowns-workspace-switcher
- name: Dropdowns — Workspace switcher with a create action
- kind: element
- tags: layered, list, form, compact
- structure: A 288px disclosure grows to 384px at sm. Its 44px outlined summary sits 8px above a full-width shadow-lg panel with 12px padding. Two radio rows use 8px padding, 32px initials tiles, 12px gaps and title/hint text. A top divider separates a 36px create action. The root grows from 288px to 384px at 640px. Panel width follows the root, and the two choices stay stacked. Workspace copy can wrap inside min-w-0 while initials and check markers remain fixed.
- from: new

#### dropdowns-notification-panel
- name: Dropdowns — Notification panel with unread items
- kind: element
- tags: layered, list, compact
- structure: A relative root is 288px wide (w-72) and reserves 384px (h-96); from 640px it is 384px wide (sm:w-96) and reserves 336px. A right-aligned 44px ghost bell summary carries an 8px unread dot. The full-width rounded-lg panel sits 8px below it with shadow-lg. Inside, a header row holds the title and a Mark all as read text link. Below it, a divided list holds three linked rows, each with px-4 py-3, a 32px initials avatar, a 12px gap, an actor/action line over a 12px item and time line, and an 8px unread dot on the first two rows. A neutral-50 footer centers View all notifications. Below 640px the action text wraps to two lines, which is why the mobile reserve is taller.
- from: new

#### dropdowns-date-picker
- name: Dropdowns — Date picker with month grid
- kind: element
- tags: layered, grid, form, compact
- structure: A relative 288px by 352px root (w-72 h-[22rem]) grows to 320px wide at 640px. A 14px Date label sits above a 40px outlined summary with a calendar icon, the selected value and a chevron. The full-width panel starts 4px below it with 12px padding and shadow-lg. A header row places 32px previous and next buttons either side of the month title. Below it, a fixed-layout table has a 32px weekday row and five rows of 36px day buttons centered in seven equal columns. The buttons carry their states as attributes: aria-pressed for the selected day, aria-current=date for today and disabled for unavailable days. Columns widen from about 37px to 42px at 640px while the buttons stay 36px.
- from: new

#### dropdowns-search-suggestions
- name: Dropdowns — Search field with suggestions
- kind: element
- tags: layered, list, icons, compact
- structure: A relative search form 288px wide and 352px tall (w-72 h-[22rem]) grows to 384px wide at 640px. A 40px search field has a leading icon. A full-width rounded-lg panel sits 8px below it with 4px padding, and it is a peer sibling of the input, hidden while the placeholder shows. The panel stacks a Recent searches heading over two 36px clock-icon rows, a divider, a Suggested results heading over two rows with a 40px icon tile and title/meta lines, and a divided 36px see-all row with an Enter key hint. Text truncates rather than wrapping at both widths.
- from: new

#### dropdowns-share-popover
- name: Dropdowns — Share popover with access list
- kind: element
- tags: layered, form, list, compact
- structure: A relative 288px by 376px root (w-72 h-[23.5rem]) grows to 384px wide at 640px. A right-aligned 44px outlined Share summary opens a full-width rounded-lg panel 8px below, with 16px padding and shadow-lg. The panel stacks a title, an invite row (a flexible 40px email input beside a 44px primary Invite button), and a People with access heading over two rows. Each row has a 40px avatar, a name/email column and either an Owner label or a native role select. A top-bordered footer holds a globe icon, a link-access sentence and a 44px secondary Copy link button. Below 640px, names and emails truncate and the footer sentence wraps to two lines.
- from: new

## Group: App UI

### login (15 patterns; 18 retired components reviewed)

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

#### login-account-picker
- name: Login — Account picker with credential pane
- kind: section
- tags: split, list, form
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A 32px-gap two-column grid begins 40px below the heading at md. The left fieldset lists two 80px identity rows; the right bordered p-6 card contains a password field and full-width 44px action. Below 768px the account list precedes the credential card; columns become equal at md. Account emails truncate while labels and actions remain visible. The h1 increases to 36px at sm.
- from: new

#### login-organization-gateway
- name: Login — Organization domain gateway
- kind: section
- tags: stacked, row, form
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A max-w-3xl introduction sits above a p-6 domain band. At 640px its grid uses minmax(0,1fr)/auto with 16px gaps. A three-column definition list follows after 32px. The action stacks below the domain field under 640px, and the policy notes become a single column. The input shrinks before its fixed suffix; the heading grows at sm.
- from: new

#### login-passkey-options
- name: Login — Passkey action with fallback disclosure
- kind: section
- tags: split, stacked, form
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A 48px-gap equal grid at md aligns a description column with a bordered 24px-padded action card. A primary action is followed by a 24px-separated details disclosure containing two fields. Below 768px the explanation and action card stack. Opening the fallback expands the card vertically in normal flow. The heading increases at sm.
- from: new

#### login-device-approval
- name: Login — Pending device approval with session details
- kind: section
- tags: split, list, compact
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A two-column grid at md uses 40px gaps. The message column begins with a bordered badge and ends in a wrapping action row. A p-6 session card uses definition rows with dividers and a three-step list. Below 768px the pending message precedes the session card; actions wrap. Definition rows preserve label/value grouping at narrow widths. Title size increases at sm.
- from: new

#### login-recovery-panel
- name: Login — Recovery steps beside email form
- kind: section
- tags: split, list, form
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. Two equal columns with a 48px gap begin at lg. The left column holds an introduction and two numbered rows 24px apart. The right p-6 card contains one email field and a full-width submit. Under 1024px the explanation stacks above the form. Body copy wraps freely; the input and submit use the available card width. At sm the title and section padding increase.
- from: new

#### login-verification-code
- name: Login — Verification code with delivery rail
- kind: section
- tags: split, row, form
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A 2fr/1fr grid with 48px gaps starts at lg. The wider form holds a six-column code row with 8px gaps and 48px-high fields. The delivery rail uses neutral-50 and p-6. Below 1024px the delivery panel moves below the form. Six min-w-0 inputs share the available width at 320px. The title and section padding increase at 640px.
- from: new

#### login-qr-code
- name: Login — QR code with phone steps
- kind: section
- tags: split, list, media
- structure: A neutral-50 section with a max-w-6xl container (24px gutters, 64px vertical padding, 96px from 640px) centers a white max-w-4xl bordered card. The card body is padded 24px (40px from 640px). From 768px it becomes a minmax(0,1fr)/auto grid with a 64px gap: a 30/36px heading, 18px lede, three numbered steps with 32px number circles and a keep-signed-in checkbox on the left, and a 192px QR placeholder tile with a refresh caption on the right. Below 768px the QR tile and caption stack centered under the steps with a 40px gap. A top-ruled footer row puts a fallback question on the left and a 44px outlined "Sign in with email instead" action on the right, and wraps on narrow screens.
- from: new

#### login-reauthenticate
- name: Login — Re-authenticate known account
- kind: section
- tags: centered, stacked, form, compact
- structure: A white section with a max-w-6xl container (24px gutters, 64px vertical padding, 96px from 640px) holds a centered max-w-sm 384px column. A centered 30px heading (36px from 640px) and 14px explanation sit 32px above a bordered card. The card stacks three hairline-separated bands: a neutral-50 identity band with a 64px initials avatar, name and truncated email; a 24px-padded form with a Password label row (Forgot password? on the right), a 40px input and a full-width 44px Continue; and a footer with "Not you? Switch account". The layout is one column at every width; only padding and heading size change at 640px.
- from: new

### signup (15 patterns; 18 retired components reviewed)

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

#### signup-consent-checklist
- name: Sign-up — Consent checklist with account strip
- kind: section
- tags: stacked, list, form
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. Three agreement rows have 24px vertical padding, 12px input/copy gaps and horizontal separators. A p-6 neutral-50 identity band follows after 32px, with 1fr/1fr/auto columns at md. Under 768px the identity band becomes one column. Agreement descriptions wrap beneath their labels while inputs remain at the left. Title increases at sm.
- from: new

#### signup-interest-grid
- name: Sign-up — Interest choices with email footer
- kind: section
- tags: grid, stacked, form
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A two-column interest grid starts at sm with 16px gaps and p-6 cards. A top-bordered registration band follows after 32px with 32px upper padding, minmax(0,1fr)/auto columns and 16px gap. Interest cards and email/action stack below 640px. Every checkbox remains visible at the start of its card. The heading grows to 36px at sm.
- from: new

#### signup-profile-first
- name: Sign-up — Profile identity above credential panel
- kind: section
- tags: stacked, row, form
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. An auto/1fr grid at sm places a 64px initials circle in a neutral-50 identity block beside two profile fields. A bordered credential fieldset follows after 32px, with 24px padding and two columns at md. The identity block stacks below sm. Profile fields become two columns at sm; credentials become two columns at md. The section padding and title increase at sm.
- from: new

#### signup-role-selection
- name: Sign-up — Purpose rail beside credentials
- kind: section
- tags: sidebar, list, form
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A 1fr/1.4fr grid starts at lg with 40px gaps. The left fieldset has three vertically divided purpose options with 24px vertical padding and 16px input/copy gaps. The p-6 credential card on the right spaces fields by 24px and ends in a full-width primary action. Below 1024px the vertical purpose selector precedes the credential card. Both stay in one column on mobile; options retain their horizontal radio/copy relationship. Heading and section padding increase at sm.
- from: new

#### signup-referral-code
- name: Sign-up — Referral entry with benefit summary
- kind: section
- tags: split, form, compact
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A 48px-gap two-column layout starts at md. The left form uses 24px-separated fields and a primary action. The right p-6 card contains offer copy and two definition rows. Below 768px the benefit summary follows the entry form. Label/value pairs can wrap without forcing the column wider. Heading grows at 640px.
- from: new

#### signup-workspace-setup
- name: Sign-up — Workspace form with setup summary
- kind: section
- tags: split, form, list
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A 2fr/1fr grid begins at lg with 40px gaps. The left form has 24px vertical field spacing and a nested sm two-column identity row. The p-6 neutral-50 rail lists three 24px-separated setup steps. The setup rail stacks after the form below 1024px. Name/email stack below 640px. Inputs shrink to their columns and hints wrap. The heading and section padding increase at sm.
- from: new

#### signup-verification-sent
- name: Sign-up — Verification email sent
- kind: section
- tags: centered, icons, compact
- structure: A white section with a max-w-3xl container (24px gutters, py-16 sm:py-24) holds a centered max-w-md column. A text-centered header stacks a 48px icon tile with an envelope, a step eyebrow, a text-3xl/sm:text-4xl h1 and an 18px lede. Below it sit a neutral-50 bordered description list (Sent to address, link expiry) with each term and value split to opposite edges, then a full-width 44px primary "Open email app" action. A resend form under a neutral-200 top rule pairs a prompt and wait hint with a secondary "Resend email" button, followed by a centered "Wrong address? Use a different email" link. Below 640px the resend text and a full-width button stack with a 16px gap; from 640px they share one row with the button on the right.
- from: new

#### signup-trial-checkout
- name: Sign-up — Trial checkout with order summary
- kind: section
- tags: asymmetric, form, numbers
- structure: A white max-w-6xl section (24px gutters, py-16 sm:py-24) becomes a two-column grid at lg: a flexible main column and a fixed 24rem summary column, with a 64px column gap and 40px row gap. The header (eyebrow, h1, lede) and the form fill the left column. The order summary card (neutral-50, neutral-200 border, p-6) spans both rows on the right and is lg:sticky top-8; it lists the plan with a Change plan link, trial length, first charge date and recurring price, then a bordered "Due today" total in text-2xl. The form has an Account fieldset (name and email side by side from sm, full-width password) and a Payment fieldset under a top rule (full-width card number, then expiry and security code always side by side), followed by a terms checkbox and a submit row with a log-in link. Below lg everything stacks in source order (header, summary, form), so the amount due shows before any card field; below sm the name fields stack and the full-width submit sits above the log-in prompt.
- from: new

### settings (15 patterns; 18 retired components reviewed)

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
- name: Settings — Billing cards and invoices
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

#### settings-session-list
- name: Settings — Active sessions with security footer
- kind: section
- tags: stacked, list, compact
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A divided list begins 32px below the introduction. Rows use 24px vertical padding, 16px gaps and minmax(0,1fr)/auto columns at sm. A p-6 wrapping security band follows after 32px. Under 640px each session action sits below its device copy. The security band wraps at all widths. Badges wrap beside the heading; no row uses a fixed content width.
- from: new

#### settings-keyboard-shortcuts
- name: Settings — Grouped keyboard shortcuts
- kind: section
- tags: grid, list, compact
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A p-6 preference band starts 32px below the heading. Two bordered command cards follow after 24px in equal md columns with 24px gaps. Definition rows use 12px vertical padding and compact bordered kbd tokens. Command groups stack below 768px. Each row keeps its key token adjacent to its label with a wrapping label if needed. The h1 increases at sm.
- from: new

#### settings-integration-directory
- name: Settings — Integration directory with access scopes
- kind: section
- tags: grid, form, compact
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. Three equal cards at md use 24px gaps, 24px padding and status badges in a wrapping top row. Access-scope definitions sit 24px beneath descriptive copy, followed by outlined actions after 24px. Below 768px all provider cards stack. Within each card the status wraps beside its heading without forcing width. At 640px the title and section padding increase.
- from: new

#### settings-locale-panel
- name: Settings — Locale choices with format examples
- kind: section
- tags: split, form, compact
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. Two equal columns at md use 40px gaps. The form spaces fields by 24px and arranges clock radios in a wrapping 24px-gap row. The p-6 example card uses three divided definition rows with 16px vertical padding. Below 768px examples follow the preferences. Radio options wrap at narrow widths. Selects occupy their column without fixed widths; the h1 grows at sm.
- from: new

#### settings-notification-matrix
- name: Settings — Notification channel matrix
- kind: section
- tags: split, table, form
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. At lg, a 2fr/1fr grid uses 40px gaps. The table assigns half its width to topics and splits the rest between channels. Cells use 12px side and 16px vertical padding. The p-6 guidance panel sits beside it. Below 1024px guidance follows the table. Fixed table layout and two short channel headings keep the matrix within 272px of content width at a 320px viewport. Heading increases at sm.
- from: new

#### settings-profile-editor
- name: Settings — Profile editor with identity rail
- kind: section
- tags: sidebar, form, stacked
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A 256px/minmax(0,1fr) sidebar grid starts at lg with 40px gaps. The neutral-50 rail has 24px padding. The main form divides public and contact fields with a top border; name and role become two columns at sm. Below lg the identity rail moves above the form. Name and role stack below sm. The textarea remains full width and vertically resizable; all text can wrap at 320px.
- from: new

#### settings-api-keys
- name: Settings — API keys with one-time reveal
- kind: section
- tags: stacked, table, compact
- structure: The section is a 1024px max-w-5xl container with 24px side padding and 64px vertical padding, rising to 96px from 640px. The header stacks the heading, lede and a 44px Create key action, and sets them side by side from 640px. A neutral-50 bordered callout sits 40px below with a 40px read-only mono field and a Copy key button, in one row from 640px. The Active keys heading starts 48px below, and the keys are stacked bordered cards with a full-width Revoke below 640px. From 640px the name and Revoke share the first row and the details sit in two columns (four from 768px), and from 1024px the keys become one bordered table with a 10rem/8rem/7rem/7rem/6rem grid, 24px gaps, a visible column header row and screen-reader-only detail labels.
- from: new

#### settings-team-members
- name: Settings — Team members with invite form
- kind: section
- tags: stacked, list, form
- structure: The section is an 896px max-w-4xl container with 24px side padding and 64px vertical padding, rising to 96px from 640px. The header stacks the heading, lede and seat count, and the count moves beside the heading from 640px. A neutral-50 bordered invite form sits 40px below, with the email field, role select and Send invite stacked full width below 640px and placed in a minmax(0,1fr) 9rem 8rem grid with 24px gaps from 640px. The Members heading starts 48px below the form, and its bordered list of divided rows uses the same grid from 640px so role selects and actions line up under the invite fields. Below 640px each row shows the identity on its own line above a role select and a 7rem action, and from 768px every member fits on one row.
- from: new

### data-table (15 patterns; 18 retired components reviewed)

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

#### data-table-audit-log
- name: Data table — Audit log with date bands
- kind: section
- tags: table, list, compact
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A wrapping header ends in an export link. A date band with vertical 12px padding precedes a fixed table; Time is 80px and Actor one third at sm. Event cells contain a title and 4px-separated detail. Below 640px the Actor column is hidden, keeping Time and Event readable without scrolling. Desktop has all three columns. Header and export link wrap, and heading grows at sm.
- from: new

#### data-table-grouped-sections
- name: Data table — Grouped table sections
- kind: section
- tags: stacked, table, numbers
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A full-width fixed-layout table begins 32px below the heading. Its first column uses half the width. Each tbody begins with a spanning group heading; record cells use 12px horizontal and 16px vertical padding. A wrapping footer follows after 24px. The same three-column table remains at all widths, with record names wrapping in the half-width first column. The footer wraps at 320px. Heading and section padding increase at sm.
- from: new

#### data-table-inline-edit
- name: Data table — Inline editable record rows
- kind: section
- tags: table, form, compact
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A fixed table starts 32px below the title. Name receives half the width, Count and Action one quarter each. Editable cells use 8px padding, 40px fields and a 44px outlined row action. A 24px-separated save note follows. The table stays three columns down to 320px, with min-w-0 inputs filling their allotted cells. Count inputs use 4px horizontal padding below 640px and 12px above it so all three digits remain visible; actions use 8px horizontal padding. Heading grows at sm.
- from: new

#### data-table-totals-footer
- name: Data table — Line items with totals footer
- kind: section
- tags: stacked, table, numbers
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A wrapping heading/reference row sits above a fixed table with half-width descriptions. Cells have 12px horizontal and 16px vertical padding; compact total rows use 12px vertical padding. The last row is neutral-50 and semibold. All three columns remain visible at 320px with wrapping description labels. The reference and footer actions wrap. The heading size and section padding increase at sm.
- from: new

#### data-table-availability-grid
- name: Data table — People-by-day availability grid
- kind: section
- tags: table, grid, compact
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. The fixed table starts after 32px. Names use one third of the width; three days share the remaining space. Member cells have 12px side padding while day cells use 4px; all rows use 16px vertical padding. All three days remain visible at 320px. Day labels and member names wrap inside their cells; a narrow side padding protects the grid width. Footer legend and link wrap independently.
- from: new

#### data-table-record-comparison
- name: Data table — Side-by-side record comparison
- kind: section
- tags: table, split, compact
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A three-column fixed-layout comparison begins after 32px. Attribute and record columns share the width equally, with 12px horizontal and 16px vertical cell padding. Record header actions sit 8px below titles. All three columns remain at narrow widths; values and header actions wrap naturally rather than truncating. No column has a fixed minimum width. Title grows at sm.
- from: new

#### data-table-grouped-headers
- name: Data table — Grouped headers with frozen first column
- kind: section
- tags: table, numbers, compact
- structure: A 1152px max-w-6xl section with a 672px lede and a bordered scroll region 32px below it. The table has 14 columns: a Record column pinned left (144px, 192px from 640px), twelve month columns under Q1 to Q4 group headers, and a Total column. Cells use 12px vertical and horizontal padding, with 16px on the Record and Total columns. A neutral-50 footer row totals each month. Below about 900px the table scrolls inside its own frame and the page never scrolls sideways; from 640px the Record column widens and section padding grows to 96px.
- from: new

#### data-table-tree-rows
- name: Data table — Tree with nested group rows
- kind: section
- tags: table, list, numbers
- structure: A 1152px max-w-6xl section with a 672px lede and a bordered tree 32px below it. Every row shares one grid: a flexible Name column plus an 80px Spent column below 640px, then Budget, Spent and Remaining at 96px each from 640px, with 16px gaps. Group and subgroup rows are native details and summary elements with a chevron that turns when open, and each nested level indents 16px below 640px and 24px from 640px. Line items have no chevron, and a neutral-50 column strip and total row frame the tree. Below 640px Budget and Remaining hide, and the tree fits 320px without horizontal scrolling.
- from: new

### empty-state (15 patterns; 18 retired components reviewed)

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
- tags: stacked, icons, compact
- structure: A bordered card, 288px wide (384px from 640px), p-6, centred: a 40px lock icon tile, a short heading ("You need access", at most four words), a two-line explanation, a left-aligned owner box (bordered, p-3: avatar placeholder + "Alex Rivera" + "Owner · name@example.com"), a full-width "Request access" primary and a "Switch account" meta text link. Same layout at every width; about 340px tall.
- from: new

#### empty-state-skeleton-preview
- name: Empty state — Preview rows above action
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

#### empty-state-archive-explainer
- name: Empty state — Empty archive with retention summary
- kind: section
- tags: split, compact, list
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. Two equal columns at md use 48px gaps and vertical centering. The empty-message column starts with a badge, then headline and action row. A p-6 neutral-50 retention panel holds three divided rows. Below 768px the retention summary stacks under the message. Actions wrap and definition descriptions use the card width. Title and section padding grow at sm.
- from: new

#### empty-state-example-gallery
- name: Empty state — Empty collection beside example gallery
- kind: section
- tags: split, grid, media
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A 2fr/3fr lg grid uses 40px gaps and vertical centering. The narrower message faces an example gallery with two sm columns, 16px gaps and p-6 cards. Each preview is 16:9 with a decorative image glyph. The gallery stacks below the message under 1024px; its cards stack below 640px. Placeholder previews use their card width. Title grows at sm.
- from: new

#### empty-state-starting-paths
- name: Empty state — Empty workspace with starting paths
- kind: section
- tags: grid, stacked, spacious
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. Three equal md columns use 24px gaps and p-6 cards below a 40px-separated introduction. Each card places a small route number above its title, description and underlined action. A centered guide link follows after 32px. Below 768px route cards form a vertical list in the same order. Card heights grow naturally with copy. At sm the h1 and padding increase.
- from: new

#### empty-state-import-area
- name: Empty state — Import area with format guidance
- kind: section
- tags: split, form, spacious
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A 2fr/1fr grid at md has 40px gaps. The file-selection region uses a dashed border, neutral-50 surface and 24px padding, growing to 40px at sm. The guidance rail lists three 16px-separated requirements. Below 768px guidance follows the file area. The picker is constrained to the available width, and actions wrap. File area padding and title size grow at 640px.
- from: new

#### empty-state-maintenance-window
- name: Empty state — Maintenance notice with time window
- kind: section
- tags: centered, row, numbers
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. The notice uses a centered max-w-3xl introduction and centered wrapping actions. A three-column sm definition band sits 48px below, with top/bottom borders, 32px vertical padding and 24px gaps. The service window becomes one column below 640px. Actions wrap centrally, and the heading grows at sm. No fixed-height notice constrains longer copy.
- from: new

#### empty-state-offline-cache
- name: Empty state — Offline notice with saved-content rail
- kind: section
- tags: split, list, compact
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. Equal columns at lg use 48px gaps. The notice is unboxed while the p-6 saved-content card holds two divided rows with 16px vertical padding. Each row pairs a name/timestamp with an underlined action. Below 1024px saved content follows the notice. Row actions wrap beneath copy when needed. Heading size and padding increase at sm.
- from: new

#### empty-state-all-caught-up
- name: Empty state — All caught up with recent completions
- kind: section
- tags: centered, list, icons
- structure: A max-w-3xl container with px-6 and py-16 (py-24 from sm) holds a centered header: a 40px check icon tile, the section headline and a max-w-xl lede. A full-width rounded-lg bordered card follows after 40px, with a header row (Recently completed plus a View all completed link) and three divided rows, each a 20px check-circle glyph, a title and actor line, and a right-aligned tabular time. An Other queues nav follows after 40px as a list of bordered rounded-md links with the name on the left and the open count on the right. Below 640px the queue links stack in one column and the card header's link can wrap under its heading. From 640px the links sit three across in a grid with 12px gaps, the headline steps to text-4xl and the padding to py-24.
- from: new

#### empty-state-team-invite
- name: Empty state — Empty team with inline invite
- kind: section
- tags: centered, form
- structure: A max-w-3xl container with px-6 and py-16 (py-24 from sm) holds a centered header: three 40px dashed rounded-full avatar slots with 8px gaps, the section headline and a max-w-xl lede. A rounded-lg bordered card follows after 40px. Its p-6 form holds a flexible email field, a role select and a primary Send invite button, with a hint below that is tied to the field by aria-describedby. A border-top footer (px-6 py-4) pairs an invite-link note with a secondary Copy invite link button that has a link glyph. Below 640px the fields and both buttons stack full width with 16px gaps. From 640px the form becomes one bottom-aligned row with a 144px w-36 select, the footer becomes a space-between row, and the headline steps to text-4xl.
- from: new

### dashboard (15 patterns; 18 retired components reviewed)

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

#### dashboard-schedule-agenda
- name: Dashboard — Calendar beside daily agenda
- kind: section
- tags: sidebar, list, numbers
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. An 18rem calendar rail and flexible agenda form a lg grid with 40px gaps. The calendar uses p-6, seven equal day columns and 32px-high cells. Agenda rows are 80px/1fr from sm with 12px gaps and 24px vertical padding. Below 1024px the calendar sits above the agenda without a fixed rail width. Event times stack over their descriptions below 640px. Day cells remain seven equal columns at 320px.
- from: new

#### dashboard-goal-tracker
- name: Dashboard — Goal progress with review sidebar
- kind: section
- tags: sidebar, list, numbers
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A 2fr/1fr lg grid has 40px gaps. Goal rows use a wrapping title/status header, an 8px progress track after 20px and a percentage/action row after 12px. The neutral-50 review rail has p-6. Below 1024px the review panel follows the goal list. Status and action rows wrap while progress bars fill available width. Heading size increases at sm.
- from: new

#### dashboard-inbox-workbench
- name: Dashboard — Request inbox with detail pane
- kind: section
- tags: split, list, compact
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A 320px/flexible lg grid uses 32px gaps. The navigation lists three p-4 request cards with 12px gaps. The p-6 detail article places header/status, 32px-separated message and metadata, then a top-bordered action footer. Below 1024px the inbox list sits above the selected detail. Metadata becomes two columns at sm and one below it. Headers and action rows wrap at narrow widths.
- from: new

#### dashboard-resource-capacity
- name: Dashboard — Resource allocation ledger
- kind: section
- tags: stacked, list, numbers
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A three-column sm summary band uses p-6 and 24px gaps. A member ledger follows after 32px; rows use 24px vertical padding and a 160px/flexible/auto grid at sm with 16px gaps. Allocation tracks are 12px tall. Below 640px the summary and each member row stack. Allocation bars fill their available width; remaining hours stay as visible text. The header period wraps beside the title.
- from: new

#### dashboard-funnel-stages
- name: Dashboard — Sequential conversion funnel
- kind: section
- tags: grid, numbers, compact
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A stage grid begins 40px below the heading: two columns at sm and four at lg, with 24px gaps and p-6 cards. Each has a 30px count and 8px retention track. A wrapping summary band follows after 32px. The funnel is a single vertical sequence under sm, two columns at sm and four at lg. Bars use proportional static widths within their cards. The summary band wraps at narrow widths.
- from: new

#### dashboard-kanban-board
- name: Dashboard — Status-column work board
- kind: section
- tags: grid, list, compact
- structure: White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. Three equal md columns use 24px gaps, neutral-50 surfaces and 16px padding. Status/count headers precede 12px-separated white p-4 task cards. Each column ends in an underlined Add task link. Below 768px columns stack in workflow order rather than scrolling horizontally. Task copy wraps inside each card. The heading and section padding grow at sm.
- from: new

#### dashboard-file-browser
- name: Dashboard — File browser with folder tree
- kind: section
- tags: sidebar, table, icons
- structure: A max-w-6xl container with a title row holding New folder and Upload, then one bordered panel split into a 16rem folder sidebar and a flexible content pane from 1024px. The sidebar stacks collapsible details folder rows with 24px child indents and ends with a storage meter below a divider. The content pane has a toolbar with a breadcrumb and a 16rem search field, then a file table with Name (icon tile), Modified and right-aligned Size columns. Below 1024px the sidebar sits above the pane; below 640px the toolbar stacks, the Modified column hides and each date moves under its file name.
- from: new

#### dashboard-service-status
- name: Dashboard — Service status with uptime bars
- kind: section
- tags: asymmetric, list, numbers
- structure: A max-w-6xl container with a title row and a Subscribe action, then a dark neutral-900 banner with an icon tile, the overall headline and the updated time. Below it, a grid with 48px gaps puts a bordered service list in a flexible column and a 20rem recent incidents rail from 1024px. Each service row shows its name and status badge, 30 day bars that encode state by height as well as fill, and an axis line with the uptime percentage. Below 1024px the incidents follow the list; below 640px the banner stacks and the bar gaps narrow to 2px.
- from: new
