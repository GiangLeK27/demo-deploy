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
    footer: '📬 Sent to: 523h0021@student.tdtu.edu.vn',
    confirmButtonText: 'OK'
  });
  setTimeout(() => {
    form.submit();
  }, 1000);
});
