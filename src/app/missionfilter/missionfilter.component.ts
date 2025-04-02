import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacexService } from '../spacex.service';
import { Mission } from '../mission.model';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  years: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  missions: Mission[] = [];

  filters: {
    year: string;
    launchSuccess: boolean | '';
    landSuccess: boolean | '';
  } = {
    year: '',
    launchSuccess: '',
    landSuccess: ''
  };

  resetFilters() {
    this.filters = {
      year: '',
      launchSuccess: '',
      landSuccess: ''
    };
    this.spacexService.getFilteredMissions().subscribe((data: Mission[]) => {
      this.missions = data;
    });
  }

  constructor(private spacexService: SpacexService) {}

  applyFilters(update: Partial<typeof this.filters>) {
    this.filters = { ...this.filters, ...update };

    const { year, launchSuccess, landSuccess } = this.filters;
    this.spacexService.getFilteredMissions(year, launchSuccess, landSuccess).subscribe((data: Mission[]) => {
      this.missions = data;
      console.log('📊 Filtered Results:', this.filters, data);
    });
  }
}
