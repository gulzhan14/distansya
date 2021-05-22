import { Button } from '@material-ui/core'
import React from 'react'
import "./About.css"
export default function About() {
    return (
        <div>
       <section className="section">
    <div className="section_div">
        <p  className="div_p">1 <span className="div_span">EUR =</span></p>
        <p className="div_p2">90.5838 <span className="div_span2"> RUB </span></p>
    </div>
     <div className="section_div2">
        <p  className="div_p3">1 <span className="div_span3">EUR =</span></p>
        <p className="div_p4">9.3777 <span className="div_span4">HKD</span></p>
    </div>
    </section>
    <section className="section2">
     <div className="section_div3">
        <p  className="div_p5">1 <span className="div_span5">EUR =</span></p>
        <p className="div_p6">90.152 <span className="div_span6"> IRN </span></p>
    </div>
     <div className="section_div4">
        <p  className="div_p7">1 <span className="div_span7">EUR =</span></p>
        <p className="div_p8">1.6027 <span className="div_span8"> SGD </span></p>
    </div>
</section>

{/* <div className="button">
<Button variant="contained" >  Назад</Button>
<Button variant="contained" color="primary" >
  Далее
</Button>
</div> */}
</div>
    )
}
