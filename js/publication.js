// Keep the citation readable and downloadable even without JavaScript.
document.querySelectorAll("[data-copy-bibtex]").forEach((button) => {
  button.hidden = false;
  button.addEventListener("click", async () => {
    const code = document.getElementById(button.dataset.copyBibtex);
    const status = button.parentElement.querySelector("[role='status']");
    try {
      await navigator.clipboard.writeText(code.textContent);
      status.textContent = "BibTeX copied.";
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(code);
      selection.removeAllRanges();
      selection.addRange(range);
      code.parentElement.focus();
      status.textContent = "Citation selected. Press Ctrl+C or ⌘C to copy.";
    }
  });
});
