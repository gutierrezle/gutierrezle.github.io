document.addEventListener('DOMContentLoaded', () => {
    const htmlInput = document.getElementById('htmlInput');
    const cssInput = document.getElementById('cssInput');
    const previewFrame = document.getElementById('previewFrame');
  
    function updatePreview() {
      const htmlContent = htmlInput.value;
      const cssContent = cssInput.value;
  
      const combinedContent = `
        <html>
        <head>
          <style>${cssContent}</style>
        </head>
        <body>
          ${htmlContent}
        </body>
        </html>
      `;
  
      previewFrame.srcdoc = combinedContent;
    }
  
    // Actualizar en tiempo real
    htmlInput.addEventListener('input', updatePreview);
    cssInput.addEventListener('input', updatePreview);
  
    // Inicializar vista previa vacía
    updatePreview();
  });
  