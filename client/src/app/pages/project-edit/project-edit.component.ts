// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { ProjectService } from '../../services/project.service';
import { AllocateService } from '../../services/allocate.service';
import { FacultyService } from '../../services/faculty.service';
import { StudentService } from '../../services/student.service';
// Import Models
import { Project } from '../../domain/projectmanagement_db/project';
import { Allocate } from '../../domain/projectmanagement_db/allocate';
import { Faculty } from '../../domain/projectmanagement_db/faculty';
import { Student } from '../../domain/projectmanagement_db/student';

// START - USED SERVICES
/**
* projectService.create
*	@description CRUD ACTION create
*
* projectService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* projectService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* allocateService.findByproject
*	@description CRUD ACTION findByproject
*	@param Objectid key Id of model to search for
*
* facultyService.findByproject
*	@description CRUD ACTION findByproject
*	@param Objectid key Id of model to search for
*
* studentService.findByproject
*	@description CRUD ACTION findByproject
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Project
 */
@Component({
    selector: 'app-project-edit',
    templateUrl: 'project-edit.component.html',
    styleUrls: ['project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
    item: Project;
    externalAllocate_project: Allocate[];
    externalFaculty_project: Faculty[];
    externalStudent_project: Student[];
    model: Project;
    formValid: Boolean;

    constructor(
    private projectService: ProjectService,
    private allocateService: AllocateService,
    private facultyService: FacultyService,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Project();
        this.externalAllocate_project = [];
        this.externalFaculty_project = [];
        this.externalStudent_project = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.projectService.get(id).subscribe(item => this.item = item);
                this.allocateService.findByProject(id).subscribe(list => this.externalAllocate_project = list);
                this.facultyService.findByProject(id).subscribe(list => this.externalFaculty_project = list);
                this.studentService.findByProject(id).subscribe(list => this.externalStudent_project = list);
            }
            // Get relations
        });
    }


    /**
     * Save Project
     *
     * @param {boolean} formValid Form validity check
     * @param Project item Project to save
     */
    save(formValid: boolean, item: Project): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.projectService.update(item).subscribe(data => this.goBack());
            } else {
                this.projectService.create(item).subscribe(data => this.goBack());
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



