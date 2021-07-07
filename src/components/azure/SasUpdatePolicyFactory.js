
import SasUpdatePolicy from '@/components/azure/SasUpdatePolicy.js';

export default class  SasUpdatePolicyFactory {

    constructor(sasStore) {
      this.sasStore = sasStore;
    }
    
    create(nextPolicy, options) {
      return new SasUpdatePolicy(nextPolicy, options, this.sasStore);
    }
  }