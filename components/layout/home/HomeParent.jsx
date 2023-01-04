import TypoContainer from '../../template/mui/TypoContainer'

export default function HomeParent({name}) {
  return (
      <TypoContainer
          typoProps={{
              text: {name},
              variant: "h6",
              color: "textPrimary",
              align: "center",
              fontWeight: "bold",
              gutterBottom: true
      }}
      />
  )
}
