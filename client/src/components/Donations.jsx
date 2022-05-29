import React, { useState, useEffect } from "react";
import "../styles/Donations.css"


const IMAGE_ARRAY = ["/image1.jpg"];
export const Donations = (props) => {

  const [index, setNumber] = useState(0);

  useEffect(() => {
    setInterval(() => setNumber(num => num + 1), 1000)
  }, [])

  return (
    <div>
      {/* <h1 className="title">תרומות</h1> */}
      <ul>
        <li className="sec_title">שמחה</li>
      </ul>
      <ul>
        <li>התרומה שלך תוסיף להם</li>
      </ul>

      <p>?איך תרצו לתרום</p>

      {/* <div className="link">
        <a href="https://office.kesherhk.info/Clearing.aspx?id=11458" target="_blank">הוראת קבע</a>
      </div>
      <div className="link">
        <a href="https://office.kesherhk.info/Clearing.aspx?id=8048" target="_blank">תרומה באשראי</a>
      </div> */}


      {/* <div className="front">
        <ul>
          <ul>
            <li className="subtitle">העברה בנקאית</li>
          </ul>
          <li className="bitphone">בנק מרכנתיל</li>
          <li className="bitphone">סניף 732</li>
          <li className="bitphone">מספר חשבון 82132</li>
          <li className="bitphone">ע״ש עמותת עושים שמח</li>
          <ul>
            <li className="bitphone">053-237-5258</li>
          </ul>
          <ul>
            <li className="subtitle">-העברה באמצעות ביט/טלפון</li>
          </ul>
        </ul>
      </div> */}





      {/* <table>
        <tr className="kea">
          <th>העברה בנקאית</th>
        </tr>
        <tr className="kea">
          <td>בנק מרכנתיל</td>
          <td>סניף 732</td>
          <td>מספר חשבון 82132</td>
          <td>ע״ש עמותת עושים שמח</td>
        </tr>
      </table> */}


      

      {/* <div className="bitphone">
      <p className="subtitle">:העברה באמצעות ביט/טלפון</p>
      </div>
      <div>
      <p>0532375258</p>
      </div>
       
       <p className="subtitle">:העברה בנקאית</p>
      <p>בנק מרכנתיל</p>
       <p>סניף 732</p>
      <p>מספר חשבון 82132</p>
      <p>ע״ש עמותת עושים שמח</p> */}

      {/* {number} */}
      {/* <img src={IMAGE_ARRAY[index]} /> */}



    </div>




  )


}


