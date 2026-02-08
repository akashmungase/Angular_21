import { Component, OnInit, signal } from '@angular/core';
import { Common } from '../../core/services/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {

  users = signal<any[]>([]);

  constructor(private commonService: Common) {}

  ngOnInit(): void {
    this.commonService.getUserData().subscribe({
      next: (data: any) => {
        this.users.set(data);
      },
      error: (error) => {
        console.error('Error fetching user data:', error);
      }
    });
  }

}
