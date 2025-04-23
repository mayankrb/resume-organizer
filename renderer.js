const fs = require('fs');
const path = require('path');

window.saveFile = () => {
  const jobId = document.getElementById('jobId').value.trim();
  const jobTitle = document.getElementById('jobTitle').value.trim();
  const companyName = document.getElementById('companyName').value.trim();
  const dateApplied = document.getElementById('dateApplied').value;
  const pdfInput = document.getElementById('pdfInput');
  const status = document.getElementById('status');

  if (!jobTitle || !companyName || !dateApplied || pdfInput.files.length === 0) {
    status.textContent = 'Please fill out all required fields and select a PDF.';
    return;
  }

  const pdfFile = pdfInput.files[0];
  const reader = new FileReader();

  reader.onload = () => {
  try {
    const folderName = `${jobId ? jobId + ' - ' : ''}${jobTitle} - ${companyName} - ${dateApplied}`;
    const outputBase = "D:\\Applications and Resumes";
    const outputDir = path.join(outputBase, folderName);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputPath = path.join(outputDir, pdfFile.name);
    fs.writeFileSync(outputPath, Buffer.from(new Uint8Array(reader.result)));

    status.textContent = `✅ Saved to: ${outputPath}`;
  } catch (err) {
    console.error("❌ Error saving file:", err);
    status.textContent = `❌ Failed: ${err.message}`;
  }
};
  reader.readAsArrayBuffer(pdfFile);
};
