const fallbackCopyTextToClipboard = async (text: string) => {
  const textArea = document.createElement('textarea');
  textArea.value = text;

  textArea.style.top = '0';
  textArea.style.left = '0';
  textArea.style.position = 'fixed';

  document.body.appendChild(textArea);
  await textArea.focus();
  await textArea.select();

  try {
    document.execCommand('copy');
    document.body.removeChild(textArea);
  } catch (err) {
    throw new Error(`Fallback: Copying text command was unsuccessful`);
  }
};

export const writeTextToClipboard = (text: string): Promise<void> => {
  if (!navigator.clipboard) return fallbackCopyTextToClipboard(text);
  return navigator.clipboard.writeText(text);
};
