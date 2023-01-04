import {LinearProgress} from '@mui/material';

export default function LinearProgressContainer({linearProgressProps , children}) {
  return (
      <LinearProgress
      {...linearProgressProps}
      >
          {children}
    </LinearProgress>
  )
}
