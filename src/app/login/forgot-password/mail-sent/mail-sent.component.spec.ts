import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailSentComponent } from './mail-sent.component';

describe('MailSentComponent', () => {
  let component: MailSentComponent;
  let fixture: ComponentFixture<MailSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailSentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
