import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private snack:MatSnackBar) { }

  public user={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
  };

  ngOnInit(): void {
  }


  formSubmit(){
    console.log(this.user);
    if(this.user.username=='' ||this.user.username==null){
      //alert('User is required !!');
    this.snack.open('Username is required !!','',{
        duration:3000,
       // verticalPosition:'top',
        //horizontalPosition:'right',
      });
      return;
    }
    this.userService.addUser(this.user).subscribe(
      (data)=>{
           console.log(data);
           //alert('success')
           Swal.fire('Success','user is registered','success');
      },
      (error)=>{
          console.log(error);
          this.snack.open('something went wrong !!','',{
            duration:3000,
           // verticalPosition:'top',
            //horizontalPosition:'right',
          });
      }
    )

  }
}
