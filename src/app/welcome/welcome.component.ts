import {Component} from "@angular/core";
import { Router } from '@angular/router';
import {User} from '../user/user';
import {LoginService} from './login.service';

@Component({
    selector:'welcome',
    templateUrl: './welcome.component.html',
    providers:[LoginService]
}) 

export class WelcomeComponent{
    title:string="User Login";
    loading:boolean = false;
    user:User = new User();
    loginUser:User;
    loadingImg:string = '../../assets/loading.gif';
    errorMsg : string;

    constructor(private ls:LoginService){
    }
    isLogin():boolean{
        return sessionStorage.getItem('login')==='true';
    }
    getItem(param:string):string{
        return sessionStorage.getItem(param);
    }
    
    logout():void{
        sessionStorage.clear();
    }
    login():void {
        this.loading = true;
        console.log(this.user);
        this.ls.login(this.user)
        .subscribe(
            datas => {
                if(datas['error']){
                    alert(datas['error']);
                }
                if(datas["login"]=="no"){
                    alert("아이디 또는 비밀번호를 확인하세요");
                }else{
                    if(datas["list"]){
                        this.loginUser = datas["list"][0];
                        sessionStorage.setItem('userId', this.loginUser.userId);
                        sessionStorage.setItem('userPwd', this.loginUser.userPwd);
                        sessionStorage.setItem('userName', this.loginUser.userName);
                        sessionStorage.setItem('userNo', this.loginUser.userNo+'');
                        //sessionStorage.setItem('token', this.loginUser.token);
                        sessionStorage.setItem('login','true');
                        alert(this.loginUser.userName + "님 환영합니다.")
                    }
                }
            },
            error =>  {
                this.errorMsg = <any>error;
                alert(this.errorMsg);
            },
            () =>{
                this.loading = false;
            }
        )
    }
}