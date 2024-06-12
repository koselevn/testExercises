import React from 'react';
import Link from 'next/link';
import unsplash from '../api/unsplash';

export async function getServerSideProps() {
  try {
    const response = await unsplash.get('/photos/random', {
      params: { count: 10 }, // Получаем 10 случайных фотографий
    });
    return {
      props: {
        photos: response.data,
      },
    };
  } catch (error) {
    console.error('Error fetching photos:', error);
    return {
      props: {
        photos: [],
      },
    };
  }
}

export default function Main({ photos }) {
  console.log(photos)
  return (
    <div className='photoList'>
      {photos.map(photo => (
        <div className='photoItem'>
          <Link href={`/photo/${photo.id}`}>
          <img key={photo.id} src={photo.urls.thumb} alt={photo.alt_description} />
            <div>
              <p>{photo.description}</p>
              <p>{photo.user.name}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}


    // <div>
    //   {photos.map(photo => (
    //     <div key={photo.id}>
    //       <Link href={`/photo/${photo.id}`}>
    //         <img src={photo.urls.thumb} alt={photo.description} />
    //         <p>{photo.description}</p>
    //         <p>{photo.user.name}</p>
    //       </Link>
    //     </div>
    //   ))}
    // </div>