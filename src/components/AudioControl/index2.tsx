import React, { useEffect, useState, useCallback, CSSProperties } from 'react';
import style from './index.scss';
import { LockOutlined, UnlockOutlined, FastBackwardOutlined, FastForwardOutlined, PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';

interface Props {
  src: string;
}

const AudioControl = React.forwardRef((props: Props, forwardRef: any) => {
  const [show, setShow] = useState(false);
  const [lock, setLock] = useState(false);
  const [audioDuration, setAudioDuration] = useState(0);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [tipsTime, setTipsTime] = useState<number | string>("");
  const [tipsOffset, setTipsOffset] = useState(0);
  const [speedList] = useState([2.0, 1.5, 1.25, 1.0, 0.75, 0.5]);
  const [currentSpeed, setCurrentSpeed] = useState(1.0);
  const [isHover, setIsHover] = useState(false);

  let audio: { current: HTMLAudioElement | null } = React.createRef();

  const formatTimer = useCallback(timer => {
    const minute = `${Math.floor(timer / 60)}`.padStart(2, '0');
    const seconds = `${Math.floor(timer % 60)}`.padStart(2, '0');
    return `${minute}:${seconds}`;
  }, []);

  useEffect(() => {
    const { current } = audio;
    if (current) {
      current.playbackRate = currentSpeed;
    }
  }, [currentSpeed]);
  
  useEffect(() => {
    setIsPlaying(false);
  }, [props.src])

  return (
    <div
      className={[style.AudioControl, show ? style.show : ''].join(' ')}
      onMouseEnter={() => {
        setShow(true);
        // props.isShow(true);
      }}
      onMouseLeave={() => {
        if (!lock) {
          setTimeout(() => {
            setShow(false);
            // props.isShow(false);
          }, 1500);
        }
      }}
    >
      <audio
        ref={(r) => {
          if (forwardRef) {
            forwardRef.current = r
          }
          audio.current = r;
        }}
        src={props.src}
        // autoPlay
        onPlay={() => {
          setIsPlaying(true);
        }}
        onPause={() => {
          setIsPlaying(false);
        }}
        onCanPlay={(e) => {
          const { duration } = e.target as HTMLAudioElement
          setAudioDuration(Math.floor(duration));
        }}
        onTimeUpdate={e => {
          const { currentTime } = e.target as HTMLAudioElement;
          setAudioCurrentTime(Math.floor(currentTime));
        }}
        onEnded={() => {
          console.log('播放完毕');
          // props.pauseAudio(props.audioIndex);
        }}
      />
      {/* 头部 */}
      <span
        className={style.showAudioControl}
        onClick={() => {
          setLock(!lock);
        }}
      >
        {lock ? <LockOutlined /> : <UnlockOutlined />}
      </span>
      {/* 内容 */}
      <div className={style.control}>
        <div className={style.leftContent}>
          <FastBackwardOutlined onClick={() => {
            const { current } = audio as { current: HTMLAudioElement | null };
            if (current) {
              const { currentTime } = current;
              current.currentTime = currentTime - 5;
            }
          }} />
          <div className={style.play_pause}>
            {
              isPlaying ? <PauseCircleOutlined onClick={() => {
                const { current } = audio as { current: HTMLAudioElement | null };
                if (current) {
                  if (!current.paused) {
                    current.pause();
                  }
                }
              }} /> : <PlayCircleOutlined onClick={() => {
                const { current } = audio as { current: HTMLAudioElement | null };
                if (current) {
                  if (current.paused) {
                    current.play();
                  }
                }
              }} />
            }
          </div>
          <FastForwardOutlined onClick={() => {
            const { current } = audio as { current: HTMLAudioElement | null };
            if (current) {
              const { currentTime } = current;
              current.currentTime = currentTime + 5;
            }
          }} />
        </div>
        <div className={style.rightContent}>
          <div className={style.slide}
            style={{ '--val': `${(audioCurrentTime / audioDuration) * 100}%` } as CSSProperties}
            onClick={(e) => {
              const target = e.target as HTMLElement;
              const { offsetX } = e.nativeEvent;
              const width = target.getBoundingClientRect().width;
              const time = (offsetX / width) * audioDuration;
              const audioEle = audio.current as HTMLAudioElement;
              if (audio.current) {
                audioEle.currentTime = time;
              }
            }}
            onMouseMove={(e) => {
              const target = e.target as HTMLElement;
              const { offsetX } = e.nativeEvent;
              const width = target.getBoundingClientRect().width;
              const time = (offsetX / width) * audioDuration;
              setTipsTime(time);
              setTipsOffset(offsetX);
            }}>
            <div className={style.Tips} style={{ left: `${tipsOffset}px` }}>{formatTimer(tipsTime)}</div>
            <div className={style.sliderBar} />
          </div>
          <div className={style.timer_box}>
            <span className={style.timer}>
              {formatTimer(audioCurrentTime)}:{formatTimer(audioDuration)}
            </span>
          </div>
          {/* 倍速选择 */}
          <div className={[style.double_speed, isHover ? style.hover : ''].join(' ')} onMouseEnter={() => {
            setIsHover(true);
          }} onMouseLeave={() => { setIsHover(false); }}>
            {currentSpeed}x
            <div className={style.speed_list}>
              {
                speedList.map((v, i) => <div key={i} className={[style.speed_item, currentSpeed === v ? style.active : ''].join(' ')} onClick={() => {
                  setCurrentSpeed(v);
                  setIsHover(false);
                }}>{v}x</div>)
              }
            </div>
          </div>
        </div>
      </div>
    </div >
  );
});

export default AudioControl;
