const form = document.getElementById('serviceForm');
const output = document.getElementById('output');
const downloadBtn = document.getElementById('downloadBtn');

const services = {
  nginx: `
  nginx:
    image: nginx:latest
    ports:
      - "80:80"
  `,
  mysql: `
  mysql:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: example
    ports:
      - "3306:3306"
  `,
  mongo: `
  mongo:
    image: mongo
    ports:
      - "27017:27017"
  `,
  redis: `
  redis:
    image: redis
    ports:
      - "6379:6379"
  `,
  node: `
  node:
    image: node:latest
    working_dir: /app
    volumes:
      - .:/app
    command: npm start
    ports:
      - "3000:3000"
  `,
  flask: `
  flask:
    image: python:3.9
    working_dir: /app
    volumes:
      - .:/app
    command: python app.py
    ports:
      - "5000:5000"
  `
};

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const selected = Array.from(form.querySelectorAll('input[type="checkbox"]:checked'))
    .map(cb => cb.value);

  let content = `version: '3'\nservices:\n`;

  selected.forEach(service => {
    content += services[service];
  });

  output.textContent = content;
  downloadBtn.style.display = 'inline-block';

  // Descargar
  downloadBtn.onclick = () => {
    const blob = new Blob([content], { type: 'text/yaml' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'docker-compose.yml';
    link.click();
  };
});
