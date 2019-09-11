import { Component, OnInit, OnDestroy ,ReflectiveInjector, Input } from '@angular/core';
import { HeroService } from './services/hero.service'
import MakeDoor from './injector/inj.injector.makeDoor';
import injDemo1 from './injector/inj.injector'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  constructor(
    private heroService: HeroService
  ){}
  heros: Array<{ id: number; name: string }>;
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
  
  title = 'Hello world';
  username1 = 'John';
  val = 'John';
  items = [
    {John: 'John', sex:'男'},
    {Devon :'Poly', sex:'男'},
    {Lucy: 'Lucy', sex: '女'}
  ];
  ngOnInit():void {
    let injector = ReflectiveInjector.resolveAndCreate([injDemo1,MakeDoor]);
    let door = injector.get(injDemo1);
    door.build();
    this.heros = this.heroService.getHeros()
    console.log("heros:"+ JSON.stringify(this.heros));
  }
  childEmit(event){
    console.log(event+"#######");
  }
}


