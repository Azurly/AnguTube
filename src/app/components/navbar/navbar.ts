import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Searchbar } from "../searchbar/searchbar";
import { Users } from '../../services/users';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, Searchbar],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  user = inject(Users);
}
