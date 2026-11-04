import { locales, type Locale } from './index';

/** getStaticPaths helper: one route per locale; English has no prefix. */
export const langPaths = () => locales.map((l) => ({ params: { lang: l === 'en' ? undefined : l }, props: { locale: l as Locale } }));

export type Dir = 'a' | 'b' | 'c';
/** Design previews: every locale × direction (`/lab/direction-a/`, `/fr/lab/direction-a/`, …). */
export const labPaths = () => langPaths().flatMap((p) => (['a', 'b', 'c'] as const).map((dir) => ({
  params: { ...p.params, dir: `direction-${dir}` }, props: { ...p.props, dir },
})));
