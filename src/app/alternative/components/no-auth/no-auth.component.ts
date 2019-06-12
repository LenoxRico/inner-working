import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-auth',
  styleUrls: ['./no-auth.component.scss'],
  template: `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <title>401</title>
        <!-- Google font -->
        <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:400,700" rel="stylesheet" />
        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
      </head>
      <body>
        <div id="notfound">
          <div class="notfound">
            <div class="notfound-404">
              <h1>4<span>0</span>1</h1>
            </div>
            <p>Sesión expirada.</p>
            <a href="" (click)="login()">volver</a>
          </div>
        </div>
      </body>
    </html>
  `
})
export class NoAuthComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  login() {}
}
