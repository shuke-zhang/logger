export type CSSProperties = Partial<Record<string, string | number | null>> & {
    [key in keyof CSSStyleDeclaration]?: string | number | null;
} & {
    [key: `--${string}`]: string | number | null;
};
export declare function mapStyle(record: CSSProperties): string;
export declare function bg(background: string): string;
export declare function text(color: string): string;
declare function info(...msg: unknown[]): void;
declare function warn(...msg: unknown[]): void;
declare function error(...msg: unknown[]): void;
declare function success(...msg: unknown[]): void;
/**
 * 自定义打印
 */
export declare const logger: {
    info: typeof info;
    warn: typeof warn;
    error: typeof error;
    success: typeof success;
};
export {};
