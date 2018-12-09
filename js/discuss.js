function handleDiscuss() {
  let commentText = document.getElementById("form-comment").value;

  if (commentText == "") {
    return;
  }

  let date = document.createElement("div");
  date.appendChild(document.createTextNode("- " + new Date().toLocaleDateString("en-US")));
  date.setAttribute("class", "discuss-date");

  let comment = document.createElement("li");
  comment.appendChild(document.createTextNode(commentText));
  comment.appendChild(date);
  comment.setAttribute("class", "discuss-comment");

  let comments = document.getElementById("discuss-comments");
  comments.appendChild(comment);

  document.getElementById("form-comment").value = "";
}