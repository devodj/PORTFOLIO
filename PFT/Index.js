(function () {
  'use strict';

  var contactEmail = 'odewabijames@gmail.com';

  function setupEmailCopy() {
    var copyButton = document.getElementById('cp');
    if (!copyButton) return;

    copyButton.addEventListener('click', function () {
      try {
        navigator.clipboard.writeText(contactEmail).then(function () {
          copyButton.textContent = 'Copié ✓';
        }, function () {
          copyButton.textContent = 'Copie impossible';
        });
      } catch (error) {
        copyButton.textContent = 'Copie impossible';
      }
    });
  }

  setupEmailCopy();
})();