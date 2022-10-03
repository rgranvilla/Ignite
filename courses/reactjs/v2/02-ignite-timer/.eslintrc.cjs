module.exports = {
  root: true,
  extends: ['custom'],
  rules: {
    quotes: [
      error,
      single,
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
  },
};
