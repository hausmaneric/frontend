import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {
  projects = [
    {
      id: 1,
      title: 'NEXT Take',
      description: 'Um sistema de controle de arquivos. O Next Take foi construido com o framework Angular no Front e a linguagem Python, como api, no Back.',
      images: ['../../../assets/NXTake/Init.png', '../../../assets/NXTake/Login.png', '../../../assets/NXTake/Login1.png', '../../../assets/NXTake/Main.png', '../../../assets/NXTake/Main1.png', '../../../assets/NXTake/Edit.png'],
      link: '#',
    },
    {
      id: 2,
      title: 'Kaad',
      description: 'Um sistema de controle de prêmios. O Kaad foi construido com o framework Angular no Front e a linguagem Python, como api, no Back.',
      images: ['../../../assets/Prize/Login.png', '../../../assets/Prize/Main.png', '../../../assets/Prize/pf_list.png', '../../../assets/Prize/pf_edit.png', '../../../assets/Prize/pt_list.png', '../../../assets/Prize/pt_edit.png' , '../../../assets/Prize/nv_list.png' , '../../../assets/Prize/nv_edit.png', '../../../assets/Prize/rank.png',  '../../../assets/Prize/Config.png', '../../../assets/Prize/msg_list.png' , '../../../assets/Prize/msg_edit.png'],
      link: '#',
    },
    {
      id: 3,
      title: 'Exped',
      description: 'Um sistema de controle de entregas. O Exped foi construido com o framework Angular no Front e a linguagem Python, como api, no Back.',
      images: ['../../../assets/Exped/Home.png', '../../../assets/Exped/Exped_home.png', '../../../assets/Exped/Exped_details.png', '../../../assets/Exped/Exped_details_2.png'],
      link: '#',
    },
    {
      id: 4,
      title: 'Chat',
      description: 'Um sistema de comunicação. O Chat foi construido com o framework Angular no Front e a linguagem Python, como api, no Back.',
      images: ['../../../assets/Chat/Home.png', '../../../assets/Chat/Details_user.png', '../../../assets/Chat/Home_chat.png', '../../../assets/Chat/Home_chat_file.png', '../../../assets/Chat/Home_chat_image.png'],
      link: '#',
    },
    {
      id: 5,
      title: 'CMS',
      description: 'Um sistema de controle de tarefas. O CMS foi construido com o framework Angular no Front e a linguagem Python, como api, no Back.',
      images: ['../../../assets/CMS/Login.png', '../../../assets/CMS/Main.png', '../../../assets/CMS/Tasks.png', '../../../assets/CMS/Task_Edit.png'],
      link: '#',
    },
    {
      id: 6,
      title: 'Quartzo',
      description: 'Um sistema de departamento pessoal. O Quartzo foi construido com o framework Angular no Front e a linguagem Python, como api, no Back.',
      images: ['../../../assets/DP/Login.png', '../../../assets/DP/Login1.png', '../../../assets/DP/Main.png', '../../../assets/DP/of_list.png', '../../../assets/DP/of_edit.png', '../../../assets/DP/pt_list.png', '../../../assets/DP/pt_edit.png',],
      link: '#',
    },
    {
      id: 7,
      title: 'COVM',
      description: 'Um sistema de gestão empresarial. O COVM foi construido com o framework Angular no Front e a linguagem Python, como api, no Back.',
      images: ['../../../assets/COVM/Down_Payment_Option.png', '../../../assets/COVM/Construction_DetailsService.png', '../../../assets/COVM/Bills_to_Pay.png', '../../../assets/COVM/Open_Construction.png', '../../../assets/COVM/Sale_With_Cash_Payment_Option.png', '../../../assets/COVM/Sale_With_Installment_Payment_Option_With_Down_Payment.png'],      link: '#',
    },
    {
      id: 8,
      title: 'Site Hausman',
      description: 'Um site estático para a empresa Hausman Tecnologia, feito em angular',
      images: ['../../../assets/Site_Hausman/one_page.png', '../../../assets/Site_Hausman/two_page.png', '../../../assets/Site_Hausman/three_page.png', '../../../assets/Site_Hausman/four_page.png', '../../../assets/Site_Hausman/five_page.png', '../../../assets/Site_Hausman/six_page.png', '../../../assets/Site_Hausman/seven_page.png', '../../../assets/Site_Hausman/eight_page.png', '../../../assets/Site_Hausman/nine_page.png', '../../../assets/Site_Hausman/ten_page.png', '../../../assets/Site_Hausman/eleven_page.png', '../../../assets/Site_Hausman/twelve_page.png' ],
      link: '#',
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
