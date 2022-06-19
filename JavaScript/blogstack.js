// invokes css class to toggle dark mode
function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// get values from the html form, error pops up if empty
// otherwise submitForm() is called, passing values from the form
var count = 0;
function validate() {
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var content = document.getElementById("content").value;
    if (title == "" || author == "" || content == "") {
        alert("Please fill in all fields");
        return false;
    }
    else {
        submitForm(title, author, content);
    }
}

// create <article id="count">, append to html, increment count
function submitForm(blogtitle, blogauthor, blogtext) {
    // create a h1, h3 and p elements
    let header1 = document.createElement("h1");
    let header3 = document.createElement("h3");
    let para = document.createElement("p");
    let btn = document.createElement('button');

    // add contents passed from the html form via validateForm() 
    // to created elements plus a delete button
    header1.appendChild(document.createTextNode(blogtitle));
    header3.appendChild(document.createTextNode(blogauthor));
    para.appendChild(document.createTextNode(blogtext));
    btn.appendChild(document.createTextNode('Delete Post'));

    // add created and populated elements to the DOM as indexed article
    let art = document.createElement("article");
    count = count + 1;
    art.appendChild(header1);
    art.appendChild(header3);
    art.appendChild(para);
    art.appendChild(btn);
    art.setAttribute("id", count);
    btn.setAttribute('onclick', "this.parentElement.remove();");

    // orders newly created article above the previous article 
    // (if there is one)
    let elem = document.getElementsByTagName('article')[0];
    document.getElementsByTagName('body')[0].insertBefore(art, elem);
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('content').value = "";
}
