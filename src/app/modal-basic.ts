import { Component } from "@angular/core";
import { FormControl, FormGroup, FormArray, Validators } from "@angular/forms";

import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "ngbd-modal-basic",
  templateUrl: "./modal-basic.html"
})
export class NgbdModalBasic {
  closeResult = "";

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
          this.resetForm();
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    this.resetForm();
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  // Reactive form start
  output: any;
  tempArr = ["Select Animal", "Lion", "Tiger", "Cheetah"];
  tempValue : any = [];

  angForm = new FormGroup({
    frm_ary_fa: new FormArray([])
  });

ngOnInit() {
  this.addControls()
}

  addControls() {
    if(this.tempValue.length === 0) {
       this.addNameField('')
    } else {
      for (let i= 0; i < this.tempValue.length; i++) {
      this.addNameField(this.tempValue[i]['name'])
    }
    }
    
  }

  get frm_ary_fa(): FormArray {
    return this.angForm.get("frm_ary_fa") as FormArray;
  }

  resetForm() {
    this.angForm.reset();
    this.frm_ary_fa.clear();
    this.angForm = new FormGroup({
      frm_ary_fa: new FormArray([])
    });
    this.addControls();
  }
  public strFA: string = "";
  public finalApprover = [];
  onFormSubmit(): void {
    console.log(this.angForm);
    this.output = this.angForm.value;
    this.tempValue = this.angForm.value['frm_ary_fa']
    console.log(this.tempValue)
    // for(let i = 0; i < this.names.length; i++) {
    //   console.log(this.names.at(i).value);
    // }
  }
  show() {
    this.strFA = "";
  }
  addNameField(val) {
    console.log('abc', val)
    this.frm_ary_fa.push(new FormControl(val, Validators.required));
    console.log(this.angForm);
    // this.angForm.patchValue({ frm_ary_fa: [ { id: 1, name: "Albania" } ] });
    // console.log(this.angForm);
  }

  deleteNameField(index: number) {
    if (this.frm_ary_fa.length !== 1) {
      this.frm_ary_fa.removeAt(index);
    }
  }

  move(shift, currentIndex) {
    // const rules = this.angForm.get('ruleData.rules') as FormArray;

    let newIndex: number = currentIndex + shift;
    if (newIndex === -1) {
      newIndex = this.frm_ary_fa.length - 1;
    } else if (newIndex == this.frm_ary_fa.length) {
      newIndex = 0;
    }
    const currentGroup = this.frm_ary_fa.at(currentIndex);
    this.frm_ary_fa.removeAt(currentIndex);
    this.frm_ary_fa.insert(newIndex, currentGroup);
  }

  // reactive form end

  //auto complete start
  keyword = "name";
  public countries = [
    {
      id: 1,
      name: "Albania"
    },
    {
      id: 2,
      name: "Belgium"
    },
    {
      id: 3,
      name: "Denmark"
    },
    {
      id: 4,
      name: "Montenegro"
    },
    {
      id: 5,
      name: "Turkey"
    },
    {
      id: 6,
      name: "Ukraine"
    },
    {
      id: 7,
      name: "Macedonia"
    },
    {
      id: 8,
      name: "Slovenia"
    },
    {
      id: 9,
      name: "Georgia"
    },
    {
      id: 10,
      name: "India"
    },
    {
      id: 11,
      name: "Russia"
    },
    {
      id: 12,
      name: "Switzerland"
    }
  ];
  selectEvent(item) {
    console.log(item)
    // do something with selected item
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something
  }
  //auto comple end

  remove_quotes(str) {
    return str.substring(1, str.length - 1);
  }
}
