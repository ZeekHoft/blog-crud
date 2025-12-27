"use client";



function Test() {
    const hi = () => {
        console.log("hi")
    }
    return (
        <div>

            <button onClick={hi}>
                hi
            </button>
        </div>
    )
}

export default Test
