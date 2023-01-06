import React, { useEffect, useState } from "react";

function FertilizerRecommend() {
  const [search, setSearch] = useState("agriculture")
  let API = "AIzaSyAHYQ9ytMdHrRDUjwCPuMqcOZKlHzH472E";
  var fetchurl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${search}&key=${API}`;

  const [allVideos, setAllVideos] = useState([]);
  useEffect(() => {
    fetch(fetchurl)
      .then((response) => response.json())
      .then((resjson) => {
        const result = resjson.items.map((doc) => ({
          ...doc,
          Videolink: "https://youtube.com/embed/" + doc.id.videoId,
        }));
        setAllVideos(result);
      });
  }, []);

  const customSearch = () => {
    fetch(fetchurl)
      .then((response) => response.json())
      .then((resjson) => {
        const result = resjson.items.map((doc) => ({
          ...doc,
          Videolink: "https://youtube.com/embed/" + doc.id.videoId,
        }));
        setAllVideos(result);
      });
  }

  console.log(allVideos);
  return (
    <div style={{marginTop:100, display: "block", justifyContent: "center"}}>
      <input type="text" name="" onChange={e=>setSearch(e.target.value)}/>
      <button type="submit" onClick={customSearch}>search</button>
      <div>
      {allVideos.map((item) => {
        return (
          <div>
            <iframe
              width="560"
              height="315"
              src={item.Videolink}
              title="yt video"
              allow="accelorometer; autoplay; clipboard-write; encrypter-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>{item.snippet.title}</p>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default FertilizerRecommend;
