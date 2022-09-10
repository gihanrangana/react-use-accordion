import React, {useMemo} from "react";

import styles from "./Accordion.module.scss";

const AccordionBody: React.FC<AccordionBodyProps> = (props) => {

    const {activeIndex, step, index} = props;

    const getClassName = () => {
        const classes: any = [styles.accordionBody]

        if (activeIndex === index) classes.push(styles.active)

        return classes.join(" ")
    }

    return (
        <div className={getClassName()}>
            {step.render && step.render()}
        </div>
    )
}

interface AccordionBodyProps {
    [key: string]: any
}

export default AccordionBody