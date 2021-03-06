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
 *  FOR CUSTOMIZE allocateBaseService PLEASE EDIT ../allocate.service.ts
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
import { Allocate } from '../../domain/projectmanagement_db/allocate';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../allocate.service.ts
 */

/*
 * SCHEMA DB allocate
 *
	{
		fname: {
			type: 'String'
		},
		pname: {
			type: 'String'
		},
		sname: {
			type: 'String'
		},
		validate: {
			type: 'Boolean'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		faculty: {
			type: Schema.ObjectId,
			ref : "allocate"
		},
		project: {
			type: Schema.ObjectId,
			ref : "allocate"
		},
		student: {
			type: Schema.ObjectId,
			ref : "allocate"
		},
	}
 *
 */
@Injectable()
export class AllocateBaseService {

    contextUrl: string = environment.endpoint + '/allocate';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * allocateService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Allocate): Observable<Allocate> {
        return this.http
            .post<Allocate>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * allocateService.delete
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
    * allocateService.findByfaculty
    *   @description CRUD ACTION findByfaculty
    *   @param Objectid key Id of model to search for
    *
    */
    findByFaculty(id: string): Observable<Allocate[]> {
        return this.http
            .get<Allocate[]>(this.contextUrl + '/findByfaculty/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * allocateService.findByproject
    *   @description CRUD ACTION findByproject
    *   @param Objectid key Id of model to search for
    *
    */
    findByProject(id: string): Observable<Allocate[]> {
        return this.http
            .get<Allocate[]>(this.contextUrl + '/findByproject/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * allocateService.findBystudent
    *   @description CRUD ACTION findBystudent
    *   @param Objectid key Id of model to search for
    *
    */
    findByStudent(id: string): Observable<Allocate[]> {
        return this.http
            .get<Allocate[]>(this.contextUrl + '/findBystudent/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * allocateService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<Allocate> {
        return this.http
            .get<Allocate>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * allocateService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Allocate[]> {
        return this.http
            .get<Allocate[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * allocateService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Allocate): Observable<Allocate> {
        return this.http
            .post<Allocate>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs


    /**
    * allocateService.validate
    *   @description This API is used to validate
    *   @param String id is of the allocation
    *   @returns Boolean
    *
    */
    validate(...params: any[]): Observable<any> {
        return this.http
            .post<any>(this.contextUrl + '/{id}/validate', {})
            .pipe(
                map(response => response)
            );
    }

}
