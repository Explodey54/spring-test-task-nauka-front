module.exports = {
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/app/$1',
    '@test/(.*)': '<rootDir>/src/test/$1',
    '@api/(.*)': '<rootDir>/src/app/api/$1',
    '@auth/(.*)': '<rootDir>/src/app/auth/$1',
    '@main/(.*)': '<rootDir>/src/app/main/$1',
    '@core/(.*)': '<rootDir>/src/app/core/$1',
  },
  preset: 'jest-preset-angular',
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
};
