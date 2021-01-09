import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/services/map.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  lat: string = '';
  // tslint:disable-next-line: no-inferrable-types
  lng: string = '';
  // tslint:disable-next-line: no-inferrable-types
  title: string = '';
  location: object;
  constructor(private map: MapService) { }

  ngOnInit() {
    this.map.getLocation().subscribe(data => {
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;
      this.title = data.country_name;
    });
  }

}
