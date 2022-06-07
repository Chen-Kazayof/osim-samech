
// import "../styles/AboutUs.css"
// import emailjs from '@emailjs/browser'



// export const AboutUs = () => {

//     const handleClick = () => {
//         emailjs.send('service_7pcoanl', 'template_b72frgk', {name: "moshe"})
//             .then(function (response) {
//                 console.log('SUCCESS!', response.status, response.text);
//             }, function (error) {
//                 console.log('FAILED...', error);
//             });
//     }


//     return (
//         <div>
//             <title>הפעילויות שלנו</title>

//             <div class="shabos">

//                 <div> <label for="fname">שם המזמין: </label>
//                     <input type="text" id="fname" name="fname" /></div>
//                 <div>   <label for="lname">מספר טלפון: </label>
//                     <input type="text" id="lname" name="lname" /></div>
//                 <div>  <label for="lname">דוא"ל: </label>
//                     <input type="text" id="lname" name="lname" /></div>
//                 <div>   <select name="op" id="option">
//                     <option value="op1">1</option>
//                     <option value="op1">2</option>
//                     <option value="op1">3</option>
//                     <option value="op1">4</option>
//                     <option value="op1">5</option>
//                 </select>
//                 </div>

//                 <div>
//                     <button class="sub" type="button" onClick={handleClick}>לשליחה</button>
//                 </div>


//             </div>
//         </div>
//     )
// }