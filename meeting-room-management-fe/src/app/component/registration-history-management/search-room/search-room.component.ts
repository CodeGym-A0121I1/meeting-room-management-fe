import {Component, OnInit} from '@angular/core';
import {RegistrationHistoryService} from "../../../service/registration-history.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {RoomType} from "../../../model/RoomType";
import {isElementScrolledOutsideView} from "@angular/cdk/overlay/position/scroll-clip";
import {Room} from "../../../model/Room";
import {DetailRoomComponent} from "../detail-room/detail-room.component";
import {RegistrationHistory} from "../../../model/RegistrationHistory";
import {Area} from "../../../model/Area";
import {ICategory} from "../../../model/ICategory";

@Component({
    selector: 'app-search-room',
    templateUrl: './search-room.component.html',
    styleUrls: ['./search-room.component.css']
})
export class SearchRoomComponent implements OnInit {

    roomTypes: RoomType[] | any;

    history: RegistrationHistory | undefined;

    rooms: Room[] | any;
    areas: Area[] | undefined
    categorys:ICategory[] | undefined;


    constructor(private historyService: RegistrationHistoryService,
                private activatedRoute: ActivatedRoute,
                private matDialog: MatDialog,
                private snackbar: MatSnackBar,
                public dailog: MatDialog,
                private router: Router) {
    }

    ngOnInit(): void {
        this.historyService.getAllRoomType().subscribe(
            (dataroomtype) => {
                this.roomTypes = dataroomtype
            },
        );
        this.historyService.getAllRoom().subscribe(
            (dataroom) => {
                this.rooms = dataroom
            },
        );
        this.historyService.getAllAreas().subscribe(
            (dataareas) => {
                this.areas = dataareas;
            }
        );
        this.historyService.getAllCategry().subscribe(
            (datacategorys) => {
                this.categorys = datacategorys;
            }
        )
    }

    openDialogDetailRoom(rooms: Room) {
        const diaLog = this.dailog.open(DetailRoomComponent, {
            width: '600px',
            data: this.rooms
        });
        diaLog.afterClosed().subscribe(
            () => {
            },
            () => {
            },
            () => {
                this.ngOnInit();
            }
        );
    }

    signup(room: any) {

    }
}
