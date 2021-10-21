import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  token: any;
  httpOptions: any;
  httpOptionsFiles: any;
  httpOptionsNoToken = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      })
  };
  httpOptionsFilesNoToken = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    })
  };
  constructor(private http: HttpClient) { 
    //,private login_token:AuthService
    //console.log('new token rest api ' +this.login_token.token)
    

    this.token=localStorage.getItem("refVariable");
    if(this.token!='undefined')
    {
     // console.log(this.token);
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Bearer '+ this.token ,
        })
      };
      this.httpOptionsFiles = {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Bearer '+this.token
        })
      };
    }
    else
    {
      console.log("Error: No token generated");
    }
   // console.log('test token new '+this.check);
   // console.log(localStorage.getItem("refVariable"));
  }


 setHeaders()
 {
  if(this.token!='undefined')
  {
    //console.log(this.token);
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer '+ this.token ,
      })
    };
    this.httpOptionsFiles = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer '+this.token
      })
    };
  }
  else
  {
    console.log("Error: No token generated");
  }
 }

  getWithoutToken(path: string) {
    //// debugger
      const link = environment.apiURL + path + '&client_id=' + environment.clientToken;
      // console.log(link);
        return new Promise((resolve, reject) => {
          this.http.get(link).subscribe((data: any) => {
           //// debugger
              console.log(data)
              resolve(data);
          }, (error: any) => {
            reject(error);
            console.log(error)
          });
        });
  }
  postWithoutToken(path: string, data: any) {
    // // debugger
     return new Promise((resolve, reject) => {
       const headerContent = new HttpHeaders({
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': '*'
       });
       //// debugger
       this.http.post(environment.apiURL + path, data, { headers: this.httpOptionsNoToken.headers }).subscribe
         ((response: any) => {
           resolve(response);
         },
           (error: any) => {
             reject(error);
           });
     });
  }
}
