import { Component } from '@angular/core';

@Component({
  selector:'pm-root',
  template:`
    <div>
      <h1>{{title}}</h1>
    </div>
  `
})
export class AppComponent{
  title: string = "This is Dinesh Project";
}