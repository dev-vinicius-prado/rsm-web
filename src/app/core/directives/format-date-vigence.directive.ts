import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFormatDateVigence]',
  standalone: true,
})
export class FormatDateVigenceDirective {

    @Input() startAt: Date;
    @Input() finishAt: Date;

    constructor(
        private element: ElementRef, private renderer: Renderer2
    ) { }

    ngOnInit(): void {
        if (this.startAt && this.finishAt) {
            const formattedStartAt   = this.formatDate(this.startAt);
            const formattedFinishAt   = this.formatDate(this.finishAt);

            const formattedDate = `${formattedStartAt} à ${formattedFinishAt}`;
            this.renderer.setProperty(this.element.nativeElement, 'textContent', formattedDate);

        }
    }

    formatDate(date: Date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    }
}
