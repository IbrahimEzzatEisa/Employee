import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(
    private service: EmployeeService ,
    private firestore: AngularFirestore ,
    private toastr: ToastrService) { }

  ngOnInit() {
 this.restForm();
  }
restForm( form?: NgForm) {
  if(form != null)
  form.resetForm();
  this.service.formData = {
  id: null ,
  fullName: '' ,
  position: '' ,
  mobile: '',
  empCode: '',
  }
}
onSubmit(form: NgForm){
  let data = Object.assign({}, form.value);
  delete data.id;
  if (form.value.id==null )
  this.firestore.collection('visitor').add(data);
  else
this.firestore.doc('visitor/'+ form.value.id).update(data);
this.toastr.info('Update Successfully' , 'Thanks')

  this.restForm(form);
  this.toastr.success("Submitted successfully" , "Employees . Register");

}
}
