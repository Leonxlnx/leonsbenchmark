const promptUrl = "prompts/premium-real-estate-3d-agent-prompt-v2.md";
const copyButton = document.querySelector("[data-copy-prompt]");
const copyLabel = document.querySelector("[data-copy-label]");
const copyStatus = document.querySelector("[data-copy-status]");
const promptPreview = document.querySelector("[data-prompt-preview]");
const promptPreviewContainer = document.querySelector("[data-prompt-preview-container]");
const promptToggle = document.querySelector("[data-prompt-toggle]");
const promptToggleLabel = document.querySelector("[data-prompt-toggle-label]");
const promptToggleIcon = document.querySelector("[data-prompt-toggle-icon]");

const promptText = fetch(promptUrl).then((response) => {
  if (!response.ok) throw new Error(`Prompt request failed: ${response.status}`);
  return response.text();
});

promptText.then((text) => {
  promptPreview.textContent = text;
}).catch(() => {
  promptPreview.textContent = "Prompt preview unavailable. Use the Markdown download below.";
});

promptToggle.addEventListener("click", () => {
  const expanded = promptToggle.getAttribute("aria-expanded") === "true";
  promptToggle.setAttribute("aria-expanded", String(!expanded));
  promptPreviewContainer.classList.toggle("is-expanded", !expanded);
  promptToggleLabel.textContent = expanded ? "Show full prompt" : "Collapse prompt";
  promptToggleIcon.textContent = expanded ? "↓" : "↑";
});

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(await promptText);
    copyLabel.textContent = "Copied";
    copyStatus.textContent = "Full prompt copied to clipboard.";
  } catch {
    copyLabel.textContent = "Copy failed";
    copyStatus.textContent = "Download the Markdown file instead.";
  }

  window.setTimeout(() => {
    copyLabel.textContent = "Copy prompt";
  }, 2200);
});
