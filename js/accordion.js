document.querySelectorAll('.accordion_button').forEach(button => {
    button.addEventListener('click', () => {
      const accordionContent = button.nextElementSibling;
      
      button.classList.toggle('accordion_button--active');
      
      if (button.classList.contains('accordion_button--active')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = 0;
      }
    });
  });