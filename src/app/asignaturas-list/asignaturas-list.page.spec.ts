import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsignaturasListPage } from './asignaturas-list.page';

describe('AsignaturasListPage', () => {
  let component: AsignaturasListPage;
  let fixture: ComponentFixture<AsignaturasListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignaturasListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsignaturasListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
