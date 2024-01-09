window.onload = function () {
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

  const addUrl = document.querySelector("#add-url");
  addUrl.onclick = function () {
    const allUrls = document.querySelector("#music-urls");
    const numUrls = allUrls.querySelectorAll("div").length;

    const urlBar = document.createElement("div");

    const lbl = document.createElement("label");
    lbl.htmlFor = `url-${numUrls + 1}`;
    lbl.classList.add("form-label");
    lbl.innerText = `URL ${numUrls + 1}`;
    urlBar.appendChild(lbl);

    const inputURL = document.createElement("input");
    inputURL.type = "url";
    inputURL.id = `url-${numUrls + 1}`;
    inputURL.name = `url-${numUrls + 1}`;
    inputURL.classList.add("form-control");
    urlBar.appendChild(inputURL);

    console.log(document.querySelector("#music-urls"));
    console.log(urlBar);
    allUrls.appendChild(urlBar);
  };

  const subtractUrl = document.querySelector("#subtract-url");
  subtractUrl.onclick = function () {
    const allUrls = document.querySelector("#music-urls");
    const numUrls = allUrls.querySelectorAll("div").length;

    if (numUrls > 1) {
      console.log(allUrls);
      const lastUrl = allUrls.childNodes[numUrls];
      lastUrl.parentNode.removeChild(lastUrl);
      console.log(allUrls);
      console.log(lastUrl);
    }
  };
};
