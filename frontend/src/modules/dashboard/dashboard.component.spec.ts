import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { AppService } from 'src/services/app.service';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let service: AppService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [DashboardComponent]
    })
      .compileComponents();
    service = TestBed.inject(AppService)
    httpMock = TestBed.inject(HttpTestingController)
    httpClient = TestBed.inject(HttpClient)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have list of challenges', ()=>{
    const dashboardElement: HTMLElement = fixture.nativeElement;
    expect(dashboardElement.getElementsByClassName('challenges-container'));
    expect(dashboardElement.textContent).toContain('Live Challenges');
    expect(dashboardElement.getElementsByClassName('card-container'));
  })

  it('should have filters', ()=>{
    const dashboardElement: HTMLElement = fixture.nativeElement;
    expect(dashboardElement.getElementsByClassName('page-header'));
    expect(dashboardElement.textContent).toContain('Filters');
  })

  it('filter should have sort and tags', ()=>{
    const dashboardElement: HTMLElement = fixture.nativeElement;
    expect(dashboardElement.textContent).toContain('Sort');
    expect(dashboardElement.getElementsByTagName('radio'));
    expect(dashboardElement.textContent).toContain('Tags');
  })  
});
