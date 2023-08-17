import {ComponentFixture, TestBed} from '@angular/core/testing'
import {LearnFeatureShellComponent} from './learn-feature-shell.component'

describe('LearnFeatureShellComponent', () => {
  let component: LearnFeatureShellComponent
  let fixture: ComponentFixture<LearnFeatureShellComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearnFeatureShellComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(LearnFeatureShellComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
