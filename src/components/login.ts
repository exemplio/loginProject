import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as utils from '../utils/utils';
import * as index from '../../index';


@Component({
  selector: 'login',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,FormsModule,CommonModule],
  templateUrl: '../views/login.html',
})
export class LoginComponent {
	title = 'loginProject';
	etiqueta = false;
	email: any;
	password: any;
	doc: any;
	typeLogin: boolean = false;
	active: any;
	code: any;
	ser: any;
	router: any;
	listDocs!: string[];
	type_doc!: string;
	mensaje!: string;
	msg: any;
	fingerprint: any;
	textoToken!: string;
	tokenForzado!: null;
	mensajeToken: any;
	user: any;
	msgErrDoc!: string;
	docErr!: boolean;
	device_type: any;
	so: any;
	imageUrl: any;
	dataShow!: string;
	nombre_new!: null;
	codigo: any;
	itemNatural!: boolean;
	itemJuridica!: boolean;
	id_doc_type!: null;
	id_doc!: null;
	validacion_id_doc!: string;
	validacion_nombre!: string;
	validacion_apellido!: string;
	validacion_business!: string;
	validacion_alias!: null;
	validacion_country!: string;
	name_perfil!: null;
	last_name_perfil!: null;
	alias!: null;
	phone!: null;
	business_name!: null;
	country!: null;
	mensajeValidacion!: null;
	init: any;
	mensajeReenvio: any;
	ngOnInit(){
		this.email=null;
		this.password=null;
		this.doc=null;
		// if(this.active.hasOwnProperty('queryParams')){
		// 	if(this.active.queryParams!=null){
		// 		if(this.active.queryParams.hasOwnProperty('_value')){
		// 			if(this.active.queryParams._value!=null){
		// 				if (this.active.url._value[0].path == 'authorize') {
		// 					if(this.active.queryParams._value.hasOwnProperty('code')){
		// 						this.code=this.active.queryParams._value.code;
		// 					}
		// 				}
		// 				if(this.active.queryParams._value.hasOwnProperty('code')){
		// 					this.code=this.active.queryParams._value.code;
		// 				}
		// 			}
		// 		}
		// 	}
		// }
		try{
			var g=document.getElementsByClassName('modal-backdrop')[0];
			if(g!=null){
				var padre=g.parentNode;
				padre?.removeChild(g);
			}
		}catch(y){
		}
		try{
			let g=document.getElementById('sidenav-overlay');
			if(g!=null){
				var padre=g.parentNode;
				padre?.removeChild(g);
			}
		}catch(r4){
		}
		// if(this.ser.getAccessToken()==null){
		// 	this.ser.setRealm(null);
		// }else{
		// 	this.router.navigate(['/apps']);
		// }
		window.scrollTo(0, 0);
		this.listDocs=["V","E" ,"G","J"];
	}
	keyupsearch(event: { keyCode: number; }){
		try{
			if (event.keyCode == 13) {
				this.authPasswordGrant();
			}
		}catch(err){
			
		}
	}
	validarEmail(event: any,data: any){
		return utils.keypressvalidarEmail(event,data);
	}
	checkLogin(){
		this.email=null;
		this.doc=null;
		this.type_doc= "V";
		if(this.typeLogin == false){
			this.typeLogin = true;
		}else{
			this.typeLogin = false;
		}
	}
	keypressNumeros(event: any){
		return utils.keypressNumbersInteger(event);
	}
	keyPressCtrlZ(event: any){
		return utils.disabledCtlZ(event);
	}
	changeTypeInputShow(data: string | null | undefined){
		if(!(data==null || data==undefined || data=="")){
			try{
				(document.getElementById(data) as HTMLInputElement).type = "text";
			}catch(er){
				console.log("er");
			}
		}
	}
	changeTypeInputHide(data: string | null | undefined){
		if(!(data==null || data==undefined || data=="")){
			try{
				(document.getElementById(data) as HTMLInputElement).type = "password";
			}catch(er){
				console.log("er");
			}
		}
	}
	loginGoogle(data: { credential: string | null | undefined }){
		// let parametros = {
		// 	credential: "",
		// 	fingerprint: "",
		// 	username: "",
		// };
		// if (data.credential == null || data.credential == undefined || data.credential == "") {
		// 	this.mensaje = "Ocurrio un error al conectar con google";
		// 	this.msg.warning();
		// 	return;
		// } else {
		// 	parametros.credential = data.credential;
		// }
		// if(this.ser.getFingerPrint()==null || this.ser.getFingerPrint()==undefined || this.ser.getFingerPrint()==""){
		// 	this.fingerprint=utils.create_UUID();
		// 	parametros.fingerprint=this.fingerprint;
		// 	this.ser.setFingerPrint(this.fingerprint);
		// }else{
		// 	parametros.fingerprint=this.ser.getFingerPrint();
		// 	this.fingerprint=parametros.fingerprint;
		// }
		var mensajeAll="Error al iniciar sesión";
		// var request=this.ser.callServicesHttp('login-google',null,parametros);
		// request.subscribe((data: any | null | undefined)=>{
		// 	if(data==null || data==undefined || data==""){
		// 		this.mensaje=mensajeAll;
		// 		this.msg.error();
		// 	}else{
		// 		if(data.status_http==200){
		// 			delete data['status_http'];
					// if(data.hasOwnProperty("access_token")){
					// 	if(!(data.access_token==null || data.access_token==undefined || data.access_token=="")){
					// 		this.ser.setAccessToken(data.access_token);
					// 	}
					// }
					// if(data.hasOwnProperty("refresh_token")){
					// 	if(!(data.refresh_token==null || data.refresh_token==undefined || data.refresh_token=="")){
					// 		this.ser.setRefreshToken(data.refresh_token);
					// 	}
					// }
					// if(data.hasOwnProperty("expires_in")){
					// 	if(!(data.expires_in==null || data.expires_in==undefined || data.expires_in=="" || data.expires_in==0)){
					// 		var tiempo=data.expires_in;
					// 		this.ser.setTimeSession(tiempo);
					// 		utils.asyncSqrt(tiempo,function(value: any, result: any) {});
					// 	}
					// }
					// this.router.navigate(['/apps']);
		// 		}else{
		// 			if(data.message=="MORE_THAN_ACTIVE_SESSION"){
		// 				/* this.mensaje="Tienes una sesión activa";
		// 				this.msg.warning(); */
		// 				this.textoToken="PEDIR TOKEN";
		// 				this.tokenForzado=null;
		// 				this.mensajeToken=null;
		// 				$("#forzarCierre").modal('show');
		// 			}else{
		// 				try{
		// 					if(data.message.toUpperCase()=="PASSWORD_EXPIRED"){
		// 						if(this.typeLogin == false){
		// 							this.router.navigate(['/expired-password'], { queryParams: { email: parametros.username} });
		// 						}else{
		// 							this.router.navigate(['/expired-password'], { queryParams: { doc: parametros.username} });
		// 						}
		// 					}else{
		// 						setTimeout(() => {
		// 							$('#msgError .modal-body').click();
		// 						}, 1);
		// 						this.mensaje=this.ser.processMessageError(data,mensajeAll);
		// 						this.msg.error();
		// 					}
		// 				}catch(Er){
		// 					console.log("Er",Er);
		// 					this.mensaje=this.ser.processMessageError(data,mensajeAll);
		// 					this.msg.error();
		// 				}
		// 			}
		// 		}
		// 	}
		// },(err: any)=>{
		// 	console.log('err',err);
		// 	this.mensaje=this.ser.processError(err,mensajeAll);
		// 	this.msg.error();
		// });
	}
	authPasswordGrant(){
		this.fingerprint=null;
		var gran_type="password";
		var client_id=index.getClient();
		var redirect_uri=index.redirectUri();
		var scope=null;
		var username=null;
		var password=null;
		let parametros={username:"",client_id:"",redirect_uri:"",password:"",scopes:"",fingerprint:""};
		if(this.typeLogin == false){
			if (this.email == null || this.email == undefined || this.email == "") {
				this.mensaje = "Debe ingresar el correo electrónico";
				this.msg.warning();
				return;
			} else {
				username=this.email.trim().toLowerCase();
				this.user=username;		
				parametros['username'] =username;
			}
		}else{
			if (this.doc == null || this.doc == undefined || this.doc == "") {
				this.mensaje = "Debe ingresar el número de documento";
				this.msg.warning();
				return;
			} else {
				if (utils.utils_keyNumber(this.doc.trim())) {
					if (this.type_doc == null || this.type_doc == undefined || this.type_doc == "") {
						this.mensaje = "El tipo de documento no puede estar vacío";
						this.msgErrDoc= "El tipo de documento no puede estar vacío";
						this.docErr = true;
						this.msg.warning();
						return;
					} else {
						var texto = this.type_doc.trim();
						this.completeDoc(this.doc);
						parametros['username'] = texto + this.doc;
					}
				} else {
					this.mensaje = "El número de documento, sólo acepta números";
					this.msgErrDoc= "El número de documento, sólo acepta números";
					this.docErr = true;
					this.msg.warning()
					return;
				}
			}
		}
		
		if (this.hasOwnProperty('password')) {
			if (this.password == null || this.password == undefined || this.password == "") {
				this.mensaje = "Debe ingresar la contraseña.";
				this.msg.warning();
				return;
			}else{
				password=this.password.trim();
			}
		} else {
			this.mensaje = "Debe ingresar la contraseña.";
			this.msg.warning();
			return;
		}
		
		// var $key = RSA.getPublicKey(publicKey());
		// var h=RSA.encrypt(password,$key);
		let request=null;
		parametros['client_id'] =client_id;
		parametros['redirect_uri'] =redirect_uri;
		// parametros['password'] =h;
		// parametros['scopes'] =scope;
		
		// if(this.ser.getFingerPrint()==null || this.ser.getFingerPrint()==undefined || this.ser.getFingerPrint()==""){
		// 	this.fingerprint=utils.create_UUID();
		// 	parametros.fingerprint=this.fingerprint;
		// 	this.ser.setFingerPrint(this.fingerprint);
		// 	this.iniciarSesion(parametros);
		// }else{
		// 	if(this.typeLogin == false){
		// 		parametros.fingerprint=this.ser.getFingerPrint();
		// 	this.fingerprint=parametros.fingerprint;
		// 	this.iniciarSesion(parametros);
		// 	}else{
		// 		parametros.fingerprint=this.ser.getFingerPrint();
		// 		this.fingerprint=parametros.fingerprint;
		// 		this.iniciarSesionCI(parametros);
		// 	}
		// }
	}
	completeDoc(data: string | null | undefined) {
		if (!(data == null || data == undefined || data == "")) {
			if (!utils.utils_keyNumber(data.trim())) {
				this.mensaje = "El formato del número de identificación es inválido";
				this.msg.warning();
				return;
			}
			if (data.trim().length < 9) {
				var numero = 9 - data.trim().length;
				var texto = "";
				for (var i = 0; i < numero; i++) {
					texto = texto + "0";
				}
				this.doc = texto + this.doc;
			} else {
				this.doc = data;
			}
		}
	}
	iniciarSesion(parametros: { username?: any; }){
		var mensajeAll="Error al iniciar sesión";
		let request;
		let parametros2:{username:any,authorization_code:any}
		// if(this.code == null){
		// 	request=this.ser.callServicesHttp('login',"?grant_type=password"+"&fingerprint="+this.fingerprint,parametros);
		// }else{
		// 	parametros2 = parametros.username;
		// 	parametros2['authorization_code']= this.code;
		// 	request=this.ser.callServicesHttp('login','', parametros2);
		// }
		// request.subscribe((data: any | null | undefined)=>{
		// 	if(data==null || data==undefined || data==""){
		// 		this.mensaje=mensajeAll;
		// 		this.msg.error();
		// 	}else{
		// 		if(data.status_http==200){
		// 			delete data['status_http'];
					// if(data.hasOwnProperty("access_token")){
					// 	if(!(data.access_token==null || data.access_token==undefined || data.access_token=="")){
					// 		this.ser.setAccessToken(data.access_token);
					// 	}
					// }
					// if(data.hasOwnProperty("refresh_token")){
					// 	if(!(data.refresh_token==null || data.refresh_token==undefined || data.refresh_token=="")){
					// 		this.ser.setRefreshToken(data.refresh_token);
					// 	}
					// }
					// if(this.code == null){
					// 	if(data.hasOwnProperty("expires_in")){
					// 		if(!(data.expires_in==null || data.expires_in==undefined || data.expires_in=="" || data.expires_in==0)){
					// 			var tiempo=data.expires_in;
					// 			this.ser.setTimeSession(tiempo);
					// 			utils.asyncSqrt(tiempo,function(value: any, result: any) {});
					// 		}
					// 	}
					// 	this.router.navigate(['/apps']);
					// }else{
					// 	this.deviceLogin();
					// }
		// 		}else{
		// 			if(data.message=="MORE_THAN_ACTIVE_SESSION"){
		// 				/* this.mensaje="Tienes una sesión activa";
		// 				this.msg.warning(); */
		// 				this.textoToken="PEDIR TOKEN";
		// 				this.tokenForzado=null;
		// 				this.mensajeToken=null;
		// 				$("#forzarCierre").modal('show');
		// 			}else{
		// 				try{
		// 					if(data.message.toUpperCase()=="PASSWORD_EXPIRED"){
		// 						if(this.typeLogin == false){
		// 							this.router.navigate(['/expired-password'], { queryParams: { email: parametros.username} });
		// 						}else{
		// 							this.router.navigate(['/expired-password'], { queryParams: { doc: parametros.username} });
		// 						}
		// 					}else{
		// 						this.mensaje=this.ser.processMessageError(data,mensajeAll);
		// 						this.msg.error();
		// 					}
		// 				}catch(Er){
		// 					console.log("Er",Er);
		// 					this.mensaje=this.ser.processMessageError(data,mensajeAll);
		// 					this.msg.error();
		// 				}
		// 			}
		// 		}
		// 	}
		// },(err: any)=>{
		// 	console.log('err',err);
		// 	this.mensaje=this.ser.processError(err,mensajeAll);
		// 	this.msg.error();
		// });
	}
	deviceLogin(){
		var parametros={features:{device:"",browser:""},fingerprint:"",authorization_code:"",type:""};		
		parametros.fingerprint=this.fingerprint;
		parametros.authorization_code=this.code;
		this.fingerprint=this.fingerprint;
		// var aux9=utils.returnClientjs();
		// if(aux9!=null){
		// 	if(aux9.hasOwnProperty("device")){
		// 		if(!(aux9.device==null || aux9.device==undefined || aux9.device=="")){
		// 			this.device_type=aux9.device.type;
		// 			parametros.type=aux9.device.type;
		// 			parametros.features.device=JSON.stringify(aux9.device);
		// 		}
		// 	}
		// 	if(aux9.hasOwnProperty("browser")){
		// 		if(!(aux9.browser==null || aux9.browser==undefined || aux9.browser=="")){
		// 			parametros.features.browser=JSON.stringify(aux9.browser);
		// 			if(aux9.browser.hasOwnProperty("name")){
		// 				this.so=aux9.browser.name;
		// 			}
		// 			if(aux9.browser.hasOwnProperty("image_uri")){
		// 				this.imageUrl=getStatic()+aux9.browser.image_uri;
		// 			}
		// 		}
		// 	}
		// }
		this.dataShow = "Obteniendo información del dispositivo";
		var mensajeAll="Error al iniciar en el dispositivo";
		var contexto=this;
		// var request = this.ser.callServicesHttp("login-device-gravitee","?fingerprint="+this.fingerprint, parametros);
		// request.subscribe((data: any | null | undefined)=>{
		// 	if(data==null || data==undefined || data==""){
		// 		this.mensaje=mensajeAll;
		// 		this.msg.error();
		// 	}else{
				// if(data.status_http==200){
				// 	delete data['status_http'];
				// 	if(data.hasOwnProperty("redirect_uri")){
				// 		if(data.redirect_uri==null || data.redirect_uri==undefined || data.redirect_uri==""){
				// 			this.mensaje="No hay dirección de redirección";
				// 			this.msg.warning();
				// 		}else{
				// 			window.location.href=data.redirect_uri;
				// 		}
				// 	}else{
				// 		this.mensaje="No hay dirección de redirección";
				// 		this.msg.warning();
				// 	}
				// }else{
				// 	if(data.hasOwnProperty("message")){
				// 		if(data.message==null || data.message==""  || data.message==undefined){
				// 			this.mensaje=mensajeAll;
				// 			this.msg.error();
				// 		}else{
				// 			if(data.message.toUpperCase()=="DEVICE NOT AUTHORIZED" || data.message.toUpperCase()=="AUTHORIZATION_EMAIL_SENDED"){
				// 				this.nombre_new=null;
				// 				this.codigo=null;
				// 				$("#autorizar").modal('show');
				// 			}else{
				// 				if(data.message.toUpperCase()=="PROFILE_NOT_FOUND"){
				// 					this.itemNatural=true;
				// 					this.itemJuridica=false;
				// 					this.id_doc_type=null;
				// 					this.id_doc=null;
				// 					this.validacion_id_doc="El id de documento no puede estar vacío";
				// 					this.validacion_nombre="El nombre no puede estar vacío";
				// 					this.validacion_apellido="El apellido no puede estar vacio";
				// 					this.validacion_business="La razón social no puede estar vacío";
				// 					this.validacion_alias=null;
				// 					this.validacion_country="El país no puede estar vacío";
				// 					this.name_perfil=null;
				// 					this.last_name_perfil=null;
				// 					this.alias=null;
				// 					this.phone=null;
				// 					this.business_name=null;
				// 					this.country=null;
				// 					this.mensajeValidacion=null;
				// 				}else{
				// 					this.mensaje=this.ser.processMessageError(data,mensajeAll);
				// 					this.msg.error();
				// 				}
				// 			}
				// 		}
				// 	}else{
				// 		this.mensaje=mensajeAll;
				// 		this.msg.error();
				// 	}
				// }
		// 	}
		// },(err: any)=>{
		// 	this.mensaje=this.ser.processError(err,mensajeAll);
		// 	this.msg.error();
		// });
	}
	autorizate(){
		var querys='';
		if (this.codigo) {
			this.codigo=this.codigo.toUpperCase();
		}
		try{
			querys="?fingerprint="+this.fingerprint+"&auth_code="+this.codigo.toUpperCase().trim()+"&authorization_code="+this.code;
			/* querys="?fingerprint="+this.fingerprint+"&auth_code="+this.codigo.trim(); */
		}catch(t){
		}
		var mensajeAll="Error al obtener estatus de la autorización del dispositivo";
		// var request=this.ser.callServicesHttp('autorize-device-gravitee',querys,null);
		// request.subscribe((data: any | null | undefined)=>{
		// 	if(!(data==null || data==undefined || data=="")){
		// 		if(data.status_http==200){
		// 			delete data['status_http'];
		// 			// if(data.hasOwnProperty("redirect_uri")){
		// 			// 	if(data.redirect_uri==null || data.redirect_uri==undefined || data.redirect_uri==""){
		// 			// 		this.mensaje="No hay dirección de redirección";
		// 			// 		this.msg.warning();
		// 			// 	}else{
		// 			// 		window.location.href=data.redirect_uri;
		// 			// 	}
		// 			// }else{
		// 			// 	this.mensaje="No hay dirección de redirección";
		// 			// 	this.msg.warning();
		// 			// }
		// 		}else{
		// 			this.mensaje=this.ser.processMessageError(data,mensajeAll);
		// 			this.msg.error();
		// 		}
		// 	}
		// },(err: any)=>{
		// 	this.mensaje=this.ser.processError(err,mensajeAll);
		// 	this.msg.error();
		// });
	}
	iniciarSesionCI(parametros: { username?: any; }){
		// var mensajeAll="Error al iniciar sesión";
		// let request;
		// let parametros2={username:String,authorization_code:String};
		// if(this.code == null){
		// 	request=this.ser.callServicesHttp('login-ci',"?grant_type=password"+"&fingerprint="+this.fingerprint,parametros);
		// }else{
		// 	parametros2 = parametros.username;
		// 	parametros2['authorization_code']= this.code;
		// 	request=this.ser.callServicesHttp('login-ci','', parametros2);
		// }
		// request.subscribe((data: any | null | undefined)=>{
		// 	if(data==null || data==undefined || data==""){
		// 		this.mensaje=mensajeAll;
		// 		this.msg.error();
		// 	}else{
		// 		if(data.status_http==200){
		// 			delete data['status_http'];
					// if(data.hasOwnProperty("access_token")){
					// 	if(!(data.access_token==null || data.access_token==undefined || data.access_token=="")){
					// 		this.ser.setAccessToken(data.access_token);
					// 	}
					// }
					// if(data.hasOwnProperty("refresh_token")){
					// 	if(!(data.refresh_token==null || data.refresh_token==undefined || data.refresh_token=="")){
					// 		this.ser.setRefreshToken(data.refresh_token);
					// 	}
					// }
					// if(this.code == null){
					// 	if(data.hasOwnProperty("expires_in")){
					// 		if(!(data.expires_in==null || data.expires_in==undefined || data.expires_in=="" || data.expires_in==0)){
					// 			var tiempo=data.expires_in;
					// 			this.ser.setTimeSession(tiempo);
					// 			utils.asyncSqrt(tiempo,function(value: any, result: any) {});
					// 		}
					// 	}
					// 	this.router.navigate(['/apps']);
					// }else{
					// 	this.deviceLogin();
					// }
		// 		}else{
		// 			if(data.message=="MORE_THAN_ACTIVE_SESSION"){
		// 				/* this.mensaje="Tienes una sesión activa";
		// 				this.msg.warning(); */
		// 				this.textoToken="PEDIR TOKEN";
		// 				this.tokenForzado=null;
		// 				this.mensajeToken=null;
		// 				$("#forzarCierre").modal('show');
		// 			}else{
		// 				try{
		// 					if(data.message.toUpperCase()=="PASSWORD_EXPIRED"){
		// 						if(this.typeLogin == false){
		// 							this.router.navigate(['/expired-password'], { queryParams: { email: parametros.username} });
		// 						}else{
		// 							this.router.navigate(['/expired-password'], { queryParams: { doc: parametros.username} });
		// 						}
		// 					}else{
		// 						this.mensaje=this.ser.processMessageError(data,mensajeAll);
		// 						this.msg.error();
		// 					}
		// 				}catch(Er){
		// 					console.log("Er",Er);
		// 					this.mensaje=this.ser.processMessageError(data,mensajeAll);
		// 					this.msg.error();
		// 				}
		// 			}
		// 		}
		// 	}
		// },(err: any)=>{
		// 	console.log('err',err);
		// 	this.mensaje=this.ser.processError(err,mensajeAll);
		// 	this.msg.error();
		// });
	}
	actionToken(){
		if(this.textoToken=="PEDIR TOKEN"){
			this.pedirToken();
		}else{
			this.enviarToken();
		}
	}
	pedirToken(){
		// var $key = RSA.getPublicKey(publicKey());
		// var h= RSA.encrypt(this.password,$key);
		var parametros={
			client_id: index.getClient(),
			redirect_uri: index.redirectUriBase(),
			username: this.user,
			// password: h,
			fingerprint: this.fingerprint,
			scopes: null
		};
		if(this.doc != null){
			if (this.doc == null || this.doc == undefined || this.doc == "") {
				this.mensaje = "Debe ingresar el número de documento";
				this.msg.warning();
				return;
			} else {
				if (utils.utils_keyNumber(this.doc.trim())) {
					if (this.type_doc == null || this.type_doc == undefined || this.type_doc == "") {
						this.mensaje = "El tipo de documento no puede estar vacío";
						this.msgErrDoc= "El tipo de documento no puede estar vacío";
						this.docErr = true;
						this.msg.warning();
						return;
					} else {
						var texto = this.type_doc.trim();
						this.completeDoc(this.doc);
						parametros.username = texto + this.doc;
					}
				} else {
					this.mensaje = "El número de documento, sólo acepta números";
					this.msgErrDoc= "El número de documento, sólo acepta números";
					this.docErr = true;
					this.msg.warning()
					return;
				}
			}
		}
		var mensajeAll="Error al pedir el token de cierre de sesión";
		// let request=this.ser.callServicesHttp('session-auth-token',"?fingerprint="+this.fingerprint,parametros);
		// request.subscribe((data: any | null | undefined)=>{
		// 	if(!(data==null || data==undefined || data=="")){
		// 		if(data.status_http==200){
		// 			this.textoToken="REENVIAR TOKEN";
		// 			delete data['status_http'];
		// 			this.mensajeToken="Token enviado con éxito";
		// 		}else{
		// 			this.mensajeToken=this.ser.processMessageError(data,mensajeAll);
		// 		}
		// 	}
		// },(err: any)=>{
		// 	this.mensajeToken=this.ser.processError(err,mensajeAll);
		// });
	}
	enviarToken(){
		// var $key = RSA.getPublicKey(index.publicKey());
		// var h= RSA.encrypt(this.password,$key);
		var parametros={
			client_id: index.getClient(),
			redirect_uri: index.redirectUriBase(),
			username: this.user,
			// password: h,
			fingerprint: this.fingerprint,
			scopes: null
		};
		if(this.doc != null){
			if (this.doc == null || this.doc == undefined || this.doc == "") {
				this.mensaje = "Debe ingresar el número de documento";
				this.msg.warning();
				return;
			} else {
				if (utils.utils_keyNumber(this.doc.trim())) {
					if (this.type_doc == null || this.type_doc == undefined || this.type_doc == "") {
						this.mensaje = "El tipo de documento no puede estar vacío";
						this.msgErrDoc= "El tipo de documento no puede estar vacío";
						this.docErr = true;
						this.msg.warning();
						return;
					} else {
						var texto = this.type_doc.trim();
						this.completeDoc(this.doc);
						parametros.username = texto + this.doc;
					}
				} else {
					this.mensaje = "El número de documento, sólo acepta números";
					this.msgErrDoc= "El número de documento, sólo acepta números";
					this.docErr = true;
					this.msg.warning()
					return;
				}
			}
		}
		var mensajeAll="Error al  reenviar token de cierre de sesión";
		// let request=this.ser.callServicesHttp('session-resend-auth-token',null,parametros);
		// request.subscribe((data: any | null | undefined)=>{
		// 	if(!(data==null || data==undefined || data=="")){
		// 		if(data.status_http==200){
		// 			this.textoToken="REENVIAR TOKEN";
		// 			delete data['status_http'];
		// 			this.mensajeToken="Token Reenviado con éxito";
		// 		}else{
		// 			this.mensajeToken=this.ser.processMessageError(data,mensajeAll);
		// 		}
		// 	}
		// },(err: any)=>{
		// 	this.mensajeToken=this.ser.processError(err,mensajeAll);
		// });
	}
	forzarCierres(){
		// var $key = RSA.getPublicKey(publicKey());
		// var h= RSA.encrypt(this.password,$key);
		var parametros={
			client_id: index.getClient(),
			redirect_uri: index.redirectUriBase(),
			username: this.user,
			// password: h,
			fingerprint: this.fingerprint,
			scopes: null
		};
		if(this.doc != null){
			if (this.doc == null || this.doc == undefined || this.doc == "") {
				this.mensaje = "Debe ingresar el número de documento";
				this.msg.warning();
				return;
			} else {
				if (utils.utils_keyNumber(this.doc.trim())) {
					if (this.type_doc == null || this.type_doc == undefined || this.type_doc == "") {
						this.mensaje = "El tipo de documento no puede estar vacío";
						this.msgErrDoc= "El tipo de documento no puede estar vacío";
						this.docErr = true;
						this.msg.warning();
						return;
					} else {
						var texto = this.type_doc.trim();
						this.completeDoc(this.doc);
						parametros.username = texto + this.doc;
					}
				} else {
					this.mensaje = "El número de documento, sólo acepta números";
					this.msgErrDoc= "El número de documento, sólo acepta números";
					this.docErr = true;
					this.msg.warning()
					return;
				}
			}
		}
		var querys="?auth_code="+this.tokenForzado;
		var mensajeAll="Error al cerrar sesiones";
		// let request=this.ser.callServicesHttp('close-all-session',querys,parametros);
		// request.subscribe((data: any | null | undefined)=>{
		// 	if(!(data==null || data==undefined || data=="")){
		// 		if(data.status_http==200){
		// 			delete data['status_http'];
		// 			$("#forzarCierre").modal('hide');
		// 			delete data['status_http'];
					// if(data.hasOwnProperty("access_token")){
					// 	if(!(data.access_token==null || data.access_token==undefined || data.access_token=="")){
					// 		this.ser.setAccessToken(data.access_token);
					// 	}
					// }
					// if(data.hasOwnProperty("refresh_token")){
					// 	if(!(data.refresh_token==null || data.refresh_token==undefined || data.refresh_token=="")){
					// 		this.ser.setRefreshToken(data.refresh_token);
					// 	}
					// }
					// if(this.init){
						// if(data.hasOwnProperty("expires_in")){
						// 	if(!(data.expires_in==null || data.expires_in==undefined || data.expires_in=="" || data.expires_in==0)){
						// 		var tiempo=data.expires_in;
						// 		this.ser.setTimeSession(tiempo);
						// 		utils.asyncSqrt(tiempo,function(value: any, result: any) {});
						// 	}
						// }
		// 			}
		// 			var contexto=this;
		// 			setTimeout(function() {
		// 				contexto.router.navigate(['/apps']);
		// 			}, 1000);
		// 		}else{
		// 			this.mensajeToken=this.ser.processMessageError(data,mensajeAll);
		// 		}
		// 	}
		// },(err: any)=>{
		// 	this.mensajeToken=this.ser.processError(err,mensajeAll);
		// });
	}
	redirectServices(){
		window.open("/servicepay-public"); //This will open Google in a new window.
	}
	irTop(){
		window.scrollTo(0, 0);
	}
}
