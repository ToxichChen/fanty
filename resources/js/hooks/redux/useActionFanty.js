import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import {
    getActiveFanty,
    getFantyLike,
    likeFanty,
    disLikeFanty,
    getPunishment,
    getFinalPunishment,
    getFinishFant,
} from "./../../redux/activeFantyFeatures/activeFantyFeaturesOperation";
import {
    fantyCounterCanceledTask,
    fantyLevel,
    fantyNumberTask,
    fantyPunishment,
} from "../../redux/activeFantyFeatures/activeFantyFeaturesActions";

function useActionFanty() {
    const dispatch = useDispatch();
    const isPunishment = useSelector((state) => state.activeFanty.isPunishment);
    const isLoadingFanty = useSelector(
        (state) => state.activeFanty.isLoadingFanty
    );
    const getFanty = useSelector((state) => state.activeFanty.fanty);
    const getCountTask = useSelector((state) => state.settings.durationGame);
    const getCountCanceledTask = useSelector(
        (state) => state.activeFanty.countCanceledTask.payload
    );
    const getNumberFanty = useSelector(
        (state) => state.activeFanty.numberFanty.payload
    );
    const getLevelFanty = useSelector((state) => state.activeFanty.levelFanty);
    const getLikeFanty = useSelector((state) => state.activeFanty.like);
    const getFantyPunishment = useSelector(
        (state) => state.activeFanty.fantyPunishmentUser
    );

    const getFant = useCallback(
        (obj) => {
            dispatch(getActiveFanty({ media: "", ...obj }));
        },
        [dispatch]
    );

    const canceledTask = useCallback(() => {
        dispatch(fantyCounterCanceledTask(getCountCanceledTask + 1));
    }, [dispatch, getCountCanceledTask]);

    const sendNumberFanty = useCallback(
        (data) => {
            dispatch(fantyNumberTask(data));
        },
        [dispatch]
    );

    const sendLevelFanty = useCallback(
        (data) => {
            dispatch(fantyLevel(data));
        },
        [dispatch]
    );

    const getFantLike = useCallback(() => {
        dispatch(getFantyLike());
    }, [dispatch]);

    const likeFantNow = useCallback(
        (data) => {
            dispatch(likeFanty(data));
        },
        [dispatch]
    );

    const disLikeFantNow = useCallback(
        (data) => {
            dispatch(disLikeFanty(data));
        },
        [dispatch]
    );

    const punishmentFant = useCallback(
        (data) => dispatch(getPunishment(data)),
        [dispatch]
    );

    const punishmentFinalFant = useCallback(
        () => dispatch(getFinalPunishment()),
        [dispatch]
    );

    const clearPunishmentFant = useCallback(
        () => dispatch(fantyPunishment({ media: "" })),
        [dispatch]
    );

    const lastFantGame = useCallback(
        () => dispatch(getFinishFant()),
        [dispatch]
    );

    return {
        getFant,
        canceledTask,
        sendNumberFanty,
        sendLevelFanty,
        getFantLike,
        disLikeFantNow,
        likeFantNow,
        punishmentFant,
        punishmentFinalFant,
        clearPunishmentFant,
        lastFantGame,
        isLoadingFanty,
        isPunishment,
        getFanty,
        getCountTask,
        getCountCanceledTask,
        getNumberFanty,
        getLevelFanty,
        getLikeFanty,
        getFantyPunishment,
    };
}

export default useActionFanty;
