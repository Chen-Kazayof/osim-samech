import "../styles/homePage.css"

export const HomePage = (props) => {
    // displayNextImage() {
    //     x = (x === images.length - 1) ? 0 : x + 1;
    //     document.getElementById("img").src = images[x];
    // }
    
    // function displayPreviousImage() {
    //     x = (x <= 0) ? images.length - 1 : x - 1;
    //     document.getElementById("img").src = images[x];
    // }
    
    // function startTimer() {
    //     setInterval(displayNextImage, 3000); 
        
    // }
    
    // var images = [], x = -1;
    // images[0] = "image1.jpg";
    // images[1] = "image2.jpg";
    // images[2] = "image3.jpg";
    return (
        <div>

            <div className="ruler">
                <h3>צור קשר</h3>
                <h3>התנדבות</h3>
                <h3>תרומות</h3>
                <h3>הפעילויות שלנו</h3>
                <h3>גלריה</h3>
                <h3>אודות</h3>
                <h3>ראשי</h3>
                <img id="logo" src="" />

            </div>

            <body onload={startTimer}>
                <div className="help">
                    <img id="img" src={image2.jpg} />
                    <button className="but" onclick={displayPreviousImage}>Previous</button>
                    <button className="but" onclick={displayNextImage}>Next</button>
                </div>
            </body>
            <div className="row">
                <div className="column">
                    <img src={image1.jpg} style={{ width: "100%" }} />
                </div>
                <div className="column">
                    <img src={image2.jpg} style={{width: "100%" }} />
                </div>
                <div className="column">
                    <img src={image2.jpg} style={{width: "100%"}} />
                </div>
                <div className="column">
                    <img src={image1.jpg} style={{width: "100%" }} />
                </div>
                <div className="column">
                    <img src={image2.jpg} style={{width: "100%" }} />
                </div>
                <div className="column">
                    <img src={image2.jpg} style={{width: "100%" }} />
                </div>
            </div>
        </div>
    )
}