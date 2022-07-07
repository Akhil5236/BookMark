let bookmarks = [{
    bookmarkId: "bookmark1",
    name: "Google Portal",
    url: "https://www.google.com/",
}, ];
let myform = document.getElementById("bookmarkForm");
let inputUrl = document.getElementById("siteUrlInput");
let inputName = document.getElementById("siteNameInput");
let nameErrormsg = document.getElementById("siteNameErrMsg");
let urlErrormsg = document.getElementById("siteUrlErrMsg");
let submitBtn = document.getElementById("submitBtn");

function submitToBottom() {

    let lens = bookmarks.length
    let nameVal = inputName.value;
    let urlVAl = inputUrl.value
    if (inputName.value === "") {
        nameErrormsg.textContent = "Required"
    }
    if (inputUrl.value === "") {
        urlErrormsg.textContent = "Required"
    } else if (inputName.value !== "" && inputUrl.value !== "") {
        let newBookmark = {
            bookmarkId: "bookmarkId" + lens + 1,
            name: nameVal,
            url: urlVAl
        }
        bookmarks.push(newBookmark);
        submitBookmark(newBookmark);
        inputName.value = "";
        inputUrl.value = "";
    }


}



submitBtn.onclick = function() {
    submitToBottom()
}


inputName.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrormsg.textContent = "Required*";
        nameErrormsg.classList.add("msg")
    } else {
        nameErrormsg.textContent = ""
    }
    bookmarks.name = event.target.value
})
inputUrl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        urlErrormsg.textContent = "Required*";
        urlErrormsg.classList.add("msg")
    } else {
        urlErrormsg.textContent = ""
    }
    bookmarks.url = event.target.value
})


function validateFormData(bookmarks) {
    let {
        name,
        url
    } = bookmarks;
    if (name === "") {
        nameErrormsg.textContent = "Required"
    }
    if (url === "") {
        urlErrormsg.textContent = "Required"
    }

}

function submitBookmark(book) {
    let bookmarkContainer = document.getElementById("bookmarksList");
    let liElm = document.createElement("li");
    liElm.id = book.bookmarkId
    liElm.classList.add("book-items-container");
    bookmarkContainer.appendChild(liElm);

    let devElm1 = document.createElement("div");
    devElm1.classList.add("bottom-container", "d-flex", "flex-row");

    liElm.appendChild(devElm1);


    let para = document.createElement("label");
    para.classList.add("labels");
    para.textContent = book.name;
    devElm1.appendChild(para);
    console.log(devElm1);

    let divElm2 = document.createElement("div");
    divElm2.classList.add("rightSide");
    devElm1.appendChild(divElm2);

    let devElm3 = document.createElement("div");
    devElm3.classList.add("btsm");
    divElm2.appendChild(devElm3);
    let aHref = document.createElement("a");
    aHref.href = book.url
    aHref.classList.add("btr", "tbs")
    aHref.textContent = "Visit"
    devElm3.appendChild(aHref)
}
for (let book of bookmarks) {
    submitBookmark(book)
}
myform.addEventListener("submit", function(event) {
    event.preventDefault();
    validateFormData(bookmarks);
    submitBookmark();

})