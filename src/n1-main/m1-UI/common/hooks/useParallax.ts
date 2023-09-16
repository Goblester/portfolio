import {MotionValue, useTransform} from "framer-motion";

type ParallaxOptionsType = {
    distance: number;
    maxScroll: number;
}

export function useParallax(value: MotionValue<number>, {distance, maxScroll }: ParallaxOptionsType) {
    return useTransform(value, [0, maxScroll], [-distance, distance]);
}