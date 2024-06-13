import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubNameComponent } from './club-name.component';

describe('ClubNameComponent', () => {
  let component: ClubNameComponent;
  let fixture: ComponentFixture<ClubNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
