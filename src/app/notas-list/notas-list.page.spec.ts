import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotasListPage } from './notas-list.page';

describe('NotasListPage', () => {
  let component: NotasListPage;
  let fixture: ComponentFixture<NotasListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotasListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
