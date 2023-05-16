import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements AfterViewInit {
  @ViewChild('catmusic') catmusic!: ElementRef;

  points: string[] = ['.', '.', '.'];

  constructor(private router: Router) {}
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.router.navigate(['/home'])
    }, 5000);
  }
}
