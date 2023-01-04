import BoxContainer from './mui/BoxContainer';
import LoadingContainer from './mui/LoadingContainer';
export default function PageLoading() {
  return (
    <BoxContainer
      boxProps={{
        className: "center-of-anywhere"
      }}
    >
      <LoadingContainer/>
    </BoxContainer>
  )
}




