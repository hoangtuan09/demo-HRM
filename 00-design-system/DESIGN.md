---
name: Enterprise HRM Core
colors:
  surface: '#f7f9fc'
  surface-dim: '#d8dadd'
  surface-bright: '#f7f9fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f7'
  surface-container: '#eceef1'
  surface-container-high: '#e6e8eb'
  surface-container-highest: '#e0e3e6'
  on-surface: '#191c1e'
  on-surface-variant: '#414751'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f4'
  outline: '#727782'
  outline-variant: '#c1c7d3'
  surface-tint: '#0660aa'
  primary: '#004f8f'
  on-primary: '#ffffff'
  primary-container: '#1967b2'
  on-primary-container: '#d6e5ff'
  inverse-primary: '#a4c9ff'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fc'
  on-secondary-container: '#57657a'
  tertiary: '#005378'
  on-tertiary: '#ffffff'
  tertiary-container: '#006c9b'
  on-tertiary-container: '#cbe7ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#a4c9ff'
  on-primary-fixed: '#001c39'
  on-primary-fixed-variant: '#004883'
  secondary-fixed: '#d5e3fc'
  secondary-fixed-dim: '#b9c7df'
  on-secondary-fixed: '#0d1c2e'
  on-secondary-fixed-variant: '#3a485b'
  tertiary-fixed: '#c9e6ff'
  tertiary-fixed-dim: '#89ceff'
  on-tertiary-fixed: '#001e2f'
  on-tertiary-fixed-variant: '#004c6e'
  background: '#f7f9fc'
  on-background: '#191c1e'
  surface-variant: '#e0e3e6'
typography:
  display:
    fontFamily: Be Vietnam Pro
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Be Vietnam Pro
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
    letterSpacing: '0'
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: '0'
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: '0'
  body-md-medium:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: '0'
  body-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: '0'
  label-md:
    fontFamily: Be Vietnam Pro
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  caption:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: '0'
  mono-num:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: '0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 1.5rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

The design system establishes a high-trust, systematic enterprise environment built specifically for HR leadership, operations teams, and employees. The aesthetic blends the clarity and tactile density of Linear, the structural calm and workspace layout of Notion, and the ergonomic tokens of Google Material 3.

### Design Principles
- **Clarity Over Novelty:** Prioritize scanability and instant cognitive processing of large data matrices, organizational hierarchies, and payroll states.
- **Breathable Precision:** Compact, dense information displays balanced with exact 8pt spatial cadences to prevent cognitive exhaustion.
- **Engineered Restraint:** Expressive color is strictly functional—reserved for active states, operational statuses, and unambiguous calls to action.
- **Localized Polish:** Purpose-built for diacritic-heavy Vietnamese typography with generous ascender/descender clearances and natural number formatting (₫).

## Colors

The palette is engineered for administrative endurance, anchored by an authoritative cobalt blue and framed with clean neutral slates.

### Palette Architecture
- **Primary (`#1967B2`):** Primary interactions, focused states, checked inputs, selected nav rails, and high-priority actions.
  - Hover/Pressed: `#124E88`
  - Selected Surface/Badge: `#E8F1FA`
  - Subtle Row Highlight: `#F4F8FD`
- **Neutral Canvas:**
  - Workspace Canvas: `#F5F7FA`
  - Elevated Container / Cards: `#FFFFFF`
  - Hairline Dividers & Outlines: `#E2E8F0`
- **Text Hierarchy:**
  - Ink High (Primary): `#0F172A`
  - Ink Mid (Secondary): `#475569`
  - Ink Low (Muted/Placeholder): `#94A3B8`
- **Semantic Signals:**
  - Success: `#16A34A` (Background: `#F0FDF4`, Border: `#BBF7D0`)
  - Warning: `#F59E0B` (Background: `#FEF3C7`, Border: `#FDE68A`)
  - Danger: `#DC2626` (Background: `#FEF2F2`, Border: `#FECACA`)
  - Info: `#0EA5E9` (Background: `#F0F9FF`, Border: `#BAE6FD`)

### Color Application Rules
Never use pure saturated black (`#000000`) for text. Structural borders must remain `#E2E8F0` at 1px width. Do not introduce colored backgrounds behind primary workspaces; retain `#FFFFFF` cards resting on `#F5F7FA` to anchor contrast.

## Typography

The single font family across the platform is **Be Vietnam Pro**. It provides native tone-mark balancing and uniform optical weight for Vietnamese character clusters (e.g., ệ, ở, ẵ, ừ).

### Hierarchy and Role Usage
- **Page Header (`headline-lg`):** Main module headlines (e.g., "Danh sách nhân sự", "Bảng tính lương").
- **Section Title (`headline-sm`):** Card headers, modal headers, subsection dividers.
- **Primary Body (`body-md` / `body-md-medium`):** Grid cells, description copy, metadata rows, and conversational forms.
- **Labels & Micro-text (`label-sm`, `caption`):** Metadata timestamps, form input labels, table column headers (all-caps omitted to protect tone-mark legibility), and status badges.
- **Financial & Identity Numbers:** Apply `font-feature-settings: "tnum" 1` to ensure tabular alignment in compensation, currency tables (₫), and employee identification codes.

## Layout & Spacing

The structural layout utilizes an administrative fixed-fluid framework optimized for 1440px desktop displays, with responsive adaptations down to tablet and mobile viewports.

### Global Architecture
- **Sidebar Rail:** 260px fixed width on desktop, collapsible to 64px icon-rail on medium viewports (`<= 1024px`), transforming into an off-canvas drawer on mobile (`<= 768px`).
- **Main Shell:** Fluid container with max-width bounding at 1600px to maintain line-length legibility. Outer canvas margin is strictly `1.5rem` (`24px`).
- **Data Densities:**
  - **Standard Card Padding:** `24px` (`space-lg`) on all sides.
  - **Data Tables:** Dense horizontal padding of `16px` (`space-md`), vertical cell padding of `12px` to balance scannability with vertical volume.
  - **Form Field Stacking:** Vertical input gap fixed at `16px` (`space-md`).

## Elevation & Depth

Visual hierarchy uses a flat, structural foundation punctuated by subtle ambient shadows and hairline borders. Tonal layering separates navigation, canvas, and elevated working documents.

### Depth Levels
- **Canvas Base (Level 0):** Background surface `#F5F7FA`. Zero shadow.
- **Component Base (Level 1 - Cards, Tables, Navigational Bars):**
  - Background: `#FFFFFF`
  - Border: 1px solid `#E2E8F0`
  - Shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.02)`
- **Interactive Hover & Overlay (Level 2 - Card Hover, Flyout Menus, Dropdowns):**
  - Background: `#FFFFFF`
  - Border: 1px solid `#CBD5E1`
  - Shadow: `0 4px 12px -2px rgba(15, 23, 42, 0.08), 0 2px 6px -2px rgba(15, 23, 42, 0.04)`
- **Modals & Drawers (Level 3):**
  - Background: `#FFFFFF`
  - Backdrop: `rgba(15, 23, 42, 0.4)` with 4px backdrop blur.
  - Shadow: `0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.06)`

Do not combine high-contrast drop shadows with heavy colored borders. Keep transitions between interactive states crisp (150ms ease-out).

## Shapes

The design uses a 8px (`0.5rem`) corner radius system across all interactive and structural containers, creating an organized, approachable aesthetic without becoming cartoonishly rounded.

### Radius Assignments
- **Core Elements (`0.5rem` / `8px`):** Buttons, text inputs, dropdown selects, default cards, table containers, context menus, and inline search bars.
- **Nested & Small Elements (`0.25rem` / `4px`):** Checkboxes, inline badges, avatar-square fallbacks, sub-menu selectors.
- **Pills (`9999px`):** Status indicator tags, employee category chips, and filter toggles.

## Components

### Buttons
- **Primary:** Background `#1967B2`, text `#FFFFFF`, border none. Hover state `#124E88`. Active state `#0F3C6A`. Height 38px, horizontal padding 16px, font `label-md`.
- **Secondary:** Background `#FFFFFF`, text `#0F172A`, 1px border `#E2E8F0`. Hover state background `#F8FAFC`, border `#CBD5E1`.
- **Tertiary / Ghost:** Background transparent, text `#475569`. Hover state background `#F1F5F9`, text `#0F172A`.

### Status Badges & Chips
- Status chips have a 24px height, 8px horizontal padding, and a pill shape (`9999px`).
- **Đang làm việc (Active):** Text `#16A34A`, background `#F0FDF4`, border 1px solid `#BBF7D0`.
- **Nghỉ thai sản / Nghỉ phép (On Leave):** Text `#F59E0B`, background `#FEF3C7`, border 1px solid `#FDE68A`.
- **Đã nghỉ việc (Terminated):** Text `#64748B`, background `#F1F5F9`, border 1px solid `#E2E8F0`.
- **Thử việc (Probation):** Text `#0284C7`, background `#E0F2FE`, border 1px solid `#BAE6FD`.

### Data Tables
- Row height: 48px fixed. Table headers use 40px height with `#F8FAFC` background and `label-sm` muted text `#64748B`.
- Selected Row: Background `#F4F8FD` with a 2px `#1967B2` left-accent indicator.
- Hover Row: Background `#F8FAFC`.
- Border-bottom: 1px solid `#E2E8F0`.

### Form Fields & Inputs
- Height: 38px. Text size: 14px (`body-md`).
- Background: `#FFFFFF`. Border: 1px solid `#E2E8F0`. Corner radius: 8px.
- Focus state: Border color `#1967B2`, ring: `0 0 0 3px rgba(25, 103, 178, 0.15)`.
- Helper / Error text: 12px (`caption`) positioned 4px below input field.

### Selection Controls
- **Checkboxes:** 16x16px, 4px corner radius. Unchecked border `#CBD5E1`. Checked background `#1967B2` with a white checkmark icon.
- **Radio Buttons:** 16x16px circular, 1px border `#CBD5E1`. Selected state uses `#1967B2` with a white centered bullet.

### Employee Cards & Metrics
- KPI Stats Card: 16px/24px internal padding, 1px `#E2E8F0` border, white surface. Numeric value rendered in `28px` semibold, companion rate indicator in colored mini-badge.