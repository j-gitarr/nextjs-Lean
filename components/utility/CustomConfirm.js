import React from 'react';

export function customConfirm(message, confirmText = 'OK', cancelText = 'Cancel') {
  return new Promise((resolve) => {
    const focusTrapWrapper = document.createElement('div');
    focusTrapWrapper.style.position = 'fixed';
    focusTrapWrapper.style.top = '0';
    focusTrapWrapper.style.left = '0';
    focusTrapWrapper.style.width = '100%';
    focusTrapWrapper.style.height = '100%';
    focusTrapWrapper.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    focusTrapWrapper.style.zIndex = '9999';
    
    const confirmationBox = document.createElement('div');
    confirmationBox.style.position = 'fixed';
    confirmationBox.style.top = '50%';
    confirmationBox.style.left = '50%';
    confirmationBox.style.transform = 'translate(-50%, -50%)';
    confirmationBox.style.backgroundColor = 'white';
    confirmationBox.style.padding = '20px';
    confirmationBox.style.border = '1px solid #ccc';
    confirmationBox.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
    confirmationBox.style.zIndex = '9999';
    confirmationBox.style.display = 'flex';
    confirmationBox.style.flexDirection = 'column';
    confirmationBox.style.alignItems = 'center';

    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    confirmationBox.appendChild(messageElement);

    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'space-between';
    buttonContainer.style.width = '100%';

    const confirmButton = document.createElement('button');
    confirmButton.textContent = confirmText;
    confirmButton.style.padding = '10px';
    confirmButton.style.backgroundColor = 'green';
    confirmButton.style.color = 'white';
    confirmButton.style.border = 'none';
    confirmButton.style.cursor = 'pointer';
    confirmButton.addEventListener('click', () => {
      document.body.removeChild(focusTrapWrapper);
      resolve(true); // Resolves to true when confirmed
    });

    const cancelButton = document.createElement('button');
    cancelButton.textContent = cancelText;
    cancelButton.style.padding = '10px';
    cancelButton.style.backgroundColor = 'red';
    cancelButton.style.color = 'white';
    cancelButton.style.border = 'none';
    cancelButton.style.cursor = 'pointer';
    cancelButton.addEventListener('click', () => {
      document.body.removeChild(focusTrapWrapper);
      resolve(false); // Resolves to false when canceled
    });

    buttonContainer.appendChild(confirmButton);
    buttonContainer.appendChild(cancelButton);
    confirmationBox.appendChild(buttonContainer);

    focusTrapWrapper.appendChild(confirmationBox);

    document.body.appendChild(focusTrapWrapper);
    confirmButton.focus();

    focusTrapWrapper.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        event.preventDefault();
        const focusableElements = focusTrapWrapper.querySelectorAll('input, button');
        let currentIndex = Array.from(focusableElements).indexOf(document.activeElement);
        if (event.shiftKey) {
          currentIndex = (currentIndex - 1 + focusableElements.length) % focusableElements.length;
        } else {
          currentIndex = (currentIndex + 1) % focusableElements.length;
        }
        focusableElements[currentIndex].focus();
      } else if (event.key === 'Delete' || event.key === 'Backspace') {
        event.preventDefault();

        // Close the prompt if the Escape key is pressed
        document.body.removeChild(focusTrapWrapper);
        resolve(null); // Resolves with null when canceled
      }
    });    
  });
}