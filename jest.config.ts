import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
    testEnvironment: "jsdom",
    verbose: true,
    setupFilesAfterEnv: ["<rootDir>src/setupTests.ts"],
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    moduleDirectories: ["node_modules", "src"],
    transform: {
        "^.+\\.(ts|tsx)?$": "ts-jest",
        "^.+\\.(js|jsx)$": "babel-jest",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/src/__mocks__/fileTransformer.js"
    }
};
export default config;
