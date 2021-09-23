import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { AppService } from 'src/services/app.service';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: AppService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [LoginComponent]
    })
      .compileComponents();
    service = TestBed.inject(AppService)
    httpMock = TestBed.inject(HttpTestingController)
    httpClient = TestBed.inject(HttpClient)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain "Hack Ideas title"', () => {
    const titleElement: HTMLElement = fixture.nativeElement;
    expect(titleElement.textContent).toContain('HACK IDEAS');
  });

  it('should contain "input box"', () => {
    const titleElement: HTMLElement = fixture.nativeElement;
    expect(titleElement.getElementsByTagName('input'));
  });

  it('should contain "login button"', () => {
    const titleElement: HTMLElement = fixture.nativeElement;
    expect(titleElement.getElementsByTagName('button'));
  });
});
