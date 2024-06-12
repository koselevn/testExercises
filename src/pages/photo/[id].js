import React from 'react';
import { useRouter } from 'next/router';
import unsplash from '../../api/unsplash';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const response = await unsplash.get(`/photos/${id}`);
  return {
    props: {
      photo: response.data,
    },
  };
}


export default function Photo({ photo }) {
    console.log(photo)
    return (
        <>
            <img src={photo.urls.regular} alt={photo.description} style={{ width: `${photo.width}` }} />
        </>
    );
}