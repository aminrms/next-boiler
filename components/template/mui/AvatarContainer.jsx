import { Avatar } from '@mui/material'
import logoWithSlogan from "../../../public/assets/svg/logoWithSlogan.svg"
import ImageContainer from './ImageContainer'
export default function AvatarContainer({
    avatarProps
}) {
    return (
        <Avatar
            {...avatarProps}
        >
            <ImageContainer
                imageProps={{
                    src: logoWithSlogan,
                    width: "40",
                    height: "40"
                }}
            />
        </Avatar>
    )
}