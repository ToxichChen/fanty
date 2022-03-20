import { useEffect, useState } from "react";
import useActionMusic from "../../hooks/redux/useActionMusic";
import { BtnTop } from "./BtnToTop.styled";

const BtnToTop = () => {
    const [isShowBtn, setShowBtn] = useState(false);
    const { showMiniPlayer } = useActionMusic();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    const handleScroll = () => {
        const screenHeight = window.screen.height - 300;

        screenHeight < window.scrollY ? setShowBtn(true) : setShowBtn(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <BtnTop
            onClick={scrollToTop}
            type="button"
            isShow={isShowBtn}
            isPlayer={showMiniPlayer.showPlayer}
        >
            <i className="fa fa-arrow-up" />
        </BtnTop>
    );
};

export default BtnToTop;
