
const feed =
"https://www.youtube.com/feeds/videos.xml?channel_id=UCb4W3v6S7uXwSxV1yHf2QJQ";

fetch("https://api.rss2json.com/v1/api.json?rss_url=" + feed)
.then(response => response.json())
.then(data => {

let html = "";

data.items.forEach(video => {

const id = video.link.split("v=")[1];

html += `
<div class="video-card">
<a href="https://www.youtube.com/watch?v=${id}" target="_blank">
<img src="https://img.youtube.com/vi/${id}/maxresdefault.jpg">
<h3>${video.title}</h3>
</a>
</div>
`;

});

const grids = document.querySelectorAll("#video-grid");
grids.forEach(g => g.innerHTML = html);

});
