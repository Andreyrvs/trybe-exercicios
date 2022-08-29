// export default function progressNotification(
//   message: string,
//   notificationType: string,
// ): void {
//   switch (notificationType) {
//     case 'Email':
//       console.log('Email: ', message);
//       break;
//     case 'Phone':
//       console.log('Phone: ', message);
//       break;
//     case 'Console':
//       console.log('Console: ', message);
//       break;
//     default:
//       console.log(message);
//       break;
//   }
// }

type Notificationn = { type: string, send: (message: string) => void };

const consoleNotification: Notificationn = {
  type: 'Console',
  send: (message) => console.log('Console: ', message),
};

const emailNotification: Notificationn = {
  type: 'Email',
  send: (message) => console.log('Email: ', message),
};

const phoneNotification: Notificationn = {
  type: 'Phone',
  send: (message) => console.log('Phone: ', message),
};

const notifications: Notificationn[] = [
  consoleNotification,
  emailNotification,
  phoneNotification,
];

export default function progressNotification(
  message: string,
  type_ = 'Console',
  notificationsArray: Notificationn[] = notifications,
): void {
  notificationsArray.forEach((notification) => {
    if (notification.type === type_) {
      notification.send(message);
    }
  });
}