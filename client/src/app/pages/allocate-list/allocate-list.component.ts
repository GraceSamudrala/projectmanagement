import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { AllocateService } from '../../services/allocate.service';
// Import Models
import { Allocate } from '../../domain/projectmanagement_db/allocate';

// START - USED SERVICES
/**
* allocateService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* allocateService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Allocate
 * @class AllocateListComponent
 */
@Component({
    selector: 'app-allocate-list',
    templateUrl: './allocate-list.component.html',
    styleUrls: ['./allocate-list.component.css']
})
export class AllocateListComponent implements OnInit {
    list: Allocate[];
    search: any = {};
    idSelected: string;
    constructor(
        private allocateService: AllocateService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.allocateService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Allocate to remove
     *
     * @param {string} id Id of the Allocate to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Allocate
     */
    deleteItem() {
        this.allocateService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
