import { existsSync } from 'node:fs';
import { resolve, sep } from 'node:path';

export function publicAssetExists(publicPath: string | undefined): boolean {
  if (!publicPath) return false;
  if (/^https?:\/\//i.test(publicPath) || publicPath.startsWith('data:')) return true;
  if (!publicPath.startsWith('/')) return false;

  const publicRoot = resolve(process.cwd(), 'public');
  const candidate = resolve(publicRoot, publicPath.slice(1));
  if (candidate !== publicRoot && !candidate.startsWith(`${publicRoot}${sep}`)) return false;
  return existsSync(candidate);
}
