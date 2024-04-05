$(document).ready(function() {
  const name = $('#name');
  const username = $('#username');
  const repos = $('#repos');
  const followers = $('#followers');
  const following = $('#following');
  const avatar = $('#avatar');
  const link = $('#link');

  fetch('https://api.github.com/users/henriqueAffonsoRios')
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);

      name.text(json.name);
      username.text(json.login);
      repos.text(json.public_repos);
      followers.text(json.followers);
      following.text(json.following);
      avatar.attr("src", json.avatar_url);
      link.attr("href",json.html_url);
    })
})
