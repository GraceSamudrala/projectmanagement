import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { FacultyService } from '../../services/faculty.service';
// Import Models
import { Faculty } from '../../domain/projectmanagement_db/faculty';

// START - USED SERVICES
/**
* facultyService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* facultyService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Faculty
 * @class FacultyListComponent
 */
@Component({
    selector: 'app-faculty-list',
    templateUrl: './faculty-list.component.html',
    styleUrls: ['./faculty-list.component.css']
})
export class FacultyListComponent implements OnInit {
    list: Faculty[];
    search: any = {};
    idSelected: string;
    constructor(
        private facultyService: FacultyService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.facultyService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Faculty to remove
     *
     * @param {string} id Id of the Faculty to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Faculty
     */
    deleteItem() {
        this.facultyService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
