/**
 * WEB222 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Shrey Ajaykumar Bhatt
 *      Student ID: 125824227
 *      Date:       21/11/2023 (DD/MM/YYYY)
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

window.addEventListener("load", pageLoaded);

function pageLoaded() {
  document.querySelectorAll("form").forEach((frm) => {
    frm.addEventListener(
      "submit",
      function (evt) {
        evt.preventDefault();

        const confirmation = document.createElement("span");

        confirmation.innerText = "Form Submitted!";

        this.querySelector(".submit-btn").disabled = true;

        this.appendChild(confirmation);
      },
      true
    );
  });

  artists.forEach((artist) => {
    let artistButton = document.createElement("button");
    artistButton.id = artist.artistId;
    artistButton.innerText = artist.name;
    artistButton.className = "artist-button";
    artistButton.addEventListener("click", () => {
      updateCards(artist);
    });
    document.querySelector("#menu").appendChild(artistButton);
  });
  updateCards(artists[0]);
}

function updateCards(artist) {
  let heading = window.document.querySelector("#selected-artist");
  heading.innerText = `${artist.name} (`;

  artist.urls.forEach((Url) => {
    let socialLink = window.document.createElement("a");
    socialLink.href = Url.url;
    socialLink.target = "_blank";
    socialLink.innerText = `${Url.name}, `;
    heading.appendChild(socialLink);
  });

  let lastLink = heading.querySelectorAll("a")[[...heading.querySelectorAll("a")].length - 1];
  lastLink.innerText = lastLink.innerText.slice(0, -1);
  heading.appendChild(window.document.createTextNode(")"));

  window.document.querySelector("#card-container").innerHTML = "";

  let filteredSongs = songs.filter((song) => {
    return song.artistId === artist.artistId && !song.explicit;
  });

  filteredSongs.forEach((song) => {
    let container = document.createElement("div");
    container.className = "song-card";

    let imageLink = document.createElement("a");
    imageLink.href = song.url;
    imageLink.target = "_blank";
    let songImage = document.createElement("img");
    songImage.src = song.imageUrl;
    songImage.alt = "Album Cover";
    imageLink.appendChild(songImage);

    let title = document.createElement("h4");
    let songLink = document.createElement("a");
    songLink.href = song.url;
    songLink.target = "_blank";
    songLink.innerText = song.title;
    title.appendChild(songLink);

    let year = document.createElement("time");
    year.dateTime = song.year;
    year.innerText = song.year;

    let span = document.createElement("span");
    span.innerText = "Duration: ";
    let time = document.createElement("time");
    let duration = `${String(parseInt(song.duration / 60, 10)).padStart(1, 0)}:${String(
      song.duration % 60
    ).padStart(2, "0")}`;
    time.dateTime = duration;
    time.innerText = duration;
    span.appendChild(time);

    container.appendChild(imageLink);
    container.appendChild(title);
    container.appendChild(document.createElement("hr"));
    container.appendChild(year);
    container.appendChild(span);
    document.querySelector("#card-container").appendChild(container);
  });
}
