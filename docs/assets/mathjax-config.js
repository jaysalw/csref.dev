// Configure MathJax before the library loads so we can control when typesetting happens
window.MathJax = {
  tex: {
    // support common inline delimiters
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  },
  startup: {
    // disable automatic typeset so we can re-run typesetting after client-side navs
    typeset: false
  }
};
