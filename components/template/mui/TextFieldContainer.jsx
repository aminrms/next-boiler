import { TextField } from '@mui/material'
import TypoContainer from "./TypoContainer"
import GridContainer from "./GridContainer"
export default function TextFieldContainer({
    inputProps
}) {
    return (
        <GridContainer
            gridProps={{
                flexDirection: "column",
                container: true,
            }}
        >
            {
                inputProps.label &&
                <GridContainer
                    gridProps={{
                        justifyContent: "flex-start",
                        container: true,
                    }}
                >
                    <TypoContainer
                        typoProps={{
                            text: inputProps.label,
                            variant: "subtitle1",
                            fontWeight: "bold",
                            color: "textPrimary",
                        }}
                    />
                    {
                        inputProps?.required &&
                        <TypoContainer
                            typoProps={{
                                text: "*",
                                color: "error",
                                variant: "subtitle2",
                                fontWeight: "bold"
                            }}
                        />
                    }
                </GridContainer>
            }
            <TextField
                {...inputProps}
                label=""
                autoComplete="off"
                autoCorrect='off'
            />
        </GridContainer>
    )
}