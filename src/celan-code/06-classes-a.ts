(() => {

  type Gender = 'M' | 'F';

  class Person {
    constructor(
      public name: string, 
      public gender: Gender, 
      public birthdate: Date
    ) {
    }
  }

  const newPerson = new Person('Carla', 'F', new Date('1996-04-20'));
  console.log(newPerson)

  class User extends Person {
    public lastAccess: Date;
    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate)
      this.lastAccess = new Date()
    }

    checkCredentials() {
      return true;
    }
  }

  const newUser = new User('carla@', 'USER', 'Carla', 'F', new Date('1996-04-20'));
  console.log(newUser)

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) { 
      super(email, role, name, gender, birthdate);
    }
  }

  const userSettings = new UserSettings('/home/User/my', 'me', 'carla@google.com', 'ADMIN', 'Carla', 'F', new Date('1996-04-20'));

  console.log(userSettings.checkCredentials())

})();