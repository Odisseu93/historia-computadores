import React from "react";

// interface para os props
interface Props {
  referece_title: string; //tem que tipificar
  referece_url: string;
}

function References({referece_title, referece_url}: Props) {
  return (
    <div className="container-references">
      <br />
      <ol type="1" />
      <li> <em className="referece_title">{referece_title}</em>
        <p>Link: <a href={referece_url} className="link">{referece_url}</a></p>
      </li>
      <br />
    </div>
  );
}

export default References;