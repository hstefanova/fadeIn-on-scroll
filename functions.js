// helper - set interval between executions of the function when we're scrolling
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

const items = document.querySelectorAll('.fade-in')

function checkItemPosition() {
    items.forEach(item => {
        //the item is 1/2 shown on the screen 
        const fadeInAt = (window.scrollY + window.innerHeight) - item.clientWidth / 2
        const isHalfShown = fadeInAt > item.offsetTop

        if(isHalfShown) {
            item.classList.add('appear')
        }
    })
}

window.addEventListener('scroll', debounce(checkItemPosition))


