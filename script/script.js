const navItems = document.querySelectorAll('.nav-item');
const airplane = document.querySelector('.airplane');
let currentIndex = 0;

function moveAirplaneTo(item, newIndex = currentIndex) {
  const itemRect = item.getBoundingClientRect();
  const navRect = document.querySelector('.nav-menu').getBoundingClientRect();

  const offsetLeft = itemRect.left - navRect.left + itemRect.width / 2 - 10;
  airplane.style.left = `${offsetLeft}px`;

  if (newIndex < currentIndex) {
    airplane.classList.add('flip');
  } else {
    airplane.classList.remove('flip');
  }

  currentIndex = newIndex;
}

// Add click listener
navItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    document.querySelector('.nav-item.active')?.classList.remove('active');
    item.classList.add('active');
    moveAirplaneTo(item, index);
  });
});

// On window load and resize, update airplane position
function updateOnResize() {
  const activeItem = document.querySelector('.nav-item.active');
  moveAirplaneTo(activeItem);
}

window.addEventListener('load', updateOnResize);
window.addEventListener('resize', updateOnResize);
