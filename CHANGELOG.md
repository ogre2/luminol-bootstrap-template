# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.3] - 2023/06/11

### Added

- Project description and details inside the README.md file.
- `<logo.png>` file in the `assets/img` subdirectory.

### Fixed

- Footer rendering on mobile.
- Blockquote font sizing for mobile in the Testimonial component.
- Comments in the `<styles.scss>` file.
- Comments under all subdirectories and files in the `<sass>` folder.

### Removed

- React default instructions in the `<README.md>` file.
- `<README.old.md>` file.

## [0.1.2] - 2023/06/10

### Fixed

- App not loading in web once deployed to Github pages.
  - Fixed by setting the privacy field to false inside the `<package.json>` file.
  - Added basename attribute to the BrowserRouter element in the app `<index.js>` file.
- Switched Sass to devDependencies section.

## [0.1.1] - 2023/06/10

### Added

- Installed and configured gh-pages.
  - Generated the build folder.
- Deployed app to Github pages.
- This CHANGELOG.md file to track all project changes.

## [0.1.0] - 2023/06/10

### Added

- Installed React and project dependencies.
  - Sass
  - Bootstrap
  - jQuery
  - PopperJS
  - Swiper
  - Bootstrap Icons
  - AOS
- Created and configured the application layout file.
- Created the landing page/home page.
- Added components and container components.
- Styled all components, type, and React app elements.

[unreleased]: https://github.com/ogre2/luminol-bootstrap-template/compare/v0.1.3...HEAD
[0.1.3]: https://github.com/ogre2/luminol-bootstrap-template/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/ogre2/luminol-bootstrap-template/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/ogre2/luminol-bootstrap-template/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/ogre2/luminol-bootstrap-template/releases/tag/v0.1.0
