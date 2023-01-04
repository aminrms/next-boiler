import { useDispatch, useSelector } from "react-redux";
import { httpDrawerHandler } from "../../redux/slicers/settings";
import lang from "../../public/assets/json/language.json"
import BtnContainer from "./mui/BtnContainer";
import { useEffect, useState } from "react";
import useRouterHook from "../../utils/hooks/useRouterHook";
import BoxContainer from "./mui/BoxContainer";
import CustomDrawer from "./CustomDrawer";

function HttpErrorDrawer() {
    const [errMsg, setErrMsg] = useState({
        title: "",
        desc: "",
        btn: "",
        action: () => { return }
    });
    const router = useRouterHook();
    const dispatch = useDispatch();
    const settings = useSelector(state => state.settings);
    const { httpDrawer } = settings;
    const { open, code } = httpDrawer
    const closeDrawer = () => {
        dispatch(httpDrawerHandler({
            open: false,
            code: "",
            error: ""
        }))
    }
    useEffect(() => {
        if (!code) {
            setErrMsg({
                title: lang.ERRORS.NETWORK_ERROR.TITLE,
                desc: lang.ERRORS.NETWORK_ERROR.DESCRIPTION,
                btn: lang.ERRORS.NETWORK_ERROR.BTN,
                action: () => {
                    router.reload()
                    closeDrawer();
                }
            })
        } else {
            if (code === 401 || code === 403) {
                setErrMsg({
                    title: lang.ERRORS.UNAUTHORIZED.TITLE,
                    desc: lang.ERRORS.UNAUTHORIZED.DESCRIPTION,
                    btn: lang.ERRORS.UNAUTHORIZED.BTN,
                    action: () => {
                        router.replace("/login");
                        closeDrawer();
                    }
                })
            } else if (code === 400 || code === 500) {
                setErrMsg({
                    title: lang.ERRORS.INTERNAL_SERVER.TITLE,
                    desc: lang.ERRORS.INTERNAL_SERVER.DESCRIPTION,
                    btn: lang.ERRORS.INTERNAL_SERVER.BTN,
                    action: () => {
                        router.reload()
                        closeDrawer();
                    }
                })
            } else if (code === 404) {
                setErrMsg({
                    title: lang.ERRORS.NOT_FOUND.TITLE,
                    desc: lang.ERRORS.NOT_FOUND.DESCRIPTION,
                    btn: lang.ERRORS.NOT_FOUND.BTN,
                    action: () => {
                        router.reload()
                        closeDrawer();
                    }
                })
            }
        }
    }, [code, open]);
    return (
        <CustomDrawer
            open={open}
            handleCloseDrawer={closeDrawer}
            title={`${errMsg.title} - ${code ?? "Network Error"}`}
            desc={errMsg.desc}
        >
            <BoxContainer
                boxProps={{
                    sx: {
                        p: 1
                    }
                }}
            >
                <BtnContainer
                    btnProps={{
                        text: errMsg.btn,
                        color: "primary",
                        variant: "contained",
                        size: "medium",
                        onClick: errMsg.action,
                        fullWidth: true,
                    }}
                />
            </BoxContainer>
        </CustomDrawer>
    );
}

export default HttpErrorDrawer;