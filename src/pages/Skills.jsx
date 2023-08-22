import React from "react";
import api from "../assets/meme.jpg";
import apod from "../assets/meme.jpg";
import iptracker from "../assets/meme.jpg";
import nftportal from "../assets/meme.jpg";
import webpostman from "../assets/meme.jpg";
import waveportal from "../assets/meme.jpg";

const Portfolio = () => {
    return(
    <div class="min-h-screen flex items-center justify-center">
            <div id="main" class="grid grid-rows-4 grid-flow-col">

<div class="bg-red-500 rounded-lg m-4 h-40 w-full">1</div>

<div class="bg-red-500 rounded-lg m-4 h-12 w-full">2</div>

<div class="bg-red-500 rounded-lg m-4 h-12">3</div>

<div class="bg-red-500 rounded-lg m-4 h-12">4</div>

</div>
    </div>
  );
};

export default Portfolio;