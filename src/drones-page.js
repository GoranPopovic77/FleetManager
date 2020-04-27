import {Page} from './framework/page.js';
import {DataTable} from './ui/data-table.js';
import {GoogleMap} from './ui/google-map.js';
import {application} from './app.js';

export class DronesPage extends Page {
    
    constructor() {
        super('Drones');
    }
    
    createElement() {
        super.createElement();
        
        let headers = 'License,Model,Base,Air Time Hours'.split(',');
        let t = new DataTable(headers, application.dataService.drones);
        t.appendToElement(this.element);
        let centerOfMap = {lat: 40.783661, lng: -73.965883}; 
        let map = new GoogleMap(centerOfMap, application.dataService.drones);
        map.appendToElement(this.element);


    }
    
    getElementString() {
        return '<div style="margin: 20px;"><h3>Drones</h3></div>';
    }
}