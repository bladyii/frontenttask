import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from './services/loader.service';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterContentInit, OnDestroy {
  public title = 'Frontend App';
  public showLoader: boolean;
  public loaderSubscription: Subscription;

  constructor(private loaderService: LoaderService) {
    this.loaderSubscription = this.loaderService
      .getLoaderStatus()
      .subscribe((response) => {
        this.showLoader = response;
      });
  }

  ngAfterContentInit(): void {
    this.loaderService.hideLoader();
  }

  ngOnDestroy(): void {
    if (this.loaderSubscription) {
      this.loaderSubscription.unsubscribe();
    }
  }
}
