import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TagsComponent } from './tags.component';
import { AppService } from 'src/services/app.service';
import { HttpClient } from '@angular/common/http';

describe('TagsComponent', () => {
  let component: TagsComponent;
  let service: AppService;
  let fixture: ComponentFixture<TagsComponent>;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TagsComponent]
    })
      .compileComponents();
    service = TestBed.inject(AppService)
    httpMock = TestBed.inject(HttpTestingController)
    httpClient = TestBed.inject(HttpClient)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
