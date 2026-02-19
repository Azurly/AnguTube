import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Searchbar } from "../searchbar/searchbar";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, Searchbar],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

}
