import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextResponse, type NextRequest } from 'next/server';

import { i18n } from './server/i18n.config';

const _defaultLocale = i18n.defaultLocale;
const _locales = [...i18n.locales]; // copy of locales haha

function getLocale(req: NextRequest) {
    const headers = new Headers(req.headers);
    const acptlng = headers.get('accept-language');

    if (acptlng) {
        headers.set('accept-language', acptlng.replaceAll('_', '-'));
    }

    const hdrsobj = Object.fromEntries(headers.entries());
    const languages = new Negotiator({ headers: hdrsobj }).languages();

    if (languages.includes('*')) {
        return _defaultLocale;
    }
    return match(languages, _locales, _defaultLocale);
}

export default function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    console.log(pathname);
    const pathnameValid =
        pathname.length === 1
            ? pathname.startsWith('/')
            : i18n.locales.every(
                  (locale) =>
                      pathname.startsWith(`/${locale}/`) ||
                      pathname === `/${locale}`,
              );

    if (pathnameValid) {
        const locale = getLocale(req);
        return NextResponse.redirect(
            new URL(
                `/${locale}/${pathname.startsWith('/') ? '' : `/${pathname}`}`,
                req.url,
            ),
        );
    }
}

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
