import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { UserService } from 'src/app/internal/users/users.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-drawer',
  templateUrl: './user-drawer.component.html',
  styleUrls: ['./user-drawer.component.scss'],
})
export class UserDrawerComponent implements OnInit {
  @Input() public userId?: number = 0;

  public user: User = {} as User;
  public userForm: FormGroup = {} as FormGroup;
  public loading: boolean = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly $user: UserService,
    private $drawerRef: NzDrawerRef<string>
  ) {}

  ngOnInit() {
    this.createUserForm();
    this.userId && this.loadUser(this.userId);
  }

  public createUserForm(): void {
    this.userForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      bio: new FormControl(''),
    });
  }

  public deleteUser(): void {
    console.log('Deletando usuário:', this.user.id);
    this.$user.delete(this.user.id).subscribe(() => {
      this.$drawerRef.close('deleted');
    });
  }

  private loadUser(id: number): void {
    this.loading = true;
    this.$user.getById(id).subscribe({
      next: (user: User) => {
        this.user = user;
        this.userForm.patchValue(user);
        console.log('Usuário carregado com sucesso:', user);
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
}
