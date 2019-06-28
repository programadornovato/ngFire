import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAgregaComponent } from './lista-agrega.component';

describe('ListaAgregaComponent', () => {
  let component: ListaAgregaComponent;
  let fixture: ComponentFixture<ListaAgregaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAgregaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAgregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
