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
<<<<<<< HEAD

    }

    searchUser() {
        this.user = false;
=======
>>>>>>> ee82e9192eeee4608b2d6ae55b8d1017945f5362
        this.githubService.updateUser(this.userName);

        this.githubService.getUser().subscribe(user => {
            this.user = user;
<<<<<<< HEAD

        });


        this.githubService.getRepos().subscribe(repo => {
            this.repos = repo;

        });

=======
            console.log(user);
        });


        this.githubService.getRepos().subscribe(repo => this.repos = repo);

    }

    searchUser() {
        // this.user = false;
>>>>>>> ee82e9192eeee4608b2d6ae55b8d1017945f5362

    }
}
