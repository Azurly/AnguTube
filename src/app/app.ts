import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Sidebar } from "./components/sidebar/sidebar";
import { Playlists } from "./components/playlists/playlists";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Sidebar, Playlists],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AnguTube');
}
