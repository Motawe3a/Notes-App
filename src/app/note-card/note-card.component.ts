import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  @Input() title: string;
  @Input() body: string;

  @ViewChild('trancator', { static: true }) trancator: ElementRef<HTMLElement>;
  @ViewChild('cardBody', { static: true }) cardBody: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    let style = window.getComputedStyle(this.cardBody.nativeElement, null)
    let viewableHeight = parseInt(style.getPropertyValue('height'), 10)

    if (this.cardBody.nativeElement.scrollHeight > viewableHeight) {
      this.renderer.setStyle(this.trancator.nativeElement, 'display', 'block')
    } else {
      this.renderer.setStyle(this.trancator.nativeElement, 'display', 'none')
    }
  }

}
