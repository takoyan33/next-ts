import React from "react";
import { accessUrl } from "./Spotify";

function Spotify() {
  return (
    <div className="Login">
      <h2>ログイン前です</h2>
      <a href={accessUrl}>spotifyへログイン</a>
    </div>
  );
}

export default Spotify;
