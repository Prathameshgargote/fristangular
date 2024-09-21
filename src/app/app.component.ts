import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istd } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'stdtask';

  stdArr:Array<Istd>=[{
    fname:'prt',
    lname:'ger',
    email:'prataa@gre',
    contact:123456789,
  }]
  
  todoArr:Array<string>=['dscxc','sadsdv']

  newtodo:string=''

  // @ViewChild('fname')fname!:ElementRef
  // @ViewChild('lname')lname!:ElementRef
  // @ViewChild('email')email!:ElementRef
  //  @ViewChild('contact')contact!:ElementRef
   @ViewChild('todo')todo!:ElementRef


constructor(){}

  ngOnInit(): void {
    
  }


  // onAdd(){

  //   let newstd:Istd={
  //     fname:this.fname.nativeElement.value,
  //     lname:this.lname.nativeElement.value,
  //     email:this.email.nativeElement.value,
  //     contact:this.contact.nativeElement.value,
  //   }
  //   console.log(newstd);
  //   this.stdArr.unshift(newstd)
  //   this.fname.nativeElement.value=''
  //   this.lname.nativeElement.value=''
  //   this.email.nativeElement.value=''
  //   this.contact.nativeElement.value=''

     

  //   }
    onadd1(fname:HTMLInputElement,lname:HTMLInputElement,email:HTMLInputElement,contact:HTMLInputElement){
      let newstd:Istd={
        fname:fname.value,
        lname:lname.value,
        email:email.value,
        contact:isNaN(+contact.value)?'-':+contact.value,
      }
      console.log(newstd);
      this.stdArr.unshift(newstd)
      
  
  }

  ontodo(){
    this.todoArr.push(this.todo.nativeElement.value)
    // if(this.newtodo!==''){
    //   this.todoArr.push(this.newtodo)

    // }
    console.log(this.todoArr);
    // this.todo.nativeElement.value=''
    

  }
  


}
