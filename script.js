const promptUrl = "prompts/premium-real-estate-3d-agent-prompt-v2.md";
const copyButton = document.querySelector("[data-copy-prompt]");
const copyLabel = document.querySelector("[data-copy-label]");
const copyStatus = document.querySelector("[data-copy-status]");

copyButton.addEventListener("click", async () => {
  try {
    const response = await fetch(promptUrl);
    if (!response.ok) throw new Error(`Prompt request failed: ${response.status}`);
    await navigator.clipboard.writeText(await response.text());
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
