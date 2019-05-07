import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { Album } from '../album.model';
import { Song } from '../song.model';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.css']
})
export class DettagliComponent implements OnInit {

 @Input() album : Album[];

  constructor() { }

  ngOnInit() {
  }

}
