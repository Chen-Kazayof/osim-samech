import "../styles/homePage.css"
import "../styles/Gallery.css"
export const Gallery = () => {

    return (
        <div>
         <div className="gallery">
          <h1 className='title'>גלריה</h1>
          <h2 className='subTitle'>שולחנות השבת שלנו</h2>
           <table className='galleryTable'>
               <tr>
                   <td className="image"><img  src="/image1.jpg" alt="image1"></img></td>
                   <td className="image"><img src="/image1.jpg" alt="image1"></img></td>
                   <td className="image" ><img src="/image1.jpg" alt="image1"></img></td>   
               </tr>
               <tr>
                   <td className="image"><img src="/image1.jpg" alt="image1"></img></td>
                   <td className="image"><img src="/image1.jpg" alt="image1"></img></td>
                   <td className="image" ><img src="/image1.jpg" alt="image1"></img></td>
               </tr>
               </table>
               <h2 className='subTitle'>חוגגים ליל הסדר בשערי צדק</h2>
               <table className='galleryTable'>
               <tr>
                   <td className="image"><img src="/image1.jpg" alt="image1"></img></td>
                   <td className="image"><img src="/image1.jpg" alt="image1"></img></td>
                   <td className="image" ><img src="/image1.jpg" alt="image1"></img></td>   
               </tr>
               <tr>
                   <td className="image"><img src="/image1.jpg" alt="image1"></img></td>
                   <td className="image"><img src="/image1.jpg" alt="image1"></img></td>
                   <td className="image" ><img src="/image1.jpg" alt="image1"></img></td>
               </tr>
               </table>
               
        </div>
        </div>
    )
}