Ext.define('Ext.tualo.form.field.CryptoField', {
	extend: 'Ext.form.field.Text',
	alias: ['widget.tualocryptofield'],



  arrayBufferToBase64String: function(arrayBuffer) {
    var byteArray = new Uint8Array(arrayBuffer)
    var byteString = ''
    for (var i=0; i<byteArray.byteLength; i++) {
      byteString += String.fromCharCode(byteArray[i])
    }
    return btoa(byteString)
  },

  arrayBufferToBase64: function(arr) {
    return btoa(String.fromCharCode.apply(null, new Uint8Array(arr)))
  },

  convertBinaryToPem: function(binaryData, label) {
    var base64Cert = this.arrayBufferToBase64String(binaryData)
    var pemCert = "-----BEGIN " + label + "-----\r\n"
    var nextIndex = 0
    var lineLength
    while (nextIndex < base64Cert.length) {
      if (nextIndex + 64 <= base64Cert.length) {
        pemCert += base64Cert.substr(nextIndex, 64) + "\r\n"
      } else {
        pemCert += base64Cert.substr(nextIndex) + "\r\n"
      }
      nextIndex += 64
    }
    pemCert += "-----END " + label + "-----\r\n"
    return pemCert
  },

  convertPemToBinary: function(pem) {
    var lines = pem.split('\n')
    var encoded = ''
    for(var i = 0;i < lines.length;i++){
      if (lines[i].trim().length > 0 &&
          lines[i].indexOf('-BEGIN RSA PRIVATE KEY-') < 0 &&
          lines[i].indexOf('-BEGIN RSA PUBLIC KEY-') < 0 &&
          lines[i].indexOf('-END RSA PRIVATE KEY-') < 0 &&
          lines[i].indexOf('-END RSA PUBLIC KEY-') < 0) {
        encoded += lines[i].trim()
      }
    }
    return this.base64StringToArrayBuffer(encoded)
  },

  exportPublicKeyPEM: async function(keys){
    let me = this;
    return window.crypto.subtle
      .exportKey('spki', keys.publicKey)
      .then((spki) => {
          return me.convertBinaryToPem(spki, "RSA PUBLIC KEY");
      })
  },

  exportPrivateKeyPEM: function(keys) {
    return window.crypto.subtle.exportKey('pkcs8', keys.privateKey)
      .then( (pkcs8) => {
        return this.convertBinaryToPem(pkcs8, "RSA PRIVATE KEY");
      })
  },

  createPKI: async function(){
    let me = this,
        res,
        keys
    ;
    keys = await me.generateKey();
    console.log('keys',keys);
    res = await me.exportPublicKeyPEM(keys);
    console.log(res);
    res = await me.exportPrivateKeyPEM(keys);
    console.log(res);
    
    
  },



    wrapCryptoKey: async function(keyToWrap){
        const keyMaterial = await this.getKeyMaterial();
        let salt = window.crypto.getRandomValues(new Uint8Array(16));
        const wrappingKey = await this.getKey(keyMaterial, salt);
        return window.crypto.subtle.wrapKey(
          "raw",
          keyToWrap,
          wrappingKey,
          "AES-KW"
        );
    },

    generateKey: async function(){
      let algorithm = {
          name: "RSA-OAEP",
          modulusLength: 4096,
          publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
          hash: "SHA-256"
        },
        extractable= true,
        usage = ["encrypt","decrypt"];
          // ,
        return window.crypto.subtle.generateKey(algorithm,extractable,usage)
          .then((secretKey) => {
            return secretKey;
            //console.log('secretKey',secretKey);
            //return this.wrapCryptoKey(secretKey);
          });
    },

    getKey: function (keyMaterial, salt) {
        return window.crypto.subtle.deriveKey(
          {
            "name": "PBKDF2",
            salt: salt,
            "iterations": 100000,
            "hash": "SHA-256"
          },
          keyMaterial,
          { "name": "AES-KW", "length": 256},
          true,
          [ "wrapKey", "unwrapKey" ]
        );
    },

    getKeyMaterial: function () {
        const password = 'test';//window.prompt("Enter your password");
        const enc = new TextEncoder();
        return window.crypto.subtle.importKey(
          "raw",
          enc.encode(password),
          {name: "PBKDF2"},
          false,
          ["deriveBits", "deriveKey"]
        );
    },

    toHex: function(buffer){
      let result='',value,i,v=new DataView(buffer,0);
      try{
        for (i = 0; i < v.byteLength; i++) {
          value = v.getUint8(i).toString(16);
          result += (value.length === 1 ? '0' + value : value)
        }
      }catch(e){
        console.error(e);
      }
      return result;
    },

	value: '',


  triggers: {
      foo: {
          cls: 'my-foo-trigger',
          handler: function() {
              console.log('foo trigger clicked');
          }
      },
      bar: {
          cls: 'fas fa-key',
          handler: function(me) {
            me.createPKI();
          }
      }
  },
	
	initComponent: function(){

	},
  
	onRender: function() {
    this.callParent(arguments);

   // this.generateKey();
	},
	
})
