// To fetch Github Repos

getRepos = () => {
  fetch(
    "https://api.github.com/users/ingeniousambivert/repos?sort=created:asc&client_id=22ea12584240e7a2631f&client_secret=bc2deb37cb23d714f3b16483ba93a4a0e61f93e9"
  )
    .then(res => res.json())
    .then(data => {
      let output = "";
      let len = 0;
      data.forEach(function(repo) {
        icon = () => {
          return len % 3 === 0 ? "far fa-file-code" : "fas fa-code";
        };
        output += `
						<div class="col-sm-6">
					<div class="card" style="margin:2%; border:1px solid #bfbfbf;">
					<div class="card-body">
            <h5 class="card-title"><strong><i class="${icon()}"> </i> <br>
            <a target='_blank' style='color:#6e6096'; href="${repo.html_url}">${
          repo.name
        }</a></strong> </h5>
				<p class="card-text">${repo.description}</p>
					</div>
					</div>
				</div>
				`;
        len++;
      });

      document.getElementById("output").innerHTML = output;
    })
    .catch(err => console.log(err));
};
getRepos();

// To generate random quotes

randomQ = () => {
  let q = new Array();

  q[1] =
    "We have seen that computer programming is an art, because it applies accumulated knowledge to the world, because it requires skill & ingenuity, & especially because it produces objects of beauty. - Paul Graham";
  q[2] =
    "Programming today is a race between software engineers striving to build bigger & better idiot-proof programs, & the Universe trying to produce bigger & better idiots. So far, the Universe is winning. - Rich Cook";
  q[3] =
    "A good programmer is someone who always looks both ways before crossing a one-way street. - Keith Weinberg";
  q[4] =
    "Computer science education cannot make anybody an expert programmer any more than studying brushes & pigment can make somebody an expert painter. - Eric S. Raymond ";
  q[5] =
    "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to code. - Linus Torvalds";
  q[6] =
    "You might not think programmers are artists, but programming is extremely creative profession. Its logic-based creativity. - John Romero";
  q[7] =
    "Everyone should learn how to program a computer because it teaches you how to think. - Steve Jobs";
  q[8] = "First solve the problem , then write the code. - John Johnson";
  q[9] =
    "The most important property of a program is whether it accomplishes the intention of its user. - C.A.R Hoare";
  q[10] = "Truth can only be found in one place: the code. - Robert C. Martin";
  q[11] =
    "Programming isn't about what you know; it's about what you can figure out. - Chris Pine";
  q[12] =
    "The only way to learn a new programming language is by writing programs in it. - Dennis Ritchie";
  q[13] =
    "Sometimes it's better to leave something alone, to pause, and that's very true of programming. - Joyce Wheeler";
  q[14] =
    "In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them. - Andrew Hunt";
  q[15] =
    "Don't write better error messages, write code that doesn't need them. - Jason C McDonald";
  let ry = Math.floor(Math.random() * q.length);
  if (ry == 0) ry = 1;
  document.getElementById("quote").innerHTML = q[ry];
};
randomQ();
