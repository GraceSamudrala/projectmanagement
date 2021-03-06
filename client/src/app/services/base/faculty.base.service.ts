/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE facultyBaseService PLEASE EDIT ../faculty.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Faculty } from '../../domain/projectmanagement_db/faculty';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../faculty.service.ts
 */

/*
 * SCHEMA DB faculty
 *
	{
		doj: {
			type: 'Date'
		},
		name: {
			type: 'String'
		},
		special: {
			type: 'String'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		faculty: {
			type: Schema.ObjectId,
			ref : "allocate"
		},
		project: [{
			type: Schema.ObjectId,
			ref : "faculty"
		}],
	}
 *
 */
@Injectable()
export class FacultyBaseService {

    contextUrl: string = environment.endpoint + '/faculty';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * facultyService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Faculty): Observable<Faculty> {
        return this.http
            .post<Faculty>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * facultyService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    remove(id: string): Observable<void> {
        return this.http
            .delete<void>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * facultyService.findByproject
    *   @description CRUD ACTION findByproject
    *   @param Objectid key Id of model to search for
    *
    */
    findByProject(id: string): Observable<Faculty[]> {
        return this.http
            .get<Faculty[]>(this.contextUrl + '/findByproject/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * facultyService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<Faculty> {
        return this.http
            .get<Faculty>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * facultyService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Faculty[]> {
        return this.http
            .get<Faculty[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * facultyService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Faculty): Observable<Faculty> {
        return this.http
            .post<Faculty>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}
