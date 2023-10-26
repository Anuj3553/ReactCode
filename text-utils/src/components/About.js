import React from 'react'

export default function About(props) {

  let myStyle = {
    color:props.mode === 'dark'?'white':'#4c5a6e',
    backgroundColor:props.mode === 'dark'?'#4c5a6e':'white'
  }

  // const [myStyle, setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white'
  // });

  // const [btnText, setBtnText] = useState("Enable Dark Mode")

  // const toggleStyle = () => {
  //   if (myStyle.color === 'black') {
  //     setMyStyle({
  //       color: 'white',
  //       backgroundColor: 'black',
  //       outline: '1px solid white'
  //     })
  //     setBtnText("Enable Light Mode")
  //   }
  //   else {
  //     setMyStyle({
  //       color: 'black',
  //       backgroundColor: 'white',
  //     })
  //     setBtnText("Enable Dark Mode");
  //   }
  // }
  return (
    <div className='container' style={{color:props.mode === 'dark'?'white':'#374151'}}>
      <h1 className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Analyze Your Text
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextUtils gives you a way to analyze your text quickly. Be it word count, character count.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Free to use
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextUtils is a free character counter tool that provides instant character count & word count statistics for a giver
              text. TextUtils reports of the number of words and characters. Thus it is suitable for writing text with word / character limit. 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Browser Compatible
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any web browsers such as Chrome, Firefor, Internet Explorer, Safari, Opera, Microsoft Edge. It suits to count characters in facebook, blog, excel 
              document, essays, etc.
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={toggleStyle} type="button" className="btn btn-primary my-3">{btnText}</button> */}
    </div>
  )
}
