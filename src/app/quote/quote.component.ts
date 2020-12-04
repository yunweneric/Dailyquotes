import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
collection: any;
factor: any;
  constructor(private quote: QuotesService) {
   }

  ngOnInit(): void {
    this.quote.getquotes().subscribe(data =>{
      this.factor = Math.floor(Math.random() * 1000);
      this.collection = data;
      this.collection = this.collection[this.factor];

      console.log(this.factor);
      console.log(this.collection[this.factor]);
      
    })


  }
  

}
