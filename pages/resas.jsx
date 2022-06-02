import React, { useEffect, useState } from "react";
import axios from "axios";

const Resas = () => {
  const [prefectures, setPreFectures] = useState("");
  const Apikey = "GekHJw2h9l1K2N03H0yDPRBzYhmUDlcooBGam8QQ";

  useEffect(() => {
    axios
      .get("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
        headers: { "X-API-KEY": Apikey },
      })
      .then((results) => {
        setPreFectures(results.data.result);
      })
      .catch((error) => {});
  }, []);

  return (
    <>
      <section>
        <p>ReSassAPI</p>

        {prefectures &&
          prefectures.map((prefecture) => {
            return <li>{prefecture.prefName}</li>;
          })}

      </section>
    </>
  );
};

export default Resas;
