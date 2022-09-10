import Accordion from "./components/Accordion/Accordion";
import useAccordion from "./hooks/useAccordion";

function App() {

    const steps = [
        {
            name: "acc1",
            title: "Accordion 1",
            render: () => <p>Accordion 1 content</p>,
        },
        {
            name: "acc2",
            title: "Accordion 2",
            render: () => <p>Accordion 2 content</p>,
        }
    ]

    const accordion: any = useAccordion(steps, 'acc2');

    return (
        <div className="App">
            <Accordion {...accordion}/>
        </div>
    )
}

export default App
