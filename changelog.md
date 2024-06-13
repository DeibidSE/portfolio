# CHANGELOG

## [v1.0.0] - 28/08/2023

- Initial release

---

## [v1.1.0] - 05/09/2023

### Changes

- Changed the font type from "Lato" to "Coolvetica".
- Separated languages into different files, with each having its own JSON file instead of being combined into a single file.
- SVG icons are now loaded directly from the nuxt-icon library instead of being embedded in the HTML.
- Renamed nearly all components.
- The "scroll-to-top" button now scrolls to the very top of the page rather than just to the top of the "presentation" section.
- Altered the background color of the Technical Skill Card component.
- Capitalized the text displayed on tooltips.
- Folder icons are now SVG images instead of emojis. This change was implemented because emojis can appear differently on various operating systems.

### Added

- Added a types file to store all interfaces and import them as needed.
- Introduced a new custom shadow for Tailwind classes (shadow-top).
- Included new SVG files.
- Implemented a getter for langStore.

### Removed

- Removed unnecessary comments.
- Eliminated unused Vue templates with SVG.

---

## [v1.1.1] - 06/09/2023

### Changes

- Changed the font type to woff2.
- Renamed the English JSON from en-GB to en-EN.
- Added an option to display an empty string when a text is inaccessible for any reason.

---

## [v1.1.2] - 09/09/2023

### Changes

- Made style changes for some sections to correct display issues on certain devices.
- The toggle icons on the theme switcher are now actual icons instead of emojis.
- Updated the description of the future project.

---

## [v1.2.0] - 23/09/2023

### Changes

- The header is now fixed to the top and scrolls vertically with the page.
- Refactored the JSON file structure to enhance flexibility in data access.

### Added

- This changelog file
- Implemented a new menu for easy navigation between sections. This menu locks scrolling while it's displayed.
- Implemented a new method to retrieve all sections as an array.
- Added dynamic IDs to each section, which may vary based on the selected language.
- Added comments to every function for improved code documentation.
- Included interfaces in the types file for each section.

### Removed

- Removed default data for props.

---

## [v1.2.1] - 24/09/2023

### Changes

- Improve scroll blocking when the menu is open by using the "prevent" method instead of adding a CSS class to the body

---

## [v1.2.2] - 07/10/2023

### Changes

- Upgraded to Nuxt 3.7.4
- Minor bugfixes
- Renamed certain internal fields and TypeScript interfaces to improve code readability and maintainability.
- Now, when scrolling to any section, the header's height is excluded from the calculation, ensuring that the position is accurately placed at the top of the section

---

## [v1.3.0] - 22/10/2023

### Changes

- Improve accessibility.
- Updated type imports to use the new syntax for improved type import clarity.
- Upgraded to Nuxt 3.8.0.
- Updated some dependencies in package.json.
- Moved animation and font classes to `tailwind.config.js`.
- Restructured the primary application logic into `app.vue`, allowing direct page loading without a layout.
- Reorganized the Header component placement for better code structure.
- Renamed `HeaderComponent` to `AppHeader`.
- Renamed almost all SVG Icons.

### Removed

- Simplified the project structure by removing the `/layout` directory.
- Removed the main SCSS File, as its functionality has been integrated into `css/tailwind.css`.

## [v1.4.0] - 21/11/2023

### Changes

- Introduce a new project in the "Projects" section.
- Add new SVG icons (Astro, Node and Express).
- Create a template (`error.vue`) for handling non-existent URLs.
- Move the content of the terminal to a new component for better code structure.
- Implement smoother transitions when hovering over any icon.
- Improved responsiveness by adjusting sizes for various resolutions.
- Define the base URL (`/MyPortfolio`) in the runtime config API of Nuxt.
- Added links to the official website in the icon of each technology used in each project.
- Improve readability of certain parts of the code.
- Removed the background color from the theme switcher.
- Reformat some sections of the code.
- Update dependencies in `package.json`.

### Removed

- Removed `undefined.webp` image, as it's no longer necessary.

## [v1.4.1] - 22/11/2023

### Changes

- Move some icons to Vue components.

## [v1.4.2] - 27/11/2023

### Added

- New alert for browsers that do not support CSS Scroll animations.

## [v1.5.0] - 11/12/2023

### Changes

- Updated to Vue 3 `<script setup>` syntax (first time using it; hope I didn't mess things up...).
- Improved variable names.
- Refactored components structure.
- Updated color scheme.
- Various bugfixes.

### Added

- Reusable alert component.
- SVG dividers between sections.

## [v1.6.0] - 20/01/2024

### Changes

- Redesign of the "Presentation" section.
- Redesigned "back to top" button.
- Redesigned switch component to switch between dark/light modes.
- Improved animations and transitions.
- Upgrade to Nuxt 3.9.3.
- Reduced profile photo size.
- Default language is now Spanish instead of English.

### Added

- Scroll animation to the navbar.
- New alerts.
- New footer and badge components.

### Removed

- Removed unfinished/redundant projects

## [v1.7.0] - 24/03/2024

### Changes

- Updated dependencies.
- Redesigned navbar icons with and add it a scrolling reduction effect.
- Replaced Nuxt Icon library with nuxt-icons for utilizing local SVGs instead of ones from iconify.
- Moved icons to the assets folder for better organization.
- Removed the alert from the projects section.
- Move the .nojekyll file inside public folder.

### Added

- New project that i'm working on: A Spotify Clone

### Removed

- Remove SASS dependency

## [v1.7.1] - 31/03/2024

### Changes

- Updated certain texts.
- Moved all SVG logos into assets folder.
- Enhanced props typing.
- Minor style adjustments.
- Upgraded to Nuxt 3.11.1

## [v1.7.2] - 16/04/2024

### Changes

- Fixed wrong url to docker website
- Updated dependencies

### Removed

- Outdated PDF files from public folder

### Added

- New modal to inform to contact me to get the CV

## [v1.7.3] - 24/04/2024

### Changes

- Fixed issue where dropdown menu didn't close when clicking outside the language selector.

## [v1.7.4] - 12/05/2024

### Changes

- Update dependencies.
- Migrated all defineProps to TypeScript style (hopefully without causing any issues).
- Minor fixes.

### Removed

- Unused TypeScript interfaces.

### Added

- More details for each job
- New TypeScript interfaces for alerts.

## [v1.7.5] - 13/06/2024

### Changes

- Upgraded to Nuxt 3.12.1

### Removed

- Unused dependency
