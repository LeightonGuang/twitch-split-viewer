<div align="center">
  <h1>Twitch Split Viewer</h1>

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

  <img src="./public//assets/streamerIcon.png" width="80" height="80" />

</div>

## About

[Twitch Split Viewer](https://twitchsplitviewer.pages.dev) is a web application that allows users to watch multiple Twitch streams simultaneously in a split-screen layout. This project is made for [Stream Track](https://chromewebstore.google.com/detail/stream-track/gefllgcgjeonfffgimbgfkpkpckhppdg) where the chrome extension will detect the stream title of a Twitch stream and inject a button below the stream to open all the channels tagged in the title in Twitch Split Viewer. The website also works by itself as a standalone website.

## Features

- Watch up to 12 Twitch streams simultaneously in a Grid View Mode
- Watch up to 6 Twitch streams side by side simultaneously in Team View Mode, with up to 6 streams displayed on each team's side.
- Support for Teams View Mode, where up to 6 streams are grouped side-by-side
- Easily switch between different chat rooms for each stream
- Support URL parameters for loading multiple streams in Grid View Mode or Teams View Mode
- Support for [Stream Track](https://chromewebstore.google.com/detail/stream-track/gefllgcgjeonfffgimbgfkpkpckhppdg) Chrome extension

## Getting Started

To get started, simply search for a Twitch channel name in the search bar and add more streams from the sidebar up to a maximum of 12 streams. You can also load multiple streams at once by using URL parameters as described below.

### How to use URL Parameters

#### Grid View Mode:

To use Grid View Mode, simply add the <code style="color:lime">channels</code> parameter to the URL followed by a list of <code style="color:#87CEEB">channel names</code> you want to watch, seperated by commas, up to a maxiumum of 12 streams.

For example:
<code>[https://twitchsplitviewer.pages.dev/<span style="color:#05df72">?channels=</span><span style="color:#87CEEB">channel1,channel2,channel3</span>](https://twitchsplitviewer.pages.dev/?channels=channel1,channel2,channel3)</code>

#### Teams Split View Mode:

To use Team Split View Mode, start by using the <code style="color:#05df72">team1</code> parameter followed by a list of up to 6 <code style="color:#87CEEB">channel names</code> seperated by commas, then add <code style="color:#FB7185">team2</code> followed by a list of up to 6 additional <code style="color:#87CEEB">channel names</code> seperated by commas.

For example:
<code>[https://twitchsplitviewer.pages.dev/<span style="color:#05df72">?team1=</span><span style="color:#87CEEB">channel1,channel2,channel3</span><span style="color:#FB7185">&team2=</span><span style="color:#87CEEB">channel4,channel5,channel6</span>](https://twitchsplitviewer.pages.dev/?team1=channel1,channel2,channel3&team2=channel4,channel5,channel6)</code>
