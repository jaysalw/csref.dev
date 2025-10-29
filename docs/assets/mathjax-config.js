// Configure MathJax before the library loads
window.MathJax = {
  tex: {
    // Support inline and display math delimiters
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']]
  },
  startup: {
    // Disable automatic typesetting so we can call it manually after content loads
    typeset: false
  }
};
