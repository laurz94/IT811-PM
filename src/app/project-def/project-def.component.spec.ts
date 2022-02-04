import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDefComponent } from './project-def.component';

describe('ProjectDefComponent', () => {
  let component: ProjectDefComponent;
  let fixture: ComponentFixture<ProjectDefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
