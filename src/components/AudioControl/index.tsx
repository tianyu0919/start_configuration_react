import React, { useEffect, useState, useCallback, useRef, CSSProperties } from 'react';
import style from './index.scss';
import { IconLock, IconUnlock, IconPause, IconPlay, IconBackward, IconFastForward } from '@douyinfe/semi-icons';

interface Props {
  src: string;
  isShow?: Function;
  ended?: Function;
  error?: Function;
  show?: Boolean;
}

// * 音频播放错误提示
const audioErrorMsg: { [key: number]: string } = {
  1: '用户终止获取过程',
  2: '下载时发生错误',
  3: '解码时发生错误',
  4: '请检查音频路径是否正确'
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
  const [haveError, setHaveError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isDrop, setIsDrop] = useState(false);
  const [isSliderHover, setIsSliderHover] = useState(false);

  let outBox: { current: HTMLDivElement | null } = useRef(null);
  let audio: { current: HTMLAudioElement | null } = useRef(null);
  let slider: { current: HTMLDivElement | null } = useRef(null);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSpeed]);

  useEffect(() => {
    setIsPlaying(false);
    const { current } = audio;
    if (current) {
      current.playbackRate = currentSpeed;
      setAudioDuration(0);
      setAudioCurrentTime(0);
    }
    if (!props.src) {
      setErrorMsg('请先设置播放路径');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.src])

  // * 显示播放器
  useEffect(() => {
    if (props.show) {
      const { isShow } = props;
      if (isShow) {
        isShow(true);
      }
      setShow(true);
      setLock(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.show])

  useEffect(() => {
    const { current } = outBox;
    if (current) {
      current.onmouseup = () => {
        // document.onmousemove = null;
        // setIsDrop(false);
        if (audio.current) {
          const audioEle = audio.current as HTMLAudioElement;
          audioEle.play();
        }
      };
    }

    document.onmouseup = () => {
      document.onmousemove = null;
      setIsDrop(false);
    }

    document.onmousemove = (e) => {
      const sliderDom = slider.current;
      if (sliderDom && (isDrop || isSliderHover)) {
        // console.log('123', isDrop, isSliderHover);
        const { clientX } = e;
        const { width, left } = sliderDom.getBoundingClientRect();
        let offsetX = clientX - left;
        if (offsetX < 0) {
          offsetX = 0;
        } else if (offsetX > width) {
          offsetX = width;
        }
        const time = (offsetX / width) * audioDuration;
        setTipsTime(time);
        setTipsOffset(offsetX);
        if (isDrop) {
          if (audio.current) {
            const audioEle = audio.current as HTMLAudioElement;
            audioEle.pause();
            audioEle.currentTime = time;
          }
        }
      }
    }
  }, [slider, isDrop, audioDuration, isSliderHover]);

  return (
    <div
      className={[style.AudioControl, show ? style.show : ''].join(' ')}
      ref={outBox}
      onMouseEnter={() => {
        setShow(true);
        const { isShow } = props;
        if (isShow) {
          isShow(true);
        }
      }}
      onMouseLeave={() => {
        if (!lock) {
          setTimeout(() => {
            setShow(false);
            const { isShow } = props;
            if (isShow) {
              isShow(false);
            }
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
        onError={({ nativeEvent: { target } }) => {
          console.log(target);
          const { code } = (target as HTMLAudioElement).error as MediaError;
          setErrorMsg(audioErrorMsg[code] || '未知错误！');
          setHaveError(true);
        }}
        autoPlay
        onPlay={() => {
          setIsPlaying(true);
        }}
        onPause={() => {
          setIsPlaying(false);
        }}
        onCanPlay={(e) => {
          const { duration } = e.target as HTMLAudioElement
          setAudioDuration(Math.floor(duration));
          setErrorMsg('');
          setHaveError(false);
        }}
        onTimeUpdate={e => {
          const { currentTime } = e.target as HTMLAudioElement;
          setAudioCurrentTime(Math.floor(currentTime));
        }}
        onEnded={() => {
          const { ended } = props;
          if (ended) {
            ended();
          }
        }}
      />
      {/* 头部 */}
      <span
        className={style.showAudioControl}
        onClick={() => {
          setLock(!lock);
        }}
      >
        {lock ? <IconLock size="large" /> : <IconUnlock size="large" />}
      </span>
      {/* 内容 */}
      <div className={[style.control, errorMsg ? style.error : ''].join(' ')} data-errmsg={errorMsg}>
        {/* <div className={[style.control, !props.src ?.error : ''].join(' ')} data-errmsg={props.src ? errorMsg : '请先设置播放路径'}> */}
        <div className={style.leftContent}>
          <IconBackward onClick={() => {
            const { current } = audio as { current: HTMLAudioElement | null };
            if (current) {
              const { currentTime } = current;
              current.currentTime = currentTime - 5;
            }
          }} />
          <div className={style.play_pause}>
            {
              isPlaying ? <IconPause size="large" onClick={() => {
                const { current } = audio as { current: HTMLAudioElement | null };
                if (current) {
                  if (!current.paused) {
                    current.pause();
                  }
                }
              }} /> : <IconPlay size="large" onClick={() => {
                const { current } = audio as { current: HTMLAudioElement | null };
                if (current) {
                  if (current.paused) {
                    if (haveError) {
                      const { error } = props;
                      const { error: errorEvent } = current as { error: MediaError };
                      if (error) {
                        const { code } = errorEvent;
                        error(errorEvent, audioErrorMsg[code]);
                      }
                      return;
                    }
                    current.play();
                  }
                }
              }} />
            }
          </div>
          <IconFastForward onClick={() => {
            const { current } = audio as { current: HTMLAudioElement | null };
            if (current) {
              const { currentTime } = current;
              current.currentTime = currentTime + 5;
            }
          }} />
        </div>
        <div className={style.rightContent}>
          <div className={[style.slide, (isSliderHover || isDrop) ? style.hover : ''].join(' ')}
            ref={slider}
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
            onMouseDown={() => {
              setIsDrop(true);
            }}
            onMouseEnter={() => {
              setIsSliderHover(true);
            }}
            onMouseLeave={() => {
              setIsSliderHover(false);
            }}
          // onMouseMove={(e) => {
          //   const target = e.target as HTMLElement;
          //   const { clientX } = e.nativeEvent;
          //   const { width, left } = target.getBoundingClientRect();
          //   const offsetX = clientX - left;
          //   const time = (offsetX / width) * audioDuration;
          //   setTipsTime(time);
          //   setTipsOffset(offsetX);

          //   if (isDrop) {
          //     if (audio.current) {
          //       const audioEle = audio.current as HTMLAudioElement;
          //       audioEle.currentTime = time;
          //     }
          //   }
          // }}
          >
            {(isDrop || isSliderHover) ? <div className={style.Tips} style={{ left: `${tipsOffset}px` }}>{formatTimer(tipsTime)}</div> : <></>}
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
