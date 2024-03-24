import { Component, OnInit } from '@angular/core';
import {ScheduleNodeService} from "../../services/schedule-node-service/schedule-node.service";

@Component({
  selector: 'app-schedule-node',
  templateUrl: './schedule-node.component.html',
  styleUrls: ['./schedule-node.component.css']
})
export class ScheduleNodeComponent implements OnInit {

  id: string = ''
  date: string = ''
  operation: string = ''
  errorMessage: string = ''
  successMessage: string = ''

  constructor(private service: ScheduleNodeService) {}

  ngOnInit(): void {
  }

  scheduleNode() {
    this.service.scheduleNode(this.id, this.date, this.operation).subscribe((response) => {
      this.errorMessage = ''
      this.successMessage = 'Scheduling successful.'
    }, error => {
      this.successMessage = ''
      this.errorMessage = 'Scheduling failed! Something went wrong.'
    })
  }
}
