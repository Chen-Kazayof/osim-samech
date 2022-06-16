import React, { useState, useEffect } from "react";
import "../styles/Donations.css"


const IMAGE_ARRAY = ["/image1.jpg"];
export const Donations = (props) => {

  const [index, setNumber] = useState(0);

  useEffect(() => {
    setInterval(() => setNumber(num => num + 1), 1000)
  }, [])

  return (
    <div >
      <ul>
        <li className="sec_title">שמחה</li>
      </ul>
      <ul>
        <li>התרומה שלך תוסיף להם</li>
      </ul>


      <p className="subtitle_don">אפשרויות לתרומה</p>

      <div className="optionDon">
        <p className="bitDon">העברה באמצעות ביט/טלפון</p>
        <p className="bankDon">העברה בנקאית</p>
        <p className="cardDon">תרומה באשראי</p>
        <p className="kevaDon">הוראת קבע</p>
      </div>

      <div></div>


      <div className="imageDonation">
        <img className="imgDonation1" src="imgDonation.png" alt="not"/>
        <img className="imgDonation2" src="imgBank.png" alt="not"/>
        <img className="imgDonation3" src="imgDonation.png" alt="not"/>
        <img className="imgDonation4" src="imgDonation.png" alt="not"/>
      </div>

      <div>
        <p className="textIn1">053-2375258</p>
        <p className="textIn3"><a className="textLinkDon" href="https://office.kesherhk.info/Clearing.aspx?id=8048" target="_blank">לחץ כאן</a></p>
        <p className="textIn4"><a className="textLinkDon" href="https://office.kesherhk.info/Clearing.aspx?id=11458" target="_blank">לחץ כאן</a></p>
      </div>

    </div>

  )

}
