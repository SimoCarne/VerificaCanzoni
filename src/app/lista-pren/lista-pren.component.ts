import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { Album } from '../album.model';
import { Song } from '../song.model';

@Component({
  selector: 'app-lista-pren',
  templateUrl: './lista-pren.component.html',
  styleUrls: ['./lista-pren.component.css']
})
export class ListaPrenComponent implements OnInit {

    @Input() song : Song[];

  constructor() { }

  ngOnInit() {
  }

}
