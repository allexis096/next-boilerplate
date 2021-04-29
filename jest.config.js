module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.tsx(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
};
