async function generateHash() {
    const text = document.getElementById('inputText').value;
    const type = document.getElementById('hashType').value;
    const output = document.getElementById('hashOutput');
  
    if (!text.trim()) {
      output.textContent = 'Por favor, ingresa un texto.';
      return;
    }
  
    if (type === 'md5') {
      output.textContent = md5(text);
    } else {
      const encoder = new TextEncoder();
      const data = encoder.encode(text);
      const hashBuffer = await crypto.subtle.digest(type === 'sha1' ? 'SHA-1' : 'SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      output.textContent = hashHex;
    }
  }
  