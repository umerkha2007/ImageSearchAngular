# ImageSearchAngular

#720p video
https://vimeo.com/637668838

# ImageSearch Project Sample in Angular 12

**· First screen:**

o a way for the user to insert a first name that will be shown in the second screen.

**· Second screen:**

o Displays a greeting for the user in the header, e.g. “Hello, John” if the first name is “John”

o Implement an Image search box

§ Displays the results in a grid

§ Pages are responsive


This is a test project to demonstrate Image Search using Angular 12.
Following is how to run the project

## Get started

### Clone the repo

```shell
git clone https://github.com/umerkha2007/ImageSearchAngular.git
cd ImageSearchAngular
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm install
ng serve
```

The `ng serve` command builds (compiles TypeScript and copies assets) the application into `localhost`, watches for changes to the source files, and runs `server` on port `4200`.

Shut it down manually with `Ctrl-C`.

#### npm scripts


## Techniques

Because Angular is a highly scalable, highly structured language, building on top of this project will be a breeze.

### Services

We can use services which are sigleton classes like utilities which can be used by any component in a module

```ts
export class DataService {
  firstName: string;
  constructor() {
    this.firstName = '';
  }
}
```

Using `promises` and `services` http requests can be easily rewritten into a single file.

```ts
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
```
