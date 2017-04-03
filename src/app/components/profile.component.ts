import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html',
    providers: [GithubService]

})
export class ProfileComponent {
    user: Object;
    repos: any;
    userName: string;
    constructor(private githubService: GithubService) {


    }

    searchUser() {
        this.user = false;

        this.githubService.updateUser(this.userName);

        this.githubService.getUser().subscribe(user => {
            this.user = user;


        });


        this.githubService.getRepos().subscribe(repo => {
            this.repos = repo;

        });




        this.githubService.getRepos().subscribe(repo => this.repos = repo);

    }


}
