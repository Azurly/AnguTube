import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';

export interface Playlist {
  id: number;
  title: string;
  thumbnailUrl: string;
  duration: string;
  uploadTime: string;
  views: string;
  author: string;
  videoUrl: string;
  description: string;
  subscriber: string;
  isLive: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class PlaylistsService {
    private http = inject(HttpClient);
    private playlists = signal<Playlist[]>([]);
    
    readonly url = 'https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json';

    constructor() {
    }

    getAllPlaylists(): Observable<Playlist[]>   {
        return this.http.get<Playlist[]>(this.url).pipe(
      tap((playlists: Playlist[]) => this.playlists.set(playlists))
    );

    }
}
