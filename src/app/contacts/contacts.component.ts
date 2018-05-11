import { Component, OnInit, Input } from '@angular/core';

import { ContactService } from '../contact.service';


// import { Message } from '../message';

import { ViewChild } from '@angular/core';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  // styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  @ViewChild('gmap') gmapElement;
  // map: google.maps.Map;
  map;
  status;
  @Input() content;
  model: any = {};

  // model = new Message('Bob', 'peace@off.org', 'I wish angular css sourcemaps issue would be fixed');

  submitted = false;

  constructor (private contact: ContactService) {}

  onSubmit() {
    this.submitted = true;
    // if (this.myform.valid) {
      this.model.action = "notify";
      // console.log(this.model);
      this.contact.sendMail(this.model).subscribe(res => {
        // console.log(res);
        this.status = res;
      });
    // }
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model) }

  get response() { return JSON.stringify(this.status) }


  // constructor( private contact: ContactService ) {}

  ngOnInit() {

    this.contact.getContent().subscribe((res:any) => this.content = res.content);

    let mapProp = {
      center: new google.maps.LatLng(43.116101, 131.879411),
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    this.map.setOptions({styles: this.styles})

    let svg = '/assets/img/mapmarker.svg';

    let marker0 = new google.maps.Marker({
      position: {lat: 43.116101, lng: 131.879411},
      icon: svg,
      map: this.map
    });

  }

  styles = [
    {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": "7"
            },
            {
                "gamma": "1.37"
            },
            {
                "weight": "0.01"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#199bd7"
            },
            {
                "visibility": "on"
            }
        ]
    }
];

}
