import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  news: any;

  constructor(private http: HttpClient) { }

  getNews() {
    this.http.get("https://remolacha.net/wp-json/wp/v2/posts?search=digeset")
      .subscribe((data: any) => {
        this.news = data;
        console.log(this.news); // Mover el log aquí para que se ejecute después de recibir los datos
      });
  }

  ngOnInit() {
    this.getNews();
  }
}
