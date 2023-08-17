import {ComponentFixture, TestBed} from '@angular/core/testing'
import {ForumFeatureShellComponent} from './forum-feature-shell.component'

describe('ForumFeatureShellComponent', () => {
  let component: ForumFeatureShellComponent
  let fixture: ComponentFixture<ForumFeatureShellComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForumFeatureShellComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ForumFeatureShellComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
