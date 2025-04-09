// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  // hangi global degiskenlerin otomatik taninmasi gerektigini belirtir: jestin global degiskenlerini tanir
  // Jest kullanırken describe, it, test, expect, beforeEach, afterEach gibi Jest'e özel global fonksiyonlar vardır.
  // Eğer ESLint konfigürasyonunda Jest'i tanıtmazsan, ESLint bu fonksiyonları bilmediği için "tanımsız" (undefined) olarak algılar ve hata verir.

  env: {
    'jest/globals': true,
  },
  plugins: ['prettier', 'jest'],
  extends: ['expo', 'prettier', 'plugin:jest/recommended'],
  rules: {
    '@typescript-eslint/ban-types': 'off',
    'prettier/prettier': 'error',
    'no-console': 'error',
    // Opsiyonel Jest kuralları (istersen ekleyebilirsin)
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
};
