import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVideosComponent } from './modal-videos.component';

describe('ModalVideosComponent', () => {
  let component: ModalVideosComponent;
  let fixture: ComponentFixture<ModalVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
