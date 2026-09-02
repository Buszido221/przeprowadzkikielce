declare module 'node:fs' {
  export function existsSync(path: string): boolean;
}

declare module 'node:path' {
  export const sep: string;
  export function resolve(...paths: string[]): string;
}

declare const process: {
  cwd(): string;
};
