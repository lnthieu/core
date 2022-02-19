import { FileHelper } from "@cloud-helper/file-helper"



export class Core1 {

  private fileHelper: FileHelper;

  constructor(_fileHelper: FileHelper) {
    this.fileHelper = _fileHelper;
  }


  public version(): string {
    return "Core 1 / tag 0.0.1" + "\n" +
      "    " + this.fileHelper.version();
  }

}
