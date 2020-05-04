# crypt
#### A Simple Script That Quickly Encrypts Text Into An Unreadable Incoherent String Of Chars And Back Again.
##### Originally Made For The String Encryptor V2
### Disclaimer

> crypt, Despite its Name, __Is Not Secure__. It Is Not To Be Used In Any Place Where __Any Form__ Of Sensitive Data Is Being Transferred Or Stored. It Is Easy To Break And Can Be Broken Quickly Using A Simple Brute-Force Attack.

## How To Use
1. [Download And Store](#download-and-store)
2. [Load Into Your Web App (Optional)](#load-into-your-web-app-optional)
3. [Use It (Yes It's That Simple)](#use-it-yes-its-that-simple)

### Download And Store
First Download And Store The File ___crypt.min.js___ Somewhere. (Such As Near Your HTML Files Or As In A Folder Called Scripts.) 

(This Is The Minified Version And Won't Be Easily Readable, To Understand How It Works Download ___crypt.js___ And Open It Up In Your Text Editor Of Choice To Take A Look.)

### Load Into Your Web App (Optional)
This Part Is Optional. Yep It Doesn't Even Need To Be In A Page, But If You Want To Use It In A Web App Just Copy The Snippet Below Into your HTML File's Head And Replace {{foo}} With The Path To Where You Downloaded ___crypt.js___.

```HTML
<script src="{{foo}}"></script>
```

To Use It Without A Full Fledged App, Such As For A Single String, Copy The Contents Of ___crypt.min.js___ Into Chrome Devtools' Console (Press ```F12``` Or ```CTRL\CMD + Shift + i``` On Your Keyboard While On Any Page On Chrome Then Open The Console Tab)

(Works Best In Chrome Devtools Compared to Other Browsers' Consoles)

### Use It (Yes It's That Simple)
Using It In Your Code Is Also Very Simple. Replace {{foo}} With What You Want To Encrypt/Decrypt And {{bar}} With The Key To Use In The Snippet Below.

```JavaScript
crypt("{{foo}}","{{bar}}");
```

The Key Can Be Anything But A Long Key Is Usually Better.

The Function Will Return A String Of The Same Length But The String May Or May Not Be Viewable, Depending On Your Charset. To Transfer The String Without It Becoming Damaged You Should Encode It.
## License
This Tiny Snippet Of Code Is Licensed Under The MIT License. This Is A Short And Simple Permissive License Which Only Requires Preservation Of Copyright And License Notices. 
Basically, In Your Code Write A Little Comment Stating That I Made This Snippet Of Code.
Take A Look At The [License](LICENSE) For The Exact Conditions
