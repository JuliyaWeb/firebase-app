import {Component, OnInit} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'layout',
  templateUrl: 'layout.component.html'
})

export class LayoutComponent implements OnInit {

  ngOnInit() {
    // Set minHeight to main block content
    let mainDiv = document.getElementById('main');
    let height = window.innerHeight;
    mainDiv.style.minHeight = height+'px';
  }
}
