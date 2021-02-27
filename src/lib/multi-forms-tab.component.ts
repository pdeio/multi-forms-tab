import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'lib-multi-forms-tab',
  templateUrl: './multi-forms-tab.component.html',
  styleUrls: ['./multi-forms-tab.component.scss']
})

export class MultiFormsTabComponent implements OnInit, OnChanges {
  constructor() {}
  @Input() titles: string[];
  @Input() hasFooter = true;
  @Input() hasSaveBtn = true;
  @Input() nextEnabled = true;
  @Input() tabsEnabled = 1;
  @Input() nextTabOnClick = true;
  @Input() isCard = true;
  @Output() nextTabClicked = new EventEmitter();
  @Output() saveForm = new EventEmitter<boolean>();
  @Input() loading = false;
  public showAlert = false;
  public alertMessage = '';
  navItem = 0;
  numTabs = 0;
  ngOnInit(): void {}

  ngOnChanges(): void {
    this.numTabs = this.titles.length;
  }
  changeTab(index: number): void {
    if (this.tabsEnabled >= index + 1) {
      this.navItem = index;
    }
  }

  public nextTab(force = false): void {
    if (force || (this.nextTabOnClick && this.nextEnabled)) {
      if (this.tabsEnabled < this.numTabs) {
        this.tabsEnabled++;
      }
      if (this.navItem < this.numTabs) {
        this.changeTab(this.navItem + 1);
      }
    } else {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0;
    }
  }
  previousTab(): void {
    if (this.navItem > 0) {
      this.changeTab(this.navItem - 1);
    }
  }

  onSave(): void {
    this.saveForm.emit(true);
  }
}
