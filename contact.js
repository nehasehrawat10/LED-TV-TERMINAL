function copyText(elementId) {
    const text = document.getElementById(elementId).textContent;
    
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    alert('Copied to clipboard: ' + text);
}
