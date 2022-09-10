import {useCallback, useEffect, useMemo, useState} from "react";

const useAccordion = (steps: any[], defaultStep: string) => {

    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [currentStep, setCurrentStep] = useState(steps[0]);
    const [completed, setCompleted] = useState([])

    useEffect(() => {

        if (!defaultStep) return;

        steps.map((step, index) => {
            if (step.name === defaultStep) {
                setActiveIndex(index);
                setCurrentStep(step);
            }
        })

    }, [])

    const setNext = () => setActiveIndex((next: number) => next < steps.length ? next + 1 : steps.length)
    const setPrevious = () => setActiveIndex((prev: number) => prev > 0 ? prev - 1 : 0)

    const handleHeaderClick = (index: number) => {
        setActiveIndex(index)
        setCurrentStep(steps[index])
    }

    const isActive = useCallback((index: number) => {
        return index === activeIndex
    }, [activeIndex])

    return useMemo(() => ({
        steps: steps,
        activeIndex: activeIndex,
        currentStep: currentStep,
        setNext: setNext,
        setPrevious: setPrevious,
        handleHeaderClick: handleHeaderClick,
        isActive: isActive,
    }), [activeIndex, currentStep])

}

export default useAccordion