import React from "react";

import {
  CardImagen,
  WrapperButton,
  WrapperDescription,
  WrapperImagen,
  Button,
  Image,
  LabelDescription,
  NumberDescription,
} from "./styles/stylesImagen";

const Imagen = ({ i }) => {
  const { webformatURL, views, likes, largeImageURL, tags } = i;

  return (
    <CardImagen>
      <WrapperImagen>
        <Image src={webformatURL} alt={tags} />
      </WrapperImagen>
      <WrapperDescription>
        <LabelDescription>
          Views: <NumberDescription>{views}</NumberDescription>
        </LabelDescription>
        <LabelDescription>
          Likes: <NumberDescription>{likes}</NumberDescription>
        </LabelDescription>
      </WrapperDescription>
      <WrapperButton>
        <Button to={largeImageURL}>Ver imagen</Button>
      </WrapperButton>
    </CardImagen>
  );
};

export default Imagen;
