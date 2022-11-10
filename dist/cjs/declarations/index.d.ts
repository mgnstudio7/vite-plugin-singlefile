import { Plugin } from "vite";
export declare type Config = {
    useRecommendedBuildConfig?: boolean;
    removeViteModuleLoader?: boolean;
    inlinePattern?: string[];
};
export declare function replaceScript(html: string, scriptFilename: string, scriptCode: string, removeViteModuleLoader?: boolean): string;
export declare function replaceCss(html: string, scriptFilename: string, scriptCode: string): string;
export declare function viteSingleFile({ useRecommendedBuildConfig, removeViteModuleLoader, inlinePattern }?: Config): Plugin;
