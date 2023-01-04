import { useState } from 'react'
import ReactPlayer from 'react-player'
import GridContainer from "./GridContainer"
import IconBtnContainer from "./IconBtnContainer"
import BtnContainer from "./BtnContainer"
export default function AudioPlayerContainer({ data }) {
    const [playedValue, setPlayedValue] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [playSpeed, setPlaySpeed] = useState(1.0);
    const handlePlayPause = () => {
        setPlaying(!playing);
    };
    const handleProgress = (event) => {
        setPlayedValue(event.played);
        if (event.played === 1) {
            setPlaying(false);
            setPlayedValue(0);
        }
    };
    const handle1xPlaySpeed = () => {
        setPlaySpeed(1.0);
    };
    const handle1_5xPlaySpeed = () => {
        setPlaySpeed(1.5);
    };
    const handle2xPlaySpeed = () => {
        setPlaySpeed(2.0);
    };
    const audioSpeedChanger = () => {
        if (playSpeed === 1.0) return handle1_5xPlaySpeed();
        else if (playSpeed === 1.5) return handle2xPlaySpeed();
        return handle1xPlaySpeed();
    }
    return (
        <>
            <div>
                <ReactPlayer
                    className="react-player"
                    width='100%'
                    height='100%'
                    url={data}
                    playing={playing}
                    onProgress={handleProgress}
                    playbackRate={playSpeed}
                />
            </div>
            <GridContainer
                gridProps={{
                    container: true,
                    justifyContent: "space-around",
                    alignItems: "center"
                }}
            >
                <BtnContainer
                    btnProps={{
                        text: `${playSpeed}x`,
                        onClick: audioSpeedChanger,
                        size: "small",
                        variant: "text",
                        color: "primary",
                        sx: {
                            textTransform: "lowercase",
                            fontWeight: "bold",
                            fontSize: 16
                        }
                    }}
                />
                <progress
                    className='audio-progress'
                    max={1}
                    value={playedValue}
                />
                <IconBtnContainer
                    iconBtnProps={{
                        icoProps: {
                            ico: !playing ? "PlayCircle" : "PauseCircle",
                            color: !playing ? "primary" : "default",
                            fontSize: "medium"
                        },
                        edge: "end",
                        size: "medium",
                        onClick: handlePlayPause
                    }}
                />
            </GridContainer>
        </>
    )
}
