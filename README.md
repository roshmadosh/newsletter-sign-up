# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview
  Created a newsletter sign-up page using HTML, CSS, and vanilla JS.
### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshots/screenshot1.jpg)

### Links

- [Live site URL](https://roshmadosh.github.io/newsletter-sign-up/)

## My process
Didn't realize there was a style-guide until I was done. Basically eye-balled everything. For colors, I used the droplet tool in Firefox devtools.

### Built with

  - HTML
  - CSS
  - Javascript

### What I learned

I used to not know how to prevent scrolling the body of the page when a modal was showing in mobile view. My naive solution is to use JS to add a CSS class to the `body` tag to set it to `overflow-y: hidden`.

I was originally going to use the invalid HTML property for input validation but realized the `oninvalid` callback function is invoked on-change, which was not the desired effect. I had to apply CSS classes via Javascript, which feels like a not elegant solution.  

### Continued development

I want to get better at organizing CSS, and being more deliberate with naming my custom CSS selectors (i.e. `id`, `class`).

## Author

- [My Github](https://www.github.com/roshmadosh)
- Frontend Mentor - [@roshmadosh](https://www.frontendmentor.io/profile/roshmadosh)
