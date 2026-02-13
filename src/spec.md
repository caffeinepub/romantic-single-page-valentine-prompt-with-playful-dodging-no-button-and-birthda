# Specification

## Summary
**Goal:** Build a mobile-first, single-page romantic Valentine prompt with a playful dodging “No” button and a “Yes” click reveal birthday message.

**Planned changes:**
- Create a single-page UI showing the exact headline text “Pondati, will you be my Valentine?” with two buttons labeled “Yes” and “No”, laid out for common Android Chrome viewports without horizontal scrolling.
- Implement the “No” button interaction so it moves to a random on-screen safe position on hover (desktop) and pointer-down/tap (mobile), while the “Yes” button stays stationary and clickable.
- On “Yes” click, replace the main content with a romantic reveal view showing the exact provided birthday message text with readable paragraph styling.
- Apply a cohesive warm romantic theme (pinks/reds/creams), elegant typography including a cursive-style headline, consistent spacing/alignment, and subtle non-obstructive animations.
- Add and reference generated static images from `frontend/public/assets/generated` (no backend image serving), including a collage background on the reveal view.

**User-visible outcome:** The user sees a romantic Valentine prompt with “Yes/No”; the “No” button playfully dodges interaction, and tapping “Yes” reveals a birthday message over a romantic collage-themed background.
