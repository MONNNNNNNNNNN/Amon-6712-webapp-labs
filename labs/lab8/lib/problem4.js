const catEl = document.querySelector("#cat");

// The image in the HTML is the WALKING cat. When the cat stops, switch to a STATIC cat.
const staticCatSrc =
    "https://www.kasandbox.org/programming-images/animals/cat.png";

const speed = 200; // pixels per second

const startWalk = () => {
    let startTime = null;

    const walkTheCat = (timestamp) => {
        if (startTime === null) startTime = timestamp;
        const secondsElapsed = (timestamp - startTime) / 1000;

        // 1. How far the cat should have travelled by now.
        const distanceWalked = secondsElapsed * speed;

        // 2. Stopping point derived from the window, never hardcoded. The cat
        //    starts at left: 0px, so its right edge sits at catWidth + distance.
        //    Subtracting the cat's own width leaves it flush with the right edge.
        //    Recomputed every frame so resizing the window is handled too.
        const walkingCatWidth = catEl.offsetWidth;
        const stopDistance = window.innerWidth - walkingCatWidth;

        if (distanceWalked >= stopDistance) {
            // Clamp to the edge instead of overshooting on the final frame.
            catEl.style.transform = `translateX(${stopDistance}px)`;

            // 3. Swap to the static cat.
            catEl.src = staticCatSrc;

            // 4. Hold the walking image's width so the swap causes no size jump.
            catEl.style.width = `${walkingCatWidth}px`;

            return; // Stop: do not request another frame.
        }

        catEl.style.transform = `translateX(${distanceWalked}px)`;
        requestAnimationFrame(walkTheCat);
    };

    requestAnimationFrame(walkTheCat);
};

// Start after load so the cat image's size (offsetWidth) is available.
window.addEventListener("load", startWalk);
