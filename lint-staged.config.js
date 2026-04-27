module.exports = {
  '*.{ts,tsx,js,jsx}': (files) => {
    // for any staged file matching this glob...
    const filtered = files.filter((f) => !f.includes('.rnstorybook'));
    if (filtered.length === 0) return [];
    return [
      `prettier --write ${filtered.join(' ')}`, // format it
      `eslint --fix --max-warnings=0 ${filtered.join(' ')}`, // lint it
      `bash -c 'tsc --noEmit'`, // type check it
    ];
  },
};
