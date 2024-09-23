<script>
  // Function to check screen size and update button
  function updateButton() {
    const button = document.querySelector('.sqs-button-element--tertiary');

    if (!button) return; // Exit if button doesn't exist

    // Check screen size
    if (window.innerWidth <= 1024) {
      // For mobile devices (screen width 767px or less)
      button.innerHTML = '<i class="icon-text"></i> Text Us'; // New button content
      button.href = 'sms:8336110472'; // Update link to open SMS
    } else {
      // For desktop and tablet (screen width more than 767px)
      button.innerHTML = 'Text Us: 833-611-0472'; // Change to simple text
      button.removeAttribute('href'); // Remove the SMS functionality
      button.style.pointerEvents = 'none'; // Disable clicking
      button.style.textDecoration = 'none'; // Remove underline
      button.style.cursor = 'default'; // Change cursor to default
    }
  }

  // Call the function initially and on window resize
  window.addEventListener('load', updateButton);
  window.addEventListener('resize', updateButton);
</script>
