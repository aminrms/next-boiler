import { Skeleton } from '@mui/material'

export default function SkeletonContainer({ skeletonProps }) {
    return (
        <Skeleton
            {...skeletonProps} />
    )
}
