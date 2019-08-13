import { Injectable } from '@angular/core';
import MakeDoor  from './inj.injector.makeDoor'

@Injectable()
export default class injDemo1{
    constructor(private door: MakeDoor){
    }
    build(){
        this.door.complateDoor();
    }
}