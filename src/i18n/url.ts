// 语言前缀工具：默认语言（zh）无前缀，英文为 /en/
import { DEFAULT_LOCALE, type Locale } from './ui';

export function stripLocale(pathname: string): string {
  const p = pathname.startsWith('/') ? pathname : `/${pathname}`;
  if (p === '/en' || p === '/en/') return '/';
  if (p.startsWith('/en/')) return p.slice(3);
  return p;
}

export function localizedPath(pathname: string, target: Locale): string {
  const base = stripLocale(pathname);
  if (target === DEFAULT_LOCALE) return base;
  return base === '/' ? '/en/' : `/en${base}`;
}
