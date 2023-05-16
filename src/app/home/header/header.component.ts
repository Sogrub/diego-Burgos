import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('menu') menu!: ElementRef

  toogleActive: boolean = false;
  headerText: string = '';

  headerHover($event: any) {
    this.headerText = $event.target.text;
  }

  openMenu() {
    this.toogleActive = !this.toogleActive;
    if (this.toogleActive) {
      this.menu.nativeElement.classList.add('open-menu')
    } else {
      this.menu.nativeElement.classList.remove('open-menu')
    }
  }

}
