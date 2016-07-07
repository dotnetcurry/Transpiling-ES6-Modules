export class UIPainter{
  constructor(selector){
    this.element = document.querySelector(selector);
  }
  
  drawRows(data){
    var html = "";
    data.forEach(function(entry){
      html += `<tr><td>${entry.name}</td><td>${entry.full_name}</td>
      <td><a target="_blank" href="${entry.owner.html_url}">${entry.owner.login}</a></td>
			<td>${entry.language}</td><td>${entry.forks}/${entry.watchers}</td>
			<td>${entry.open_issues_count}</td>
      <td><a target="_blank" href="${entry.html_url}">Visit</a></td></tr>`;
    });
    
    this.element.querySelector("tbody").innerHTML = html;
  }
}
