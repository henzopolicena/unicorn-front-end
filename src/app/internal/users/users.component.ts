import { Component } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';

import { User } from 'src/app/shared/models/user.model';
import { UserService } from './users.service';
import { UserDrawerComponent } from 'src/app/shared/components/drawers/user-drawer/user-drawer.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  public users: User[] = [];
  public loading: boolean = false;
  public loadingButton: boolean = false;

  constructor(
    private readonly $user: UserService,
    private readonly $drawer: NzDrawerService
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  public loadUsers(): void {
    this.loading = true;
    this.$user.getAll().subscribe({
      next: (users: User[]) => {
        this.users = users;
      },
      error: (error: any) => {
        console.error('Ocorreu um erro ao buscar os usuários:', error);
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  public showUserDrawer(id?: number): void {
    this.loadingButton = true;
    this.$drawer
      .create({
        nzTitle: id ? 'Detalhes do Usuário' : 'Criar Usuário',
        nzWidth: '500px',
        nzContent: UserDrawerComponent,
        nzContentParams: {
          userId: id,
        },
      })
      .afterClose.subscribe((res) => {
        if (res) {
          res === 'deleted' && this.loadUsers();
          this.loadingButton = false;
        } else {
          this.loadingButton = false;
        }
      });
  }
}
