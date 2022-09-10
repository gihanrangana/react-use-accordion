import React from "react";
import AccordionBody from "./AccordionBody";

import styles from './Accordion.module.scss';
import AccordionHeader from "./AccordionHeader";

const Accordion: React.FC<AccordionProps> = (props) => {

    const {steps, currentStep} = props;

    const renderContent = (step: any, index: number) => {
        return (
            <React.Fragment key={`accordion-${index}-${step.name}`}>
                <div className={styles.accordionItem}>
                    <AccordionHeader {...props} step={step} index={index}/>

                    <AccordionBody {...props} step={step} index={index}/>
                </div>
            </React.Fragment>
        )
    }

    return (
        <div className={styles?.accordion}>
            {steps && steps.map((step: any, index: number) => renderContent(step, index))}
        </div>
    )
}

interface AccordionProps {
    [key
        :
        string
        ]:
        any
}

export default Accordion