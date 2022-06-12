import "../styles/Shabbat_meat.css"


export const Shabbat_meat = () => {


    return (
        <div>
         <div className="m_img_before">
         <a className="aa">סעודות שבת</a></div> 


       <div>
       <h3 className="m_h3">: הזמנת סעודות שבת</h3>
         </div> 
        <div class="shabos">
            
            <label for="lname">שם המזמין: </label>
            <input type="text" class="n" name="lname"/><br />

            <label for="lname">מספר טלפון: </label>
            <input type="text" class="r" name="lname"/><br />

            <label for="lname">דוא"ל: </label>
            <input type="text" class="s" name="lname"/><br />

            {/* <!-- <select name="op" id="option">
                <option value="op1">1</option>
                <option value="op1">2</option>
                <option value="op1">3</option>
    
                 */}
    
            {/* </select> --> */}
            <label for="lname">מספר משתתפים: </label>
            <input type="text" class="lname" name="lname"/>
           
        </div>
       
<div>
<h3 className="m_h3">: סעודות לבחירה</h3> 
        {/* <form action="/action_page.php"/> */}
          <input type="radio" id="html" name="laila" value="סעודת ליל שבת"/>
           <label for="html">סעודת ליל שבת</label><br />
           <input type="radio" id="html" name="boker" value="סעודת בוקר שבת"/>
           <label for="html">סעודת בוקר שבת </label><br />
            
            {/* </ form > */}
</div>
       

            <div>
                <button  id= "sub" type="button" onclick="alert('התקבל')">שלח</button>
            </div>
        
   

        </div>

    )
}


      
