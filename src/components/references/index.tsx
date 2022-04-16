import React from "react";

// interface para os props
interface Props {
  reference_title: string; //tem que tipificar
  reference_url: string;
}

function References({ reference_title: referece_title, reference_url: referece_url }: Props) {
  return (
    <div className="container-references">
      <br />
      <ol type="1" />
      <li> <h3 className="referece_title">{referece_title}</h3>
        <p>Link: <a href={referece_url} className="link" target={"_blank"}>Clique aqui!</a></p>
      </li>
      <br />
    </div>
  );
}

export default References;