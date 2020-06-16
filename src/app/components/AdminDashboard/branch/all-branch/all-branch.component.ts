import { Component, OnInit } from '@angular/core';
import {BranchService} from '../../../../../Services/BranchService/branch.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-all-branch',
  templateUrl: './all-branch.component.html',
  styleUrls: ['./all-branch.component.css']
})
export class AllBranchComponent implements OnInit {

  constructor(private branch :BranchService ,private router:Router) { }
branches=[{
  "id":"0",
  "name":"",
  "mail":"",
  "phone":""
}]

bid
getid(id)
{
   console.log("to get the clicked id ")
   console.log(id)

   
          this.branch.getByBranchId(id).subscribe(
            res=>{
              console.log("success");
           
              localStorage.setItem("branchval",res.branchId)
              localStorage.setItem("branchname",res.branchName)
              this.router.navigateByUrl('/branch/edit');
            }
            ,err=>{
              console.log("error")
            }
          )
        
}
  ngOnInit(): void {
    this.GetAllBranches();
  }
  deletebranchs(i)
  {
    console.log("the id to del")
    var id =this.branches[i].id;
    console.log(this.branches[i].id)
    this.branch.DeleteByBranchId(id).subscribe(
      res=>{console.log("success"),
    err=>{console.log("error part"),
  console.log(err)}}
    )
  }
GetAllBranches()
{
  this.branch.getAll().subscribe(
    res=>{
      console.log("the response")
      console.log(res)
      for(let i=0;i<res.length;i++)
      {
       
        this.branches.push(
          {"id":res[i].branchId,
            "name":res[i].branchName,
        "mail":res[i].branchEmail,
        "phone":res[i].branchTelephone
        })

      }
      console.log(this.branches)
    },
    err=>
    {
console.log("th error ")
console.log(err)
    }
  )
}
}
