import { useState } from "react";
import Steps from "./Steps";
import Form from "./Form"

export default function App() {
    const [currentFocus, setCurrentFocus] = useState(1)
    const [step1, setStep1] = useState(true)
    const [step2, setStep2] = useState(false)
    const [step3, setStep3] = useState(false)
    return (
        <div className="container">
            <Steps setCurrentFocus={setCurrentFocus} step1={step1} step2={step2} step3={step3} currentFocus={currentFocus}/>
            <Form currentFocus={currentFocus} setCurrentFocus={setCurrentFocus} setStep1={setStep1} setStep2={setStep2} setStep3={setStep3} />
        </div>
    )
}