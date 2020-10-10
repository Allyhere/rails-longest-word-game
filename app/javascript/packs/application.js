// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("channels")

import gsap from "gsap";

const tlNew = gsap.timeline({ repeat: 0 });

tlNew.to(".overlay", {scaleX: 1, duration: 1})
  .to(".overlay-words-1", {opacity: 1, y: 50, duration: 0.6}, ">0.3")
  .to(".overlay-words-2", {opacity: 1, y: 50, duration: 0.6}, ">0.3")
  .to("[class^=overlay-words]", {opacity: 0, duration: 0.5}, ">0.6")
  .to(".overlay", {scaleX: 0, duration: 0.4}, ">.4")
  .to(".card", {
    y: -20,
    opacity: 1,
    stagger: {
      each: 0.2,
      from: "top",
      grid: "auto",
      ease: "circ.inOut",
    }
  }, ">")
  .to(".input-container", {
    y: -20,
    opacity: 1,
    ease: "power2.inOut",
    duration: 1
  },">");


  const tlScore = gsap.timeline({ 
    defaults: {
      duration: 0.6, ease: "elastic"
    }
  });
  tlScore
  .to(".base-layer", {scale: 1, duration: 1, ease: "power2.out"})
  .to(".layer1", {scale: 1}, ">")
  .to(".layer2", {scale: 1}, ">")
  .to(".layer3", {scale: 1}, ">")
  .to(".score", { opacity: 1, y: 0, rotation: -5 }, ">0.3")
  .to(".attempt__back", { opacity: 1, y: 90, rotation: 5 }, ">")

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
