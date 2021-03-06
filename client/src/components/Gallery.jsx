import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { padding } from '@mui/system';
import "../styles/Gallery.css"
export const Gallery = () => {
  return (
      <div >
            <div className='backgallery1' >
              
           <h2 className='titleGallery'>משמחים חולים</h2>
             <Box sx={{ width:'70%', height:'100%', margin: 'auto'}}>
            <ImageList variant="standard" cols={3} gap={8}>
                {itemDataHappy.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                    style={{height:'15pc',width:'20pc',borderRadius:'0.3pc',marginLeft:'10px'}}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    />
                </ImageListItem>
                ))}
            </ImageList>
            </Box> 
           <h2 className='titleGallery'>חלוקת אוכל לחולים</h2>
            <Box sx={{width:'70%', height:'100%', margin: 'auto'}}>
            <ImageList variant="standard" cols={5} gap={8}>
                {itemDataFood.map((item) => (
                <ImageListItem   key={item.img}>
                    <img
                    style={{height:'15pc',width:'20pc',borderRadius:'0.3pc'}}
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
            <div className='backgallery2'>
            <h2 className='titleGallery'>שולחנות השבת שלנו</h2>
            <Box sx={{ width:'70%', height:'100%', margin: 'auto'}}>
            <ImageList variant="standard" cols={4} gap={8}>
                {itemDataShbbat.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                    style={{height:'15pc',width:'20pc',borderRadius:'0.3pc'}}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    />
                </ImageListItem>
                ))}
            </ImageList>
            </Box>

            <h2 className='titleGallery'>עגלות פינוקים</h2>
            <Box sx={{ width:'70%', height:'100%', margin: 'auto'}}>
            <ImageList variant="standard" cols={3} gap={8}>
                {itemDataHappy2.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                    style={{height:'15pc',width:'20pc',borderRadius:'0.3pc'}}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    />
                </ImageListItem>
                ))}
            </ImageList>
            </Box>

            <h2 className='titleGallery'>חוגגים ליל הסדר</h2>
            <Box sx={{ width:'70%', height:'100%', margin: 'auto'}}>
            <ImageList variant="standard" cols={3} gap={8}>
                {itemDataPesach.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                    style={{height:'15pc',width:'20pc',borderRadius:'0.3pc'}}
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
            <div className="underLineGallery "></div>
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
    img: '/image24.jpg',
    title: '24',
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
    img: '/image8.jpg',
    title: '8',
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
