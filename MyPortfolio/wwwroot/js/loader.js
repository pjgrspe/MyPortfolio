function showLoader() {
    const loaders = document.querySelectorAll('.full-screen-loader');
    loaders.forEach(loader => loader.classList.remove('hidden'));

    const wrapper = document.getElementById('wrapper');
    wrapper.style.marginTop = document.getElementById('loader-wrapper').offsetHeight + 'px';
}

function hideLoader() {
    const loaders = document.querySelectorAll('.full-screen-loader');
    loaders.forEach(loader => loader.classList.add('hidden'));
    document.getElementById('wrapper').style.marginTop = '0';

    startAnimation();
}

// Example Usage (integrate with your page load logic)
showLoader(); // Show on initial page load

// ... Later, when content is ready ...
hideLoader(); 

