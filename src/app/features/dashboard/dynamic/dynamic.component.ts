import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.scss'
})
export class DynamicComponent implements OnInit {
  data: string | null = null;

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    // Accessing the query parameter 'data'
    this.route.queryParams.subscribe((params) => {
      this.data = params['data'];
      console.log('Received data:', this.data);
    });
  }
}
