// getSelection


export const getSelection = () => {
  if (window.getSelection) {
    return window.getSelection();

  } else if (document.selection && document.selection.createRange) {
    return document.selection;
  }
  return null;
}