/*! main.js | Bulkit | CSS Ninja */

/* ==========================================================================
Main js file
========================================================================== */
"use strict"; //Set environment variable (Used for development and demo)

/* 
    Possible values:
    1. development
    2. demo
    3. customization
*/

var env = 'demo';
initPageLoader();
$(document).ready(function ($) {
  if (env === 'development') {
    disableSidebarLinks();
    changeDemoImages();
  } else if (env === 'demo') {
    changeDemoImages();
  } else if (env === 'customization') {
    disableSidebarLinks();
  }

  feather.replace();
  initNavbar();
  initMobileMenu();
  initSidebar();
  initAnimations();
  initCarousel();
  initCounters();
  initScrollReveal();
  initAnchorScroll();
  initBackToTop();
});