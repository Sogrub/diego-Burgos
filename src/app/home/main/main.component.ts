import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements AfterViewInit {
  @ViewChild('grettings') grettings!: ElementRef;
  @ViewChild('firstName') firstNameElement!: ElementRef;
  @ViewChild('lastName') lastNameElement!: ElementRef;
  @ViewChild('profile') profile!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;

  first: string[] = ['D', 'I', 'E', 'G', 'O'];
  last: string[] = ['B', 'U', 'R', 'G', 'O', 'S'];
  cubeFaces: string[] = [];
  rotationAngle = 0;
  rotationStyle: any;

  ngAfterViewInit(): void {
    this.animationDelay();
    this.generateCubeFaces();
    this.startRotation();
  }

  animationDelay() {
    let first: HTMLElement[] = this.firstNameElement.nativeElement.children;
    let last: HTMLElement[] = this.lastNameElement.nativeElement.children;
    let greet: HTMLElement[] = this.grettings.nativeElement.children;
    let rol: HTMLElement[] = this.profile.nativeElement.children;
    setTimeout(() => {
      greet[0].classList.add('in');
    }, 100);
    setTimeout(() => {
      for (let i = 0; i < first.length; i++) {
        setTimeout(() => {
          first[i].classList.add('in')
        }, i * 300);
      }
    }, 400);
    setTimeout(() => {
      for (let i = 0; i < last.length; i++) {
        setTimeout(() => {
          last[i].classList.add('in')
        }, i * 300);
      }
    }, 1900);
    setTimeout(() => {
      rol[0].classList.add('in');
      this.contact.nativeElement.classList.add('in');
    }, 3400);
  }

  generateCubeFaces() {
    const characters = '!"#$%&/()==?¡¨[]*;:_°><ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (let i = 0; i < 6; i++) {
      const face: any = [];
      for (let j = 0; j < 600; j++) {
        let randomChar = characters.charAt(Math.floor(Math.random() * characters.length));
        face.push(randomChar);
      }
      this.cubeFaces.push(face);
    }
  }

  startRotation() {
    setInterval(() => {
      this.rotationAngle += 1;
      this.rotationStyle = `rotateX(${this.rotationAngle}deg) rotateY(${this.rotationAngle}deg)`;
    }, 50);
  }
}
