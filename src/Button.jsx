import butStyle from './Button.module.css'



export const Button = ({color = "white", bg = "orange", text, click, type = "button"}) => {
    return (
        // Remove the outer <div> wrapper so it doesn't break form styling alignments
        <button 
            type={type} 
            onClick={click} 
            style={{
                backgroundColor: bg, 
                color: color,
                padding: '8px 12px',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '4px'
            }}
        >
            {text}
        </button>
    )
}


// export const Button = ({color = "orange", bg, text, click}) => {
//     return (
//         <div>
//             <button onClick={click} style={{backgroundColor:`${bg}`, color:`${color}`}}>{text}</button>
            
//         </div>
//     )
// }
