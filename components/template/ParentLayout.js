import { useEffect, useState } from "react";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import HttpErrorDrawer from "./HttpErrorDrawer";
import Meta from "./Meta";
import PageLoading from "./PageLoading"
import ScrollToTop from "react-scroll-to-top";
import { ThemeProvider } from "@mui/material/styles";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import IconContainer from "./mui/IconContainer";
import useRouterHook from "../../utils/hooks/useRouterHook";
import useThemeHook from "../../utils/hooks/useThemeHook";
import theme from "../../styles/theme";

function ParentLayout({ children }) {
    const themeHook = useThemeHook()
    const [loading, setLoading] = useState(false);
    const cacheValue = createCache({
        key: "css",
        debug: true,
        stylisPlugins: [prefixer, rtlPlugin],
    })
    const router = useRouterHook()

    useEffect(() => {
        const start = () => {
            setLoading(true);
        };
        const end = () => {
            setLoading(false);
        };
        router.events.on("routeChangeStart", start);
        router.events.on("routeChangeComplete", end);
        router.events.on("routeChangeError", end);
        return () => {
            router.events.off("routeChangeStart", start);
            router.events.off("routeChangeComplete", end);
            router.events.off("routeChangeError", end);
        };
    }, []);

    return (
        <CacheProvider value={cacheValue}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <ScrollToTop
                    top={500}
                    smooth
                    color={themeHook.palette.secondary.main}
                    style={{
                        border: `1px solid ${themeHook.palette.primary.light}`,
                        backgroundColor: themeHook.palette.primary.main,
                        fontWeight: "bolder",
                        right: 20,
                        bottom: 50,
                    }}
                    component={
                        <IconContainer
                            icoProps={{
                                ico: "ArrowUpward",
                                color: "secondary"
                            }}
                        />
                    }
                />
                <HttpErrorDrawer />
                <Meta />
                {loading ? (
                    <PageLoading />
                ) : children }
            </ThemeProvider>
        </CacheProvider>
    );
}
export default ParentLayout;