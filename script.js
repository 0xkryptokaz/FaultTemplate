
      
function generateTextDocument() {
  const formElements = document.querySelectorAll('form input[type="text"], form input[type="radio"]:checked, form select, form textarea');
  let text = "";

  formElements.forEach((element) => {
    const label = document.querySelector(`label[for="${element.id}"]`);
    if (label) {
      text += `${label.textContent.trim()}: ${element.value}\n`;
    } else {
      text += `${element.id}: ${element.value}\n`;
    }
  });

  const blob = new Blob([text], { type: "text/plain" });
  const downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = "troubleshooting_info.txt";
  downloadLink.click();
}
      
function generateTextDocument() {
  const formElements = document.querySelectorAll('form input[type="text"], form input[type="radio"]:checked, form select, form textarea');
  let text = "";

  formElements.forEach((element) => {
    const label = document.querySelector(`label[for="${element.id}"]`);
    if (label) {
      text += `${label.textContent.trim()}: ${element.value}\n`;
    } else {
      text += `${element.id}: ${element.value}\n`;
    }
  });

  const blob = new Blob([text], { type: "text/plain" });
  const downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = "troubleshooting_info.txt";
  downloadLink.click();
}
