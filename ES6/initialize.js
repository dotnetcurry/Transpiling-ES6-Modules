import {GithubSvc} from "./githubSvc";
import {UIPainter} from "./uiPainter";

var svc = new GithubSvc();
var painter = new UIPainter("#githubRepos");

svc.getRepos("angular")
    .then((result) => {
        painter.drawRows(result);
    });
