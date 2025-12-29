


import { FlipWords } from "./ui/shadcn-io/flip-words";




export default function FlipAnimation({ }) {
    const words = ["Life", "Experiences", "Knowledge", "Troubles"];

    return (
        <FlipWords
            className="text-blue-500"
            words={words}
            duration={3000}
            letterDelay={0.05}
            wordDelay={0.3}
        />
    )
}

