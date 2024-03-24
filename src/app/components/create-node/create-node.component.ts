import { Component, OnInit } from '@angular/core';
import {CreateNodeService} from "../../services/create-node-service/create-node.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-node',
  templateUrl: './create-node.component.html',
  styleUrls: ['./create-node.component.css']
})
export class CreateNodeComponent implements OnInit {

  name: string = ''
  errorMessage: string = ''
  successMessage: string = ''

  constructor(private route:Router, private service: CreateNodeService) { }

  ngOnInit(): void {
  }

  createNode() {
    this.service.createNode(this.name).subscribe((response) => {
      this.errorMessage = ''
      this.successMessage = 'Successfully created a new node!'
    }, error => {
      console.log(error)
      this.successMessage = ''
      this.errorMessage = 'Failed create! Something went wrong.'
    })
  }

}
