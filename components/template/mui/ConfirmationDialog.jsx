import DialogContainer from "./DialogContainer"
import DialogTitleContainer from "./DialogTitleContainer"
import TypoContainer from "./TypoContainer"
import BtnContainer from "./BtnContainer"
import IconBtnContainer from "./IconBtnContainer"
import lang from "../../../public/assets/json/language.json"
import GridContainer from "./GridContainer"
import DialogContentContainer from "./DialogContentContainer"
import DialogActionsContainer from "./DialogActionsContainer"
import DividerContainer from "./DividerContainer"
export default function ConfirmationDialog({
    open,
    onClose,
    onSubmit,
    text
}) {
    const actionBtns = [
        {
            text: lang.BASIC.CANCEL,
            color: "primary",
            onClick: onClose,
            variant: "text"
        },
        {
            text: lang.BASIC.OK,
            color: "primary",
            onClick: onSubmit,
            variant: "contained"
        },
    ]
    return (
        <DialogContainer
            dialogProps={{
                open,
                onClose,
                fullWidth: true,
                maxWidth: "sm",
            }}
        >
            <DialogTitleContainer
            >
                <GridContainer
                    gridProps={{
                        container: true,
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <TypoContainer
                        typoProps={{
                            text: lang.BASIC.CONFIRMATION,
                            variant: "h6",
                            color: "textPrimary",
                            fontWeight: "bold",
                        }}
                    />
                    <IconBtnContainer
                        iconBtnProps={{
                            icoProps: {
                                ico: "Close"
                            },
                            color: "error",
                            onClick: onClose,
                            size: "small",
                            edge: "end",
                        }}
                    />
                </GridContainer>
            </DialogTitleContainer>
            <DividerContainer />
            <DialogContentContainer>
                <TypoContainer
                    typoProps={{
                        text,
                        variant: "h5",
                        color: "textPrimary",
                        fontWeight: "bold",
                        align: "center"
                    }}
                />
            </DialogContentContainer>
            <DividerContainer />
            <DialogActionsContainer
                dialogActionsProps={{
                    sx: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }
                }}
            >
                {
                    actionBtns?.map((btn, i) => (
                        <BtnContainer
                            key={i}
                            btnProps={{
                                ...btn,
                                size: "large",
                            }}
                        />
                    ))
                }
            </DialogActionsContainer>
        </DialogContainer>
    )
}
