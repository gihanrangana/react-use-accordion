import React, {useEffect, useMemo} from "react";

import styles from "./Accordion.module.scss";
import {IoChevronDownSharp, IoChevronForwardSharp} from "react-icons/all";

const AccordionHeader: React.FC<AccordionHeaderProps> = (props) => {

    const {activeIndex, step, handleHeaderClick, index, isActive} = props;

    const getClassName = () => {
        const classes: any = [styles.accordionHeader]

        if (activeIndex === index) classes.push(styles.active)

        return classes.join(" ")
    }

    return useMemo(() => (
        <div className={getClassName()} onClick={handleHeaderClick.bind(null, index)}>
            <span>{step.title}</span>

            {!isActive(index) && <IoChevronForwardSharp/>}

            {isActive(index) && <IoChevronDownSharp/>}

        </div>
    ), [activeIndex])
}

interface AccordionHeaderProps {
    [key: string]: any
}

export default AccordionHeader