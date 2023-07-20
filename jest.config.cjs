module.exports = {
    collectCoverageFrom: [
        "resources/**/*.{js,jsx,ts,tsx}",
        "!resources/js/types/**/*.d.ts",
    ],
    coveragePathIgnorePatterns: [],
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(ts|js|tsx|jsx)$": "@swc/jest",
    },
    setupFilesAfterEnv: ["<rootDir>/resources/js/setupTests.js"],
    transformIgnorePatterns: [
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
        "^.+\\.module\\.(css|sass|scss)$",
    ],
    modulePaths: ["<rootDir>"],
    moduleNameMapper: {
        "^react-native$": "react-native-web",
        "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
        "^@/(.*)$": "<rootDir>/resources/js/$1",
    },
    moduleFileExtensions: [
        // Place tsx and ts to beginning as suggestion from Jest team
        // https://jestjs.io/docs/configuration#modulefileextensions-arraystring
        "tsx",
        "ts",
        "web.js",
        "js",
        "web.ts",
        "web.tsx",
        "json",
        "web.jsx",
        "jsx",
        "node",
    ],
    resetMocks: true,
};
