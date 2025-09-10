import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.mjs'],
  testEnvironment: 'jsdom'
}

export default createJestConfig(customJestConfig);