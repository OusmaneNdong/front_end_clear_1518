import { Component, VERSION } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-view-file',
  templateUrl: './view-file.component.html',
  styleUrls: ['./view-file.component.css']
})
export class ViewFileComponent {

  // name = 'Angular ' + VERSION.major;
  // url = 'https://view.officeapps.live.com/op/embed.aspx?src=http://localhost:5000/assets/file-sample_1MB.doc';

  // urlDoc: string = `https://view.officeapps.live.com/op/embed.aspx?src=https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdkpMIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e75389b18343665404852ed4cba8bd25938fa9bd/file-sample_1MB.doc`;

  // urlxl: string =
    // 'https://view.officeapps.live.com/op/embed.aspx?src=https://go.microsoft.com/fwlink/?LinkID=521962';

  // urlppt: string =
    // 'https://view.officeapps.live.com/op/embed.aspx?src=  https://ecmalpha.biglinc.com/public/document/samplepptx_=_14042023112037.pptx';

  // urlpdf: string = 
  // "https://www.africau.edu/images/default/sample.pdf";
  // 'http://localhost:8080/Users/7maksacodpc/Desktop/Attestation/Attestation/uploaded/documents/CNI.pdf'

  //   urlSafe!: SafeResourceUrl;

  // constructor(public sanitizer: DomSanitizer) {}

  // ngOnInit() {
  //   this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlDoc);
  // }

  // selectDocumentType(type: any) {
  //   switch (type) {
  //     case 'doc':
  //       this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
  //         this.urlDoc
  //       );
  //       break;
  //     case 'xl':
  //       this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
  //         this.urlxl
  //       );
  //       break;
  //     case 'ppt':
  //       this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
  //         this.urlppt
  //       );
  //       break;
  //       case 'pdf':
  //         this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
  //           this.urlpdf
  //         );
  //       break;
  //     default:
  //       this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
  //         this.urlDoc
  //       );
  //   }
  // }


  name = 'Angular ' + VERSION.major;

  urlDoc: string = `https://view.officeapps.live.com/op/embed.aspx?src=https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdkpMIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e75389b18343665404852ed4cba8bd25938fa9bd/file-sample_1MB.doc`;
  urlxl: string = 'https://view.officeapps.live.com/op/embed.aspx?src=https://go.microsoft.com/fwlink/?LinkID=521962';
  urlppt: string = 'https://view.officeapps.live.com/op/embed.aspx?src=https://ecmalpha.biglinc.com/public/document/samplepptx_=_14042023112037.pptx';
  urlpdf: string = 'http://localhost:8080/Users/7maksacodpc/Desktop/Attestation/Attestation/uploaded/documents/CNI.pdf';
  urlImage: string = 'http://localhost:8080/api/uploads/CNI.pdf';

  urlSafe!: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlDoc);
  }

  selectDocumentType(type: string) {
    switch (type) {
      case 'doc':
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlDoc);
        break;
      case 'xl':
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlxl);
        break;
      case 'ppt':
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlppt);
        break;
      case 'pdf':
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlpdf);
        break;
      case 'image':
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlImage);
        break;
      default:
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlDoc);
    }
  }

}
