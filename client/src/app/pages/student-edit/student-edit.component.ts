// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { StudentService } from '../../services/student.service';
import { AllocateService } from '../../services/allocate.service';
import { ProjectService } from '../../services/project.service';
// Import Models
import { Student } from '../../domain/projectmanagement_db/student';
import { Project } from '../../domain/projectmanagement_db/project';
import { Allocate } from '../../domain/projectmanagement_db/allocate';

// START - USED SERVICES
/**
* studentService.create
*	@description CRUD ACTION create
*
* studentService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* studentService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* allocateService.findBystudent
*	@description CRUD ACTION findBystudent
*	@param Objectid key Id of model to search for
*
* projectService.list
*	@description CRUD ACTION list
*
* allocateService.validate
*	@description This API is used to validate
*	@param String id is of the allocation
*	@returns Boolean
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Student
 */
@Component({
    selector: 'app-student-edit',
    templateUrl: 'student-edit.component.html',
    styleUrls: ['student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
    item: Student;
    listProject: Project[];
    externalAllocate_student: Allocate[];
    model: Student;
    formValid: Boolean;

    constructor(
    private studentService: StudentService,
    private allocateService: AllocateService,
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Student();
        this.externalAllocate_student = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.studentService.get(id).subscribe(item => this.item = item);
                this.allocateService.findByStudent(id).subscribe(list => this.externalAllocate_student = list);
            }
            // Get relations
            this.projectService.list().subscribe(list => this.listProject = list);
        });
    }

    /**
     * Check if an Project is in  project
     *
     * @param {string} id Id of Project to search
     * @returns {boolean} True if it is found
     */
    containProject(id: string): boolean {
        if (!this.item.project) return false;
        return this.item.project.indexOf(id) !== -1;
    }

    /**
     * Add Project from Student
     *
     * @param {string} id Id of Project to add in this.item.project array
     */
    addProject(id: string) {
        if (!this.item.project)
            this.item.project = [];
        this.item.project.push(id);
    }

    /**
     * Remove an Project from a Student
     *
     * @param {number} index Index of Project in this.item.project array
     */
    removeProject(index: number) {
        this.item.project.splice(index, 1);
    }

    /**
     * Save Student
     *
     * @param {boolean} formValid Form validity check
     * @param Student item Student to save
     */
    save(formValid: boolean, item: Student): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.studentService.update(item).subscribe(data => this.goBack());
            } else {
                this.studentService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



