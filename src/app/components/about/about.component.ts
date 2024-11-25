import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
  cards = [
    {
      id: 1,
      title: 'HTML',
      img: '../../../assets/html.png',
    },
    {
      id: 2,
      title: 'CSS',
      img: '../../../assets/css.png',
    },
    {
      id: 3,
      title: 'JavaScript',
      img: '../../../assets/js.png',
    },
    {
      id: 4,
      title: 'TypeScript',
      img: '../../../assets/typescript.png',
    },
    {
      id: 5,
      title: 'Python',
      img: '../../../assets/python.png',
    },
    {
      id: 6,
      title: 'Angular',
      img: '../../../assets/angular.png',
    },
    {
      id: 7,
      title: 'PrimeNG',
      img: '../../../assets/primeng.png',
    },
    {
      id: 8,
      title: 'Bootstrap',
      img: '../../../assets/bootstrap.png',
    },
    {
      id: 9,
      title: 'GIT',
      img: '../../../assets/git.png',
    },
    {
      id: 10,
      title: 'AWS',
      img: '../../../assets/aws.png',
    },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const elements = document.querySelectorAll('.animate-item');

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.5 // Quando o elemento ocupar 50% da tela
      });

      elements.forEach(element => {
        observer.observe(element);
      });
    }
  }
}
