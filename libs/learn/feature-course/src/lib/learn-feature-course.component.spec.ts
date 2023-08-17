import {ComponentFixture, TestBed} from '@angular/core/testing'
import {LearnFeatureCourseComponent} from './learn-feature-course.component'

describe('LearnFeatureCourseComponent', () => {
  let component: LearnFeatureCourseComponent
  let fixture: ComponentFixture<LearnFeatureCourseComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearnFeatureCourseComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(LearnFeatureCourseComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
