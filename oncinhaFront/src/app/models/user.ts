
export class User {

  name!: string;
  email!: string;
  password!: string;
  profile!: number[]; 
  creationDate!: string; 

  constructor(){}

  constructorAllArgs(
    { name, email, password, profile, creationDate }: { name: string; email: string; password: string; profile: number[]; creationDate?: string; }  ) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.profile = profile;
        this.creationDate = creationDate || new Date().toLocaleDateString('pt-BR');
      }


}

