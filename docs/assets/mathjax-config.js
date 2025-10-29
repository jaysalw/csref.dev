// Configure MathJax before the library loads so we can control when typesetting happens
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$','$$'], ['\\[','\\]']]
  },
  startup: {
    typeset: false
  }
};
