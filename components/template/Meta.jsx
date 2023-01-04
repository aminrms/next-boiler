import Head from 'next/head';
import lang from "../../public/assets/json/language.json"
import useThemeHook from "../../utils/hooks/useThemeHook"
export default function Meta() {
    const theme = useThemeHook()
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={lang.META.KEYWORDS} />
            <meta name='description' content={lang.META.DESCRIPTION} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <link rel="apple-touch-icon" sizes="512×512" href="/apple-touch-icon.png" />
            <title>{lang.META.TITLE}</title>
            <link rel="manifest" href="/manifest.json" />
            <meta name="theme-color" content={theme.palette.primary.main} />
        </Head>
    )
}
