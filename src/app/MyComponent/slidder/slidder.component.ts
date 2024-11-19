import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-slidder',
  templateUrl: './slidder.component.html',
  styleUrls: ['./slidder.component.scss']
})
export class SlidderComponent implements OnInit {

  constructor() { }

  isSecondarySidebarVisible: boolean = false;

  isSidebarVisible: boolean = true;

  showSecondarySidebar() {
    this.isSecondarySidebarVisible = true;
  }

  hideSecondarySidebar(){
    this.isSecondarySidebarVisible = false;
  }


  // Listen for clicks on the body
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInside = (event.target as HTMLElement).closest('.sidebar');
    if (!clickedInside) {
      this.isSidebarVisible = false;
    }
  }


    // To open sidebar manually if needed
    openSidebar(): void {
      this.isSidebarVisible = true;
    }


  ngOnInit(): void {
  }

}
