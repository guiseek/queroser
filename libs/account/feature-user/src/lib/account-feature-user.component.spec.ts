import {ComponentFixture, TestBed} from '@angular/core/testing'
import {AccountFeatureUserComponent} from './account-feature-user.component'

describe('AccountFeatureUserComponent', () => {
  let component: AccountFeatureUserComponent
  let fixture: ComponentFixture<AccountFeatureUserComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountFeatureUserComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(AccountFeatureUserComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
