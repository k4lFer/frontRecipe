export interface User {
    username: string;  // Nombre de usuario requerido
    email: string;     // Correo electrónico requerido
    password: string;  // Contraseña requerida
    firstName?: string; // Nombre de pila opcional
    lastName?: string;  // Apellido opcional
    dateOfBirth?: Date; 
  }