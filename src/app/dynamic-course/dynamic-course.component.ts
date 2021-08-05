import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-course',
  templateUrl: './dynamic-course.component.html',
  styleUrls: ['./dynamic-course.component.css']
})
export class DynamicCourseComponent implements OnInit {

  constructor(fb : FormBuilder) {
    // To build complex forms we can use FormBuilder. Say like the below form,
    /*
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      contact: new FormGroup({
        email: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required),
      }),
      topics: new FormArray([])
    });
    */
    
    // Using FormBuilder
    /*
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    })
    */
   }

  public form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      topics : new FormArray([

      ])
    })
    
    let savedTopics : string[] = JSON.parse(localStorage.getItem('topics'))
    if(savedTopics === undefined)
      localStorage.setItem('topics', JSON.stringify([]))
    else
      savedTopics.forEach((topic => this.topics.push(new FormControl(topic))))          
  }

  addTopics(topics: HTMLInputElement) {
    this.topics.push(new FormControl(topics.value))
    let savedTopics = JSON.parse(localStorage.getItem('topics'))
    savedTopics.push(topics.value)
    localStorage.setItem('topics', JSON.stringify(savedTopics))
    topics.value = ""  
  }  

  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic)
    this.topics.removeAt(index)
    let savedTopics = JSON.parse(localStorage.getItem('topics'))    
    savedTopics = savedTopics.filter(top => top !== topic.value)
    localStorage.setItem('topics', JSON.stringify(savedTopics))
  }

  get topics() : FormArray {
    return (this.form.get('topics') as FormArray)
  }
}
