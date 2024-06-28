import { Routes } from '@angular/router';
import { AddTripComponent } from './add-trip/add-trip.component';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { LoginComponent } from './login/login.component'; // Adjust the path as necessary
import { TripsListComponent } from './trips-list/trips-list.component'; // Adjust the path as necessary
import { HomeComponent } from './home/home.component'; // Adjust the path as necessary

export const routes: Routes = [
  { path: 'add-trip', component: AddTripComponent },
  { path: 'listtrips', component: TripsListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: TripListingComponent, pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/home', pathMatch: 'full' } // Wildcard route for a 404 page
];
