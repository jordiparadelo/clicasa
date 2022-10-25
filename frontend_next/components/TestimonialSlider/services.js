// Methods
let pos = { top: 0, left: 0, x: 0, y: 0 };

export function mouseDownHandler(event) {
  const { currentTarget } = event;

  pos = {
    // The current scroll
    left: currentTarget.scrollLeft,
    top: currentTarget.scrollTop,
    // Get the current mouse position
    x: event.clientX,
    y: event.clientY,
  };

  currentTarget.addEventListener("mousemove", mouseMoveHandler);
  currentTarget.addEventListener("mouseup", mouseUpHandler);

  // Change the cursor and prevent user from selecting the text
  currentTarget.style.cursor = "grabbing";
  currentTarget.style.userSelect = "none";
  currentTarget.style.scrollSnapType = "unset";
}

export function mouseMoveHandler(event) {
  const { currentTarget } = event;
  // How far the mouse has been moved
  const dx = event.clientX - pos.x;

  // Scroll the element
  currentTarget.scrollLeft = pos.left - dx;
}

export function mouseUpHandler({ currentTarget }) {
  currentTarget.removeEventListener("mousemove", mouseMoveHandler);
  currentTarget.removeEventListener("mouseup", mouseUpHandler);

  currentTarget.style.cursor = "grab";
  currentTarget.style.removeProperty("scroll-snap-type");
  currentTarget.style.removeProperty("user-select");
}
