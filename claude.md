# Project Implementation Plan - Front-End React Test Assignment

## Overview
Create a responsive blog/news website with sticky navigation, search functionality, and post details popup based on Figma designs.

## Phase 1: Project Setup ✅
- [x] Initialize React + Vite project
- [x] Install and configure Tailwind CSS
- [x] Set up project structure

## Phase 2: Layout & Styling

### 2.1 Header Component
- [ ] Create Header component with logo, the Logo.svg is located in ./src/assets
- [ ] Implement responsive design (desktop/tablet/mobile)
- [ ] Add Google Fonts (Inter, Roboto already imported)
- [ ] Use rem units for font sizes and margins

### 2.2 Horizontal Navigation Menu
- [ ] Create horizontal menu component
- [ ] Implement sticky positioning (`position: sticky`)
- [ ] Add scroll behavior:
  - Stick to top when user scrolls down
  - After 200px of **further** scrolling down (from when sticky starts), hide menu smoothly above screen
  - Show menu smoothly when scrolling up
  - Return to original (non-sticky) position when scrolled back to page top. I mean when user scrolls down and the navmenu hits top of screen it sticks there, and when user scrolls up it should be sticked up until it will come to its original place and then `deattach from the top`
- [ ] Hide on mobile/tablet breakpoints
- [ ] Create CSS-only hover submenu (show on hover, no JavaScript)
- [ ] Ensure correct positioning regardless of header height changes

### 2.3 Mobile Menu
- [ ] Create mobile menu component (sidebar on left side)
- [ ] Add hamburger icon button
- [ ] Implement smooth slide-in animation (плавно выезжать)
- [ ] Add close button (X icon / крестик)
- [ ] Close on click outside menu (inactive area / неактивная область)
- [ ] Show only on mobile/tablet (hide on desktop)

### 2.4 Responsive Grid Layout
- [ ] Create post grid with flexbox
- [ ] Desktop: 3 columns
- [ ] Tablet: 2 columns
- [ ] Mobile: 1 column
- [ ] Use `px` for column gaps
- [ ] 3rem margin between posts and horizontal menu

## Phase 3: React Functionality

### 3.1 Data Fetching
- [ ] Create API service/hook to fetch data
- [ ] Endpoint: `https://cloud.codesupply.co/endpoint/react/data.json`
- [ ] Use `fetch()` or axios
- [ ] Implement loading state
- [ ] Handle errors

### 3.2 Post List Component
- [ ] Create PostCard component
- [ ] Display:
  - Title
  - Brief description
  - Image with Retina support (srcset)
  - Meta information (date, author, category, etc.)
- [ ] Implement responsive images
- [ ] Use useState for posts data
- [ ] Use useEffect for data fetching

### 3.3 Search Functionality
- [ ] Create search input component
- [ ] Design search UI (not in mockup - custom design)
- [ ] Implement real-time search filtering
- [ ] Filter by title OR description
- [ ] Use useState for search term
- [ ] Update filtered posts on input change

### 3.4 Post Details Popup
- [ ] Create Modal/Popup component
- [ ] Show on card click
- [ ] Display full post information:
  - Full title (REQUIRED)
  - Full description (REQUIRED)
  - Image (optional enhancement)
  - Meta information (optional enhancement)
- [ ] Add "Close" button (Закрыть)
- [ ] Close on background/overlay click (outside popup area)
- [ ] Close on ESC key (optional enhancement)
- [ ] Use useState for modal visibility and selected post
- [ ] Add smooth animations (fade in/out)

## Phase 4: Image Optimization (Retina Support)
- [ ] Ensure all images have `srcset` attribute for Retina displays
- [ ] Use both image paths from JSON data (API provides 1x and 2x image URLs)
- [ ] Implement proper `srcset` with 1x and 2x descriptors
- [ ] Implement lazy loading (optional enhancement)

## Phase 5: Testing & Refinement
- [ ] Test responsive breakpoints
- [ ] Test sticky menu behavior at different scroll positions
- [ ] Test mobile menu open/close
- [ ] Test search functionality
- [ ] Test popup open/close
- [ ] Cross-browser testing
- [ ] Performance optimization

## Phase 6: Deployment
- [ ] Build production version (`npm run build`)
- [ ] Deploy to GitHub Pages or Netlify/Vercel
- [ ] Test deployed version
- [ ] Create ZIP archive named `front-[lastname].zip`
- [ ] Prepare submission with deployed link

## Technical Stack
- **Framework:** React 19 with functional components
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + Custom CSS
- **Fonts:** Google Fonts (Inter, Roboto)
- **State Management:** useState, useEffect hooks
- **Data Fetching:** fetch API or axios

## Key Technical Requirements (Checklist)
1. ☐ Use functional components only (no class components)
2. ☐ Use React Hooks: `useState` for state, `useEffect` for side effects
3. ☐ Font sizes in `rem` units
4. ☐ Margins/spacing in `rem` units
5. ☐ Column gaps between posts in `px` units (exception)
6. ☐ 3rem gap between posts grid and horizontal menu
7. ☐ Sticky menu using `position: sticky`
8. ☐ Menu hides after 200px **further** scroll, shows on scroll up
9. ☐ CSS-only submenu on hover (no JavaScript)
10. ☐ Retina image support with `srcset` (use both image URLs from JSON)
11. ☐ Responsive grid: Desktop (3 cols) → Tablet (2 cols) → Mobile (1 col)
12. ☐ Mobile menu: slide-in animation, close on X or outside click
13. ☐ Search: filter posts by title OR description
14. ☐ Popup: display full title + description, close via button or overlay click

## File Structure (Proposed)
```
src/
├── components/
│   ├── Header/
│   │   ├── Header.jsx
│   │   ├── Navigation.jsx
│   │   └── MobileMenu.jsx
│   ├── PostList/
│   │   ├── PostList.jsx
│   │   ├── PostCard.jsx
│   │   └── PostModal.jsx
│   └── Search/
│       └── SearchBar.jsx
├── hooks/
│   └── usePosts.js
├── services/
│   └── api.js
├── App.jsx
├── main.jsx
└── index.css
```

## Design Resources
- Figma: https://www.figma.com/file/5dPAPZRin0lfmgrmvVkg8R/frontend-trial?node-id=0%3A2
- API: https://cloud.codesupply.co/endpoint/react/data.json

## Notes
- Primary color: #E94B3C (already configured in Tailwind)
- Mobile menu should slide from left (based on task description)
- Search field design is up to developer (not in Figma)
- Popup should be centered on screen with overlay
