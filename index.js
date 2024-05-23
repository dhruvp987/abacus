let isMouseDown = false;

function moveBeadX(event, bead) {
    if (isMouseDown) {
        const beadRect = bead.getBoundingClientRect();
        const offset = bead.parentElement.getBoundingClientRect().left + ((beadRect.right - beadRect.left) / 2);
        bead.style.left = `${event.clientX - offset}px`;
    }
}