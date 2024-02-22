window.history.scrollRestoration = 'manual'; 

$(document).ready(function () {
    $('a[href^="#"]').click(function (event) { // Target links starting with "#"
        event.preventDefault(); // Prevent default jump behavior
        var targetSection = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(targetSection).offset().top
        }, 500); // Adjust scroll speed (1000ms = 1 second)
    });
});


function scrollToNextSection() {
    const sections = document.querySelectorAll('section'); // Get all sections
    let currentSectionIndex = 0;

    // Find index of currently visible section
    for (let i = 0; i < sections.length; i++) {
        const rect = sections[i].getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            currentSectionIndex = i;
            break;
        }
    }

    const nextSectionIndex = (currentSectionIndex + 1) % sections.length; // Wrap around
    sections[nextSectionIndex].scrollIntoView({ behavior: 'smooth' });
}


//for each element
const fadeElements = document.querySelectorAll('.fade-in-element');

function handleScroll() {
    fadeElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const triggerPoint = window.innerHeight + rect.height * 0.5; // 50% of element's height

        if (rect.top <= triggerPoint) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', handleScroll);


//for arrows
// Select all the divs containing your category text
const categoryDivs = document.querySelectorAll('.category-text');

// Add hover listeners
categoryDivs.forEach(div => {
    div.addEventListener('mouseenter', () => {
        div.querySelector('.fas.fa-arrow-right').classList.add('fade-in');
    });

    div.addEventListener('mouseleave', () => {
        div.querySelector('.fas.fa-arrow-right').classList.remove('fade-in');
    });
});


$(document).ready(function () {
    $('.category-text').click(function () {
        var targetSection = $(this).data('target-section');

        $('html, body').animate({
            scrollTop: $(targetSection).offset().top
        }, 500); // Adjust scroll speed (1000ms = 1 second)
    });
});


// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//Sections

