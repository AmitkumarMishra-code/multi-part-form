export default function Form({ currentFocus, setCurrentFocus, setStep1, setStep2, setStep3 }) {

const submitHandler = () =>{
    setCurrentFocus(null)
    setStep1(false)
    setStep2(false)
    setStep3(false)
}

const titleSubmitHandler = ()=>{
    setCurrentFocus(2)
    setStep2(true)
}

const descriptionSubmitHandler = () => {
    setCurrentFocus(3)
    setStep3(true)
}

    return (
        <div className="form">
            {currentFocus === 1 &&
                <div className='form-field'>
                    <p>Choose Title Content</p>
                    <div className="buttons">
                        <button onClick = {titleSubmitHandler}>Submit Title</button>
                    </div>
                </div>
            }
            {currentFocus === 2 &&
                <div className='form-field'>
                    <p>Choose Description Content</p>
                    <div className="buttons">
                        <button onClick = {()=> setCurrentFocus(1)}>Back</button>
                        <button onClick = {descriptionSubmitHandler}>Submit Description</button>
                    </div>
                </div>
            }
            {currentFocus === 3 &&
                <div className='form-field'>
                    <p>Have you checked everything? Do you want to submit now?</p>
                    <div className="buttons">
                        <button onClick = {()=> setCurrentFocus(2)}>No, go back</button>
                        <button onClick = {submitHandler}>Yes, go ahead</button>
                    </div>
                </div>
            }
            {!currentFocus && <div className='form-field'>
                <p>Thank you for your data!</p>
            </div>}
        </div>
    )
}