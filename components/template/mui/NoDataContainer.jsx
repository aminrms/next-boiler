import GridContainer from "./GridContainer"
import ImageContainer from "./ImageContainer"
import TypoContainer from "./TypoContainer"
import lang from "../../../public/assets/json/language.json"
import noNotif from "../../../public/assets/svg/noNotif.svg"
import noOrder from "../../../public/assets/svg/noOrder.svg"
import noTransaction from "../../../public/assets/svg/noTransaction.svg"
import useRouterHook from "../../../utils/hooks/useRouterHook"

export default function NoDataContainer() {
    const router = useRouterHook()
    const {pathname} = router
    const imageGenerator = () => {
        let imgSrc
        switch (pathname) {
            case "/orders-list":
                imgSrc = noOrder
                break;
            case "/transactions":
                imgSrc = noTransaction
                break;
            case "/messages":
                imgSrc = noNotif
                break;
            default:
                imgSrc = noTransaction
                break;
        }
        return imgSrc
    }
    return (
        <GridContainer
            gridProps={{
                flexDirection: "column",
                justifyContent: 'center',
                container: true,
                alignItems: "center"
            }}
        >
            <ImageContainer
                imageProps={{
                    src: imageGenerator(),
                    width: 100,
                    height: 100
            }}
            />
            <TypoContainer
                typoProps={{
                    text: lang.BASIC.NO_DATA,
                    variant: "h5",
                    color: "textSecondary",
                    align: "center",
                    fontWeight: "bold",
                    sx: { my: 2 }
                }}
            />
        </GridContainer>
    )
}
