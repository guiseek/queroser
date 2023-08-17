import {ComponentFixture, TestBed} from '@angular/core/testing'
import {ForumFeatureFaqComponent} from './forum-feature-faq.component'

describe('ForumFeatureFaqComponent', () => {
  let component: ForumFeatureFaqComponent
  let fixture: ComponentFixture<ForumFeatureFaqComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForumFeatureFaqComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ForumFeatureFaqComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
