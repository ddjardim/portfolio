particlesJS('bg-particles', {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 300,
      },
    },

    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'triangle',
    },
    opacity: {
      value: 0.8,
      random: true,
      anum: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: true,
        speed: 4,
        size_min: 0.3,
        sync: false,
      },
    },

    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },

    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      out_mode: 'bounce',
      bounce: false,
    },
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
  },
  retina_detect: true,
})

const header = document.querySelector('header')
window.addEventListener('scroll', function () {
  header.classList.toggle('sticky', window.scrollY > 100)
})

let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist')

menu.onclick = () => {
  menu.classList.toggle('bx-x')
  navlist.classList.toggle('open')
}

window.onscroll = () => {
  menu.classList.remove('bx-x')
  navlist.classList.remove('open')
}
