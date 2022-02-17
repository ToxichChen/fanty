import { useState, useEffect } from "react";
import useActionAlert from "../../hooks/redux/useActionAlert";

const TaskGameBar = ({ isTime = false, isTimeDuration = 0, nextTask }) => {
    const { NotifySuccess } = useActionAlert();
    const [isCompleted, setCompleted] = useState(100);
    const [isBgColor, setBgColor] = useState("");

    const containerStyles = {
        height: 20,
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        opacity: isCompleted ? "1" : "0",
        transition: "all 0.2s ease",
        display: isTime ? "block" : "none",
    };

    const fillerStyles = {
        height: "100%",
        width: `${isCompleted}%`,
        backgroundColor: isBgColor,
        borderRadius: "inherit",
        textAlign: "right",
        transition: "width 0.5s ease-in-out",
    };

    useEffect(() => {
        const percentColors = [
            { color: { r: 0xff, g: 0x00, b: 0 } },
            { color: { r: 0xff, g: 0xff, b: 0 } },
            { color: { r: 0x00, g: 0xff, b: 0 } },
        ];

        const intervalOutBar = setInterval(() => {
            setCompleted((time) => {
                const newValue = time - 1;

                newValue >= 60
                    ? setBgColor(
                          `rgb(${percentColors[2].color.r}, ${percentColors[2].color.g}, ${percentColors[2].color.b})`
                      )
                    : newValue >= 25
                    ? setBgColor(
                          `rgb(${percentColors[1].color.r}, ${percentColors[1].color.g}, ${percentColors[1].color.b})`
                      )
                    : setBgColor(
                          `rgb(${percentColors[0].color.r}, ${percentColors[0].color.g}, ${percentColors[0].color.b})`
                      );

                if (newValue === 0 && isTime) {
                    clearInterval(intervalOutBar);
                    NotifySuccess("Задание на время закончилось");
                    nextTask();
                }

                return newValue;
            });
        }, (isTimeDuration % 100) * 10);
    }, [isTimeDuration]);

    return (
        <div style={containerStyles}>
            <div style={fillerStyles} />
        </div>
    );
};

export default TaskGameBar;
