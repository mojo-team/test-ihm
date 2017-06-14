import { Component, OnInit, AfterContentInit, ViewEncapsulation } from '@angular/core'
import { Map, Marker, MapMouseEvent,NavigationControl,GeolocateControl } from 'mapbox-gl'

import { MapService } from './map.service'


@Component({
  encapsulation: ViewEncapsulation.None,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  currentUser: string
  marker: Marker
  coords
  markerId: number
  data: Comment
  comments: Comment[]
  modal: HTMLElement
  showError: boolean
  showModal: boolean
  listComment: Array<String>
  listUser: Array<String>
  clicked: boolean
  myText: string
  thisMarker:string
  divId:string
  newCom

  constructor(
    private mapService: MapService,


  ) { }

  ngOnInit() {
    this.currentUser = localStorage.getItem('currentUser')
    this.showError = false
    this.showModal = false
    this.clicked = false
    this.myText = ''

    const map = new Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v9',
      zoom: 15,
       pitch: 45,
    bearing: -17.6,
    center: [2.516543,48.972348]

    })
// Add zoom and rotation controls to the map.
map.addControl(new NavigationControl());
let optionLocateControle={
  positionOptions:{enableHighAccuracy:true,timeout:6000},
  watchPosition: true
}
map.addControl(new GeolocateControl(optionLocateControle))
    this.mapService.map = map

    this.loadBuilding()
    this.locate()
  }

locate(){
    this.mapService.map.on('geolocate ', (position) =>  {
      console.log(position)
    })
}

   loadBuilding(){
     this.mapService.map.on('load', () =>  {
    this.mapService.map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
            'fill-extrusion-color': '#aaa',
            'fill-extrusion-height': {
                'type': 'identity',
                'property': 'height'
            },
            'fill-extrusion-base': {
                'type': 'identity',
                'property': 'min_height'
            },
            'fill-extrusion-opacity': .6
        }
    });
});
   }
 
  

}
