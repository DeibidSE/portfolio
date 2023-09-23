# CHANGELOG

---

## [v1.0.0] - 28-08-2023

- Initial release

---

## [v1.1.0] - 05-09-2023

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

## [v1.1.1] - 06-09-2023

### Changes

- Changed the font type to woff2.
- Renamed the English JSON from en-GB to en-EN.
- Added an option to display an empty string when a text is inaccessible for any reason.

---

## [v1.1.2] - 09-09-2023

### Changes

- Made style changes for some sections to correct display issues on certain devices.
- The toggle icons on the theme switcher are now actual icons instead of emojis.
- Updated the description of the future project.

---

## [v1.2.0] - 23-09-2023

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
