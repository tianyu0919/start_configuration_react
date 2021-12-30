import React, { useState, useCallback, useEffect } from "react";
import {
  LockOutlined,
  UnlockOutlined,
  FastBackwardOutlined,
  PauseCircleOutlined,
  PlayCircleOutlined,
  FastForwardOutlined,
} from "@ant-design/icons";

var style = {
  AudioControl: "index_AudioControl__QdGXo",
  show: "index_show__ySgs9",
  showAudioControl: "index_showAudioControl__J7j5x",
  control: "index_control__0uU-N",
  leftContent: "index_leftContent__r-lMh",
  play_pause: "index_play_pause__RnCrN",
  rightContent: "index_rightContent__dyd-O",
  slide: "index_slide__mkGcK",
  sliderBar: "index_sliderBar__MXeZL",
  Tips: "index_Tips__E8Pft",
  timer_box: "index_timer_box__Wdbkj",
  double_speed: "index_double_speed__-vci6",
  hover: "index_hover__rYiHB",
  speed_list: "index_speed_list__DBQ5g",
  speed_item: "index_speed_item__7Od0V",
  active: "index_active__oPKj8",
};

const AudioControl = React.forwardRef((props, forwardRef) => {
  const [show, setShow] = useState(false);
  const [lock, setLock] = useState(false);
  const [audioDuration, setAudioDuration] = useState(0);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [tipsTime, setTipsTime] = useState("");
  const [tipsOffset, setTipsOffset] = useState(0);
  const [speedList] = useState([2.0, 1.5, 1.25, 1.0, 0.75, 0.5]);
  const [currentSpeed, setCurrentSpeed] = useState(1.0);
  const [isHover, setIsHover] = useState(false);
  let audio = React.createRef();
  const formatTimer = useCallback((timer) => {
    const minute = `${Math.floor(timer / 60)}`.padStart(2, "0");
    const seconds = `${Math.floor(timer % 60)}`.padStart(2, "0");
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
  }, [props.src]);
  return React.createElement(
    "div",
    {
      className: [style.AudioControl, show ? style.show : ""].join(" "),
      onMouseEnter: () => {
        setShow(true);
        // props.isShow(true);
      },
      onMouseLeave: () => {
        if (!lock) {
          setTimeout(() => {
            setShow(false);
            // props.isShow(false);
          }, 1500);
        }
      },
    },
    React.createElement("audio", {
      ref: (r) => {
        if (forwardRef) {
          forwardRef.current = r;
        }
        audio.current = r;
      },
      src: props.src,
      // autoPlay
      onPlay: () => {
        setIsPlaying(true);
      },
      onPause: () => {
        setIsPlaying(false);
      },
      onCanPlay: (e) => {
        const { duration } = e.target;
        setAudioDuration(Math.floor(duration));
      },
      onTimeUpdate: (e) => {
        const { currentTime } = e.target;
        setAudioCurrentTime(Math.floor(currentTime));
      },
      onEnded: () => {
        console.log("播放完毕");
        // props.pauseAudio(props.audioIndex);
      },
    }),
    React.createElement(
      "span",
      {
        className: style.showAudioControl,
        onClick: () => {
          setLock(!lock);
        },
      },
      lock
        ? React.createElement(LockOutlined, null)
        : React.createElement(UnlockOutlined, null)
    ),
    React.createElement(
      "div",
      { className: style.control },
      React.createElement(
        "div",
        { className: style.leftContent },
        React.createElement(FastBackwardOutlined, {
          onClick: () => {
            const { current } = audio;
            if (current) {
              const { currentTime } = current;
              current.currentTime = currentTime - 5;
            }
          },
        }),
        React.createElement(
          "div",
          { className: style.play_pause },
          isPlaying
            ? React.createElement(PauseCircleOutlined, {
                onClick: () => {
                  const { current } = audio;
                  if (current) {
                    if (!current.paused) {
                      current.pause();
                    }
                  }
                },
              })
            : React.createElement(PlayCircleOutlined, {
                onClick: () => {
                  const { current } = audio;
                  if (current) {
                    if (current.paused) {
                      current.play();
                    }
                  }
                },
              })
        ),
        React.createElement(FastForwardOutlined, {
          onClick: () => {
            const { current } = audio;
            if (current) {
              const { currentTime } = current;
              current.currentTime = currentTime + 5;
            }
          },
        })
      ),
      React.createElement(
        "div",
        { className: style.rightContent },
        React.createElement(
          "div",
          {
            className: style.slide,
            style: { "--val": `${(audioCurrentTime / audioDuration) * 100}%` },
            onClick: (e) => {
              const target = e.target;
              const { offsetX } = e.nativeEvent;
              const width = target.getBoundingClientRect().width;
              const time = (offsetX / width) * audioDuration;
              const audioEle = audio.current;
              if (audio.current) {
                audioEle.currentTime = time;
              }
            },
            onMouseMove: (e) => {
              const target = e.target;
              const { offsetX } = e.nativeEvent;
              const width = target.getBoundingClientRect().width;
              const time = (offsetX / width) * audioDuration;
              setTipsTime(time);
              setTipsOffset(offsetX);
            },
          },
          React.createElement(
            "div",
            { className: style.Tips, style: { left: `${tipsOffset}px` } },
            formatTimer(tipsTime)
          ),
          React.createElement("div", { className: style.sliderBar })
        ),
        React.createElement(
          "div",
          { className: style.timer_box },
          React.createElement(
            "span",
            { className: style.timer },
            formatTimer(audioCurrentTime),
            ":",
            formatTimer(audioDuration)
          )
        ),
        React.createElement(
          "div",
          {
            className: [style.double_speed, isHover ? style.hover : ""].join(
              " "
            ),
            onMouseEnter: () => {
              setIsHover(true);
            },
            onMouseLeave: () => {
              setIsHover(false);
            },
          },
          currentSpeed,
          "x",
          React.createElement(
            "div",
            { className: style.speed_list },
            speedList.map((v, i) =>
              React.createElement(
                "div",
                {
                  key: i,
                  className: [
                    style.speed_item,
                    currentSpeed === v ? style.active : "",
                  ].join(" "),
                  onClick: () => {
                    setCurrentSpeed(v);
                    setIsHover(false);
                  },
                },
                v,
                "x"
              )
            )
          )
        )
      )
    )
  );
});

export { AudioControl as default };
