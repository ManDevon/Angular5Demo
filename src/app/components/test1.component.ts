import { Component, Input, Output ,EventEmitter} from '@angular/core'

@Component({
    selector: 'test1-component',
    styleUrls: ['./test1.component.scss'],
    templateUrl: 'test1.component.html'
})

export class Test1Component {
    public filed:string;
    @Input()
    username = "";
    @Output()
    change: EventEmitter<string> = new EventEmitter<string>();
    constructor(){
        this.filed="I'm child";
    }
    commit(){
        this.change.emit(this.filed);
    }
}