import DrawerContainer from "./mui/DrawerContainer";
import CardHeadContainer from "./mui/CardHeadContainer";
import TypoContainer from "./mui/TypoContainer";
import IconBtnContainer from "./mui/IconBtnContainer";
import DividerContainer from "./mui/DividerContainer";
import BoxContainer from "./mui/BoxContainer";
import useThemeHook from "../../utils/hooks/useThemeHook";

const CustomDrawer = ({ open, handleCloseDrawer, title, desc, children }) => {
    const theme = useThemeHook();
    return (
        <DrawerContainer
            drawerProps={{
                open,
                onClose: handleCloseDrawer,
                anchor: "bottom",
                sx: {
                    zIndex: '30000 !important',
                    position: 'absolute',
                }
            }}
        >
            <CardHeadContainer
                cardHeadProps={{
                    title:
                        <TypoContainer
                            typoProps={{
                                text: title,
                                variant: "h6",
                                color: "textPrimary",
                                align: "left",
                            }}
                        />,
                    subheader:
                        <TypoContainer
                            typoProps={{
                                text: desc,
                                variant: "subtitle1",
                                color: theme.palette.info.dark,
                                align: "left",
                                fontWeight: "bold",
                            }}
                        />,
                    action: <IconBtnContainer
                        iconBtnProps={{
                            icoProps: {
                                ico: "Close"
                            },
                            onClick: handleCloseDrawer,
                            color: "error",
                            size: "small",
                            edge: "end",
                        }}
                    />
                }}
            />
            <DividerContainer />
            <BoxContainer
                boxProps={{
                    sx: {
                        p: 0.5
                    }
                }}
            >
                {children}
            </BoxContainer>
        </DrawerContainer>
    );
}

export default CustomDrawer;