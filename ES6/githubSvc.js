export class GithubSvc {
  getRepos(org) {
    return new Promise(function(resolve, reject) {
			$.get(`https://api.github.com/orgs/${org}/repos`)
				.then((result) => {
					resolve(result);
				});
		});
  }
}
