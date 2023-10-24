import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();

  // const [data ,setData] = useState([])
  // useEffect(() => {
  //     fetch('https://api.github.com/users/HasanCoder66')
  //     .then(response => response.json())
  //     .then(data => {
  //         // console.log(data)
  //         setData(data)
  //         console.log(data)
  //     })
  // },[data])

  
  return (
    <div className="bg-black text-white p-8 m-3 text-3xl">
      Github Followers: {data?.followers}
      <img
        src={data?.avatar_url}
        alt="Git Picture"
        className="bg-red-900"
        width={250}
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const responseApi = await fetch("https://api.github.com/users/HasanCoder66");
  return responseApi.json();
};
