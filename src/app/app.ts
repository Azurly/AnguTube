import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Sidebar } from "./components/sidebar/sidebar";
import { Searchbar } from "./components/searchbar/searchbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Sidebar, Searchbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AnguTube');
}
