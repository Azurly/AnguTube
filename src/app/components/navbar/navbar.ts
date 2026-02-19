import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Searchbar } from "../searchbar/searchbar";
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, Searchbar],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  auth = inject(Auth);
}
