import { Injectable } from '@angular/core';

export interface Playlist {
  id: string;
  title: string;
  description: string;
}
@Injectable({
  providedIn: 'root',
})
export class Playlists {
  
}
