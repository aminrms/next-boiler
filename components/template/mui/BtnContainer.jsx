import LoadingButton from '@mui/lab/LoadingButton';
export default function BtnContainer({
    btnProps,
}) {
    return (
        <LoadingButton
            {...btnProps}
        >
            {btnProps.text}
        </LoadingButton>
    )
}