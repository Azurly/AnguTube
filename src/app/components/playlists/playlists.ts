import { Component } from '@angular/core';
import { Playlist, PlaylistsService } from '../../services/playlists';

@Component({
  selector: 'app-playlists',
  imports: [],
  templateUrl: './playlists.html',
  styleUrl: './playlists.css',
})
export class Playlists {
  playlists: Playlist[] = [];

  constructor(private readonly playlistService: PlaylistsService) {}
  
  ngOnInit(): void {
    this.playlistService.getAllPlaylists().subscribe((data) => {
      this.playlists = data;
    });
  }
}
