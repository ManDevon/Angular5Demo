import { of } from "rxjs";
import { tap, map } from 'rxjs/operators';
 
function f1() {
    let observable = of(1, 2, 3);
    observable.subscribe({ next: num => console.log(num) });
}

f1();


function f6() {
    const observable = of(1, 2, 3);
    const newObservable = observable.pipe(
        tap(num => console.log(num)),
        map(num => 'hello world')
    );
    newObservable.subscribe(data => console.log(data));
}

f6()