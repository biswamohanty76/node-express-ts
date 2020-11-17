export class InitializePayment {

  //Fields 
  environment: String
  merchantId: String
  privateKey: String
  publicKey: String 
  
  constructor (environment: String, merchantId: String,privateKey:String,publicKey:String){
     this.environment = environment
     this.merchantId = merchantId
     this.privateKey = privateKey
     this.publicKey= publicKey
  }
}