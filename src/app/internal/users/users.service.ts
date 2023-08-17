import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/app/shared/services/crud.service';
import { User } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService extends CrudService<User> {
  constructor(http: HttpClient) {
    super(http, environment.API_URL + '/users');
  }
}
