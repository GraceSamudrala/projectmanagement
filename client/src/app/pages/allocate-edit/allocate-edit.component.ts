// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { AllocateService } from '../../services/allocate.service';
import { StudentService } from '../../services/student.service';
import { ProjectService } from '../../services/project.service';
import { FacultyService } from '../../services/faculty.service';
// Import Models
import { Allocate } from '../../domain/projectmanagement_db/allocate';
import { Faculty } from '../../domain/projectmanagement_db/faculty';
import { Project } from '../../domain/projectmanagement_db/project';
import { Student } from '../../domain/projectmanagement_db/student';

// START - USED SERVICES
/**
* allocateService.create
*	@description CRUD ACTION create
*
* allocateService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* allocateService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* studentService.list
*	@description CRUD ACTION list
*
* projectService.list
*	@description CRUD ACTION list
*
* facultyService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Allocate
 */
@Component({
    selector: 'app-allocate-edit',
    templateUrl: 'allocate-edit.component.html',
    styleUrls: ['allocate-edit.component.css']
})
export class AllocateEditComponent implements OnInit {
    item: Allocate;
    listFaculty: Faculty[];
    listProject: Project[];
    listStudent: Student[];
    model: Allocate;
    formValid: Boolean;

    constructor(
    private allocateService: AllocateService,
    private studentService: StudentService,
    private projectService: ProjectService,
    private facultyService: FacultyService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Allocate();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.allocateService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.facultyService.list().subscribe(list => this.listFaculty = list);
            this.projectService.list().subscribe(list => this.listProject = list);
            this.studentService.list().subscribe(list => this.listStudent = list);
        });
    }


    /**
     * Save Allocate
     *
     * @param {boolean} formValid Form validity check
     * @param Allocate item Allocate to save
     */
    save(formValid: boolean, item: Allocate): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.allocateService.update(item).subscribe(data => this.goBack());
            } else {
                this.allocateService.create(item).subscribe(data => this.goBack());
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



