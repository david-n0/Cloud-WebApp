import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LogInService} from "../../services/log-in-service/log-in.service";
import {SearchNodeService} from "../../services/search-node-service/search-node.service";
import {Node} from "../../model";

@Component({
  selector: 'app-search-node',
  templateUrl: './search-node.component.html',
  styleUrls: ['./search-node.component.css']
})
export class SearchNodeComponent implements OnInit {

  deletePermission: Boolean
  startPermission: Boolean
  stopPermission: Boolean
  restartPermission: Boolean

  errorMessage: string = ''
  successMessage: string = ''

  nodes: Node[] = []
  endDate: string = ''
  public startDate: string = ''
  name: string = ''
  status: string = 'RUNNING,STOPPED'

  constructor(private route:Router, private service: SearchNodeService, private loginService: LogInService) {
    this.getAll()
    this.deletePermission = loginService.getPermissions().includes("can_destroy_nodes")
    this.startPermission = loginService.getPermissions().includes("can_start_nodes")
    this.stopPermission = loginService.getPermissions().includes("can_stop_nodes")
    this.restartPermission = loginService.getPermissions().includes("can_restart_nodes")
  }

  ngOnInit(): void {
  }

  getAll() {
    this.nodes = []
    this.successMessage = ''
    this.service.getAll().subscribe((response) => {
      this.successMessage = ''
      this.nodes = response
    }, error => {
      console.log(error)
      this.errorMessage = 'Something went wrong.'
    })
  }

  searchNode(){

    this.successMessage = ''

    this.service.searchNode(
      this.name,
      this.status,
      this.startDate,
      this.endDate,
    ).subscribe((response) => {
      this.errorMessage = ''
      this.nodes = response
    }, error => {
      this.errorMessage = 'Something went wrong.'
    })
  }

  deleteNode(node: Node){
    this.service.deleteNode(node.id).subscribe((wrapper => {
        this.getAll()
        this.successMessage = 'Delete successful!'
        this.errorMessage = ''
      }),
      error => {
        this.successMessage = ''
        this.errorMessage = 'Delete unsuccessful! Something went wrong.'
      })
  }


  start(node: Node) {
    this.service.start(node.id).subscribe((response) => {
      this.successMessage = 'Start successful'
      this.errorMessage = ''
      this.route.navigateByUrl('/nodes')
    }, error => {
      console.log(error)
      this.errorMessage = 'Something went wrong.'
      this.successMessage = ''
    })
  }

  stop(node: Node) {
    this.service.stop(node.id).subscribe((response) => {
      this.successMessage = 'Stop successful'
      this.errorMessage = ''
      this.route.navigateByUrl('/nodes')

    }, error => {
      console.log(error)
      this.errorMessage = 'Something went wrong.'
      this.successMessage = ''
    })
  }

  restart(node: Node) {
    this.service.restart(node.id).subscribe((response) => {
      this.successMessage = 'Restart successful'
      this.errorMessage = ''
      this.route.navigateByUrl('/nodes')

    }, error => {
      console.log(error)
      this.errorMessage = 'Something went wrong.'
      this.successMessage = ''
    })
  }


}
