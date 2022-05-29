// // import '../styles/gallery.css'
// export const Gallery = () => {

//     return (
//         <div className="gallery">
//           <h1 className='title'>גלריה</h1>
//           <h2 className='subTitle'>שולחנות השבת שלנו</h2>
//            <table className='galleryTable'>
//                <tr>
//                    <td className="image"><img  src="/image1.jpg" alt="image1"></img></td>
//                    <td className="image"><img src="/image2.jpg" alt="image2"></img></td>
//                    <td className="image" ><img src="/image3.jpg" alt="image3"></img></td>   
//                </tr>
//                <tr>
//                    <td className="image"><img src="/image4.jpg" alt="image4"></img></td>
//                    <td className="image"><img src="/image5.jpg" alt="image5"></img></td>
//                    <td className="image" ><img src="/image6.jpg" alt="image6"></img></td>
//                </tr>
//                </table>
//                <h2 className='subTitle'>חוגגים ליל הסדר בשערי צדק</h2>
//                <table className='galleryTable'>
//                <tr>
//                    <td className="image"><img src="/image7.jpg" alt="image7"></img></td>
//                    <td className="image"><img src="/image8.jpg" alt="image8"></img></td>
//                    <td className="image" ><img src="/image9.jpg" alt="image9"></img></td>   
//                </tr>
//                <tr>
//                    <td className="image"><img src="/image10.jpg" alt="image10"></img></td>
//                    <td className="image"><img src="/image11.jpg" alt="image11"></img></td>
//                    <td className="image" ><img src="/image12.jpg" alt="image12"></img></td>
//                </tr>
//                </table>
               
//         </div>
//     )
// }


import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { padding } from '@mui/system';

export const Gallery = () => {
  return (
      <div>
           <h1>גלריה</h1>
           <h2>משמחים חולים</h2>
            <Box sx={{ width:'100%', height:'100%'}}>
            <ImageList variant="masonry" cols={3} gap={8}>
                {itemDataHappy.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    />
                </ImageListItem>
                ))}
            </ImageList>
            </Box>
           <h2>חלוקת אוכל לחולים</h2>
            <Box sx={{ width:'100%', height:'100%'}}>
            <ImageList variant="masonry" cols={3} gap={8}>
                {itemDataFood.map((item) => (
                <ImageListItem   key={item.img}>
                    <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    />
                </ImageListItem>
                ))}
            </ImageList>
            </Box>
            <h2>שולחנות השבת שלנו</h2>
            <Box sx={{ width:'100%', height:'100%'}}>
            <ImageList variant="masonry" cols={3} gap={8}>
                {itemDataShbbat.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    />
                </ImageListItem>
                ))}
            </ImageList>
            </Box>

            <h2>קורונות השמחה</h2>
            <Box sx={{ width:'100%', height:'100%'}}>
            <ImageList variant="masonry" cols={3} gap={8}>
                {itemDataHappy2.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    />
                </ImageListItem>
                ))}
            </ImageList>
            </Box>

            <h2>חוגגים ליל הסדר בשערי צדק</h2>
            <Box sx={{ width:'100%', height:'100%'}}>
            <ImageList variant="masonry" cols={3} gap={8}>
                {itemDataPesach.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    />
                </ImageListItem>
                ))}
            </ImageList>
            </Box>
           
      </div>
     
  );
}
const itemDataHappy = [
    {
      img: '/image2.jpg',
      title: '2',
    },
    {
      img: '/image3.jpg',
      title: '3',
    },
    {
      img: '/image12.jpg',
      title: '12',
    },
    {
      img: '/image13.jpg',
      title: '13',
    },
    {
      img: '/image14.jpg',
      title: '14',
    },
    {
      img: '/image15.jpg',
      title: '15',
    },
    {
      img: '/image16.jpg',
      title: '16',
    },
    {
      img: '/image23.jpg',
      title: '23',
    },
    {
      img: '/image25.jpg',
      title: '25',
    },
    
  ];
  
const itemDataFood = [
  {
    img: '/image8.jpg',
    title: '8',
  },
  {
    img: '/image10.jpg',
    title: '10',
  },
  {
    img: '/image17.jpg',
    title: '17',
  },
  {
    img: '/image21.jpg',
    title: '21',
  },
  {
    img: '/image24.jpg',
    title: '24',
  },
  
];


const itemDataShbbat = [
    {
      img: '/image4.jpg',
      title: '4',
    },
    {
      img: '/image5.jpg',
      title: '5',
    },
    {
      img: '/image7.jpg',
      title: '7',
    },
    {
      img: '/image9.jpg',
      title: '9',
    },
   
  ];

  const itemDataHappy2 = [
    {
      img: '/image18.jpg',
      title: '18',
    },
    {
      img: '/image20.jpg',
      title: '20',
    },
    {
      img: '/image22.jpg',
      title: '22',
    },
    
  ];

  const itemDataPesach = [
    {
      img: '/image1.jpg',
      title: '1',
    },
    {
      img: '/image6.jpg',
      title: '6',
    },
    {
      img: '/image11.jpg',
      title: '11',
    },
    
  ];
