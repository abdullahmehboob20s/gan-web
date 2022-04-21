import React from "react";
import styled from "styled-components";

const ProgressBar = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: ${({ zindex }) => zindex};
`;

const ProgressCircle = ({
  percentage,
  progressColor,
  size,
  speedValue,
  zindex,
}) => {
  const progressBar = React.useRef();
  const valueContainer = React.useRef();
  let [progressValue, setProgressValue] = React.useState(0);
  let [progressEndValue, setProgressEndValue] = React.useState(percentage);
  let [speed, setSpeed] = React.useState(speedValue);

  React.useEffect(() => {
    if (percentage) {
      let progress = setInterval(() => {
        if (progressValue === progressEndValue) {
          clearInterval(progress);
          return;
        }
        setProgressValue(progressValue++);
        if (!progressBar.current) return;
        progressBar.current.style.background = `conic-gradient(
              ${progressColor} ${progressValue * 3.6}deg,
              transparent ${progressValue * 3.6}deg
              )`;
      }, speed);
    }
  }, []);
  return <ProgressBar ref={progressBar} size={size} zindex={zindex} />;
};

export default ProgressCircle;
