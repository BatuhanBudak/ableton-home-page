import React from "react";
import styles from "../styles/Youtube.module.css";

const YoutubeEmbed = ({ embedId }) => (
  <div className={styles.videoResponsive}>
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;
