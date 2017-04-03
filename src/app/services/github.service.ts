import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class GithubService {
    private username: string;
    private client_id: string;
    private client_secret: string;
    constructor(private http: Http) {
        this.username = 'uzzol101';
        this.client_id = 'bad36404c0a51fd253f8';
        this.client_secret = '50b147df45fa5de17e43c4bd529b8e44349c4833';
    }

    getUser() {
        return this.http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret).map(res =>
            res.json();
        )
    }
    getRepos() {
        return this.http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret).map(repo => repo.json());
    }

    updateUser(username: string) {
        this.username = username;
    }
}
