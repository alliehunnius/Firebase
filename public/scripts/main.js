class Main {
    constructor() {
        var tempThis = this;
        this.pageViewsKey = 'pageViewsCount';
        this.lastVisitKey = 'lastVisitTime';
        // this.initializeCounter();
        // this.displayCount();
        // this.displayLastVisitTime();

        window.addEventListener('load', () => {
            tempThis.onPageLoad();
        });
    }

    // ... Existing methods ...

    // Function to display time elapsed since last visit
    displayLastVisitTime() {
        const lastVisitTime = localStorage.getItem(this.lastVisitKey);
        if (lastVisitTime) {
            const lastVisitDate = new Date(parseInt(lastVisitTime));
            const currentTime = new Date();
            const timeDifference = currentTime - lastVisitDate;
            const minutesSinceLastVisit = Math.floor(timeDifference / (1000 * 60));
            document.getElementById('last-visit-time').innerHTML = `Last visited: ${minutesSinceLastVisit} minutes ago`;
        } else {
            document.getElementById('last-visit-time').innerHTML = 'First visit: -';
        }
    }

    initializeCounter() {
        if (!localStorage.getItem(this.pageViewsKey)) {
            localStorage.setItem(this.pageViewsKey, '0');
        }
    }

    incrementCount() {
        let currentCount = parseInt(localStorage.getItem(this.pageViewsKey));
        currentCount++;
        localStorage.setItem(this.pageViewsKey, currentCount.toString());
    }

    // displayCount() {
    //     this.incrementCount();
    //     // Update count in div id count
    //     document.getElementById('count').innerHTML = 'You have visited this page ' + localStorage.getItem(this.pageViewsKey) + ' times.'
    // }

    // Function to play Jaws
    playJaws() {
        const audio = new Audio('../audio/Jaws-theme-song.mp3');
        audio.play();
    }

    // Method to handle the blackout button functionality
    // handleBlackoutButton() {
    //     var isBlackout = false; // Track if the blackout is active

    //     function startBlackout() {
    //         isBlackout = true;
    //         document.body.style.backgroundColor = 'black';
    //     }

    //     function stopBlackout() {
    //         isBlackout = false;
    //         document.body.style.backgroundColor = ''; // Revert to the original background color
    //     }

    //     const blackoutButton = document.getElementById('blackout-button');

    //     blackoutButton.addEventListener('mousedown', startBlackout);
    //     blackoutButton.addEventListener('mouseup', stopBlackout);
    //     blackoutButton.addEventListener('mouseout', stopBlackout);

    //     // Event binding for touch events (for mobile devices)
    //     blackoutButton.addEventListener('touchstart', startBlackout);
    //     blackoutButton.addEventListener('touchend', stopBlackout);

    //     // Prevent the default behavior of the button (e.g., form submission)
    //     blackoutButton.addEventListener('click', (event) => {
    //         event.preventDefault();
    //     });
    // }
    onPageLoad ()
{
    this.playJaws();
    console.log();
};
}

// Create an instance of the Main class
document.mainClass = new Main();



// Call the handleBlackoutButton method to set up the blackout button functionality
// document.mainClass.handleBlackoutButton();

// // Trick button to open a new tab
// document.addEventListener('DOMContentLoaded', function () {
//     // Trick button to open a new tab
//     const trickButton = document.getElementById('trick-button');

//     if (trickButton) {
//         trickButton.addEventListener('click', function () {
//             // Replace the URL with the website you want to redirect to
//             window.open('https://puginarug.com/', '_blank');
//         });
//     }
// });
