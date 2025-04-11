
import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  toggleMenu: boolean = false;
  eRef = inject(ElementRef);

  menulist: any[] = [];
  ngOnInit() {
    this.menulist = [
      { option: '選項1', icon: 'pi pi-fw pi-user', route: '/' },
      { option: '選項2', icon: 'pi pi-fw pi-user', route: '/' },
    ]
  }

  toggleMenuClick() {
    this.toggleMenu = !this.toggleMenu;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    if (this.toggleMenu && !this.eRef.nativeElement.contains(event.target)) {
      this.toggleMenu = false;
    }
  }
}
