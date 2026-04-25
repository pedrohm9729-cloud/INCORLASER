---
name: Precision Core
colors:
  surface: '#faf8fe'
  surface-dim: '#dbd9df'
  surface-bright: '#faf8fe'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f8'
  surface-container: '#efedf3'
  surface-container-high: '#e9e7ed'
  surface-container-highest: '#e3e2e7'
  on-surface: '#1a1b1f'
  on-surface-variant: '#444650'
  inverse-surface: '#2f3034'
  inverse-on-surface: '#f2f0f5'
  outline: '#757781'
  outline-variant: '#c5c6d1'
  surface-tint: '#465c97'
  primary: '#000b2b'
  on-primary: '#ffffff'
  primary-container: '#001f58'
  on-primary-container: '#7389c7'
  inverse-primary: '#b2c5ff'
  secondary: '#556063'
  on-secondary: '#ffffff'
  secondary-container: '#d8e5e8'
  on-secondary-container: '#5b6669'
  tertiary: '#210500'
  on-tertiary: '#ffffff'
  tertiary-container: '#461100'
  on-tertiary-container: '#c87558'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b2c5ff'
  on-primary-fixed: '#001848'
  on-primary-fixed-variant: '#2d447e'
  secondary-fixed: '#d8e5e8'
  secondary-fixed-dim: '#bcc9cc'
  on-secondary-fixed: '#121d20'
  on-secondary-fixed-variant: '#3d494b'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59c'
  on-tertiary-fixed: '#390c00'
  on-tertiary-fixed-variant: '#75331b'
  background: '#faf8fe'
  on-background: '#1a1b1f'
  surface-variant: '#e3e2e7'
typography:
  h1:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.25'
    letterSpacing: -0.01em
  h3:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.08em
  button:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style
The design system is engineered for INCORLASER to evoke technical excellence, industrial reliability, and surgical precision. The brand personality is authoritative and institutional, targeting B2B sectors that demand high-performance laser solutions. 

The aesthetic follows a **Corporate Modern** style with **Minimalist** influences. It prioritizes clarity and structural integrity, using a dark-mode-first approach for high-end interfaces and a balanced light-mode for administrative documentation. The visual language avoids decorative flourishes in favor of functional geometry and high-contrast accents that guide the user through complex workflows.

## Colors
The palette is dominated by **Navy Blue (#001F58)**, serving as the foundation for headers, sidebars, and primary backgrounds to establish a sense of stability. **Orange (#FF6A00)** is reserved strictly for high-priority actions and critical status indicators, ensuring a high signal-to-noise ratio. 

**Grey (#748083)** functions as the bridge, used for secondary iconography, borders, and body text. In dark contexts, use the Deep Surface variation to maintain depth without losing the brand identity. Success, Warning, and Error states should be derived from the core palette's intensity to maintain a cohesive industrial look.

## Typography
This design system utilizes **Manrope** exclusively to leverage its modern, geometric construction and exceptional legibility. Headings use tighter letter-spacing and heavier weights to convey strength and precision. 

Body text remains airy with a 1.6 line-height to ensure readability in technical manuals and data-heavy dashboards. Functional labels utilize an uppercase stylistic set to differentiate metadata from interactive content. Use the semi-bold weight for interactive elements to ensure they stand out against the deep navy backgrounds.

## Layout & Spacing
The layout follows a **Fixed Grid** model for desktop applications to maintain control over technical data visualization. A 12-column grid is standard, with 24px gutters providing ample breathing room between complex modules. 

Spacing follows a strict 4px base unit, ensuring all elements align to a predictable vertical rhythm. For industrial dashboards, use "Compact" spacing (8px) between related input fields, while using "Wide" spacing (48px) to separate major content sections.

## Elevation & Depth
Depth is achieved through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows. Since the primary color is a deep Navy, surfaces are elevated by using slightly lighter shades of Navy or 1px strokes in Grey (#748083) at low opacity (20%).

For interactive cards and modals, a very subtle ambient shadow (0px 4px 20px rgba(0, 0, 0, 0.15)) can be used to pull the element forward. Avoid blurs or frosted effects; the focus should remain on sharp, defined edges that mimic the precision of a laser cut.

## Shapes
The shape language is **Soft (Level 1)**. This choice balances the harshness of industrial machinery with the approachability of modern software. Standard components like buttons and input fields use a 4px (0.25rem) radius. Large containers or cards may go up to 8px, but never beyond. This maintains a "machined" look that feels engineered and deliberate.

## Components
- **Buttons:** Primary CTA buttons are solid Orange (#FF6A00) with white text. Secondary buttons use a Navy outline or Ghost style. Use a 1px border for all outlined variants.
- **Inputs:** Fields feature a subtle Grey (#748083) border that turns Navy on focus. Labels are always positioned above the field in the `label-caps` style.
- **Chips:** Used for status indicators (e.g., "Active", "Cutting", "Offline"). Use Navy backgrounds with Grey text for neutral states, and Orange only for "Attention Required."
- **Cards:** Defined by a 1px border (#748083 at 20% opacity). No background fill is needed if placed on a light neutral surface, or a slightly lighter Navy if on a dark surface.
- **Data Tables:** High-density layouts with alternating row highlights (Zebra striping) using a 5% opacity of the Grey color.
- **Navigation:** A vertical sidebar in solid Navy with active states highlighted by a 4px Orange vertical bar on the left edge.