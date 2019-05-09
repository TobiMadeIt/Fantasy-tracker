import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDetailComponentComponent } from './player-detail-component.component';

describe('PlayerDetailComponentComponent', () => {
  let component: PlayerDetailComponentComponent;
  let fixture: ComponentFixture<PlayerDetailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerDetailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
