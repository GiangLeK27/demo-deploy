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

form.addEventListener("submit", function (e) {
  e.preventDefault();

  Swal.fire({
    icon: 'success',
    title: 'Message Sent!',
    text: 'I’ll get back to you soon!',
    confirmButtonText: 'OK'
  }).then((result) => {
    if (result.isConfirmed) {
      form.submit();
    }
  });
});
