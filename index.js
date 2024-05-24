function moveBeadX(event, bead) {
    if (bead.hasPointerCapture(event.pointerId)) {
        const beadHalfWidth = bead.clientWidth / 2;
        const offset = bead.parentElement.getBoundingClientRect().left + beadHalfWidth;
        const relativePos = event.clientX - offset;
        let rightBoundary;
        if (relativePos < 0) {
            bead.style.left = "0px";
        } else if (relativePos > (rightBoundary = bead.parentElement.clientWidth - bead.clientWidth)) {
            bead.style.left = `${rightBoundary - beadHalfWidth}px`;
        } else {
            bead.style.left = `${relativePos}px`;
        }
    }
}