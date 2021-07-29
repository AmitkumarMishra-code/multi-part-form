
export default function Steps({ setCurrentFocus, step1, step2, step3, currentFocus }) {

    return (
        <div className="steps">
            <div className={currentFocus >= 1 && step1 ? "similar step1" : 'similar disabled'} onClick={() => setCurrentFocus(1)}>
                <div className="circle">1</div> <p>Choose a Title</p>
            </div>
            <div className={currentFocus >= 2 && step2 ? "similar step2" : 'similar disabled'} onClick={() => setCurrentFocus(2)} style ={{pointerEvents: step2 ? 'all' :'none'}}>
                <div className="circle">2</div> <p>Choose description</p>
            </div>
            <div className={currentFocus >= 3 && step3 ? "similar step3" : 'similar disabled'} onClick={() => setCurrentFocus(3)} style ={{pointerEvents: step3 ? 'all' :'none'}}>
                <div className="circle">3</div> <p>Confirm data</p>
            </div>
        </div>
    )
}