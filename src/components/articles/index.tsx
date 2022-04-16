import React from "react";

interface Props {
  textP: string;
  url_image: string;
  alt_image: string;
  ref_text: string;
  ref_a_url: string;
}


const Article = ({ textP, url_image, alt_image, ref_text, ref_a_url }: Props) => {
  return (
    <article className='art'>
      <p>{textP}</p>
      <div className='picture_and_text'>
        <img src={url_image} width="50%" alt={alt_image} className="art_img" />
        <p>
          <p className="ref_info">
            {ref_text}: <a href={ref_a_url} className='link'>Clique aqui!</a>
            <br />
          </p>
        </p>
      </div>
    </article>
  );
}

export default Article;