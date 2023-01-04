import DialogContainer from "./DialogContainer";
import DialogTitleContainer from "./DialogTitleContainer";
import IconBtnContainer from "./IconBtnContainer";
import DialogContentContainer from "./DialogContentContainer";
import { useEffect, useState } from "react";
import DividerContainer from "./DividerContainer";
import PageLoading from "../PageLoading";
export default function IframeContainer({
    url,
    open,
    onClose,
}) {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (open) {
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        }
    }, [open])
    return (
        <DialogContainer
            dialogProps={{
                open,
                onClose,
                fullWidth: true,
                maxWidth: "md",
            }}
        >
            <DialogTitleContainer
                dialogTitleProps={{
                    sx: {
                        display: "flex",
                        justifyContent: "flex-start",
                        p: 0.2
                    }
                }}
            >
                <IconBtnContainer
                    iconBtnProps={{
                        icoProps: {
                            ico: "Close",
                            fontSize: "large",
                        },
                        onClick: onClose,
                        size: "large",
                        color: "error",
                    }}
                />
            </DialogTitleContainer>
            <DividerContainer />
            <DialogContentContainer
                dialogContentProps={{
                    sx: {
                        width: "100%",
                        height: window.innerHeight,
                        p: 0,
                    }
                }}
            >
                {
                    loading
                        ?
                        <PageLoading />
                        :
                        <iframe
                            src={url}
                            width="100%"
                            height="100%"
                            style={{ border: "none" }}
                        />
                }
            </DialogContentContainer>
        </DialogContainer>
    )
}
