import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjeGoruntuComponent } from './proje-goruntu.component';

describe('ProjeGoruntuComponent', () => {
  let component: ProjeGoruntuComponent;
  let fixture: ComponentFixture<ProjeGoruntuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjeGoruntuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjeGoruntuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
