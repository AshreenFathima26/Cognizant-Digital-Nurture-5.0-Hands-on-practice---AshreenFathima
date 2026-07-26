import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css',

  // HO6 Step 67
  // This creates a NEW NotificationService instance
  // only for this component and its child components.
  providers: [NotificationService]

})
export class NotificationComponent {

  message = '';

  constructor(private notificationService: NotificationService) {

    this.message = this.notificationService.getMessage();

  }

}
