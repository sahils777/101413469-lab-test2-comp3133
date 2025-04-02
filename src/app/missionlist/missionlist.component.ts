import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SpacexService } from '../spacex.service';
import { Mission } from '../mission.model';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  styleUrls: ['./missionlist.component.css'],
  templateUrl: './missionlist.component.html'
})
export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];

  constructor(private spacexService: SpacexService, private router: Router) {}

  ngOnInit(): void {
    this.spacexService.getAllMissions().subscribe((data: Mission[]) => {
      this.missions = data;
      console.log('✅ Missions loaded:', data);
    });
  }

  viewDetails(id: number) {
    this.router.navigate(['/mission', id]);
  }
}
