import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as index from '../../index';


@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,FormsModule,CommonModule],
  templateUrl: '../views/app-bar.html',
})

export class AppbarComponent {
	mensaje: any;
	ngOnInit(){  
			
	}
	salir(){
		const mensajeAll="Error al cerrar sesion";
		// const request=this.ser.callServicesHttp('logout',null,null);
		// request.subscribe((data: {status_http:number})=>{
		// 	if(!(data==null || data==undefined)){
		// 		if(data.status_http!=200){
		// 			this.mensaje=this.ser.processMessageError(data,mensajeAll)
		// 		}
		// 	}
		// 	index.doLogout();
		// 	this.router.navigate(['/login']);
		// },err=>{
		// 	this.mensaje=this.ser.processError(err,mensajeAll);
		// 	index.doLogout();
		// 	this.router.navigate(['/login']);
		// });
	}
}