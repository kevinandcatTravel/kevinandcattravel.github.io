
const feed = "https://www.youtube.com/feeds/videos.xml?channel_id=UCeRIQOqgsJ_YSufuDrYuIsg";

fetch("https://api.rss2json.com/v1/api.json?rss_url=" + feed)
.then(r => r.json())
.then(data => {

let html = "";

data.items.forEach(video => {

const id = video.link.split("v=")[1];
const title = video.title.toLowerCase();

html += `
<div class="video-card" data-title="${title}">
<a href="https://www.youtube.com/watch?v=${id}" target="_blank">
<img src="https://img.youtube.com/vi/${id}/maxresdefault.jpg">
<h3>${video.title}</h3>
</a>
</div>
`;

});

const grids = document.querySelectorAll("#video-grid");
grids.forEach(g => g.innerHTML = html);

// keyword filtering
const path = window.location.pathname;

function filter(word) {
document.querySelectorAll(".video-card").forEach(card => {
if(card.dataset.title.includes(word)) card.style.display="block";
else card.style.display="none";
});
}

if(path.includes("bangkok")) filter("bangkok");
if(path.includes("tokyo")) filter("tokyo");
if(path.includes("asakusa")) filter("asakusa");
if(path.includes("busan")) filter("busan");
if(path.includes("montreal")) filter("montreal");
if(path.includes("japan")) filter("japan");

});
