module.exports = {
  roots: ['<rootDir>/__tests__', '<rootDir>/src/modules'],
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node', 'vue'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  testMatch: [
    '**/__tests__/**/?(*.)+(spec|test).[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)'
  ]
}
