module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: ['**/*.(t|j)s'],
  moduleFileExtensions: ['js', 'ts', 'json'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest'
  }
};
