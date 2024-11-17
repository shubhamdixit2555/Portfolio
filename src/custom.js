document.addEventListener('DOMContentLoaded', function() {
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('#navbar-default ul li a');
  let navbarHeight = document.querySelector('nav').offsetHeight;

   // Adjust padding to prevent content from hiding under navbar
   sections.forEach(function (section) {
    section.style.paddingTop = navbarHeight + 'px';
    section.style.marginTop = '-' + navbarHeight + 'px';
   });

  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 100; // Adjust this value according to your navbar height
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('#navbar-default ul li a[href*=' + id + ']').classList.add('active');
        });
      }
    });
  };
});