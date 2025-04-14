document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  Swal.fire({
    icon: 'success',
    title: 'Message Sent!',
    text: 'Thanks for reaching out. I’ll get back to you as soon as possible.',
    footer: '🌐 This is a demo portfolio by Lê Vũ Trường Giang',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Got it!'
  });

  form.reset();
});

