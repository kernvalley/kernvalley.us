---
layout: page
title: CHANGELOG
description: List of recent changes
permalink: /changelog/
robots: noindex
no-sidebar: true
---
<!-- markdownlint-disable -->
# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [v1.0.5] - 2020-09-06

### Added
- Track extenal link click events with GA

### Changed
- Update preloading
- Update components/`_includes/`

### Fixed
- Disable linting for bash script for `.rvmrc` issue
- Correctly set active button background color

## [v1.0.4] - 2020-08-17

### Changed
- Dynamically load Google Analytics and polyfill scripts
- Use `_headers` file for setting HTTP headers
- Add `theme-color` support on per-page level
- Update author info
- Update NPM & GitHub workflows
- Update share button for compatibility with CDN CSS changes

## [v1.0.2] - 2020-07-15

### Changed
- Update components to use external stylesheets
- Do not allow `unsafe-inline` for styles in CSP

## [v1.0.1] - 2020-07-13

### Added
- TWA setup with `.well-known/assetlinks.json`
- Maskable icons
- NodeJS & Ruby version files

### Changed
- Update dependencies

## [v1.0.0] - 2020-07-02

### Added
- Events section
- Privacy Policy
- Dependabot for automated updates
- GitHub Actions & Super Linter
- CHANGELOG
- Links to related pages for sections (camping, events, rafting, etc)

### Fixed
- Netlify status badge in README [#12](https://github.com/kernvalley/kernvalley.us/issues/12)
- Add missing config for PostCSS & Rollup [#15](https://github.com/kernvalley/kernvalley.us/issues/15)

### Changed
- Update all dependencies
- Update all assets from template repo
- Update to Ruby v2.7.1

### Removed
- Travis_CI config file
<!-- markdownlint-restore -->
