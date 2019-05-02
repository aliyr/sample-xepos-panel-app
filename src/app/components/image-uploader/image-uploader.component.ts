import { Component } from "@angular/core";
import { SnackbarService } from "app/services/snackbar/snackbar.service";

interface ImageSnippet {
  src: string;
  file: File;
}

@Component({
  selector: "app-image-uploader",
  templateUrl: "./image-uploader.component.html",
  styleUrls: ["./image-uploader.component.scss"]
})
export class ImageUploaderComponent {
  selectedFile: ImageSnippet;

  constructor(private snackBarService: SnackbarService) { }

  processFile(imageInput: { files: File[] }) {
    const file = imageInput.files[0];
    const reader = new FileReader();

    if (file.type.match(/image\/*/) === null) {
      this.snackBarService.toastError(
        "The uploaded file must be an image",
        "close",
        4000
      );
    }
    if (file.size > 200000) {
      this.snackBarService.toastError(
        "Maximum upload size is 2MB",
        "close",
        4000
      );
      return;
    }

    reader.addEventListener("load", (event: any) => {
      this.selectedFile = { src: event.target.result, file };


      // this code is used for getting file from server
      // this.imageService
      //   .uploadImage(this.selectedFile.file)
      //   .subscribe(res => {}, err => {});
    });

    reader.readAsDataURL(file);
  }
}
