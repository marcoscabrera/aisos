export default class  SasStore {
    

    constructor() {
      this.sasCache = {};
    }
  
    // Get a valid SAS for blob
    async getValidSASForBlob(blobURL) {
      if (this.sasCache[blobURL] && this.isSasStillValidInNext2Mins(this.sasCache[blobURL])) {
        return this.sasCache[blobURL];
      } else {
        return (this.sasCache[blobURL] = await this.getNewSasForBlob(blobURL));
      }
    }
  
    // Return true if "se" section in SAS is still valid in next 2 mins
    isSasStillValidInNext2Mins(sas) {
      const expiryStringInSas = new URL(`http://hostname${sas}`).searchParams.get("se");
      return new Date(expiryStringInSas) - new Date() >= 2 * 60 * 1000;
    }
  
    // Get a new SAS for blob, we assume a SAS starts with a "?"
    async getNewSasForBlob(blobURL) {
      // TODO: You need to implement this
      typeof blobURL;
      return "?newSAS";
    }


  }
  