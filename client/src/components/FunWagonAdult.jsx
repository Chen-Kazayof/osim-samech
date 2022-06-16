import "../styles/FunWagonAdult.css"

export const FunWagonAdult = () => {

    return (
        <div>
    
            {/* עמוד נפרד תחת הכותרת עגלת פינוקים למבוגרים */}
            <div className="subtitle_fun_adult">עגלת פינוקים למבוגרים</div>
            <br/>
            <div className="text_fun_adult">עגלת הנתינה למאושפזים היא תחנה מרעננת, מגוונת ושוברת שגרה למטופלים כשהם רוצים לקבל כוח</div>
            <div className="text_fun_adult">.וגם לפעמים קצת לשכוח מטיפולים, מהבדיקות ומעוד המון מחשבות</div>
            <div className="text_fun_adult">,העגלה מאובזרת בכל טוב: מכונת טחינת פולי קפה מקצועית עם מקציף חלב ו-12 סוגי קפה שונים לבחירה</div>
            <div className="text_fun_adult">.מיצי גזר טריים, תפוחים ותפוזים טבעיים סחוטים במקום, וופל בלגי כדי להמתיק כל רגע לצד ספרים וחוברות כתעסוקה לשעות ארוכות</div>
            <div className="text_fun_adult">והכי חשוב- מתנדבים שבאים עם המון יחס ולב ושיחות חמות מעניינות ובונות שמתגלגלות בין קפה למאפה בין מתנדבים לחולים</div>
            <div className="text_fun_adult">...כי גם הנשמה צריכה את שלה</div>

            <table className="img_table_adult">
                <tr className="img_row">
                    <td><img className="imgadult1" src="adult/1.png" alt="not" /></td>
                    <td><img className="imgadult" src="adult/2.png" alt="not" /></td>
                    <td><img className="imgadult" src="adult/3.png" alt="not" /></td>
                    <td><img className="imgadult" src="adult/4.png" alt="not" /></td>
                    {/* <td><img className="imgadult" src="adult/5.png" alt="not" /></td> */}
                </tr>
                <tr className="img_row">
                    <td><img className="imgadult1" src="adult/6.png" alt="not" /></td>
                    <td><img className="imgadult" src="adult/7.png" alt="not" /></td>
                    <td><img className="imgadult" src="adult/8.png" alt="not" /></td>
                    <td><img className="imgadult" src="adult/9.png" alt="not" /></td>
                    {/* <td><img className="imgadult" src="adult/10.png" alt="not" /></td> */}
                </tr>
                <tr className="img_row">
                    <td><img className="imgadult1" src="adult/11.png" alt="not" /></td>
                    <td><img className="imgadult" src="adult/12.png" alt="not" /></td>
                    <td><img className="imgadult" src="adult/13.png" alt="not" /></td>
                    <td><img className="imgadult" src="adult/14.png" alt="not" /></td>
                    {/* <td><img className="imgadult" src="adult/15.png" alt="not" /></td> */}
                </tr>
                <tr className="img_row">
                    <td><img className="imgadult1" src="adult/16.png" alt="not" /></td>
                    <td><img className="imgadult" src="adult/17.png" alt="not" /></td>
                    <td><img className="imgadult" src="adult/18.png" alt="not" /></td>
                    <td><img className="imgadult" src="adult/19.png" alt="not" /></td>
                    {/* <td><img className="imgadult" src="adult/20.png" alt="not" /></td> */}
                </tr>
            </table>
        </div>
    );
}

