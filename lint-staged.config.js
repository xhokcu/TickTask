module.exports = {
  '*.{ts,tsx,js,jsx}': (files) => {
    const filtered = files.filter((f) => !f.includes('.rnstorybook'));
    if (filtered.length === 0) return [];
    return [
      `prettier --write ${filtered.join(' ')}`,
      `eslint --fix --max-warnings=0 ${filtered.join(' ')}`,
      `bash -c 'tsc --noEmit'`,
    ];
  },
};
