import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private newsService: NewsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      name: [null, Validators.required],
      comment: [null, [Validators.required, Validators.maxLength(200)]],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.newsService.postComment(this.form.value).subscribe((response) => {
        if (response) {
          alert('Sucessfuly added comment');
          const id = this.activatedRoute.snapshot.params.id;
          this.router.navigate([`article/${id}`]);
        } else{
          alert('Oooops something went wrong');
        }
      });
    }
  }
}
