//só por exemplo, não estou usando a API
const PROXY_CONFIG = [
  {
    context: ['/api'], // Prefixo de todos os Controllers da API
    target: 'http://localhost:8080/',
    secure: false,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;
