$.ajax({
  url: "https://api.github.com/users/rakane/repos",
  jsonp: true,
  method: "GET",
  dataType: "json",
  success: function(res) {
    res.forEach(function(object) {
      let projects = document.getElementById("more-work");
      let temp = object.name.replace(/-/g, " ").replace(/_/g, " ");
      let name = temp[0].toUpperCase() + temp.slice(1);

      let add = `<div class="project">
        <h4>${name}</h4>
        <h6>${object.language}</h6>
        <p>${object.description}</p>
        </div>`;
      projects.innerHTML += add;
    });
  }
});
