export function customPrompt(message, defaultValue = '', confirmText = 'ok', cancelText = 'abbrechen') {
  return new Promise((resolve) => {
    // Create a wrapper element to trap focus within the prompt
    const focusTrapWrapper = document.createElement('div');
    focusTrapWrapper.style.position = 'fixed';
    focusTrapWrapper.style.top = '0';
    focusTrapWrapper.style.left = '0';
    focusTrapWrapper.style.width = '100%';
    focusTrapWrapper.style.height = '100%';
    focusTrapWrapper.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    focusTrapWrapper.style.zIndex = '9999';

    const promptBox = document.createElement('div');
    promptBox.style.position = 'absolute';
    promptBox.style.top = '50%';
    promptBox.style.left = '50%';
    promptBox.style.transform = 'translate(-50%, -50%)';
    promptBox.style.backgroundColor = 'white';
    promptBox.style.padding = '20px';
    promptBox.style.border = '1px solid #ccc';
    promptBox.style.borderRadius = "10px";
    promptBox.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
    promptBox.style.display = 'flex';
    promptBox.style.flexDirection = 'column';
    promptBox.style.alignItems = 'center';

    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageElement.style.width = "100%";
    messageElement.style.padding = "0";

    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.value = defaultValue;
    inputElement.className = "input-group form-control"
    inputElement.style.marginBottom = '20px';
    inputElement.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        // Prevent the default form submission behavior
        event.preventDefault();
        const userInput = inputElement.value;
        document.body.removeChild(focusTrapWrapper);
        resolve(userInput); // Resolves with user input when Enter is pressed
      }
    });

    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'right';
    buttonContainer.style.gap ="20px";
    buttonContainer.style.width = '100%';
    buttonContainer.addEventListener("keydown", (event)=>{
      if(event.key === "Delete"||event.key === "Backspace"){
        event.preventDefault();
        const userInput = null;
        document.body.removeChild(focusTrapWrapper);
        resolve(userInput); 
      }
    })

    const confirmButton = document.createElement('button');
    confirmButton.textContent = confirmText;
    confirmButton.className ="btn btn-primary"
    confirmButton.style.width = "100%";
    confirmButton.addEventListener('click', () => {
      const userInput = inputElement.value;
      document.body.removeChild(focusTrapWrapper);
      resolve(userInput); // Resolves with user input when confirmed
    });

    const cancelButton = document.createElement('button');
    cancelButton.textContent = cancelText;
    cancelButton.className = "btn btn-secondary";
    cancelButton.style.width = "100%";
    cancelButton.addEventListener('click', () => {
      document.body.removeChild(focusTrapWrapper);
      resolve(null); // Resolves with null when canceled
    });

    buttonContainer.appendChild(confirmButton);
    buttonContainer.appendChild(cancelButton);
    promptBox.appendChild(messageElement);
    promptBox.appendChild(inputElement);
    promptBox.appendChild(buttonContainer);

    // Append the promptBox to the focusTrapWrapper
    focusTrapWrapper.appendChild(promptBox);

    // Append the focusTrapWrapper to the document body
    document.body.appendChild(focusTrapWrapper);

    // Focus the input element when the prompt is displayed
    inputElement.focus();

    // Trap focus within the promptBox
    focusTrapWrapper.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        event.preventDefault();
        const focusableElements = promptBox.querySelectorAll('input, button');
        let currentIndex = Array.from(focusableElements).indexOf(document.activeElement);
        if (event.shiftKey) {
          currentIndex = (currentIndex - 1 + focusableElements.length) % focusableElements.length;
        } else {
          currentIndex = (currentIndex + 1) % focusableElements.length;
        }
        focusableElements[currentIndex].focus();
      } else if (event.key === 'Escape') {
        // Close the prompt if the Escape key is pressed
        document.body.removeChild(focusTrapWrapper);
        resolve(null); // Resolves with null when canceled
      }
    });
  });
}
