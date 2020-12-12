// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { FacultyService } from '../../services/faculty.service';
import { AllocateService } from '../../services/allocate.service';
import { ProjectService } from '../../services/project.service';
// Import Models
import { Faculty } from '../../domain/projectmanagement_db/faculty';
import { Allocate } from '../../domain/projectmanagement_db/allocate';
import { Project } from '../../domain/projectmanagement_db/project';

// START - USED SERVICES
/**
* facultyService.create
*	@description CRUD ACTION create
*
* facultyService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* facultyService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* allocateService.findByfaculty
*	@description CRUD ACTION findByfaculty
*	@param Objectid key Id of model to search for
*
* projectService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Faculty
 */
@Component({
    selector: 'app-faculty-edit',
    templateUrl: 'faculty-edit.component.html',
    styleUrls: ['faculty-edit.component.css']
})
export class FacultyEditComponent implements OnInit {
    item: Faculty;
    listProject: Project[];
    externalAllocate_faculty: Allocate[];
    model: Faculty;
    formValid: Boolean;

    constructor(
    private facultyService: FacultyService,
    private allocateService: AllocateService,
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Faculty();
        this.externalAllocate_faculty = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.facultyService.get(id).subscribe(item => this.item = item);
                this.allocateService.findByFaculty(id).subscribe(list => this.externalAllocate_faculty = list);
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
     * Add Project from Faculty
     *
     * @param {string} id Id of Project to add in this.item.project array
     */
    addProject(id: string) {
        if (!this.item.project)
            this.item.project = [];
        this.item.project.push(id);
    }

    /**
     * Remove an Project from a Faculty
     *
     * @param {number} index Index of Project in this.item.project array
     */
    removeProject(index: number) {
        this.item.project.splice(index, 1);
    }

    /**
     * Save Faculty
     *
     * @param {boolean} formValid Form validity check
     * @param Faculty item Faculty to save
     */
    save(formValid: boolean, item: Faculty): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.facultyService.update(item).subscribe(data => this.goBack());
            } else {
                this.facultyService.create(item).subscribe(data => this.goBack());
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



