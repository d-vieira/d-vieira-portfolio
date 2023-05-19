export default function clipBoard(text: string, onCopy: () => void): void {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(onCopy)
      .catch((error) => {
        console.error(`Failed to copy !!!\nError: ${error}`);
      });
  } else {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      const success = document.execCommand('copy', false, text);
      if (success) {
        onCopy();
      } else {
        console.error("Failed to copy using document.execCommand('copy')!!!");
      }
    } catch (error) {
      console.error(`Failed to copy using document.execCommand('copy')!!!\nError: ${error}`);
    }
    document.body.removeChild(textArea);
  }
}
