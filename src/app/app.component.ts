// Imports
import { Headers, Http, Response, ResponseContentType } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, ElementRef, Input } from '@angular/core';

// Imports services
import { PatientService } from './services/patient.service';

@Component({
  selector: 'epons-patient-time-spent-dashboard',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private patientService: PatientService = null;

  public patientId: string = null;

  public dataMinutes: number[] = null;
  public dataHours: number[] = null;

  constructor(private http: Http, private el: ElementRef) {
    this.patientService = new PatientService(http);

  }

  ngOnInit(): void {

    this.patientId = this.el.nativeElement.getAttribute('patientId');

    this.patientService.timeSpent(this.patientId).subscribe((result) => {
      this.dataMinutes = result;
      this.dataHours = this.dataMinutes.map((x) => (Math.floor(x / 60)));
    });
  }
}
