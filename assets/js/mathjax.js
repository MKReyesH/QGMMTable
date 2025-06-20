MathJax = {
  tex: {
    // Define delimiters for inline math: ['start_delimiter', 'end_delimiter']
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    // Define delimiters for block math: ['start_delimiter', 'end_delimiter']
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    
    processEscapes: true,       // Allows escaping of dollar signs (e.g., \$)
    processEnvironments: true   // Processes LaTeX environments like \begin{align}
  },
  options: {
    // Optional: specify HTML tags to skip when searching for math
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
    ignoreHtmlClass: 'tex2jax_ignore',
    processHtmlClass: 'tex2jax_process'
  },
  svg: {
    fontCache: 'global' // Caches fonts globally for better rendering speed
  }
};

// Load the MathJax library from CDN
// This script will execute immediately after the MathJax config is set.
(function () {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.id = 'MathJax-script';
  script.async = true;
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
  document.head.appendChild(script);
})();
