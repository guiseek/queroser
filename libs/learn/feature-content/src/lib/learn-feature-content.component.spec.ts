import {ComponentFixture, TestBed} from '@angular/core/testing'
import {LearnFeatureContentComponent} from './learn-feature-content.component'

describe('LearnFeatureContentComponent', () => {
  let component: LearnFeatureContentComponent
  let fixture: ComponentFixture<LearnFeatureContentComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearnFeatureContentComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(LearnFeatureContentComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
