document.addEventListener("DOMContentLoaded", () => {

    const catPic = document.querySelector("#cat-pic");
    const mustachePic = document.querySelector("#mustache-pic");

    const placeMustacheOnClick = (clickEvent) => {
        // 1. Read the click position from the event.
        //    pageX/pageY are measured from the top-left of the document, which is
        //    the same origin an absolutely positioned element uses here, so the
        //    mustache still lands correctly when the page is scrolled.
        const clickX = clickEvent.pageX;
        const clickY = clickEvent.pageY;

        // 2. Offset correction: style.left / style.top set the TOP-LEFT corner,
        //    so shift back by half the mustache to centre it on the click.
        const halfMustacheWidth = mustachePic.offsetWidth / 2;
        const halfMustacheHeight = mustachePic.offsetHeight / 2;

        // 3. Reposition the mustache with absolute positioning.
        mustachePic.style.left = `${clickX - halfMustacheWidth}px`;
        mustachePic.style.top = `${clickY - halfMustacheHeight}px`;
    };

    catPic.addEventListener("click", placeMustacheOnClick);
});
