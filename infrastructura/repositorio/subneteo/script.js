document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("subneteo-form");
  const vlanContainer = document.getElementById("vlan-container");
  const agregarBtn = document.getElementById("agregar-vlan");
  const resultadosDiv = document.getElementById("resultados");

  function calcularMascara(cantidadHosts) {
    const bitsNecesarios = Math.ceil(Math.log2(cantidadHosts + 2));
    return 32 - bitsNecesarios;
  }

  function ipAEntero(ip) {
    return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet), 0);
  }

  function enteroAIP(entero) {
    return [
      (entero >>> 24) & 255,
      (entero >>> 16) & 255,
      (entero >>> 8) & 255,
      entero & 255,
    ].join('.');
  }

  function agregarVlan() {
    const index = document.querySelectorAll(".vlan-group").length;
    const grupo = document.createElement("div");
    grupo.classList.add("vlan-group");

    grupo.innerHTML = `
      <h3>VLAN ${index + 1}</h3>
      <label>Nombre:</label>
      <input type="text" name="vlan" required>
      <label>IP base:</label>
      <input type="text" name="ip" placeholder="192.168.1.0" required>
      <label>Cantidad de Hosts:</label>
      <input type="number" name="hosts" required>
    `;

    vlanContainer.appendChild(grupo);
  }

  agregarVlan();

  agregarBtn.addEventListener("click", agregarVlan);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    resultadosDiv.innerHTML = "";

    const grupos = document.querySelectorAll(".vlan-group");
    grupos.forEach((grupo, i) => {
      const nombre = grupo.querySelector("input[name='vlan']").value;
      const ipBaseStr = grupo.querySelector("input[name='ip']").value;
      const hosts = parseInt(grupo.querySelector("input[name='hosts']").value);

      const mascara = calcularMascara(hosts);
      const totalIps = Math.pow(2, 32 - mascara);
      const ipsUtilizables = totalIps - 2;

      // Calcular última IP (broadcast)
      const ipBaseNum = ipAEntero(ipBaseStr);
      const ultimaIpNum = ipBaseNum + totalIps - 1;
      const ultimaIpStr = enteroAIP(ultimaIpNum);

      const div = document.createElement("div");
      div.innerHTML = `
        <h3>Resultado VLAN ${i + 1} (${nombre})</h3>
        <p><strong>IP Base:</strong> ${ipBaseStr}</p>
        <p><strong>Máscara:</strong> /${mascara}</p>
        <p><strong>Total de IPs:</strong> ${totalIps}</p>
        <p><strong>Hosts utilizables:</strong> ${ipsUtilizables}</p>
        <p><strong>Última IP (broadcast):</strong> ${ultimaIpStr}</p>
        <hr>
      `;
      resultadosDiv.appendChild(div);
    });
  });
});
