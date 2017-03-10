(function (window) {
  window.__env = window.__env || {};

  // API url
  window.__env.apiUrl = 'http://localhost:8080/log';

  // Whether or not to enable debug mode
  // Setting this to false will disable console output
  window.__env.enableDebug = true;
}(this));