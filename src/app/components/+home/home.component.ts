import {Component} from "@angular/core";
//import {NotificationApi} from "../../shared/services/src/notif/api/NotificationApi";
import {NotificationApi} from "../../shared/services/src/notif/index";
import {Notification} from "../../shared/services/src/notif/model/Notification";

@Component({
    selector: 'home',
    moduleId: module.id,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers:[NotificationApi]
})
export class HomeComponent {
    public pathImage:string;
    public notifications: Array<Notification>;

    constructor(private notificationService:NotificationApi){
        this.pathImage="../../../../assets/home/picture.png";

    }

    ngOnInit(){
        this.notificationService.listAccount().subscribe(
            notifs=>this.notifications=notifs
        );
    }


}