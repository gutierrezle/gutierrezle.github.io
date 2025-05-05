document.getElementById("checkBtn").addEventListener("click", async () => {
    const url = document.getElementById("urlInput").value;
    const results = document.getElementById("results");
    results.textContent = "Verificando...";
  
    try {
      const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
      const data = await response.json();
  
      const headers = response.headers;
      let output = "Headers relevantes detectados:\n\n";
  
      const importantHeaders = [
        "content-security-policy",
        "strict-transport-security",
        "x-frame-options",
        "x-content-type-options",
        "referrer-policy",
        "permissions-policy",
      ];
  
      importantHeaders.forEach(header => {
        const value = headers.get(header);
        output += `${header}: ${value || "❌ No definido"}\n`;
      });
  
      results.textContent = output;
    } catch (err) {
      results.textContent = "Error al intentar obtener los headers. Es posible que el sitio tenga protección contra CORS.";
    }
  });
  