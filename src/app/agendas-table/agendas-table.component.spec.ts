import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendasTableComponent } from './agendas-table.component';

describe('AgendasTableComponent', () => {
  let component: AgendasTableComponent;
  let fixture: ComponentFixture<AgendasTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgendasTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendasTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
