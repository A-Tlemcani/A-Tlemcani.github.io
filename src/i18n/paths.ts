import { locales, type Locale } from './index';

/** getStaticPaths helper: one route per locale; English has no prefix. */
export const langPaths = () => locales.map((l) => ({ params: { lang: l === 'en' ? undefined : l }, props: { locale: l as Locale } }));
