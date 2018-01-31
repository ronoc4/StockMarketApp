import { Component, OnInit } from '@angular/core';
import {TRENDING} from '../animations/movable.animation';
import {StockService} from '../services/stock.service';

@Component({
  selector: 'app-stack-dashboard',
  templateUrl: './stack-dashboard.component.html',
  styleUrls: ['./stack-dashboard.component.css'],
  animations: [TRENDING],
  providers: [StockService]
})

export class StackDashboardComponent implements OnInit {
  public title = 'Stock Dashboard';

  stockPrices = [];
  stockService: StockService;

  constructor(stockService: StockService) {
    this.stockService = stockService;
  }

  ngOnInit() {
    setInterval(() => {this.getStockPrices(); } , 1000);
  }

  getStockPrices() {
    this.stockService.getStockPrices().then(prices => {
      console.log(`Just got the prices: ${prices}`);
      this.stockPrices = prices;
    });
  }
}
