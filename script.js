// Get the qnav element
const qnav = document.getElementById('qnav');

// Add click event listener to the qnav element
qnav.addEventListener('click', function() {
    // Get all the small circles inside the qnav
    const smallCircles = qnav.querySelectorAll('.small-circle');

    // Loop through each small circle and change its fill color
    smallCircles.forEach(circle => {
        circle.setAttribute('fill', '#44464A');
    });
});